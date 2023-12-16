import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AboutAPIService } from "../../api/about-api-services";
export default function DetailAbout() {
  const { id } = useParams();
  const [selectedItem, setSelectedItem] = useState({});

  useEffect(() => {
    AboutAPIService.detail(id).then((result) => setSelectedItem(result.data));
  }, [id]);
  return (
    <div>
      <h1>
        {" "}
        {selectedItem.id}
        {selectedItem.title}
      </h1>
    </div>
  );
}
