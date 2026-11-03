#!/usr/bin/env python3
"""Fail when a local href/src in index.html points at a missing file."""
import pathlib
import re
import sys

root = pathlib.Path(__file__).resolve().parents[1]
html = (root / "index.html").read_text(encoding="utf-8")
missing = []
for ref in re.findall(r'(?:href|src)="([^"#:]+)"', html):
    if not (root / ref).exists():
        missing.append(ref)
if missing:
    print("missing targets:", missing)
    sys.exit(1)
print("all local targets resolve")
