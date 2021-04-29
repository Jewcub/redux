import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../model/counter/counterSlice';
import flashcardReducer from '../model/flashcard/flashcardSlice';
export const store = configureStore({
	reducer: {
		counter: counterReducer,
		flashcard: flashcardReducer,
	},
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;
