import react from "react"
import { Routes, Route} from "react-router-dom";
import './App.css'
import Index from './pages/Index';


function App() {
  return (
    <>
    <Routes>
      <Route exact path="/" element={<Index />} />
    </Routes>
    </>
  )
}

export default App;