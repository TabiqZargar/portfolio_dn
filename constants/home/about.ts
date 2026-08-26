import type { Stat } from "@/constants/types"

export const homeAbout = {
  heading: "Full stack development",
  body: "I build web applications end-to-end, from database design and API development to responsive frontends and deployment. I focus on writing clean, maintainable code and shipping functional products.",
} as const

export const homeStats: Stat[] = [
  { value: "6+", label: "Projects shipped" },
  { value: "4+", label: "Frameworks used" },
  { value: "2", label: "Stacks explored" },
  { value: "100%", label: "Code-driven" },
]
