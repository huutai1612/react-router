import { useEffect, useRef } from 'react';
import { addComment } from '../../lib/api';
import useHttp from '../../hooks/use-http';
import { useHistory } from 'react-router-dom';

import classes from './NewCommentForm.module.css';
import LoadingSpinner from '../UI/LoadingSpinner';

const isNotEmpty = (data) => data.length >= 10;

const NewCommentForm = ({ quoteId }) => {
	const commentTextRef = useRef();
	const history = useHistory();
	const { sendRequest, status, error } = useHttp(addComment);

	useEffect(() => {
		if (status === 'completed') {
			history.push(`/quotes/${quoteId}`);
		}
	}, [status, history, quoteId]);

	const submitFormHandler = (event) => {
		event.preventDefault();

		const commentData = commentTextRef.current.value;

		// optional: Could validate here
		if (!isNotEmpty(commentData)) {
			alert(`Comment must be at least 10 characters long`);
			return;
		}
		// send comment to server
		sendRequest({ quoteId, commentData });
	};

	if (error) {
		return <p className='centered focused'>{error}</p>;
	}

	if (status === 'pending') {
		return (
			<div className='centered'>
				<LoadingSpinner />
			</div>
		);
	}

	return (
		<form className={classes.form} onSubmit={submitFormHandler}>
			<div className={classes.control} onSubmit={submitFormHandler}>
				<label htmlFor='comment'>Your Comment</label>
				<textarea id='comment' rows='5' ref={commentTextRef}></textarea>
			</div>
			<div className={classes.actions}>
				<button className='btn'>Add Comment</button>
			</div>
		</form>
	);
};

export default NewCommentForm;
