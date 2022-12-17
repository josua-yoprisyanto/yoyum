import axios from "axios";
import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { getMe } from "./axios";
import {
  Customer,
  NotFound,
  AdminSignIn,
  SellerSignIn,
  SignUp,
  Seller,
  SellerProfil,
  Admin,
} from "./pages";
import { getToken } from "./utils/getToken";
import { getRole } from "./utils/getRole";

function App() {
  const token = getToken();
  const navigate = useNavigate();
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  const role = getRole();

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

  // if (error) {
  //   localStorage.removeItem("token", "");
  // }

  // if (token && !error && loaded) {
  //   navigate("/yoyum/admin", { replace: true });
  // }

  useEffect(() => {
    if (role === "ADMIN") {
      navigate("/admin/dashboard", { replace: true });
    }
    if (role === "SELLER") {
      navigate("/seller/dashboard", { replace: true });
    }
  }, [token, loaded, role]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Customer />} />
        <Route path="/:id" element={<Customer />} />
        <Route path="*" element={<NotFound />} />

        <Route path="/admin/sign-in" element={<AdminSignIn />} />
        <Route path="/seller/sign-in" element={<SellerSignIn />} />

        {/* admin */}
        {role === "ADMIN" && (
          <>
            <Route path="/admin/dashboard" element={<Admin />} />
            <Route path="/admin/create-stand" element={<SignUp />} />
          </>
        )}

        {/* seller */}
        {role === "SELLER" && (
          <>
            <Route path="/seller/dashboard" element={<Seller />} />
            <Route path="/seller/:profil" element={<SellerProfil />} />
          </>
        )}
      </Routes>
    </div>
  );
}

export default App;
