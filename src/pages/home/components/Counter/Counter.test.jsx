import { describe, it, expect, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/vitest";

import Counter from "./Counter";


afterEach(() => {
  cleanup();
});

describe("Counter", () => {
  it("renders initial count", () => {
    render(<Counter />);

    expect(screen.getByText("Count: 0")).toBeInTheDocument();
  });

  it("increments count when clicking +", async () => {
    const user = userEvent.setup();

    render(<Counter />);

    const incrementButton = screen.getByText("+", {
      exact: true,
    });

    await user.click(incrementButton);

    expect(screen.getByText("Count: 1")).toBeInTheDocument();
  });
});