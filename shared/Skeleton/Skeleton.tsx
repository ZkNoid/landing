import { cn } from "@/lib/helpers";

export default function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("animate-pulse bg-[#f1f5f9]", className)} {...props} />
  );
}
