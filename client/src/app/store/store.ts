import fieldReducer from './fieldSlice';

import userReducer from './userSlice';
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import {persistReducer,persistStore} from "redux-persist";
import tokenReducer from './tokenSlice';
import resumeTokenReducer from './resumeTokenSlice';
import resumeReducer from './resumeSlice';
const rootReducer = combineReducers({
   field: fieldReducer,
   users:userReducer,
   token:tokenReducer,
   resumeToken:resumeTokenReducer,
   resume:resumeReducer
})

const persistConfig ={
   key:'users',
   version:1,
   storage,
   whitelist: ['users','resumeToken','token']
}

const persistedReducer = persistReducer(persistConfig, rootReducer);


const store= configureStore({
reducer:persistedReducer,
middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck:false
}),
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


export const persistor = persistStore(store);