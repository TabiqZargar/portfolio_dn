import Image from "next/image"
import type { HomeIntro } from "@/constants/types"
import { FrontSVG } from "../svgs/front-svg"
import { portfolioContact } from "@/constants/portfolio/contact"
import { BookACallLink } from "../ui/book-a-call-link"

type HomeIntroSectionProps = {
  intro: HomeIntro
}

export const HomeIntroSection = ({ intro }: HomeIntroSectionProps) => {
  return (
    <section
      id="intro"
      aria-labelledby="intro-name"
      className="mt-8 flex w-full flex-col gap-framer-8"
    >
      <div className="flex w-full items-center gap-framer-3">
        <div className="flex min-w-0 flex-1 flex-col">
          <h1 id="intro-name" className="type-heading-2 text-muted-foreground">
            @{intro.name}
          </h1>
          <p className="type-body-small uppercase">{intro.role}</p>
        </div>
      </div>

      <p className="max-w-[520px] type-body-small text-pretty text-muted-foreground">
        A{" "}
        <span className="inline-flex items-center gap-1.5 align-middle text-foreground">
          <FrontSVG size={16} />
          full stack developer
        </span>{" "}
        building{" "}
        <span className="text-foreground">
          end-to-end web applications
        </span>
        . I work across the stack with{" "}
        <span className="inline-flex items-center gap-1 align-middle text-foreground">
          <Image
            alt=""
            src={"/home-icons/Motion_light.svg"}
            height={34}
            width={34}
            className="block size-[1.125em] dark:hidden"
          />
          <Image
            alt=""
            src={"/home-icons/Motion_dark.svg"}
            height={34}
            width={34}
            className="hidden size-[1.125em] dark:block"
          />
          React
        </span>
        ,{" "}
        <span className="text-foreground">Next.js</span>,{" "}
        <span className="text-foreground">TypeScript</span>, and{" "}
        <span className="text-foreground">Node.js</span>
        . This website is a collection of my work across{" "}
        <span className="text-foreground">frontend development</span>,{" "}
        <span className="text-foreground">backend services</span>, and{" "}
        <span className="text-foreground">full-stack projects</span>.
      </p>
      <BookACallLink
        href={portfolioContact.bookingHref}
        imageSrc="/x-pfp.jpg"
      />
    </section>
  )
}
