import { configureStore, combineReducers } from "@reduxjs/toolkit"
import skillsSlice from "./skills/skillsSlice"

export const store = configureStore({
  reducer: {
    skills: skillsSlice
  }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch


