import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {TExperienceProps} from "./types";
import { produce } from "immer";

type TInitialProps={
    personal: {},
    resumeMeta: {},
    experience:TExperienceProps[],
    acheivement: [],
    education: [],
    projects: [],
    skills: [],
    trainings: [],
    awards: [],
}

const initialState:TInitialProps = {
  personal: {},
  resumeMeta: {},
  experience: [],
  acheivement: [],
  education: [],
  projects: [],
  skills: [],
  trainings: [],
  awards: [],
};

const resumeSlice = createSlice({
  name: "resume",
  initialState,
  reducers: {
    addResume(state,action: PayloadAction<TInitialProps>){
        const payloadData = action.payload;

      // Use Immer's produce function to create a new state with the changes
      return produce(state, (draft) => {
        draft.personal = { ...action.payload.personal };
        draft.resumeMeta = { ...action.payload.resumeMeta };
        draft.experience = [ ...action.payload.experience];
        draft.acheivement = [ ...action.payload.acheivement];
        draft.education = [ ...action.payload.education];
        //draft.projects = [...draft.projects, ...action.payload.projects];
       // draft.skills = [...draft.skills, ...action.payload.skills];
        //draft.trainings = [...draft.trainings, ...action.payload.trainings];
        //draft.awards = [...draft.awards, ...action.payload.awards];
      })
    },
    removeResume(state){
      state=initialState
    },
    addPersonal(state, action) {
        state.personal = action.payload;
    },
    addResumeMeta(state, action) {
        state.resumeMeta= action.payload;
    },
    addExperience(state, action) {
      console.log(action.payload)
        state.experience= [...state.experience,action.payload];
    },
    deleteSingleExperience(state,action){
      state.experience.filter((item)=>item.jobTitle !== action.payload.jobTitle)
    },
    addEducation(state, action) {
        state.education= action.payload;
    },
    deleteSingleEducation(state,action){

    },
    addProjects(state, action) {
        state.projects= action.payload;
    },
    deleteSingleProjects(state,action){

    },
    addTrainings(state, action) {
        state.trainings= action.payload;
    },
    deleteSingleTrainings(state,action){

    },
    addSKills(state, action) {
        state.skills= action.payload;
    },
    deleteSingleSkills(state,action){

    },
    addAcheivement(state, action) {
        state.acheivement= action.payload;
    },
    deleteSingleAcheivement(state,action){

    },
    addAwards(state, action) {
        state.awards= action.payload;
    },
    deleteSingleAwards(state,action){

    },
   
  },
});

export const {addResume,removeResume,
    addPersonal,
  addAcheivement,
  addAwards,
  addEducation,
  addExperience,
  addProjects,
  addResumeMeta,
  addSKills,
  addTrainings,deleteSingleAcheivement,deleteSingleAwards,deleteSingleEducation,
  deleteSingleExperience,deleteSingleProjects,
  deleteSingleSkills,deleteSingleTrainings
  
} = resumeSlice.actions;

export default resumeSlice.reducer;
