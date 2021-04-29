import { ICard } from '../flashcard/types'
export interface IDeck {
  title: string;
  cards: ICard[];
}