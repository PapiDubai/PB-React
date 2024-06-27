// store is like a mini temp file in the middle in the DB

import { configureStore } from '@reduxjs/toolkit'
import { reducer } from './slices/RootSlice'

export const store = configureStore({
    reducer,
    devTools: true,
})