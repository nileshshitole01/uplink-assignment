import { configureStore } from '@reduxjs/toolkit';

import createSagaMiddleware from 'redux-saga';

import rootSagas from '../redux/sagas';

import historySlice from '../redux/slices/historySlice' 
import payloadSlice from '../redux/slices/payloadSlice';

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
    reducer: {
        history: historySlice,
        payloads: payloadSlice
    },
    middleware: [sagaMiddleware]
});

sagaMiddleware.run(rootSagas);


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch