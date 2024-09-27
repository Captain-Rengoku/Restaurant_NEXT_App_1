"use client";
import { useState } from "react";
import RestaurantLogin from "../_components/RestaurantLogin";
import RestaurantSignUp from "../_components/RestaurantSignup";
import RestaurantHeader from "../_components/RestaurantHeader";
import Footer from "../_components/Footer";
import "./style.css";

const Restaurant = () => {
  const [login, setLogin] = useState(true);
  return (
    <>
      <body>
        <div className="container">
          <RestaurantHeader />
          <h1>Restaurant Login / Sign up Page</h1>
          {login ? <RestaurantLogin /> : <RestaurantSignUp />}

          <div>
            <button className="button-link" onClick={() => setLogin(!login)}>
              {login
                ? "Don't have an account? Sign up."
                : "Have an account? Log in"}
            </button>
          </div>
        </div>
        <Footer/>
      </body>
    </>
  );
};

export default Restaurant;
