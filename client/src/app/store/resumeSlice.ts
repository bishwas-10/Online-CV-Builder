import { createSlice } from "@reduxjs/toolkit";
import {
  TAcheivementProps,
  TAwardProps,
  TEducationProps,
  TExperienceProps,
  TProjectProps,
  TSkillProps,
  TTrainingProps,
} from "./types";
import { produce } from "immer";

type TInitialProps = {
  personal: {};
  resumeMeta: {};
  experience: TExperienceProps[];
  acheivement: TAcheivementProps[];
  education: TEducationProps[];
  project: TProjectProps[];
  skill: TSkillProps[];
  training: TTrainingProps[];
  award: TAwardProps[];
};

const initialState: TInitialProps = {
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
    addResume(state, action) {
      const payloadData = action.payload;

      // Use Immer's produce function to create a new state with the changes
      return produce(state, (draft) => {
        draft.personal = { ...action.payload.about[0] };
        draft.resumeMeta = { ...action.payload.resumeMeta };

        draft.experience = action.payload.experience.map(
          (item: TExperienceProps) => ({
            ...item,
            visibility: false,
          })
        );
        draft.acheivement = [...action.payload.acheivement];
        draft.education = action.payload.education.map(
          (educationItem: TEducationProps) => ({
            ...educationItem,
            visibility: false,
          })
        );
        // draft.education.forEach((items)=>items.visibility=false)
        draft.project = action.payload.project.map((item: TProjectProps) => ({
          ...item,
          visibility: false,
        }));
        draft.skill = action.payload.skill.map((item: TSkillProps) => ({
          ...item,
          visibility: false,
        }));
        draft.training = action.payload.training.map(
          (item: TTrainingProps) => ({
            ...item,
            visibility: false,
          })
        );
        draft.award = action.payload.award.map((item: TAwardProps) => ({
          ...item,
          visibility: false,
        }));
      });
    },
    removeResume(state) {
      state = initialState;
    },
    addPersonal(state, action) {
      state.personal = action.payload;
    },
    addResumeMeta(state, action) {
      state.resumeMeta = action.payload;
    },
    addExperience(state, action) {
      const existingIndex = state.experience.findIndex(
        (item) => item._id === action.payload._id
      );

      if (existingIndex !== -1) {
        // If there's a match, update the education item
        state.experience[existingIndex] = action.payload;
      } else {
        // If no match, add a new education item to the array
        state.experience = [...state.experience, action.payload];
      }
    },
    deleteSingleExperience(state, action) {
      state.experience = state.experience.filter(
        (edu) => edu._id !== action.payload._id
      );
    },
    addEducation(state, action) {
      const existingIndex = state.education.findIndex(
        (edu) => edu._id === action.payload._id
      );

      if (existingIndex !== -1) {
        // If there's a match, update the education item
        state.education[existingIndex] = action.payload;
      } else {
        // If no match, add a new education item to the array
        state.education = [...state.education, action.payload];
      }
    },
    deleteSingleEducation(state, action) {
      state.education = state.education.filter(
        (edu) => edu._id !== action.payload._id
      );
    },
    addProjects(state, action) {
      const existingIndex = state.project.findIndex(
        (item) => item._id === action.payload._id
      );

      if (existingIndex !== -1) {
        state.project[existingIndex] = action.payload;
      } else {
        state.project = [...state.project, action.payload];
      }
    },
    deleteSingleProjects(state, action) {
      state.project = state.project.filter(
        (item) => item._id !== action.payload._id
      );
    },
    addTrainings(state, action) {
      const existingIndex = state.training.findIndex(
        (item) => item._id === action.payload._id
      );

      if (existingIndex !== -1) {
        state.training[existingIndex] = action.payload;
      } else {
        state.training = [...state.training, action.payload];
      }
    },
    deleteSingleTrainings(state, action) {
      state.training = state.training.filter(
        (item) => item._id !== action.payload._id
      );
    },
    addSKills(state, action) {
      const existingIndex = state.skill.findIndex(
        (item) => item._id === action.payload._id
      );

      if (existingIndex !== -1) {
        state.skill[existingIndex] = action.payload;
      } else {
        state.skill = [...state.skill, action.payload];
      }
    },
    deleteSingleSkills(state, action) {
      state.skill = state.skill.filter(
        (item) => item._id !== action.payload._id
      );
    },
    addAcheivement(state, action) {
      const existingIndex = state.acheivement.findIndex(
        (item) => item._id === action.payload._id
      );

      if (existingIndex !== -1) {
        state.acheivement[existingIndex] = action.payload;
      } else {
        state.acheivement = [...state.acheivement, action.payload];
      }
    },
    deleteSingleAcheivement(state, action) {
      state.acheivement = state.acheivement.filter(
        (item) => item._id !== action.payload._id
      );
    },
    addAwards(state, action) {
      const existingIndex = state.award.findIndex(
        (item) => item._id === action.payload._id
      );

      if (existingIndex !== -1) {
        state.award[existingIndex] = action.payload;
      } else {
        state.award = [...state.award, action.payload];
      }
    },
    deleteSingleAwards(state, action) {
      state.award = state.award.filter(
        (item) => item._id !== action.payload._id
      );
    },
    setEduVisibility(state, action) {
      state.education = state.education.map((item) =>
        item._id === action.payload._id ? { ...item, visibility: true } : item
      );
    },
    unsetEduVisibility(state, action) {
      state.education = state.education.map((item) =>
        item._id === action.payload._id ? { ...item, visibility: false } : item
      );
    },
    setExpeVisibility(state, action) {
      state.experience = state.experience.map((item) =>
        item._id === action.payload._id ? { ...item, visibility: true } : item
      );
    },
    unsetExpeVisibility(state, action) {
      state.experience = state.experience.map((item) =>
        item._id === action.payload._id ? { ...item, visibility: false } : item
      );
    },
    setAcheiveVisibility(state, action) {
      state.acheivement = state.acheivement.map((item) =>
        item._id === action.payload._id ? { ...item, visibility: true } : item
      );
    },
    unsetAcheiveVisibility(state, action) {
      state.acheivement = state.acheivement.map((item) =>
        item._id === action.payload._id ? { ...item, visibility: false } : item
      );
    },
    setAwardVisibility(state, action) {
      state.award = state.award.map((item) =>
        item._id === action.payload._id ? { ...item, visibility: true } : item
      );
    },
    unsetAwardVisibility(state, action) {
      state.award = state.award.map((item) =>
        item._id === action.payload._id ? { ...item, visibility: false } : item
      );
    },
    setProjectVisibility(state, action) {
      state.project = state.project.map((item) =>
        item._id === action.payload._id ? { ...item, visibility: true } : item
      );
    },
    unsetProjectVisibility(state, action) {
      state.project = state.project.map((item) =>
        item._id === action.payload._id ? { ...item, visibility: false } : item
      );
    },
    setSkillVisibility(state, action) {
      state.skill = state.skill.map((item) =>
        item._id === action.payload._id ? { ...item, visibility: true } : item
      );
    },
    unsetSkillVisibility(state, action) {
      state.skill = state.skill.map((item) =>
        item._id === action.payload._id ? { ...item, visibility: false } : item
      );
    },
    setTrainingVisibility(state, action) {
      state.training = state.training.map((item) =>
        item._id === action.payload._id ? { ...item, visibility: true } : item
      );
    },
    unsetTrainingVisibility(state, action) {
      state.training = state.training.map((item) =>
        item._id === action.payload._id ? { ...item, visibility: false } : item
      );
    },
  },
});

export const {
  addResume,
  removeResume,
  addPersonal,
  addAcheivement,
  addAwards,
  addEducation,
  addExperience,
  addProjects,
  addResumeMeta,
  addSKills,
  addTrainings,
  deleteSingleAcheivement,
  deleteSingleAwards,
  deleteSingleEducation,
  deleteSingleExperience,
  deleteSingleProjects,
  deleteSingleSkills,
  deleteSingleTrainings,
  setEduVisibility,
  unsetEduVisibility,
  setAcheiveVisibility,unsetAcheiveVisibility,
  setAwardVisibility,unsetAwardVisibility,
  setExpeVisibility,unsetExpeVisibility,
  setProjectVisibility,unsetProjectVisibility,
  setSkillVisibility,unsetSkillVisibility,
  setTrainingVisibility,unsetTrainingVisibility
} = resumeSlice.actions;

export default resumeSlice.reducer;
