import HeaderBox from '@/components/HeaderBox';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import React from 'react';

const Home = () => {
	const loggedIn = { firstName: 'Mujeeb' };

	return (
		<section className='home'>
			<div className='home-content'>
				<header className='home-header'>
					<HeaderBox
						type='greeting'
						title='Welcome'
						user={loggedIn?.firstName || 'Guest'}
						subtext='Access and Manage your account transcations'
					/>

					<TotalBalanceBox
						accounts={[]}
						totalBanks={1}
						totalCurrentBalance={2500.10}
					/>
				</header>
			</div>
		</section>
	);
};

export default Home;
