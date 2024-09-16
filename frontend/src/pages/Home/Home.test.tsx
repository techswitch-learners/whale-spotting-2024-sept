import { fireEvent, render, screen } from "@testing-library/react"
import { MemoryRouter, Route, Routes } from "react-router-dom";
import Home from "../../pages/Home/Home";
import Explore from "../../pages/Explore";
import { AddSighting } from "../AddSighting/AddSighting";

describe("Check exitence of background image, submit and explore buttons", () => {
  test("check if submit button exist", () => {
    render(
      <MemoryRouter>
        <Home/>
      </MemoryRouter>,
    )

    const submitButton = screen.getByTestId("submit-button");
    expect(submitButton).toBeInTheDocument();  
  })

  test("check if explore button exist", () => {
    render(
      <MemoryRouter>
        <Home/>
      </MemoryRouter>,
    )

    const exploreButton = screen.getByTestId("explore-button");
    expect(exploreButton).toBeInTheDocument();  
  })

  test("check if background image exist", () => {
    render(
      <MemoryRouter>
        <Home/>
      </MemoryRouter>,
    )

    const backgroundContainer = screen.getByTestId("background-container");
    expect(backgroundContainer).toBeInTheDocument();
  })

})

describe("Buttons go to correct pages", () => {
  test("go to submit sighting page when submit button is clicked", async () => {
    render(
      <MemoryRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addsighting" element={<AddSighting />} />
          <Route path="/explore" element={<Explore />} />
        </Routes>
      </MemoryRouter>,
    )

    const button = screen.getByTestId("submit-button")
    fireEvent.click(button)
    const AddSightingHeading = await screen.findByRole("heading", { name: /submit sighting/i })
    expect(AddSightingHeading).toBeInTheDocument()
  })

  test("go to explore page when explore button is clicked", async () => {
    render(
      <MemoryRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addsighting" element={<AddSighting />} />
          <Route path="/explore" element={<Explore />} />
        </Routes>
      </MemoryRouter>,
    )

    const button = screen.getByTestId("explore-button")
    fireEvent.click(button)
    const exploreHeading = await screen.findByRole("heading", { name: /explore/i })
    expect(exploreHeading).toBeInTheDocument()
  })
})
