import HeaderBox from '@/components/HeaderBox';
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import React from 'react';

const Home = () => {
	const loggedIn = { firstName: 'Mujeeb', lastName: 'Sulayman', email: 'Sulaymanmujeeb6@gmail.com' };

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
						totalCurrentBalance={2720510.0}
					/>
				</header>
				RECENT TRANSACTIONS
			</div>

			<RightSidebar
				user={loggedIn}
				transcations={[]}
				banks={[{ currentBalance: 243595 }, { currentBalance: 24595 }]}
			/>
		</section>
	);
};

export default Home;
