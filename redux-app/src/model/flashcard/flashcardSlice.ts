import { ICard } from './types'
import { IDeck } from '../deck/types'
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState, AppThunk } from '../../app/store'

import defaultDeck from '../deck/default'

export interface FlashCardState {
  decks: IDeck[]
}

const initialState: FlashCardState = { decks: [defaultDeck] }

//actions/thunk

export const updateFlashcard = createAsyncThunk('flashcard/update', async (payload: ICard) => {

})

const flashcardSlice = () => null
export default flashcardSlice