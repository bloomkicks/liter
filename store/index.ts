import { configureStore, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit';


let initialState: { current: string | null } = { current: null }

const roomSlice = createSlice({
  name: "room",
  initialState,
  reducers: {
    select(state, { payload: id }: PayloadAction<string>) {
      state.current = id

      return state
    }
  }
})

export const roomActions = roomSlice.actions

const store = configureStore({
  reducer: { room: roomSlice.reducer }
})

export type RootState = ReturnType<typeof store.getState>
export default store