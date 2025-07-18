"use client";

import { useState, useEffect } from "react";
import SegmentSelector from "@/components/SegmentSelector";
import PromptCard from "@/components/PromptCard";
import { segments, Segment } from "@/libs/segments";
import { promptTemplates, PromptType } from "@/libs/prompts";

const promptTypes = Object.keys(promptTemplates) as PromptType[];

export default function Home() {
  const [selectedSegment, setSelectedSegment] = useState<Segment>(segments[0]);
  const [responses, setResponses] = useState<Record<PromptType, string>>({} as any);
  const [loading, setLoading] = useState<Record<PromptType, boolean>>({} as any);

  // ✅ useEffect properly inside the Home component body
  useEffect(() => {
    const fetchResponses = async () => {
      setResponses({} as any);
      const loadingState = {} as Record<PromptType, boolean>;
      promptTypes.forEach((type) => (loadingState[type] = true));
      setLoading(loadingState);

      try {
        const res = await fetch("/api/swot", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ segment: selectedSegment }),
        });

        if (!res.ok) {
          throw new Error(`HTTP error ${res.status}`);
        }

        const data = await res.json();
        const raw = data.result as string;

        const parsedResponses: Record<PromptType, string> = {} as any;

        promptTypes.forEach((type) => {
          const label = type.replace(/([A-Z])/g, " $1").trim();
          const regex = new RegExp(`\\[${label}\\](.*?)\\n(?=\\d+\\.\\s|$)`, "s");
          const match = raw.match(regex);
          parsedResponses[type] = match?.[1]?.trim() || "Not found.";
        });

        setResponses(parsedResponses);
      } catch (err) {
        console.error(err);
        promptTypes.forEach((type) => {
          setResponses((prev) => ({ ...prev, [type]: "Error loading response." }));
        });
      }

      const doneState = {} as Record<PromptType, boolean>;
      promptTypes.forEach((type) => (doneState[type] = false));
      setLoading(doneState);
    };

    fetchResponses();
  }, [selectedSegment]); // ✅ properly scoped

  return (
    <div className="flex h-screen">
      <SegmentSelector selected={selectedSegment} onSelect={setSelectedSegment} />

      <main className="flex-1 p-6 overflow-y-auto bg-gray-50">
        <h1 className="text-2xl font-bold mb-6">{selectedSegment}</h1>
        {promptTypes.map((type) => {
          const prompt = promptTemplates[type](selectedSegment);
          return (
            <PromptCard
              key={type}
              type={type}
              prompt={prompt}
              response={responses[type] || ""}
              loading={loading[type]}
            />
          );
        })}
      </main>
    </div>
  );
}
