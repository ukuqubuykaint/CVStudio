// Adds a print button that calls window.print() and reports the event.
export function bindPrintButton(doc = document) {
  const btn = doc.querySelector('[data-print]');
  if (!btn) return null;
  const handler = (event) => {
    event.preventDefault();
    doc.defaultView.print();
  };
  btn.addEventListener('click', handler);
  return handler;
}
