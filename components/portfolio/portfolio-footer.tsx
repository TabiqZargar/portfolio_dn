import { BackToTop } from "@/components/portfolio/back-to-top"
import type { SocialLink } from "@/constants/types"
import { SectionDivider } from "./section-divider"
import Link from "next/link"

type PortfolioFooterProps = {
  email: string
  phone: string
  phoneHref: string
  socialLinks: SocialLink[]
  copyright: string
  backToTopHref?: string
}

export const PortfolioFooter = ({
  email,
  phone,
  phoneHref,
  socialLinks,
  copyright,
  backToTopHref = "#intro",
}: PortfolioFooterProps) => {
  const linkClassName =
    "inline-flex w-fit items-center underline hover:decoration-dotted underline-offset-4 transition-colors duration-portfolio ease-portfolio hover:text-muted-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gallery-white"

  return (
    <footer id="contact" className="relative w-full text-gallery-white">
      <SectionDivider />
      <div className="flex flex-col gap-framer-7 py-framer-8">
        <div className="flex flex-col gap-framer-3">
          <h2 className="type-heading-2">
            Grateful you&apos;re here! Always happy to chat ^^
          </h2>
          <p className="max-w-[480px] type-label text-muted-foreground">
            I&apos;m open to new opportunities – full-time roles, freelance
            projects, and collaborations. If you&apos;re working on something
            interesting, I&apos;d love to hear about it.
          </p>
        </div>

        <div className="flex flex-col gap-framer-6">
          <address className="flex flex-col items-start gap-framer-3 type-body-small not-italic">
            <Link href={`mailto:${email}`} className={linkClassName}>
              {email}
            </Link>
            {phone && phoneHref && (
              <Link href={phoneHref} className={linkClassName}>
                {phone}
              </Link>
            )}
          </address>

          <nav
            aria-label="Social links"
            className="flex flex-wrap items-center gap-framer-3 type-body-small"
          >
            {socialLinks.map((socialLink) => (
              <Link
                key={socialLink.label}
                href={socialLink.href}
                target="_blank"
                rel="noreferrer"
                className={linkClassName}
              >
                {socialLink.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      <div className="flex flex-col gap-framer-3">
        <SectionDivider />
        <div className="flex flex-col items-start gap-framer-3 pr-14 type-label">
          <div className="flex items-center gap-2 flex-wrap">
            <p className="text-muted-foreground">{copyright}</p>
          </div>
        </div>
      </div>

      <BackToTop href={backToTopHref} />
    </footer>
  )
}
