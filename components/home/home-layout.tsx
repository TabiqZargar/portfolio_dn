import { HomeLeftColumn } from "@/components/home/home-left-column"
import { HomeRightColumn } from "@/components/home/home-right-column"
import { PhoneNavigation } from "@/components/portfolio/phone-navigation"
import { StaggerEnter, StaggerItem } from "@/components/portfolio/stagger-enter"
import { homePhoneNavSections } from "@/constants/home/sections"
import type {
  PortfolioProject,
  ProjectShowcaseComponent,
} from "@/constants/types"

type HomeLayoutProps = {
  projects: PortfolioProject[]
  showcaseItems: ProjectShowcaseComponent[]
}

export const HomeLayout = ({ projects, showcaseItems }: HomeLayoutProps) => {
  return (
    <main className="min-h-dvh bg-absolute-black text-gallery-white md:h-dvh md:overflow-hidden">
      <PhoneNavigation sections={homePhoneNavSections} className="md:hidden" />
      <StaggerEnter className="flex min-h-dvh flex-col gap-framer-10 md:h-full md:flex-row md:gap-0">
        <StaggerItem className="w-full md:h-dvh md:w-1/2 lg:w-1/3">
          <HomeLeftColumn />
        </StaggerItem>
        <StaggerItem className="w-full md:h-dvh md:w-1/2 lg:w-2/3">
          <HomeRightColumn projects={projects} showcaseItems={showcaseItems} />
        </StaggerItem>
      </StaggerEnter>
    </main>
  )
}
