import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Dashborad from "./Pages/Dashbord";
import Signin from "./Pages/Signin/index";
// import SignIn from "./Components/Pages/Signin";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/dashboard" element={<Dashborad />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
