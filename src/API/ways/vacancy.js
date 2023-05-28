import { API } from "../index.js";

const prefix = "/vacancy";

const getAllVacancys = () => {
  return API.get(`${prefix}`);
};

const getVacancysDetails = (vacancyID) => {
  return API.get(`${prefix}/${vacancyID}`);
};

export default {
  getAllVacancys,
  getVacancysDetails,
};
