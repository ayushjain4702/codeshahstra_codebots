import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Analytics from "./pages/Dashboard/Analytics";
import Calendar from "./pages/Calendar";
import Profile from "./pages/Profile";
import FormElements from "./pages/Form/FormElements";
import FormLayout from "./pages/Form/FormLayout";
import Tables from "./pages/Tables";
import Settings from "./pages/Settings";
import Chart from "./pages/Chart";
import Alerts from "./pages/UiElements/Alerts";
import Buttons from "./pages/UiElements/Buttons";
import AddEmployee from "./pages/AddEmployee";
import VerifyEmployee from "./pages/VerifyEmployee";
import Home from "./pages/Home";
import MyEmployees from "./pages/MyEmployees";
import ReportEmployees from "./pages/ReportEmployee";
import DocUpload from "./pages/DocUpload";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

const App = () => {
  const [loading, setLoading] = useState(true);

  const preloader = document.getElementById("preloader");

  if (preloader) {
    setTimeout(() => {
      preloader.style.display = "none";
      setLoading(false);
    }, 2000);
  }

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    !loading && (
      <>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/addEmp" element={<AddEmployee />} />
          <Route path="/docUpload" element={<DocUpload />} />
          <Route path="/dashboard" element={<Analytics />} />
          <Route path="/myEmp" element={<MyEmployees />} />
          <Route path="/reportEmp" element={<ReportEmployees />} />
          <Route path="/verifyEmp" element={<VerifyEmployee />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/forms/form-elements" element={<FormElements />} />
          <Route path="/forms/form-layout" element={<FormLayout />} />
          <Route path="/tables" element={<Tables />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/chart" element={<Chart />} />
          <Route path="/ui/alerts" element={<Alerts />} />
          <Route path="/ui/buttons" element={<Buttons />} />
          {/* <Route path="/auth/signin" element={<SignIn />} />
          <Route path="/auth/signup" element={<SignUp />} /> */}
        </Routes>
      </>
    )
  );
};

export default App;
