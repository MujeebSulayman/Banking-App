import { formatAmount } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const BankCard = ({ account, userName, showBalance }: CreditCardProps) => {
	return (
		<div>
			<Link
				href='/'
				className='bank-card'>
				<div className='bank-card_content'>
					<div>
						<h1 className='text-16 font-semibold text-white '>
							{userName}
						</h1>
						<p className='font-ibm-plex-serif font-black text-white'>
							{formatAmount(account.currentBalance)}
						</p>
					</div>

					<article className='flex flex-col gap-2 '>
						<div className='flex justify-between'>
							<h1 className='text-white font-semibold text-12'>{userName}</h1>
							<h2 className='text-white font-semibold text-12'> ●● / ●●</h2>
						</div>

						<p className='text-14 font-semibold tracing-[1.1px] text-white'>
							●●●● ●●●● ●●●●<span className='text-16'> 2537</span>
						</p>
					</article>
				</div>
				<div className='bank-card_icon'>
					<Image
						alt='card'
						src='/icons/paypass.svg'
						width={20}
						height={24}
					/>
					<Image
						src='/icons/mastercard.svg'
						alt='master card'
						width={45}
						height={32}
            className='ml-5'
					/>
				</div>
				<Image
					src='/icons/lines.png'
					width={316}
					height={190}
					alt='card line'
					className='absolute top-0 left-0'
				/>
			</Link>
		</div>
	);
};

export default BankCard;
