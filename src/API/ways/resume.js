import { API } from "../index.js";

const prefix = "/resume";

const getAllResumes = () => {
  return API.get(`${prefix}`);
};

const getResumeByID = (userID) => {
  return API.get(`${prefix}/${userID}`);
};

const getResumeByIDSpecific = (userID, resumeID) => {
  return API.get(`${prefix}/${userID}/${resumeID}`);
};

const postSubmitResumeToVacancy = (resumeID, vacancyID) => {
  return API.post(`${prefix}/${resumeID}/submit/${vacancyID}`);
};

const postCreateResume = (userID, resumeData) => {
  return API.post(`${prefix}/${userID}`, resumeData);
};

export default {
  getAllResumes,
  getResumeByID,
  getResumeByIDSpecific,
  postCreateResume,
  postSubmitResumeToVacancy,
};
