import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Home";
import Contact from "../Contact";
import PageNotFound from "../PageNotFound";
import Form from "../Form";

export default function () {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/form" element={<Form />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}
