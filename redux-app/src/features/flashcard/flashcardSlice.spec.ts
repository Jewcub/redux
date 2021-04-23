import flashcardReducer, { updateText } from './flashcardSlice'
import { ICard } from './types'

describe('flashcard reducer', () => {
  it('should load default card', () => {
    const expected: ICard = ({ frontText: 'default front', backText: 'default back' })
    expect(flashcardReducer()).toEqual(expected);
  })
  it('should update cards front and back text', () => {
    const update: ICard = { frontText: 'new front', backText: 'new back' }
    expect(updateText(update)).toEqual(update)
  })
})