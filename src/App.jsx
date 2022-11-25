import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import SignIn from "./components/SignIn";
import SignUp from "./components/SingUp";
import Dashboard from "./components/Dashboard";
import Shop from "./components/Shop";
import { Route, Routes } from "react-router-dom";
import ProtectedRoutes from "./services/ProtectedRoutes";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/shop" element={<Shop />} />
        {/* <Route path="/dashboard" element={<ProtectedRoutes />}> */}
        <Route path="/dashboard" element={<Dashboard />} />
        {/* </Route> */}
      </Routes>
    </>
  );
}

export default App;
