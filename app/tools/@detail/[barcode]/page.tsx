import data from "@/data/inventory.json";

async function getData(barcode: string) {
  const item = data.find((item) => item.barcode === barcode);
  return item;
}

export default async function DetailPage({
  params,
}: {
  params: { barcode: string };
}) {
  const data = await getData(params.barcode);
  return (
    <div className="flex flex-row flex-nowrap p-12 gap-4">
      <div className="text-4xl font-bold border-2 rounded-md w-20 h-20 flex justify-center items-center bg-slate-400 dark:bg-slate-600">
        {data?.tool_name.substring(0, 1)}
      </div>
      <div>
        <h1 className="text-2xl ">{data?.tool_name}</h1>
        <h2 className="text-base ">
          {data?.manufacturer} - {data?.model}
        </h2>
        <div className="text-sm ">{data?.barcode}</div>
      </div>
    </div>
  );
}
