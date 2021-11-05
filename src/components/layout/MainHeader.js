import { Link } from 'react-router-dom';
import styles from './MainNavigation.module.css';

const MainHeader = (props) => {
	return (
		<nav className={styles.nav}>
			<section className={styles.header}>
				<div>
					<h2 className={styles.logo}>Great Quotes</h2>
				</div>
				<ul>
					<li>
						<Link to='/quotes'> All Quotes</Link>
					</li>
					<li>
						<Link to='/new-quote'> Add a Quotes</Link>
					</li>
				</ul>
			</section>
		</nav>
	);
};

export default MainHeader;
