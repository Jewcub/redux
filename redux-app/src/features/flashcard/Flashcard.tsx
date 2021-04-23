
import React, { useState } from 'react'
import { ICard } from './types'
import { makeStyles } from '@material-ui/core/styles'
import { Button, Card, Collapse, CardActions, Typography, CardContent } from '@material-ui/core/';
interface Props {

}
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
export const Flashcard = (props: Props) => {
  const classes = useStyles()
  const flashcard: ICard = {
    frontText: `How do you get state in redux?`,
    backText: `setSelector()`
  }
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

