import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
// import Login from "../Login/Login"
import Header from "../../Header/Header"

test("does not render Admin navigation link if logged out or not admin", () => {
  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>,
  )

  const adminLink = screen.queryByText("Admin")
  const homeLink = screen.queryByText("Home")
  expect(adminLink).not.toBeInTheDocument()
  expect(homeLink).toBeInTheDocument()
})

//   test("does render Admin navigation link if logged in as admin", () => {
//     render(
//       <MemoryRouter>
//         <Header />
//       </MemoryRouter>,
//     )

//     //LOG IN

//     const adminLink = screen.queryByText("Admin")
//     const homeLink = screen.queryByText("Home")
//     expect(adminLink).toBeInTheDocument()
//     expect(homeLink).toBeInTheDocument()
//   })
