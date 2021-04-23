import { ICard } from './types'
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState, AppThunk } from '../../app/store'

export interface FlashCardState extends ICard { }

const initialState: FlashCardState = { frontText: 'initial front', backText: 'initial back' }

//actions/thunk

export const updateFlashcard = createAsyncThunk('flashcard/update', async (payload: ICard) => {

})

const flashcardSlice = () => null
export default flashcardSlice