import { API } from "../index.js";

const prefix = "/vacancy";

const getAllVacancys = () => {
  API.get(`${prefix}`);
};

const getVacancysDetails = (vacancyID) => {
  API.get(`${prefix}/${vacancyID}`);
};

export default {
  getAllVacancys,
  getVacancysDetails,
};
