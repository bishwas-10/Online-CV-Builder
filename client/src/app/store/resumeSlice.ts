import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {TAcheivementProps, TAwardProps, TEducationProps, TExperienceProps, TProjectProps, TSkillProps, TTrainingProps} from "./types";
import { produce } from "immer";

type TInitialProps={
    personal: {},
    resumeMeta: {},
    experience:TExperienceProps[],
    acheivement: TAcheivementProps[],
    education: TEducationProps[],
    project: TProjectProps[],
    skill: TSkillProps[],
    training: TTrainingProps[],
    award: TAwardProps[],
}

const initialState:TInitialProps = {
  personal: {},
  resumeMeta: {},
  experience: [],
  acheivement: [],
  education: [],
  project: [],
  skill: [],
  training: [],
  award: [],
};

const resumeSlice = createSlice({
  name: "resume",
  initialState,
  reducers: {
    addResume(state,action){
        const payloadData = action.payload;

      // Use Immer's produce function to create a new state with the changes
      return produce(state, (draft) => {
        
        draft.personal = { ...action.payload.about[0] };
        draft.resumeMeta = { ...action.payload.resumeMeta };
       
        draft.experience = [ ...action.payload.experience];
        draft.acheivement = [ ...action.payload.acheivement];
        draft.education = [ ...action.payload.education];
        draft.project = [ ...action.payload.project];
       draft.skill = [...action.payload.skill];
        draft.training = [ ...action.payload.training];
        draft.award = [ ...action.payload.award];
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
     
        state.experience= [...state.experience,action.payload];
    },
    deleteSingleExperience(state,action){
      state.experience.filter((item)=>item.jobTitle !== action.payload.jobTitle)
    },
    addEducation(state, action) {
        state.education= [...state.education,action.payload];
    },
    deleteSingleEducation(state,action){

    },
    addProjects(state, action) {
      state.project= [...state.project,action.payload];
    },
    deleteSingleProjects(state,action){

    },
    addTrainings(state, action) {
      state.training= [...state.training,action.payload];
    },
    deleteSingleTrainings(state,action){

    },
    addSKills(state, action) {
      state.skill= [...state.skill,action.payload];
    },
    deleteSingleSkills(state,action){

    },
    addAcheivement(state, action) {
      state.acheivement= [...state.acheivement,action.payload];
    },
    deleteSingleAcheivement(state,action){

    },
    addAwards(state, action) {
      state.award= [...state.award,action.payload];
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
