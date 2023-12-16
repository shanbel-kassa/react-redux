import React, { useState } from "react";
import { AboutAPIService } from "../api/about-api-services";
export default function CreateAboutForm() {
  const [title, setTitle] = useState("");

  const onCreate = (event) => {
    event.preventDefault();
    AboutAPIService.create({ title });
  };
  return (
    <form onSubmit={onCreate}>
      title: <input onChange={(event) => setTitle(event.target.value)} />
      <button type="submit">Save</button>
    </form>
  );
}
