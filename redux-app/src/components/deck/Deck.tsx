import React from 'react';
import Flashcard from '../flashcard/Flashcard'
import { ICard } from '../../model/flashcard/types'
import { IDeck } from '../../model/deck/types'



const Deck = ({ deck }: { deck: IDeck }) => {
  return (
    <React.Fragment>
      {deck.cards.map((flashcard) =>
        <Flashcard flashcard={flashcard} deckTitle={deck.title} />
      )}
    </React.Fragment>
  )
}

export default Deck