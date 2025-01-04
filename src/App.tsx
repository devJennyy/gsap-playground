import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import './App.css'
import Homepage from "./pages/Homepage";
import ScrollTrigger from "./components/Animations/ScrollTrigger";
import Pinning from "./components/Animations/Pinning";

function App() {
 

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/homepage" replace />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/scroll-trigger" element={<ScrollTrigger />} />
        <Route path="/pinning" element={<Pinning />} />
      </Routes>
    </Router>
  )
}

export default App
