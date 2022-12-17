import {configureStore} from '@reduxjs/toolkit';
import authSlice from './authSlice';
import devToolsEnhancer from 'remote-redux-devtools';
export const store = configureStore({
    reducer: {
        auth: authSlice,
    }
}, devToolsEnhancer())