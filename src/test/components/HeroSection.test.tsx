import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";

vi.mock("framer-motion", () => import("..//__mocks__/framer-motion"));
vi.mock("@/assets/hero-forest.jpg", () => ({ default: "hero-forest-mock.jpg" }));

import HeroSection from "@/components/HeroSection";

describe("HeroSection", () => {
  it("renders the title", () => {
    render(<HeroSection />);
    expect(screen.getByText("Seelen")).toBeInTheDocument();
    expect(screen.getByText("dialog")).toBeInTheDocument();
  });

  it("renders the subtitle", () => {
    render(<HeroSection />);
    expect(screen.getByText(/Raum für deine Seele/i)).toBeInTheDocument();
  });

  it("renders the CTA button", () => {
    render(<HeroSection />);
    expect(screen.getByText("Beginne dein Gespräch")).toBeInTheDocument();
  });

  it("renders the hero image", () => {
    render(<HeroSection />);
    expect(screen.getByAltText("Nebelverhangener Wald im Morgenlicht")).toBeInTheDocument();
  });

  it("renders the scroll indicator", () => {
    render(<HeroSection />);
    expect(screen.getByText("Weiter")).toBeInTheDocument();
  });
});
