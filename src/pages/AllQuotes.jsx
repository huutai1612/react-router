import QuoteList from '../components/quotes/QuoteList';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import NoQuotesFound from '../components/quotes/NoQuotesFound';
import { getAllQuotes } from '../lib/api';
import useHttp from '../hooks/use-http';
import { useEffect } from 'react';

const AllQuotes = (props) => {
	const {
		sendRequest,
		data: loadedQuotes,
		status,
		error,
	} = useHttp(getAllQuotes, true);

	useEffect(() => {
		sendRequest();
	}, [sendRequest]);

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

	if (status === 'completed' && !loadedQuotes && loadedQuotes.length === 0) {
		return (
			<div className='centered'>
				<NoQuotesFound />
			</div>
		);
	}

	return <QuoteList quotes={loadedQuotes} />;
};

export default AllQuotes;
