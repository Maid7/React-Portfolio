import {Routes,Route} from "react-router-dom"
// import `RootLayout` component
import RootLayout from "./layouts/RootLayout"
// import pages
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
function App() {
  return (
    <Routes>
     <Route path="/" element={<RootLayout/>}>
      <Route index element={<Home/>}/>
      <Route path="projects" element={<Projects/>}/>
      <Route path="contact" element={<Contact/>}/>
      <Route path="resume" element={<Resume/>}/>
     </Route>
  </Routes>
  )
}

export default App;
