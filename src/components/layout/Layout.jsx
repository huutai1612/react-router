import { Fragment } from 'react';
import styles from './Layout.module.css';
import MainHeader from './MainHeader';

const Layout = (props) => {
	return (
		<Fragment>
			<MainHeader />
			<main className={styles.main}>{props.children}</main>
		</Fragment>
	);
};

export default Layout;
