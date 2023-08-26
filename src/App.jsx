import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ConfigProvider } from 'antd';
import { Amplify, API, Auth } from 'aws-amplify';
import { AuthState } from '@aws-amplify/ui-components';
import awsconfig from './aws-exports';
import Router from './router/Router';
import { BrowserRouter } from 'react-router-dom';
import Authenticator from './view/components/authenticator/Authenticator';
Amplify.configure(awsconfig);
API.configure(awsconfig);

export default function App() {
	// Redux
	const dispatch = useDispatch();

	const [authState, setAuthState] = useState();

	const loggedIn = user => {
		dispatch({ type: 'SET_USER_COGNITO', data: user });
		setAuthState(AuthState.SignedIn);
	}

	useEffect(() => {
		Auth.currentAuthenticatedUser()
			.then(loggedIn)
			.catch(e => console.log(e));
	}, []);

	return (
		<ConfigProvider locale={{ locale: 'en' }}>
			<BrowserRouter>
				{authState === AuthState.SignedIn ? <Router /> : <Authenticator loggedIn={loggedIn} />}
			</BrowserRouter>
		</ConfigProvider>
	);
}