import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  center?: boolean;
  className?: string;
}

export function SectionHeading({
  title,
  subtitle,
  center = false,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn(
      "mb-10",
      center && "text-center",
      className
    )}>
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight relative inline-block">
        {title}
        <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-primary rounded-full"></span>
      </h2>
      {subtitle && (
        <p className="mt-4 text-muted-foreground max-w-3xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}