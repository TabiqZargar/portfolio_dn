import { afterEach, describe, expect, it } from "vitest"
import { cleanup, render, screen } from "@testing-library/react"
import { HomeIntroSection } from "./home-intro"
import { portfolioContact } from "@/constants/portfolio/contact"

const mockIntro = {
  name: "testuser",
  role: "Designer",
  description: "Test description",
  avatarAlt: "Avatar",
}

afterEach(cleanup)

describe("HomeIntroSection contact actions", () => {
  it("renders one book-a-call link instead of old contact buttons", () => {
    render(<HomeIntroSection intro={mockIntro} />)

    const bookingLink = screen.getByRole("link", { name: /get in touch/i })

    expect(bookingLink.tagName).toBe("A")
    expect(
      screen.queryByRole("link", { name: /message on x/i })
    ).not.toBeInTheDocument()
    expect(
      screen.queryByRole("link", { name: /mail me/i })
    ).not.toBeInTheDocument()
  })

  it("opens booking link in a new tab safely", () => {
    render(<HomeIntroSection intro={mockIntro} />)

    const bookingLink = screen.getByRole("link", { name: /get in touch/i })

    expect(bookingLink).toHaveAttribute("href", portfolioContact.bookingHref)
    expect(bookingLink).toHaveAttribute("target", "_blank")
    expect(bookingLink).toHaveAttribute("rel", "noopener noreferrer")
    expect(bookingLink.className).toContain("max-w-48")
  })
})
