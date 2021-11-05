import { useParams } from 'react-router-dom';

const QuoteDetail = (props) => {
	const quoteParam = useParams();
	return <h1>Detail : {quoteParam.quoteId}</h1>;
};

export default QuoteDetail;
