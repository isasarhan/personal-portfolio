import * as React from "react"

import { cn } from "@/lib/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "bg-white/30 w-full rounded-lg p-4 overflow-hidden",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
