import React, { useEffect } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../utils/fireBase';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { onAuthStateChanged } from 'firebase/auth';
import { LOGO } from '../utils/constants';
import { toggleGptSearchView } from '../utils/gptSlice';

const Header = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const user = useSelector((state) => state.user);
	const handleSignOut = () => {
		signOut(auth)
			.then(() => {
				// Sign-out successful.
			})
			.catch((error) => {
				navigate('/error');
				// An error happened.
			});
	};

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				const { uid, email, displayName, photoURL } = user;
				dispatch(
					addUser({
						uid: uid,
						email: email,
						displayName: displayName,
						photoURL: photoURL,
					})
				);
				navigate('/browse');
			} else {
				dispatch(removeUser());
				navigate('/');
			}
		});

		return () => unsubscribe();
	}, []);

	const handelGptSearchClick = () => {
		dispatch(toggleGptSearchView());
	};

	return (
		<div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
			<img className="w-44" src={LOGO} alt="logo" />
			{user && (
				<div className="flex p-2">
					<button
						className="py-2 px-4 mx-4 my-2 bg-purple-800 rounded-lg text-white"
						onClick={handelGptSearchClick}
					>
						GPT Search
					</button>
					<img
						className="w-12 h-12"
						alt="usericon"
						// src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
						src={user?.photoURL}
					/>
					<button className="font-bold text-white" onClick={handleSignOut}>
						(Sign Out)
					</button>
				</div>
			)}
		</div>
	);
};

export default Header;
