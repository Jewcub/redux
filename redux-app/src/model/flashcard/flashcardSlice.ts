import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { EditCardPayload, ICard } from './types';
import { IDeck } from '../deck/types';
import { RootState, AppThunk } from '../../app/store';

import defaultDeck from '../deck/default';

export interface FlashCardState {
	decks: IDeck[];
}

const initialState: FlashCardState = { decks: [defaultDeck] };

//actions/thunk

export const updateFlashcard = createAsyncThunk(
	'flashcard/update',
	async (payload: ICard) => {}
);

const findDeck = (state: FlashCardState, deckTitle: string) =>
	state.decks.filter((deck) => deck.title === deckTitle)[0];

const flashcardSlice = createSlice({
	name: 'flashcard',
	initialState,
	reducers: {
		addFlashcard: (
			state,
			{ payload: { deckTitle, card } }: PayloadAction<EditCardPayload>
		) => {
			findDeck(state, deckTitle).cards.push(card);
		},
		deleteFlashcard: (
			state,
			{
				payload: { cardId, deckTitle },
			}: PayloadAction<{ cardId: string; deckTitle: string }>
		) => {
			const deck = findDeck(state, deckTitle);
			deck.cards = deck.cards.filter((card) => card.id !== cardId);
		},
	},
});

export const { addFlashcard, deleteFlashcard } = flashcardSlice.actions;
export default flashcardSlice.reducer;
