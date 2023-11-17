import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

export type TSkillDetail = {
  name: string,
  level: string,
  rate: number
}
export interface SkillsState {
  data: TSkillDetail[],
}

const initialState: SkillsState = {
  data: [
    {
      name: "Microsoft Word",
      level: 'Expert',
      rate: 3,
    },
    {
      name: "Next.js",
      level: 'Expert',
      rate: 3,
    },
  ]
}

export const skillsSlice = createSlice({
  name: 'skills',
  initialState,
  reducers: {
    addSkill: (state: SkillsState, action: PayloadAction<TSkillDetail>) => {
      state.data = [...state.data, action.payload]
    }
  }
})

export const {addSkill} = skillsSlice.actions

export const selectSkillS = (state: RootState) => state.skills.data;

export default skillsSlice.reducer