import { CheckCircle2 } from "lucide-react";

export function CheckList({ items }: { items: string[] }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {items.map((item) => (
        <div
          key={item}
          className="flex items-start gap-3 rounded-xl border border-[#d7e8f3] bg-white p-4 text-sm font-bold text-[#08213f] transition-all duration-200 hover:border-[#2382bf]/25 hover:bg-[#f8fcff] hover:shadow-sm"
        >
          <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#e9f7ff] to-[#d5efff]">
            <CheckCircle2 size={15} className="text-[#0a4f8a]" />
          </span>
          <span>{item}</span>
        </div>
      ))}
    </div>
  );
}
