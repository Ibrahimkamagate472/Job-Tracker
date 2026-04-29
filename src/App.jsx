import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SecondPage from "./pages/SecondPage";


export default function App() {
  return(    
  <>
      <Routes>
        <Route path="/" element={<SecondPage />} />
      </Routes>
  </>
  );
}