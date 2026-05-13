import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Main from "./Layouts/Main"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} >
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
