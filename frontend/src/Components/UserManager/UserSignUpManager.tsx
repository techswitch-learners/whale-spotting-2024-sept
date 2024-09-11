import React, { createContext, ReactNode, useState } from "react"

export const UserSignUpContext = createContext({
  username: "",
  password: "",
  firstname: "",
  lastname: "",
  email: "",
  aboutme: "",
  saveUsernameToContext: (username: string) => {},
  savePasswordToContext: (password: string) => {},
  saveFirstnameToContext: (firstname: string) => {},
  saveLastnameToContext: (lastname: string) => {},
  saveEmailToContext: (email: string) => {},
  saveAboutmeToContext: (aboutme: string) => {},
})

interface UserSignUpManagerProps {
  children: ReactNode
}

export function UserSignUpManager(props: UserSignUpManagerProps): JSX.Element {
  const [contextUsername, setContextUsername] = useState("")
  const [contextPassword, setContextPassword] = useState("")
  const [contextFirstname, setContextFirstname] = useState("")
  const [contextLastname, setContextLastname] = useState("")
  const [contextEmail, setContextEmail] = useState("")
  const [contextAboutme, setContextAboutme] = useState("")

  function saveUsernameToContext(username: string) {
    setContextUsername(username)
  }

  function savePasswordToContext(password: string) {
    setContextPassword(password)
  }

  function saveFirstnameToContext(firstname: string) {
    setContextFirstname(firstname)
  }

  function saveLastnameToContext(lastname: string) {
    setContextLastname(lastname)
  }

  function saveEmailToContext(email: string) {
    setContextEmail(email)
  }

  function saveAboutmeToContext(aboutme: string) {
    setContextAboutme(aboutme)
  }

  const context = {
    username: contextUsername,
    password: contextPassword,
    firstname: contextFirstname,
    lastname: contextLastname,
    email: contextEmail,
    aboutme: contextAboutme,
    saveUsernameToContext,
    savePasswordToContext,
    saveFirstnameToContext,
    saveLastnameToContext,
    saveEmailToContext,
    saveAboutmeToContext,
  }

  return <UserSignUpContext.Provider value={context}>{props.children}</UserSignUpContext.Provider>
}
