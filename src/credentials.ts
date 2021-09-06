enum AuthCred {
	REGION = 'us-east-1',
	DOMAIN = 'simage.auth.us-east-1.amazoncognito.com',
	RESPONSETYPE = 'token',
	FEDERATIONTARGET = 'COGNITO_USER_POOLS'
}

type ScopeType = 'email' | 'openid' | 'profile' | 'aws.cognito.signin.user.admin' | 'phone';

const scope: ScopeType[] = ['openid', 'profile', 'email'];

export const authConfig = {
	aws_project_region: AuthCred.REGION,
	aws_cognito_region: AuthCred.REGION,
	aws_cognito_identity_pool_id: import.meta.env.VITE_AWS_COGNITO_IDENTITY_POOL_ID,
	aws_user_pools_id: import.meta.env.VITE_AWS_USER_POOLS_ID,
	aws_user_pools_web_client_id: import.meta.env.VITE_AWS_USER_POOLS_WEB_CLIENT_ID,
	oauth: {
		domain: AuthCred.DOMAIN,
		scope,
		redirectSignIn: 'http://localhost:4200/',
		redirectSignOut: 'http://localhost:4200/login/',
		responseType: AuthCred.RESPONSETYPE
	},
	federationTarget: AuthCred.FEDERATIONTARGET
};

export const storageConfig = {
	bucket: import.meta.env.VITE_AWS_S3_BUCKET,
	region: AuthCred.REGION
};
