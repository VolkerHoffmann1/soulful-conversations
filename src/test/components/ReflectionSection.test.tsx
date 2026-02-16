import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

vi.mock("framer-motion", () => import("..//__mocks__/framer-motion"));

import ReflectionSection from "@/components/ReflectionSection";

const questions = [
  "Was beschäftigt dich gerade am meisten?",
  "Wofür bist du heute dankbar?",
  "Was würdest du deinem jüngeren Ich sagen?",
  "Welches Gefühl begleitet dich heute?",
];

describe("ReflectionSection", () => {
  it("renders all 4 prompt questions", () => {
    render(<ReflectionSection />);
    for (const q of questions) {
      expect(screen.getAllByText(q).length).toBeGreaterThanOrEqual(1);
    }
  });

  it("renders the textarea", () => {
    render(<ReflectionSection />);
    expect(screen.getByPlaceholderText("Schreibe hier deine Gedanken...")).toBeInTheDocument();
  });

  it("renders the save button", () => {
    render(<ReflectionSection />);
    expect(screen.getByText("Speichern")).toBeInTheDocument();
  });

  it("switches active prompt on click", async () => {
    const user = userEvent.setup();
    render(<ReflectionSection />);

    // Click second question card
    const cards = screen.getAllByText(questions[1]);
    await user.click(cards[0]);

    // The journal area should now show the second question's hint (appears in card + journal)
    expect(screen.getAllByText("Auch die kleinsten Dinge zählen.").length).toBe(2);
  });
});
