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

  // test("check if background image exist", () => {
  //   render(
  //     <MemoryRouter>
  //       <Home/>
  //     </MemoryRouter>,
  //   )

  //   const backgroundContainer = screen.getByTestId("background-container");
  //   expect(backgroundContainer).toHaveStyle({
  //       // backgroundImage: 'url("https://blog.cwf-fcf.org/wp-content/uploads/2020/07/humpback-whale-breaching-590268314.jpg")',
  //     });
  // })

})

describe("Buttons go to correct pages", () => {
  test("go to log in page when log in button is clicked", async () => {
    render(
      <MemoryRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/login" element={<h1>Log in</h1>} />
          <Route path="/signup" element={<CreateUser />} />
        </Routes>
        <Hamburger />
      </MemoryRouter>,
    )

    const button = screen.getByTestId("log-in-button")
    fireEvent.click(button)
    const logInHeading = await screen.findByRole("heading", { name: /log in/i })
    expect(logInHeading).toBeInTheDocument()
  })

  test("go to sign up page when sign up button is clicked", async () => {
    render(
      <MemoryRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/login" element={<h1>Log in</h1>} />
          <Route path="/signup" element={<CreateUser />} />
        </Routes>
        <Hamburger />
      </MemoryRouter>,
    )

    const button = screen.getByTestId("sign-up-button")
    fireEvent.click(button)
    const signUpHeading = await screen.findByRole("heading", { name: /sign up/i })
    expect(signUpHeading).toBeInTheDocument()
  })
})
