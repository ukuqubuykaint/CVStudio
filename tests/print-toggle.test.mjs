import test from 'node:test';
import assert from 'node:assert/strict';
import { bindPrintButton } from '../assets/js/print-toggle.js';

function fakeDoc() {
  const listeners = [];
  const btn = { addEventListener: (_, fn) => listeners.push(fn) };
  return {
    querySelector: () => btn,
    defaultView: { print: () => { fakeDoc.printed = true; } },
    click: (event) => listeners.forEach((fn) => fn(event)),
  };
}

test('bindPrintButton wires the click to window.print', () => {
  const doc = fakeDoc();
  const handler = bindPrintButton(doc);
  assert.equal(typeof handler, 'function');
  doc.click({ preventDefault() {} });
  assert.equal(fakeDoc.printed, true);
});

test('bindPrintButton is a no-op without the button', () => {
  const doc = { querySelector: () => null };
  assert.equal(bindPrintButton(doc), null);
});
