import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import SignUp from "./pages/SignIn"


function App() {

  return (
    <BrowserRouter>
      <Routes basename={"/"}>
        <Route path="/" element={<SignUp/>}/>
        <Route path="/dashboard" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
