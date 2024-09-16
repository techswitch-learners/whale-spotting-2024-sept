import { render, screen } from "@testing-library/react"
import { MemoryRouter, Route, Routes } from "react-router-dom"
import Header from "../../Header/Header"
import Admin from "../Admin/Admin"
import { CreateUser } from "../CreateUser"
import Explore from "../Explore/Explore"
import Home from "../Home"
import Login from "../Login/Login"
import { LoginContext } from "../../Components/LoginManager/LoginManager"

test("does not render Admin link in navigation bar if logged out or not admin", () => {
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

test("does render Admin link in navigation bar if logged in as admin", () => {
  render(
    <MemoryRouter>
      <LoginContext.Provider
        value={{
          isLoggedIn: true,
          roleType: "Admin",
          logIn: jest.fn(),
          logOut: jest.fn(),
          username: "Admin",
          password: "mockPassword",
          jwt: "mockJWT",
          saveUsernameToContext: jest.fn(),
          savePasswordToContext: jest.fn(),
          saveJwtToContext: jest.fn(),
          saveRoleTypeToContext: jest.fn(),
        }}
      >
        <Header />
      </LoginContext.Provider>
    </MemoryRouter>,
  )

  const adminLink = screen.getByTestId("adminLink")
  const homeLink = screen.getByTestId("homeLink")
  expect(adminLink).toBeInTheDocument()
  expect(homeLink).toBeInTheDocument()
})

test("does redirection to Admin page when click on Admin link, if logged in as admin", async () => {
  render(
    <MemoryRouter>
      <LoginContext.Provider
        value={{
          isLoggedIn: true,
          roleType: "Admin",
          logIn: jest.fn(),
          logOut: jest.fn(),
          username: "Admin",
          password: "mockPassword",
          jwt: "mockJWT",
          saveUsernameToContext: jest.fn(),
          savePasswordToContext: jest.fn(),
          saveJwtToContext: jest.fn(),
          saveRoleTypeToContext: jest.fn(),
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<CreateUser />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
        <Header />
      </LoginContext.Provider>
    </MemoryRouter>,
  )

  const adminLink = screen.getByRole("link", { name: "Admin" })
  expect(adminLink).toHaveAttribute("href", "/admin")
})

test("display Admin Page title , if logged in as admin", async () => {
  render(
    <MemoryRouter>
      <LoginContext.Provider
        value={{
          isLoggedIn: true,
          roleType: "Admin",
          logIn: jest.fn(),
          logOut: jest.fn(),
          username: "Admin",
          password: "mockPassword",
          jwt: "mockJWT",
          saveUsernameToContext: jest.fn(),
          savePasswordToContext: jest.fn(),
          saveJwtToContext: jest.fn(),
          saveRoleTypeToContext: jest.fn(),
        }}
      >
        <Admin />
      </LoginContext.Provider>
    </MemoryRouter>,
  )

  const adminPageTitle = await screen.findByRole("heading", { name: /Admin Page/i })
  expect(adminPageTitle).toBeInTheDocument()
})

test("display error message, if not logged in as admin", async () => {
  render(
    <MemoryRouter>
      <LoginContext.Provider
        value={{
          isLoggedIn: true,
          roleType: "User",
          logIn: jest.fn(),
          logOut: jest.fn(),
          username: "Admin",
          password: "mockPassword",
          jwt: "mockJWT",
          saveUsernameToContext: jest.fn(),
          savePasswordToContext: jest.fn(),
          saveJwtToContext: jest.fn(),
          saveRoleTypeToContext: jest.fn(),
        }}
      >
        <Admin />
      </LoginContext.Provider>
    </MemoryRouter>,
  )

  const adminPageTitle = await screen.findByRole("heading", { name: /You are not authorized to view this page/i })
  expect(adminPageTitle).toBeInTheDocument()
})
