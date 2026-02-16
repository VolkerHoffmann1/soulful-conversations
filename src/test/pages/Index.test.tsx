import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";

vi.mock("framer-motion", () => import("..//__mocks__/framer-motion"));
vi.mock("@/assets/hero-forest.jpg", () => ({ default: "hero-forest-mock.jpg" }));

import Index from "@/pages/Index";

describe("Index page - Transfer verification", () => {
  it("renders all sections after transfer", () => {
    render(<Index />);

    // HeroSection
    expect(screen.getAllByText("Seelen").length).toBeGreaterThanOrEqual(1);
    expect(screen.getByText(/Raum für deine Seele/i)).toBeInTheDocument();
    expect(screen.getByText("Beginne dein Gespräch")).toBeInTheDocument();

    // ReflectionSection - all 4 questions
    expect(screen.getAllByText("Was beschäftigt dich gerade am meisten?").length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText("Wofür bist du heute dankbar?").length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText("Was würdest du deinem jüngeren Ich sagen?").length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText("Welches Gefühl begleitet dich heute?").length).toBeGreaterThanOrEqual(1);

    // Textarea and save button
    expect(screen.getByPlaceholderText("Schreibe hier deine Gedanken...")).toBeInTheDocument();
    expect(screen.getByText("Speichern")).toBeInTheDocument();

    // Footer
    expect(screen.getByText("Dein stiller Begleiter auf dem Weg zu dir selbst.")).toBeInTheDocument();
  });
});
