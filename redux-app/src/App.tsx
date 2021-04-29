import React from 'react';
import '@fontsource/roboto';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Box, Typography } from '@material-ui/core';

import Deck from './components/deck/Deck';
import Editor from './components/editor/Editor';
import { useAppSelector } from './app/hooks';
import { IDeck } from './model/deck/types';
import defaultDeck from './model/deck/default';
import './App.css';

const useStyles = makeStyles((theme) => ({
	root: {
		background: theme.palette.primary.dark,
		padding: 15,
	},
	deckTitle: {
		paddingTop: 15,
		textDecoration: 'underline',
	},
}));

function App() {
	const decks = useAppSelector((state) => state.flashcard.decks);
	const classes = useStyles();
	return (
		<div className="App">
			<Box>
				<Box className={classes.root} bgcolor="primary" width="100">
					<Typography color="textSecondary" variant="h5">
						Flashcards
					</Typography>
				</Box>

				<Container maxWidth="sm">
					<Box
						display="flex"
						flexDirection="column"
						justifyContent="center"
						textAlign="center"
					>
						<Editor></Editor>
						{decks.map((deck) => (
							<Box
								display="flex"
								flexDirection="column"
								justifyContent="center"
								textAlign="center"
							>
								<Typography className={classes.deckTitle} variant="h4">
									{deck.title}
								</Typography>
								<Deck deck={deck} />
							</Box>
						))}
					</Box>
				</Container>
			</Box>
		</div>
	);
}

export default App;
