"use client";
import { segments } from "@/libs/segments";
import type { Segment } from "next/dist/server/app-render/types";

interface Props {
  selected: Segment;
  onSelect: (segment: Segment) => void;
}

export default function SegmentSelector({ selected, onSelect }: Props) {
  return (
    <aside className="w-64 p-4 border-r h-screen overflow-y-auto">
      <h2 className="text-lg font-semibold mb-4">Segments</h2>
      <ul className="space-y-2">
        {segments.map((segment) => (
          <li
            key={segment}
            onClick={() => onSelect(segment)}
            className={`cursor-pointer px-3 py-2 rounded ${
              selected === segment
                ? "bg-blue-600 text-white"
                : "hover:bg-gray-100"
            }`}
          >
            {segment}
          </li>
        ))}
      </ul>
    </aside>
  );
}
