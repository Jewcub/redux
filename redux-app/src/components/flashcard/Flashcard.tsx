
import React, { useState } from 'react'
import { ICard } from '../../model/flashcard/types'
import { makeStyles } from '@material-ui/core/styles'
import { IconButton, Button, Card, Collapse, CardActions, Typography, CardContent } from '@material-ui/core/';
import { EditRounded } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 400,
    margin: "2rem auto",
    backgroundColor: theme.palette.background.default,
  },
  cardFront: {
    backgroundColor: theme.palette.secondary.dark
  },
  cardBack: {

  }
}))
const Flashcard = ({ flashcard, deckTitle }: { flashcard: ICard, deckTitle: string }) => {
  const classes = useStyles();

  const [expanded, setExpanded] = useState(false)
  const handleExpandClick = () => setExpanded(!expanded)
  return (
    <Card className={classes.root}>
      <CardContent className={classes.cardFront} >
        <Typography variant="h3" color="textSecondary">
          {flashcard.frontText}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={handleExpandClick} size="small">See Answer</Button>
        <IconButton>
          <EditRounded />
        </IconButton>
      </CardActions>
      <Collapse in={expanded}>
        <CardContent className={classes.cardBack}>
          <Typography variant="h4">
            {flashcard.backText}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>

  )
}

export default Flashcard