import { aboutEndpoints } from "./about-endpoint";
import { axiosInstance } from "../../../sherd/axios.-instance";

function listAll() {
  return axiosInstance.get(aboutEndpoints.list);
}

function detail(id) {
  return axiosInstance.get(`${aboutEndpoints.detail}/${id}`);
}

function create(data) {
  return axiosInstance.post(aboutEndpoints.create, data);
}

function update() {
  return axiosInstance.get(aboutEndpoints.update);
}

function deleteAbout() {
  return axiosInstance.get(aboutEndpoints.delete);
}

export const AboutAPIService = {
  listAll,
  detail,
  create,
  update,
  deleteAbout,
};
