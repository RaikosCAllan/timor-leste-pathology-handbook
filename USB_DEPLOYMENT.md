# USB deployment

How to put the handbook on a USB stick for wards and laboratories that have
no network, or for use when the network is down.

The site needs no server and no internet, so a stick is a complete, working
copy — not a degraded one. The whole difficulty of USB distribution is not
technical. It is that **a stick does not update itself**, and a two-year-old
copy of a reference range is worse than no copy at all. Everything below
exists to manage that one problem.

---

## 1. When to use a stick

| Situation | Use a stick? |
|---|---|
| Ward on the hospital network | No — use the intranet copy |
| Network outage | Yes — this is the main case |
| Peripheral or district laboratory with no network | Yes |
| Outreach, mobile or field work | Yes |
| A clinician who wants their own copy | Prefer the intranet; a stick only if they have no access |

Keep the number of sticks in circulation as small as you can. Every stick is
something you will have to find and replace later.

---

## 2. What you need

**The sticks.** Anything 1 GB or larger — the handbook is well under 5 MB, so
capacity is irrelevant. Buy the cheapest reliable brand, and buy them all the
same so they are recognisable on a ward.

**Format them FAT32**, not exFAT or NTFS. FAT32 is readable by every Windows
version still in service, by macOS and by Linux, including older ward
computers. The 4 GB per-file limit does not matter here.

**If you can source sticks with a physical write-protect switch, do.** They
cost a little more and they solve a problem software cannot — see §8.

---

## 3. Build the copy

From the repository root on your own computer:

```bash
sh tools/make-usb.sh 1.0
```

(or `./tools/make-usb.sh 1.0` if you have made it executable with
`chmod +x tools/make-usb.sh`)

This creates `build/handbook-usb-v1.0-<date>/` containing the site plus two
generated files:

- `READ-ME-FIRST.txt` — instructions for the person who receives the stick,
  with the version, release date and expiry filled in
- `VERSION.txt` — version, build date, expiry, and the exact source commit,
  so you can always tell which code a given stick came from

### The safety gate

**The script refuses to build while any `[FILL IN]` placeholder remains in
`data/`.** That is deliberate: an unfinished handbook reaching a ward is the
failure this whole procedure is meant to prevent.

`--force` overrides it, and stamps the copy *TEST / TRAINING COPY — NOT FOR
CLINICAL USE* in `READ-ME-FIRST.txt`. Use it only for testing. Never issue a
forced build to a ward.

### Build from a tagged release, not from your working folder

```bash
git tag -a v1.0 -m "First ward release"
git checkout v1.0
sh tools/make-usb.sh 1.0
git checkout main
```

Otherwise the stick carries whatever you happened to be editing that morning,
and you will never be able to reproduce it.

---

## 4. Copy to the stick

Copy the **contents** of the build folder to the **root** of the stick — not
the folder itself. The stick should look like this when opened:

```
READ-ME-FIRST.txt
VERSION.txt
index.html
assets/
data/
```

`index.html` must be at the top level. If staff have to open a folder first,
some will not find it.

**Then open `index.html` from the stick and check it works** before you make
any more copies. Test on a machine like the ones on the wards, not only on
your own.

---

## 5. Label every stick

Physically, with a permanent marker or a printed label:

```
PATHOLOGY HANDBOOK
v1.0 — Sep 2026
EXPIRES Sep 2027
```

An unlabelled stick is an undatable stick, and an undatable stick will be
trusted long after it should have been destroyed. The expiry date is the most
important thing on the label.

---

## 6. Keep a register

A single sheet or spreadsheet, held by the laboratory:

| Stick ID | Version | Issued to | Issued by | Date issued | Date returned |
|---|---|---|---|---|---|
| 01 | 1.0 | Emergency Department | | | |
| 02 | 1.0 | Paediatric ward | | | |

Without it you cannot answer the only question that matters at review time:
*where are the old ones?* `READ-ME-FIRST.txt` has matching blanks for the ward
to fill in at the point of issue.

---

## 7. Refresh and recall

Reissue when a new version is released, and in any case before the expiry
date on the label.

1. Build the new version
2. Retrieve the old sticks — the register tells you who has them
3. **Reformat** each returned stick before rewriting it (see §8)
4. Write the new version, relabel, reissue, update the register
5. Destroy any stick you cannot account for by removing it from circulation
   in the register and noting it as lost

Twelve months is the default expiry the script sets. Shorten it if your
content changes faster.

---

## 8. Two honest limitations

**You cannot reliably make an ordinary USB stick read-only.** Software
write-protection on FAT32 is trivially reversible, and there is no setting
that survives being plugged into a different computer. Anyone who can read
the stick can edit the files on it. `READ-ME-FIRST.txt` therefore asks people
not to, and explains that changes reach nobody else — but that is a request,
not a control. If a stick must be tamper-resistant, buy one with a hardware
write-protect switch; that is the only thing that genuinely works.

**USB sticks move malware between hospital computers.** A stick that has been
in a ward PC and comes back to the laboratory is not clean. Always reformat a
returned stick before rewriting it, never copy files *from* a returned stick,
and scan your own computer regularly. If your institution prohibits removable
media, respect that — use printed copies instead, which the handbook's print
stylesheet supports.

---

## 9. Troubleshooting

| Problem | Cause and fix |
|---|---|
| Double-clicking does nothing | No default browser set. Right-click → *Open with* → Chrome, Edge or Firefox |
| Page appears with no styling or content | `assets/` or `data/` was not copied. Copy the whole folder again |
| "index" shown instead of "index.html" | Normal — Windows hides file extensions |
| Page opens in Notepad | Right-click → *Open with* → a browser |
| A section is blank | A data file is missing or was corrupted in copying. Recopy |
| Computer blocks the stick | Institutional policy on removable media — ask IT, and use printed copies meanwhile |

The site uses no installer, no plugin and no internet connection, so a
failure is almost always an incomplete copy. Copying the whole folder again
fixes most of them.

---

## 10. The printed fallback

When there is no network *and* no stick, the handbook still prints. Open it,
filter the Test Directory to one department, and print — the print stylesheet
expands every card and drops the navigation and search controls.

A printed department list in a ward folder, dated and replaced yearly, is a
reasonable last line of defence. Paper works during a power cut.
