import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import QuoteForm from '../components/quotes/QuoteForm';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import useHttp from '../hooks/use-http';
import { addQuote } from '../lib/api';

const NewQuote = (props) => {
	const history = useHistory();
	const { sendRequest, status } = useHttp(addQuote);

	useEffect(() => {
		if (status === 'completed') {
			history.push('/quotes');
		}
	}, [status, history]);

	const addQuoteHandler = (quoteData) => {
		sendRequest(quoteData);

		history.push('/quotes');
	};

	if (status === 'pending') {
		return (
			<div className='centered'>
				<LoadingSpinner />
			</div>
		);
	}

	return <QuoteForm onAddQuote={addQuoteHandler} />;
};

export default NewQuote;
