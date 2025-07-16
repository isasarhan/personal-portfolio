import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "bg-white/30 w-full h-9 rounded-lg p-2 outline-none ",
        "focus-visible:border-ring focus-visible:ring-ring/30 focus-visible:ring-[1.5px] transition-all ease-in-out duration-300",
        className
      )}
      {...props}
    />
  )
}

export { Input }
