import { HomePage } from "@/components/home/home-page"
import { SITE_DESCRIPTION, SITE_NAME, SITE_TITLE, SITE_URL } from "@/lib/seo"

export default function Page() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${SITE_URL.href}#person`,
        name: SITE_NAME,
        url: SITE_URL.href,
        image: new URL("/logo.png", SITE_URL).href,
        jobTitle: ["Full Stack Developer"],
        description: SITE_DESCRIPTION,
        address: {
          "@type": "PostalAddress",
          addressCountry: "IN",
        },
        sameAs: [
          "https://github.com/TabiqZargar",
        ],
        knowsAbout: [
          "Full stack development",
          "React",
          "Next.js",
          "TypeScript",
          "Node.js",
          "MongoDB",
          "Tailwind CSS",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL.href}#website`,
        url: SITE_URL.href,
        name: SITE_TITLE,
        description: SITE_DESCRIPTION,
        inLanguage: "en-US",
        author: {
          "@id": `${SITE_URL.href}#person`,
        },
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <HomePage />
    </>
  )
}
