import { cn } from "@/utils/Helpers";

export function Skeleton({ className }: { className?: string }) {
  return <div className={cn("animate-pulse rounded-md bg-gray-300", className)} />;
}
