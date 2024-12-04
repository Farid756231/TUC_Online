import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom"; // For additional matchers
import LoginSignup from "./LoginSignup";

describe("LoginSignup Component", () => {
  test("renders the component with default 'Logga in' state", () => {
    render(<LoginSignup />);

    expect(
      screen.getByRole("heading", { name: "Logga in" })
    ).toBeInTheDocument();

    expect(screen.getByPlaceholderText("E-post")).toBeInTheDocument();

    expect(screen.getByPlaceholderText("Lösenord")).toBeInTheDocument();

    expect(screen.getByText(/Glömt lösenord\?/i)).toBeInTheDocument();
  });

  test("switches to 'Skapa konto' state when the button is clicked", () => {
    render(<LoginSignup />);

    fireEvent.click(screen.getByRole("button", { name: "Skapa konto" }));

    expect(
      screen.getByRole("heading", { name: "Skapa konto" })
    ).toBeInTheDocument();

    expect(screen.getByPlaceholderText("Namn")).toBeInTheDocument();

    expect(screen.queryByText(/Glömt lösenord\?/i)).not.toBeInTheDocument();
  });

  test("switches back to 'Logga in' state when the button is clicked", () => {
    render(<LoginSignup />);

    fireEvent.click(screen.getByRole("button", { name: "Skapa konto" }));

    fireEvent.click(screen.getByRole("button", { name: "Logga in" }));

    expect(
      screen.getByRole("heading", { name: "Logga in" })
    ).toBeInTheDocument();

    expect(screen.queryByPlaceholderText("Namn")).not.toBeInTheDocument();

    expect(screen.getByText(/Glömt lösenord\?/i)).toBeInTheDocument();
  });
});
