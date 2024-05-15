'use client'

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'

const AuthForm = ({type}: {type: string} ) => {

    const [user, setUser] = useState(null)
  return (
		<section className='auth-form'>
			<header className='flex flex-col gap-5 md:gap-8'>
				<Link
					href='/'
					className='flex cursor-pointer justify-start items-center gap-1'>
					<Image
						src='/icons/logo.svg'
						width={40}
						height={40}
						alt='logo'
					/>
					<h1 className='text-20 font-ibm-plex-serif font-bold text-black-1'>
						HemBanking
					</h1>
				</Link>
                <div className='flex flex-col md:gap-3 gap-1'>
                    <h1>
                        {user ? 'Link Account' : type === 'sign-in' ? 'Sign In' : 'Sign-Up'}
                    </h1>
                </div>
			</header>
		</section>
	);
}

export default AuthForm