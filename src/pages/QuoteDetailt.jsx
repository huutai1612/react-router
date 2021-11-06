import { Fragment } from 'react';
import { Route } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Comments from '../components/comments/Comments';

const QuoteDetail = (props) => {
	const quoteParam = useParams();

	return (
		<Fragment>
			<h1>Detail Pages</h1>
			<p>{quoteParam.quoteId}</p>
			<Route path={`/quotes/${quoteParam.quoteId}/comments`}>
				<Comments />
			</Route>
		</Fragment>
	);
};

export default QuoteDetail;
