import { ProjectMetadataRow } from "@/components/project/project-metadata-row"
import { SectionDivider } from "@/components/portfolio/section-divider"
import { PrimaryCtaLink } from "@/components/ui/primary-button"
import type { PortfolioProject } from "@/constants/types"

type ProjectMetadataProps = Pick<
  PortfolioProject,
  "stack" | "githubUrl" | "liveUrl"
>

export const ProjectMetadata = ({
  stack,
  githubUrl,
  liveUrl,
}: ProjectMetadataProps) => {
  return (
    <section
      aria-label="Project information"
      className="flex w-full flex-col gap-framer-10"
    >
      <SectionDivider />
      <div className="flex w-full flex-col gap-framer-7">
          <ProjectMetadataRow label="Build Stack" value={stack.join(", ")} />
        {(githubUrl || liveUrl) && (
          <div className="flex flex-wrap gap-framer-3">
            {githubUrl ? (
              <PrimaryCtaLink
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="light"
                className="text-black hover:text-black"
              >
                GitHub
              </PrimaryCtaLink>
            ) : null}
            {liveUrl ? (
              <PrimaryCtaLink
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="light"
                className="text-black hover:text-black"
              >
                Live Demo
              </PrimaryCtaLink>
            ) : null}
          </div>
        )}
      </div>
    </section>
  )
}
