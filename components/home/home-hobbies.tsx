import { HomeSection } from "@/components/home/home-section"
import { HoverTextPreview } from "../ui/text-preview"

export const HomeHobbiesSection = () => {
  return (
    <HomeSection id="hobbies" title="Conversation starter">
      <span className="type-label text-muted-foreground">
        <span className="text-gallery-white">Outside of code,</span>{" "}
        I spend time with{" "}
        <span className="text-gallery-white">
          <HoverTextPreview
            previewImage={[]}
            imageAlt={[]}
          >
            motorcycles
          </HoverTextPreview>
          ,{" "}
          <HoverTextPreview
            previewImage={[]}
            imageAlt={[]}
          >
            football
          </HoverTextPreview>
          , and{" "}
          <HoverTextPreview
            previewImage={[]}
            imageAlt={[]}
          >
            MMA
          </HoverTextPreview>
        </span>
        .
      </span>
    </HomeSection>
  )
}
