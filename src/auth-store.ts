import { writable } from 'svelte/store';
import { authConfig, storageConfig } from './credentials';
import { Auth, CognitoHostedUIIdentityProvider } from '@aws-amplify/auth';
import { Hub } from '@aws-amplify/core';
import { Storage } from '@aws-amplify/storage';
import type { ICredentials } from '@aws-amplify/core';

Auth.configure(authConfig);
Storage.configure(storageConfig);

export const user = writable(null);
export const images = writable([]);

export const login: () => Promise<ICredentials> = () =>
	Auth.federatedSignIn({ provider: CognitoHostedUIIdentityProvider.Google });

export const logout = (): Promise<any> => Auth.signOut();

Auth.currentAuthenticatedUser()
	.then((authUser) => {
		if (authUser) {
			user.set(authUser);
			Storage.list('images/')
				.then((listedImages) => images.set(listedImages))
				.catch((err) => console.error(err));
		}
	})
	.catch((err) => {
		console.log(err);
	});

Hub.listen('auth', async ({ payload: { event } }) => {
	if (event === 'signIn') {
		const authUser = await Auth.currentAuthenticatedUser();
		user.set(authUser);
	}
});
