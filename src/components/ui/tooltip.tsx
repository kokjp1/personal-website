"use client"

import * as React from "react"
import * as TooltipPrimitive from "@radix-ui/react-tooltip"
import { cn } from "@/lib/utils"

type MobileCtx = {
  isTouch: boolean
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}
const MobileTooltipContext = React.createContext<MobileCtx | null>(null)

function TooltipProvider({
  delayDuration = 0,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Provider>) {
  return <TooltipPrimitive.Provider delayDuration={delayDuration} {...props} />
}

function Tooltip(props: React.ComponentProps<typeof TooltipPrimitive.Root>) {
  const [isTouch, setIsTouch] = React.useState(false)
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      setIsTouch(window.matchMedia("(pointer: coarse)").matches)
    }
  }, [])

  // Close on route change / escape automatically handled by Radix.
  return (
    <MobileTooltipContext.Provider value={{ isTouch, open, setOpen }}>
      <TooltipProvider delayDuration={isTouch ? 0 : 150}>
        <TooltipPrimitive.Root
          {...props}
          open={isTouch ? open : props.open}
          onOpenChange={isTouch ? setOpen : props.onOpenChange}
          delayDuration={isTouch ? 0 : props.delayDuration}
          disableHoverableContent={isTouch || props.disableHoverableContent}
        />
      </TooltipProvider>
    </MobileTooltipContext.Provider>
  )
}

function TooltipTrigger(
  props: React.ComponentProps<typeof TooltipPrimitive.Trigger>
) {
  const ctx = React.useContext(MobileTooltipContext)
  if (!ctx) return <TooltipPrimitive.Trigger {...props} />

  const { isTouch, open, setOpen } = ctx

  if (!isTouch) return <TooltipPrimitive.Trigger data-slot="tooltip-trigger" {...props} />

  return (
    <TooltipPrimitive.Trigger
      {...props}
      data-slot="tooltip-trigger"
      // Tap toggles (no hover on touch)
      onClick={(e) => {
        props.onClick?.(e)
        setOpen(!open)
      }}
    />
  )
}

function TooltipContent({
  className,
  sideOffset = 0,
  children,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Content>) {
  const ctx = React.useContext(MobileTooltipContext)

  // On touch, add a dismiss tap outside (simple: second tap elsewhere closes via Root)
  React.useEffect(() => {
    if (!ctx?.isTouch || !ctx.open) return
    const close = (e: MouseEvent | TouchEvent) => {
      // Let Radix handle if click inside portal; quick heuristic
      const target = e.target as HTMLElement | null
      if (target?.closest?.("[data-slot='tooltip-content']")) return
      ctx.setOpen(false)
    }
    document.addEventListener("touchstart", close)
    document.addEventListener("mousedown", close)
    return () => {
      document.removeEventListener("touchstart", close)
      document.removeEventListener("mousedown", close)
    }
  }, [ctx?.isTouch, ctx?.open])

  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content
        data-slot="tooltip-content"
        sideOffset={sideOffset}
        className={cn(
          "z-50 w-fit rounded-md px-3 py-1.5 text-xs text-balance",
          "bg-foreground text-background shadow-md",
          "animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
          "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
          className
        )}
        {...props}
      >
        {children}
        {/* Arrow intentionally removed */}
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Portal>
  )
}

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider }
