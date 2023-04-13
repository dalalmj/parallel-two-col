import Link from "next/link";

export default async function ListPage() {
  return (
    <main className=" m-8 ">
      <Link
        href="/tools"
        className=" border rounded-md h-12 flex items-center px-2"
      >
        Example showing Two Column Layout using Parallel Routes
      </Link>
      <aside className="p-4">
        This example shows one way to achieve two column layout using Parallel
        Routes. Tools Layout.tsx defines two slots, children slot to show list
        of tools and detail slot to show selected tool detail.
      </aside>
    </main>
  );
}
