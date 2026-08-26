export const environment = {
  production: false,
  msalConfig: {
    auth: {
      clientId: '89fde275-566d-498a-a663-bbed17a2a29d',
      authority: 'https://login.microsoftonline.com/c450c5ae-3cee-44d6-b081-b1d7b50eaf5d',
    },
  },
  // Redirect URIs are resolved relative to the app's origin (window.location.origin),
  // and must match exactly what's registered in Azure AD (App registration > Authentication).
  redirectUri: '/auth/callback',
  postLogoutRedirectUri: '/login',
  // No backend API scope is configured yet: orders-inventory-service doesn't validate
  // JWTs yet. Once it does, add its exposed scope here (e.g. 'api://<client-id>/Orders.Read')
  // and map it in app.config.ts's protectedResourceMap so MsalInterceptor attaches the token.
  apiConfig: {
    uri: 'https://graph.microsoft.com/v1.0/me',
    scopes: ['User.Read'],
  },
};
