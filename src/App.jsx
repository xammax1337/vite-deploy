import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'
import Layout from "./pages/Layout"
import HomePage from "./pages/HomePage"
import ContactPage from "./pages/ContactPage"
import ProjectPage from "./pages/ProjectPage"
import Experiences from "./components/Experiences"

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/projects" element={<ProjectPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>

  )
}

export default App
