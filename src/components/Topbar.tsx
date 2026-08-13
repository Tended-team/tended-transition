export function Topbar() {
  return (
    <div className="bg-surface-2 text-muted">
      <div className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-2 text-xs sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <span>ApexCare Team Hub — for ApexCare employees &amp; Care Partners only</span>
        <span className="inline-flex items-center gap-1.5">
          <span aria-hidden="true">🔒</span> Internal · Please don't share outside the company
        </span>
      </div>
    </div>
  );
}
