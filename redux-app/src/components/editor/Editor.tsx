import {
	Box,
	Button,
	makeStyles,
	TextField,
	Typography,
} from '@material-ui/core';
import React, { ChangeEventHandler, useState } from 'react';
import { useDispatch } from 'react-redux';
import { ulid } from 'ulid';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { addFlashcard } from '../../model/flashcard/flashcardSlice';
import { ICard, EditCardPayload } from '../../model/flashcard/types';

const useStyles = makeStyles((theme) => ({
	root: {
		backgroundColor: theme.palette.background.default,
		// maxWidth: '80vw',
		// minHeight: '15rem',
		boxShadow: '0px 0px 10px grey',
		borderRadius: 10,
		padding: 10,
		display: 'flex',
		// flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	items: {
		padding: 10,
	},
}));
interface Props {}
const Editor = (props: Props) => {
	const dispatch = useAppDispatch();
	const defaultDeck = useAppSelector((state) => state.flashcard.decks[0]);

	const classes = useStyles();
	const FRONT_TEXT = 'frontText';
	const BACK_TEXT = 'backText';
	const [frontText, setFrontText] = useState('');
	const [backText, setBackText] = useState('');
	const handleFormChange: React.ChangeEventHandler<
		HTMLTextAreaElement | HTMLInputElement
	> = (e) => {
		const target = e.currentTarget;
		switch (target.name) {
			case FRONT_TEXT:
				setFrontText(target.value);
				break;
			case BACK_TEXT:
				setBackText(target.value);
				break;
			default:
				break;
		}
	};
	const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		dispatch(
			addFlashcard({
				card: { frontText, backText, id: ulid() },
				deckTitle: defaultDeck.title,
			})
		);
	};
	return (
		<div>
			<Box>
				<form
					className={classes.root}
					noValidate
					autoComplete="off"
					onSubmit={handleFormSubmit}
				>
					<TextField
						className={classes.items}
						variant="outlined"
						label="Front Text"
						type="text"
						name={FRONT_TEXT}
						value={frontText}
						onChange={handleFormChange}
					/>
					<TextField
						className={classes.items}
						variant="outlined"
						label="Back Text"
						type="text"
						name={BACK_TEXT}
						value={backText}
						onChange={handleFormChange}
					/>
					<Button
						className={classes.items}
						variant="contained"
						type="submit"
						value="Submit"
					>
						Create
					</Button>
				</form>
			</Box>
		</div>
	);
};
export default Editor;
