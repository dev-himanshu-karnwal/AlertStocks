"use client";

import { STOCK_INDICES } from "@/app/constants/indexes";

type IndexSelectProps = {
  selectedIndex: string;
  onSelect: (index: string) => void;
};

export default function IndexSelect({
  selectedIndex,
  onSelect,
}: IndexSelectProps) {
  return (
    <div className="flex index-select mb-7 py-2 m-auto space-x-4 max-w-11/12 overflow-auto scrollbar-hide">
      {STOCK_INDICES.map((index) => (
        <button
          key={index.id}
          onClick={() => onSelect(index.id)}
          className={` px-4 py-2 rounded-lg text-nowrap text-sm font-semibold transition-all transform focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            selectedIndex === index.id
              ? "bg-gray-600 text-white hover:bg-blue-700"
              : "bg-gray-800 text-gray-300 hover:bg-gray-600"
          }`}
        >
          {index.name}
        </button>
      ))}
    </div>
  );
}
