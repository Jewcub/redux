export interface ICard {
  id: string;
  frontText: string;
  backText: string;
}
export interface EditCardPayload {
  card: ICard;
  deckTitle: string
}