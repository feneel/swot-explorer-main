import { PromptType } from "@/libs/prompts";
import { Card, CardContent } from "./ui/card";
import { Skeleton } from "./ui/skeleton";

type Props = {
  type: PromptType;
  prompt: string;
  response: string;
  loading: boolean;
};

export default function PromptCard({ type, prompt, response, loading }: Props) {
  const label = type.replace(/([A-Z])/g, " $1").trim();

  return (
    <Card className="mb-6 shadow-lg rounded-2xl p-4">
      <h2 className="text-xl font-semibold mb-2 text-gray-800">{label}</h2>

      <p className="text-sm text-gray-500 mb-4 whitespace-pre-wrap">
         {prompt}
      </p>

      <CardContent className="bg-white rounded-xl border p-4">
        {loading ? (
          <Skeleton className="h-24 w-full" />
        ) : (
          <p className="text-gray-700 whitespace-pre-wrap">{response}</p>
        )}
      </CardContent>
    </Card>
  );
}
