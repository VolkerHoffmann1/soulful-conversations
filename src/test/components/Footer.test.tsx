import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";

vi.mock("framer-motion", () => import("..//__mocks__/framer-motion"));

import Footer from "@/components/Footer";

describe("Footer", () => {
  it("renders branding text", () => {
    render(<Footer />);
    expect(screen.getByText("Seelen")).toBeInTheDocument();
    expect(screen.getByText("dialog")).toBeInTheDocument();
  });

  it("renders tagline", () => {
    render(<Footer />);
    expect(screen.getByText("Dein stiller Begleiter auf dem Weg zu dir selbst.")).toBeInTheDocument();
  });
});
