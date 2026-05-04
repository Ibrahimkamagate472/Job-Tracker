import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SecondPage from "./pages/SecondPage";
import MainLayout from "./layouts/MainLayout";



export default function App() {
  return(    
  
    <Routes>
      <Route path="/" element={<MainLayout/>}>
        <Route index path="/" element={<Home />} />
          <Route index path="/secondpage" element={<SecondPage />} />
        
      </Route>
    </Routes>
  );
}