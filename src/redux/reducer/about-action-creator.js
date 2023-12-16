import { MENU_ACTION_TYPES } from "./about-action";
import { AboutAPIService } from "../../features/about/api/about-api-services";

export const getAllMenus = () => async (dispatch) => {
  await AboutAPIService.listAll()
    .then((result) => {
      dispatch({
        type: MENU_ACTION_TYPES.FETCH_MENU,
        payload: result.data,
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

export const detailMenu = (id) => async (dispatch) => {
  await AboutAPIService.detail(id)
    .then((result) => {
      dispatch({
        type: MENU_ACTION_TYPES.DETAIL_MENU,
        payload: result.data,
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

export const addMenu = (menu) => async (dispatch) => {
  await AboutAPIService.create(menu)
    .then((result) => {
      dispatch({
        type: MENU_ACTION_TYPES.ADD_MENU,
        payload: result.data,
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

export const aboutActionCreator = {
  getAllMenus,
  detailMenu,
  addMenu,
};
