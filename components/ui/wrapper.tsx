import { cn } from "@/lib/utils";

export function Wrapper({
  children,
  className,
  wrapper,
}: Readonly<{
  children: React.ReactNode;
  className?: string;
  wrapper?: string;
}>) {
  return (
    <div
      className={cn(
        "max-w-375 h-full mx-auto py-1 px-4 md:px-16 w-full",
        wrapper,
      )}
    >
      <div className={cn("space-y-1 w-full h-full flex flex-col", className)}>
        {children}
      </div>
    </div>
  );
}
