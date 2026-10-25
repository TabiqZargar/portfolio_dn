import { ProjectLeftColumn } from "@/components/project/project-left-column"
import { ProjectRightColumn } from "@/components/project/project-right-column"
import { PhoneNavigation } from "@/components/portfolio/phone-navigation"
import { StaggerEnter, StaggerItem } from "@/components/portfolio/stagger-enter"
import { projectPhoneNavSections } from "@/constants/projects/navigation"
import type { PortfolioProject } from "@/constants/types"

type ProjectLayoutProps = {
  project: PortfolioProject
}

export const ProjectLayout = ({ project }: ProjectLayoutProps) => {
  return (
    <main className="min-h-dvh bg-absolute-black text-gallery-white md:h-dvh md:overflow-hidden">
      <PhoneNavigation
        sections={projectPhoneNavSections}
        className="md:hidden"
      />
      <StaggerEnter className="flex min-h-dvh flex-col gap-framer-10 md:h-full md:flex-row md:gap-0">
        <StaggerItem className="w-full md:h-dvh md:w-1/2 lg:w-1/3">
          <ProjectLeftColumn project={project} />
        </StaggerItem>
        <StaggerItem className="w-full md:h-dvh md:w-1/2 lg:w-2/3">
          <ProjectRightColumn project={project} />
        </StaggerItem>
      </StaggerEnter>
    </main>
  )
}
