import { ProjectImageGallery } from "@/components/project/project-image-gallery"
import { ScrollColumn } from "@/components/portfolio/scroll-column"
import type { PortfolioProject } from "@/constants/types"

type ProjectRightColumnProps = {
  project: PortfolioProject
}

export const ProjectRightColumn = ({ project }: ProjectRightColumnProps) => {
  return (
    <ScrollColumn
      ariaLabel={`${project.title} media gallery`}
      className="size-full md:h-dvh"
      contentClassName="flex w-full flex-col items-center gap-framer-2 px-framer-5 pt-[17px] pb-framer-10 md:pr-framer-5 md:pb-framer-5 md:pl-0"
      showProgress={false}
    >
      <ProjectImageGallery images={project.media} />
    </ScrollColumn>
  )
}
