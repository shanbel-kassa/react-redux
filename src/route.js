import React from "react";
import { Route, Routes } from "react-router-dom";
import ListAbout from "./features/about/pages/list-about/list-about";
import DetailAbout from "./features/about/pages/detail-about/detail-about";
import CreateAboutForm from "./features/about/components/create-form";

export default function AppRouter() {
  return (
    <Routes>
      <Route index element={<ListAbout />} />
      <Route path="detail/:id" element={<DetailAbout />} />
      <Route path="new" element={<CreateAboutForm />} />

      {/* <Route path="*" element={<Error404 />} /> */}
    </Routes>
  );
}
