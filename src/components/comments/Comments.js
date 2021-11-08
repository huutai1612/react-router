import { Fragment, useEffect, useState } from 'react';
import useHttp from '../../hooks/use-http';
import { getAllComments } from '../../lib/api';
import LoadingSpinner from '../UI/LoadingSpinner';

import classes from './Comments.module.css';
import NewCommentForm from './NewCommentForm';

const transformData = (data) => {
	let result = [];

	for (let key in data) {
		result.push(data[key]);
	}

	return result;
};

const Comments = ({ quoteId }) => {
	const [isAddingComment, setIsAddingComment] = useState(false);
	const { sendRequest, data, error, status } = useHttp(getAllComments, true);

	useEffect(() => sendRequest(quoteId), [sendRequest, quoteId]);

	const dataTransformed = transformData(data);

	if (status === 'pending') {
		return (
			<div className='centered'>
				<LoadingSpinner />
			</div>
		);
	}

	if (error) {
		return <p className='centered focused'>{error}</p>;
	}

	if (status === 'completed' && dataTransformed.length === 0) {
		return (
			<Fragment>
				<p className='centered focused'>Not found any comments</p>
				<NewCommentForm quoteId={quoteId} />
			</Fragment>
		);
	}

	const commentList = dataTransformed.map((comment, index) => (
		<p key={index}>{comment}</p>
	));

	const startAddCommentHandler = () => {
		setIsAddingComment(true);
	};

	return (
		<section className={classes.comments}>
			<h2>User Comments</h2>
			{!isAddingComment && (
				<button className='btn' onClick={startAddCommentHandler}>
					Add a Comment
				</button>
			)}
			{isAddingComment && <NewCommentForm quoteId={quoteId} />}
			<div className={classes.list}>{commentList}</div>
		</section>
	);
};

export default Comments;
