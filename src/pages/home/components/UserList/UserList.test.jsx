import { afterEach, describe, expect, it, vi } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";

import UsersList from "./UserList.jsx";

afterEach(() => {
  cleanup();
  vi.unstubAllGlobals();
});

describe("UsersList", () => {
  it("displays users after loading", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: true,
        json: async () => [
          {
            id: 1,
            name: "Anna",
          },
          {
            id: 2,
            name: "Oleg",
          },
        ],
      }),
    );

    render(<UsersList />);

    const anna = await screen.findByText("Anna");

    expect(anna).toBeInTheDocument();
    expect(screen.getByText("Oleg")).toBeInTheDocument();

    expect(screen.queryByText("Завантаження...")).not.toBeInTheDocument();
  });

  it("displays an error when fetching fails", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: false,
        status: 500,
      }),
    );

    render(<UsersList />);

    console.log("=== ДО ЗАПИТУ ===");
    screen.debug();

    const errorMessage = await screen.findByText(
      "Помилка: Не вдалося отримати дані",
    );

    console.log("=== ПІСЛЯ ЗАПИТУ ===");
    screen.debug();

    expect(errorMessage).toBeInTheDocument();
  });

  it("displays an error when network error", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockRejectedValue(new Error("Network error")),
    );

    render(<UsersList />);

    console.log("=== ДО ЗАПИТУ ===");
    screen.debug();

    const errorMessage = await screen.findByText("Помилка: Network error");

    console.log("=== ПІСЛЯ ЗАПИТУ ===");
    screen.debug();

    expect(screen.queryByText("Завантаження...")).not.toBeInTheDocument();

    expect(errorMessage).toBeInTheDocument();
  });

  it("calls fetch with correct URL and handles network error", async () => {
    const fetchMock = vi.fn().mockRejectedValue(new Error("Network error"));

    vi.stubGlobal("fetch", fetchMock);

    render(<UsersList />);

    expect(screen.getByText("Завантаження...")).toBeInTheDocument();

    const errorMessage = await screen.findByText("Помилка: Network error");

    expect(errorMessage).toBeInTheDocument();

    expect(screen.queryByText("Завантаження...")).not.toBeInTheDocument();

    expect(fetchMock).toHaveBeenCalledWith(
      "https://jsonplaceholder.typicode.com/users",
    );

    console.log("Fetch calls:", fetchMock.mock.calls);
  });
});
