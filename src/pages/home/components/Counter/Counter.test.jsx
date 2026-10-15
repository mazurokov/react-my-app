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

  it("decrements count when clicking -", async () => {
    const user = userEvent.setup();

    render(<Counter />);

    expect(screen.getByText("Count: 0")).toBeInTheDocument();

    const decrementButton = screen.getByText("-", {
      exact: true,
    });

    await user.click(decrementButton);

    expect(screen.getByText("Count: -1")).toBeInTheDocument();
  });

  it("increments count by 5", async () => {
    const user = userEvent.setup();

    render(<Counter />);

    const incrementButton = screen.getByText("Increment by 5", {
      exact: true,
    });

    await user.click(incrementButton);

    expect(screen.getByText("Count: 5")).toBeInTheDocument();
  });

  it("resets count to 0 after increments", async () => {
    const user = userEvent.setup();

    render(<Counter />);

    const incrementButton = screen.getByText("+", {
      exact: true,
    });
    const resetButton = screen.getByRole("button", {
      name: "Reset",
    });

    await user.click(incrementButton);
    await user.click(incrementButton);

    expect(screen.getByText("Count: 2")).toBeInTheDocument();

    await user.click(resetButton);

    expect(screen.getByText("Count: 0")).toBeInTheDocument();
  });

  it("increments using updated step", async () => {
    const user = userEvent.setup();

    render(<Counter />);

    const setStepTo5Button = screen.getByRole("button", {
      name: "Set step to 5",
    });

    const incrementButton = screen.getByRole("button", {
      name: "+",
    });

    const decrementButton = screen.getByRole("button", {
      name: "-",
    });

    await user.click(setStepTo5Button);

    await user.click(incrementButton);

    expect(screen.getByText("Count: 5")).toBeInTheDocument();

    await user.click(incrementButton);

    expect(screen.getByText("Count: 10")).toBeInTheDocument();

    await user.click(decrementButton);

    expect(screen.getByText("Count: 5")).toBeInTheDocument();
  });

  it("removes previous count after increment", async () => {
    render(<Counter />);

    const user = userEvent.setup();

    const incrementButton = screen.getByRole("button", {
      name: "+",
    });

    expect(screen.getByText("Count: 0")).toBeInTheDocument();

    await user.click(incrementButton);

    expect(screen.getByText("Count: 1")).toBeInTheDocument();

    expect(screen.queryByText("Count: 0")).not.toBeInTheDocument();
  });
});
