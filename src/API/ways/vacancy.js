import { API } from "../API";

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
