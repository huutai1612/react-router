import QuoteList from '../components/quotes/QuoteList';

const DUMMY_QUOTES = [
	{ id: 'q1', author: 'Tai', text: 'Learning React is very great' },
	{ id: 'q2', author: 'Anh', text: 'Learning React is very fun' },
];

const AllQuotes = (props) => {
	return <QuoteList quotes={DUMMY_QUOTES} />;
};

export default AllQuotes;
