import React, { useCallback, useRef, useState } from "react";
import "./HolographicReferralCard.css";

/**
 * HolographicReferralCard
 * ------------------------------------------------------------------
 * A self-contained, dependency-free "foil trading card" for referral
 * programs. Tracks the pointer to drive a 3D tilt and a rainbow
 * refraction sheen (the classic holographic-card effect), and exposes
 * a copyable referral code with built-in copy feedback.
 *
 * Usage:
 *   <HolographicReferralCard
 *     name="Maya Ortiz"
 *     handle="@mayaships"
 *     referralCode="MAYA-7XQ2"
 *     referralCount={12}
 *     tier="Gold"
 *     accent="aurora"
 *   />
 *
 * Requires Tailwind for layout utility classes; the holographic
 * shimmer itself lives in HolographicReferralCard.css as plain CSS
 * (custom properties + a conic-gradient sheen), so it works even if
 * Tailwind's JIT can't see dynamically-computed values.
 */

export type HoloAccent = "aurora" | "sunset" | "cyber";

export interface HolographicReferralCardProps {
  /** Full display name shown on the card. */
  name: string;
  /** Optional @handle or role, shown under the name. */
  handle?: string;
  /** Avatar image URL. Falls back to initials on a gradient disc. */
  avatarUrl?: string;
  /** The referral code the owner shares with others. */
  referralCode: string;
  /** Number of successful referrals, shown as the card's "stat". */
  referralCount?: number;
  /** Small label, e.g. "Gold", "Founding Member". */
  tier?: string;
  /** Which foil palette to use. */
  accent?: HoloAccent;
  /** Called after the code is copied to the clipboard. */
  onCopy?: (code: string) => void;
  /** Extra class names for the outer wrapper. */
  className?: string;
}

function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "?";
  if (parts.length === 1) return parts[0]!.slice(0, 2).toUpperCase();
  return (parts[0]![0] + parts[parts.length - 1]![0]).toUpperCase();
}

export const HolographicReferralCard: React.FC<
  HolographicReferralCardProps
> = ({
  name,
  handle,
  avatarUrl,
  referralCode,
  referralCount,
  tier,
  accent = "aurora",
  onCopy,
  className = "",
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const frame = useRef<number | null>(null);
  const [copied, setCopied] = useState(false);
  const [active, setActive] = useState(false);

  // Pointer tracking drives two things at once, both read from the
  // same CSS custom properties set directly on the element (bypassing
  // React state so the tilt/sheen stay at 60fps without re-rendering):
  //   --px / --py : 0-100% pointer position, used for the sheen origin
  //   --rx / --ry : rotation in degrees, used for the 3D tilt
  const handlePointerMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      const el = cardRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const px = ((e.clientX - rect.left) / rect.width) * 100;
      const py = ((e.clientY - rect.top) / rect.height) * 100;
      const rx = (py / 100 - 0.5) * -10; // tilt up/down
      const ry = (px / 100 - 0.5) * 14; // tilt left/right

      if (frame.current) cancelAnimationFrame(frame.current);
      frame.current = requestAnimationFrame(() => {
        el.style.setProperty("--px", `${px}%`);
        el.style.setProperty("--py", `${py}%`);
        el.style.setProperty("--rx", `${rx}deg`);
        el.style.setProperty("--ry", `${ry}deg`);
      });
    },
    []
  );

  const resetTilt = useCallback(() => {
    const el = cardRef.current;
    setActive(false);
    if (!el) return;
    el.style.setProperty("--rx", `0deg`);
    el.style.setProperty("--ry", `0deg`);
  }, []);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(referralCode);
    } catch {
      // Clipboard API can fail (permissions, insecure context) — the
      // code is still visible on the card for manual copy.
    }
    setCopied(true);
    onCopy?.(referralCode);
    window.setTimeout(() => setCopied(false), 1800);
  }, [referralCode, onCopy]);

  return (
    <div
      ref={cardRef}
      role="group"
      aria-label={`Referral card for ${name}`}
      data-accent={accent}
      className={`holo-card ${active ? "holo-card--active" : ""} ${className}`}
      onPointerMove={handlePointerMove}
      onPointerEnter={() => setActive(true)}
      onPointerLeave={resetTilt}
    >
      <div className="holo-card__sheen" aria-hidden="true" />
      <div className="holo-card__grain" aria-hidden="true" />

      <div className="holo-card__inner flex h-full w-full flex-col justify-between p-5">
        {/* Header */}
        <div className="flex items-center justify-between">
          <span className="holo-card__eyebrow text-[10px] font-semibold uppercase tracking-[0.2em] text-white/60">
            Referral Pass
          </span>
          {tier && (
            <span className="holo-card__tier rounded-full border border-white/25 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-white/85">
              {tier}
            </span>
          )}
        </div>

        {/* Identity */}
        <div className="mt-4 flex items-center gap-3">
          {avatarUrl ? (
            <img
              src={avatarUrl}
              alt=""
              className="h-12 w-12 shrink-0 rounded-full object-cover ring-1 ring-white/30"
            />
          ) : (
            <div
              aria-hidden="true"
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-white/25 to-white/5 text-sm font-semibold text-white ring-1 ring-white/30"
            >
              {getInitials(name)}
            </div>
          )}
          <div className="min-w-0">
            <p className="truncate text-base font-semibold text-white">
              {name}
            </p>
            {handle && (
              <p className="truncate text-xs text-white/60">{handle}</p>
            )}
          </div>
        </div>

        {/* Referral code */}
        <div className="mt-5">
          <p className="mb-1 text-[10px] font-medium uppercase tracking-[0.2em] text-white/50">
            Referral code
          </p>
          <button
            type="button"
            onClick={handleCopy}
            className="holo-card__code group flex w-full items-center justify-between rounded-lg border border-white/20 bg-black/25 px-3 py-2 text-left font-mono text-sm tracking-wider text-white backdrop-blur-sm transition-colors hover:border-white/40"
          >
            <span>{referralCode}</span>
            <span className="text-[11px] font-sans font-medium text-white/70 group-hover:text-white">
              {copied ? "Copied" : "Copy"}
            </span>
          </button>
        </div>

        {/* Stat footer */}
        {typeof referralCount === "number" && (
          <div className="mt-4 flex items-baseline gap-1.5 border-t border-white/10 pt-3">
            <span className="text-xl font-bold text-white">
              {referralCount}
            </span>
            <span className="text-xs text-white/60">
              {referralCount === 1 ? "referral" : "referrals"} so far
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default HolographicReferralCard;
