"use client"

import {
  HolographicReferralCard,
  type HolographicReferralCardProps,
} from "./holographic-referral-card"

export const AvatarCard = (props: HolographicReferralCardProps) => {
  return (
    <div className="relative h-20 w-16 shrink-0 overflow-hidden">
      <div
        className="origin-top-left"
        style={{
          width: 340,
          height: 440,
          transform: "scale(0.2353)",
        }}
      >
        <HolographicReferralCard {...props} />
      </div>
    </div>
  )
}
