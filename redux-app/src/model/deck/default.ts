import { IDeck } from './types'

const defaultDeck: IDeck =
{
  title: 'Redux Knowledge',
  cards: [
    {
      id: '123',
      frontText: `How do you get state in redux?`,
      backText: `setSelector()`
    }
  ]
}
export default defaultDeck