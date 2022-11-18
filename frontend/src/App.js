import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Customer, NotFound, SignIn, SignUp, Seller } from "./pages";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Customer />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/seller" element={<Seller />} />
      </Routes>
    </Router>
  );
}

export default App;
