import { Fragment } from 'react';
import { Route } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import NewCommentForm from '../components/comments/NewCommentForm';

const QuoteDetail = (props) => {
	const quoteParam = useParams();

	return (
		<Fragment>
			<h1>Detail : {quoteParam.quoteId}</h1>
			<Route path='/quotes/:quotesId/comments'>
				<NewCommentForm />
			</Route>
		</Fragment>
	);
};

export default QuoteDetail;
