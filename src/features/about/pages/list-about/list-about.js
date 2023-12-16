import React, { useEffect, useState } from "react";
import { AboutAPIService } from "../../api/about-api-services";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { aboutActionCreator } from "../../../../redux/reducer/about-action-creator";
export default function ListAbout() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.aboutReducer);
  useEffect(() => {
    dispatch(aboutActionCreator.getAllMenus());
  }, []);

  return (
    <div>
      {items.map((item) => {
        return (
          <div id={item.id}>
            <Link to={`detail/${item.id}`}>
              <h2>
                {item.id}
                {item.title}
              </h2>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
