export const SITE_URL = new URL("https://tabiq.dev")

export const SITE_NAME = "Tabiq"
export const SITE_TITLE = "Tabiq | Full Stack Developer"
export const SITE_DESCRIPTION =
  "Tabiq is a full stack developer building end-to-end web applications with modern frameworks, clean architecture, and practical engineering."
export const SITE_LOCALE = "en_US"
export const X_HANDLE = ""

export const DEFAULT_SOCIAL_IMAGE = {
  url: "/og-image.png",
  width: 1622,
  height: 970,
  alt: "Tabiq — Full Stack Developer",
} as const

export const createMetadataDescription = (
  description: string,
  maximumLength = 155
) => {
  const plainTextDescription = description
    .replace(/[`*_#]/g, "")
    .replace(/\s+/g, " ")
    .trim()

  if (plainTextDescription.length <= maximumLength) {
    return plainTextDescription
  }

  const shortenedDescription = plainTextDescription.slice(0, maximumLength - 1)
  const lastWordBoundary = shortenedDescription.lastIndexOf(" ")

  if (lastWordBoundary === -1) {
    return `${shortenedDescription}…`
  }

  return `${shortenedDescription.slice(0, lastWordBoundary)}…`
}
