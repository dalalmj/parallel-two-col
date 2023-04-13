export default function TwoColumnLayout({
  children,
  detail = null,
}: {
  children: React.ReactNode;
  detail?: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-[320px_auto] overflow-hidden">
      <div className="flex h-screen overflow-hidden bg-slate-200 dark:bg-slate-800">
        {children}
      </div>
      <div className=" bg-slate-100 dark:bg-slate-900">{detail}</div>
    </div>
  );
}
