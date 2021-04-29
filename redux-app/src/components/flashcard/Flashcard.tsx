import React, { useState } from 'react';
import { ICard } from '../../model/flashcard/types';
import { makeStyles } from '@material-ui/core/styles';
import {
	IconButton,
	Button,
	Card,
	Collapse,
	CardActions,
	Typography,
	CardContent,
} from '@material-ui/core/';
import { DeleteTwoTone, EditRounded } from '@material-ui/icons';
import { deleteFlashcard } from '../../model/flashcard/flashcardSlice';
import { useAppDispatch } from '../../app/hooks';

const useStyles = makeStyles((theme) => ({
	root: {
		maxWidth: 400,
		margin: '2rem auto',
		backgroundColor: theme.palette.background.default,
	},
	cardFront: {
		backgroundColor: theme.palette.secondary.dark,
	},
	cardBack: {},
	cardActions: {
		display: 'flex',
		justifyContent: 'space-between',
	},
}));
const Flashcard = ({
	flashcard,
	deckTitle,
}: {
	flashcard: ICard;
	deckTitle: string;
}) => {
	const classes = useStyles();
	const dispatch = useAppDispatch();
	const [expanded, setExpanded] = useState(false);
	const handleExpandClick = () => setExpanded(!expanded);
	const handleDeleteCard = () =>
		dispatch(deleteFlashcard({ deckTitle, cardId: flashcard.id }));

	return (
		<Card className={classes.root}>
			<CardContent className={classes.cardFront}>
				<Typography variant="h3" color="textSecondary">
					{flashcard.frontText}
				</Typography>
			</CardContent>
			<CardActions className={classes.cardActions}>
				<Button onClick={handleExpandClick} size="small">
					See Answer
				</Button>
				<IconButton>
					<EditRounded />
				</IconButton>
				<IconButton onClick={handleDeleteCard}>
					<DeleteTwoTone />
				</IconButton>
			</CardActions>
			<Collapse in={expanded}>
				<CardContent className={classes.cardBack}>
					<Typography variant="h4">{flashcard.backText}</Typography>
				</CardContent>
			</Collapse>
		</Card>
	);
};

export default Flashcard;
