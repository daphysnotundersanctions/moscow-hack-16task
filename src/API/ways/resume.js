import { API } from "../API";

const prefix = "/resume";

const getAllResumes = () => {
  API.get(`${prefix}`);
};

const getResumeByID = (userID) => {
  API.get(`${prefix}/${userID}`);
};

const getResumeByIDSpecific = (userID, resumeID) => {
  API.get(`${prefix}/${userID}/${resumeID}`);
};

const postSubmitResumeToVacancy = (resumeID, vacancyID) => {
  API.post(`${prefix}/${resumeID}/submit/${vacancyID}`);
};

const postCreateResume = (userID, resumeData) => {
  API.post(`${prefix}/${userID}`, resumeData);
};

export default {
  getAllResumes,
  getResumeByID,
  getResumeByIDSpecific,
  postCreateResume,
  postSubmitResumeToVacancy,
};
