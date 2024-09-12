import { Button } from "@/components/core/ui/button";

interface ActionButtonProps {
  text: string;
  className?: string;
}

export default function ActionButton({ text, className }: ActionButtonProps) {
  return (
    <Button className={`inline-flex h-10 items-center justify-center rounded-md px-8 text-sm font-medium shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 ${className}`}>
      {text}
    </Button>
  );
}
