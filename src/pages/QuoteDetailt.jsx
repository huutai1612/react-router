import { Fragment } from 'react';
import { Route } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';
import NoQuotesFound from '../components/quotes/NoQuotesFound';

const DUMMY_QUOTES = [
	{ id: 'q1', author: 'Tai', text: 'Learning React is very great' },
	{ id: 'q2', author: 'Anh', text: 'Learning React is very fun' },
];

const QuoteDetail = (props) => {
	const quoteParam = useParams();
	const quote = DUMMY_QUOTES.find((quote) => quote.id === quoteParam.quoteId);

	if (!quote) {
		return <NoQuotesFound />;
	}

	return (
		<Fragment>
			<HighlightedQuote text={quote.text} author={quote.author} />
			<Route path={`/quotes/${quoteParam.quoteId}/comments`}>
				<Comments />
			</Route>
		</Fragment>
	);
};

export default QuoteDetail;
