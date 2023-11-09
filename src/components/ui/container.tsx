import { cn } from "@/lib/utils";
import React from "react";

const Container = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div
    className={cn("mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", className)}
    {...props}
  >
    <div className="mx-auto max-w-3xl">{children}</div>
  </div>
));
Container.displayName = "Card";

export { Container };
