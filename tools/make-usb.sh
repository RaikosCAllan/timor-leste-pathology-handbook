#!/bin/sh
# =============================================================================
#  make-usb.sh — assemble an offline copy of the handbook for a USB stick
# -----------------------------------------------------------------------------
#  Usage:
#      ./tools/make-usb.sh 1.0
#      ./tools/make-usb.sh 1.0 --force      (build despite [FILL IN] placeholders)
#
#  Produces:
#      build/handbook-usb-v<VERSION>-<DATE>/
#
#  Copy the CONTENTS of that folder to the root of the stick, so that
#  index.html and READ-ME-FIRST.txt sit at the top level where staff can see
#  them.
#
#  Run it from the repository root. Plain POSIX sh — works on macOS and Linux.
# =============================================================================

set -eu

VERSION=""
FORCE=0
for arg in "$@"; do
  case "$arg" in
    --force) FORCE=1 ;;
    -*)      echo "Unknown option: $arg" >&2; exit 2 ;;
    *)       [ -z "$VERSION" ] && VERSION="$arg" ;;
  esac
done

if [ -z "$VERSION" ]; then
  echo "Usage: $0 <version> [--force]" >&2
  echo "Example: $0 1.0" >&2
  exit 2
fi

[ -f index.html ] || { echo "Run this from the repository root (no index.html here)." >&2; exit 1; }

DATE=$(date +%Y-%m-%d)
# Expiry defaults to 12 months. Change here if your review cycle differs.
if date -v+12m +%Y-%m-%d >/dev/null 2>&1; then
  EXPIRY=$(date -v+12m +%Y-%m-%d)          # macOS / BSD
else
  EXPIRY=$(date -d "+12 months" +%Y-%m-%d) # GNU
fi

OUT="build/handbook-usb-v${VERSION}-${DATE}"

# --- Safety gate: refuse to ship unfinished content --------------------------
PLACEHOLDERS=$(grep -ro "\[FILL IN" data/ 2>/dev/null | wc -l | tr -d ' ')
if [ "$PLACEHOLDERS" -gt 0 ]; then
  echo "-------------------------------------------------------------------"
  echo "  WARNING: $PLACEHOLDERS unfilled [FILL IN] placeholder(s) in data/"
  echo ""
  echo "  A stick built now would carry unverified content to a ward."
  echo "  Resolve them first:   grep -rn '\[FILL IN' data/"
  echo "-------------------------------------------------------------------"
  if [ "$FORCE" -ne 1 ]; then
    echo "  Refusing to build. Use --force only for a test or training copy."
    exit 1
  fi
  echo "  --force given: building anyway. DO NOT issue this to a ward."
  echo ""
fi

# --- Assemble ----------------------------------------------------------------
rm -rf "$OUT"
mkdir -p "$OUT"

cp index.html "$OUT/"
cp -R assets "$OUT/"
cp -R data   "$OUT/"

# Developer-only files do not belong on a ward stick.
rm -rf "$OUT/assets/img/tubes/.gitkeep" "$OUT/assets/img/.gitkeep" \
       "$OUT/assets/downloads/.gitkeep" 2>/dev/null || true

# macOS sprinkles these over FAT volumes; remove them before distribution.
find "$OUT" -name '.DS_Store' -delete 2>/dev/null || true
find "$OUT" -name '._*'       -delete 2>/dev/null || true

# --- READ-ME-FIRST.txt -------------------------------------------------------
ORG=$(sed -n 's/^ *organisation: *"\(.*\)",.*$/\1/p' data/site.js | head -1)
[ -n "$ORG" ] || ORG="[organisation name]"

CONTACT="Laboratory telephone: see the Hours & Contact section of the handbook."

if [ "$PLACEHOLDERS" -gt 0 ]; then
  STATUS="  *** TEST / TRAINING COPY — CONTENT INCOMPLETE, NOT FOR CLINICAL USE ***"
else
  STATUS="  Issued by the laboratory. Return or destroy superseded copies."
fi

TPL="tools/READ-ME-FIRST.template.txt"
[ -f "$TPL" ] || { echo "Missing $TPL" >&2; exit 1; }

sed -e "s|{{ORGANISATION}}|$ORG|g" \
    -e "s|{{VERSION}}|$VERSION|g" \
    -e "s|{{DATE}}|$DATE|g" \
    -e "s|{{EXPIRY}}|$EXPIRY|g" \
    -e "s|{{CONTACT}}|$CONTACT|g" \
    -e "s|{{STATUS_NOTICE}}|$STATUS|g" \
    "$TPL" > "$OUT/READ-ME-FIRST.txt"

# --- VERSION.txt -------------------------------------------------------------
COMMIT=$(git rev-parse --short HEAD 2>/dev/null || echo "not a git repository")
{
  echo "Pathology Services Handbook — offline copy"
  echo "Organisation : $ORG"
  echo "Version      : $VERSION"
  echo "Built        : $DATE"
  echo "Expires      : $EXPIRY"
  echo "Source commit: $COMMIT"
  echo "Placeholders : $PLACEHOLDERS"
} > "$OUT/VERSION.txt"

# --- Report ------------------------------------------------------------------
FILES=$(find "$OUT" -type f | wc -l | tr -d ' ')
SIZE=$(du -sh "$OUT" | cut -f1)

echo "Built: $OUT"
echo "  files: $FILES    size: $SIZE"
echo "  label the stick:  Handbook v${VERSION} — ${DATE} — expires ${EXPIRY}"
echo ""
echo "Next: copy the CONTENTS of that folder (not the folder itself) to the"
echo "      root of the stick, then open index.html from the stick to check it."
