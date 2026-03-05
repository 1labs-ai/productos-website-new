import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Pitch Deck | ProductOS",
  description: "ProductOS investor pitch deck - Cursor for Product Managers. From idea to deployed product in days, not months.",
}

export default function PitchDeckLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // This layout intentionally omits Navbar and Footer for a clean presentation experience
  return <>{children}</>
}
