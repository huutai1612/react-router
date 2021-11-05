import { Route, Switch, Redirect } from 'react-router-dom';
import MainHeader from './components/layout/MainHeader';
import AllQuotes from './pages/AllQuotes';
import NewQuote from './pages/NewQuotes';
import QuoteDetail from './pages/QuoteDetailt';

function App() {
	return (
		<div>
			<MainHeader />
			<Switch>
				<Route path='/' exact>
					<Redirect to='/quotes' />
				</Route>
				<Route path='/quotes' exact>
					<AllQuotes />
				</Route>
				<Route path='/quotes/:quoteId'>
					<QuoteDetail />
				</Route>
				<Route path='/new-quote'>
					<NewQuote />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
