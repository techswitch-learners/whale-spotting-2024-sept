import { fireEvent, render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom";
import Hamburger from "../Hamburger/Hamburger";

describe("Menu toggles on/off when hamburger button clicked", () => {

    test("menu class is menu menu-open when hamburger button is clicked", () => {
        render(
            <MemoryRouter>
                <Hamburger />
            </MemoryRouter>,
        )

        const button = screen.getByTestId("toggle-button");
        fireEvent.click(button);

        const menu = screen.getByTestId("menu");
        expect(menu).toHaveClass("menu menu-open");
    });

    test("menu class is menu menu-hidden when hamburger button is not clicked", () => {
        render(
            <MemoryRouter>
                <Hamburger />
            </MemoryRouter>,
        )

        const menu = screen.getByTestId("menu");
        expect(menu).toHaveClass("menu menu-hidden");
    });
});

describe("Menu contains all the navigation items", () => {

    test("menu has navigation items bar", () => {
        render(
            <MemoryRouter>
                <Hamburger />
            </MemoryRouter>
        )

        const navigationLinks = screen.getByTestId("navigationLinks");
        expect(navigationLinks).toBeInTheDocument();
    });

    test("menu has home link", () => {
        render(
            <MemoryRouter>
                <Hamburger />
            </MemoryRouter>
        )

        const home = screen.getByText("Home");

        expect(home).toBeInTheDocument();
        expect(home).toHaveAttribute("href", "/");
    });

    test("menu has explore link", () => {
        render(
            <MemoryRouter>
                <Hamburger />
            </MemoryRouter>
        )

        const explore = screen.getByText("Explore");
        expect(explore).toBeInTheDocument();
        expect(explore).toHaveAttribute("href", "/explore");
    });

    test("menu has log in/sign up button", () => {
        render(
            <MemoryRouter>
                <Hamburger />
            </MemoryRouter>
        )

        const button = screen.getByRole("button", {name: "Log in / Sign up"});
        expect(button).toBeInTheDocument();
    });
});