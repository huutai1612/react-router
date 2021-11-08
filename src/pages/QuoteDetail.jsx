import { Fragment, useEffect } from 'react';
import { useParams, Route, Link, useRouteMatch } from 'react-router-dom';
import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';
import NoQuotesFound from '../components/quotes/NoQuotesFound';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import useHttp from '../hooks/use-http';
import { getSingleQuote } from '../lib/api';

const QuoteDetail = (props) => {
	const {
		sendRequest,
		data: loadedQuote,
		status,
		error,
	} = useHttp(getSingleQuote, true);
	const { quoteId } = useParams();
	const routeMatch = useRouteMatch();

	useEffect(() => {
		sendRequest(quoteId);
	}, [sendRequest, quoteId]);

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

	if (!loadedQuote) {
		return (
			<div className='centered'>
				<NoQuotesFound />
			</div>
		);
	}

	return (
		<Fragment>
			<HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
			<Route path={`${routeMatch.path}`} exact>
				<div className='centered'>
					<Link className='btn--flat ' to={`${routeMatch.url}/comments`}>
						Load Comments
					</Link>
				</div>
			</Route>
			<Route path={`${routeMatch.path}/comments`}>
				<Comments quoteId={quoteId} />
			</Route>
		</Fragment>
	);
};

export default QuoteDetail;
