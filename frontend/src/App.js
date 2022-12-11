import axios from "axios";
import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { getMe } from "./axios";
import {
  Customer,
  NotFound,
  SignIn,
  SignUp,
  Seller,
  SellerProfil,
  Admin,
} from "./pages";
import { getToken } from "./utils/getToken";

function App() {
  const token = getToken();
  const navigate = useNavigate();
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const [isAdmin, setIsAdmin] = useState("");
  const [isSeller, setIsSeller] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const adminResponse = await axios.get(
          `${process.env.REACT_APP_SERVER_API_URL}/api/admin/auth/me`,
          {
            headers: {
              Authorization: token,
            },
          }
        );

        const sellerResponse = await axios.get(
          `${process.env.REACT_APP_SERVER_API_URL}/api/seller/auth/me`,
          {
            headers: {
              Authorization: token,
            },
          }
        );

        setIsSeller(sellerResponse.data.token);
        setIsAdmin(adminResponse.data.admin.token);
        setError(false);
        setLoaded(true);
      } catch (error) {
        console.log(error);
        setLoaded(true);
        setError(true);
      }
    };
    fetchData();
  }, [token]);

  if (error) {
    localStorage.removeItem("token", "");
  }

  console.log(isSeller);
  console.log(isAdmin);
  // if (token && !error && loaded && isAdmin !== "") {
  //   navigate("/admin", { replace: true });
  // }

  return (
    <div>
      <Routes>
        <Route path="/" element={<Customer />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/seller" element={<Seller />} />
        <Route path="/seller/profil" element={<SellerProfil />} />
        {token && <Route path="/admin" element={<Admin />} />}
      </Routes>
    </div>
  );
}

export default App;
