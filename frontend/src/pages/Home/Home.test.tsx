import { act } from "react";
import { fireEvent, render, screen } from "@testing-library/react"
import { MemoryRouter, Route, Routes } from "react-router-dom";
import Hamburger from "../../Hamburger/Hamburger";
import { CreateUser } from "../../pages/CreateUser";
import Home from "../../pages/Home/Home";
import Explore from "../../pages/Explore";

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

//   test("check if background image exist", () => {
//     render(
//       <MemoryRouter>
//         <Home/>
//       </MemoryRouter>,
//     )

//     const backgroundContainer = screen.getByTestId("background-container");
//     expect(backgroundContainer).toHaveStyle({
//         backgroundImage: 'url("https://blog.cwf-fcf.org/wp-content/uploads/2020/07/humpback-whale-breaching-590268314.jpg")',
//       });
//   })

  
})
