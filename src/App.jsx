import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import SignUp from "./pages/SignIn"
import Filter from "./components/Filter"


function App() {

  return (
    <BrowserRouter>
      <Routes basename={"/"}>
        <Route path="/" element={<SignUp/>}/>
        <Route path="/demo" element={<Filter/>}/>
        <Route path="/dashboard" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
