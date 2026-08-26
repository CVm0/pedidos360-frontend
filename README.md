# Pedidos360 — Frontend

Frontend Angular de Pedidos360, en repositorio separado del backend (microservicios `orders-inventory-service` y `notifications-audit-service`).

## Login con Microsoft (Azure AD / Entra ID)

El login usa MSAL (`@azure/msal-angular` + `@azure/msal-browser`) con flujo de **redirect**:

1. `/login` — botón "Iniciar sesión con Microsoft" dispara `loginRedirect()`.
2. Azure AD autentica y redirige a `/auth/callback` (Redirect URI registrada en el App Registration).
3. `App` (root component) procesa la respuesta con `handleRedirectObservable()` y MSAL vuelve a navegar a la URL desde la que se disparó el login.
4. `/dashboard` — protegida con `MsalGuard`, muestra los pedidos.

La configuración de Azure AD (Tenant ID, Client ID, scopes) está en [src/environments/environment.ts](src/environments/environment.ts). El backend todavía no valida JWTs, así que por ahora solo se piden scopes básicos (`User.Read`); cuando `orders-inventory-service` exponga su propio scope de API, agregalo ahí y en el `protectedResourceMap` de [src/app/app.config.ts](src/app/app.config.ts).

## Requisitos

- Node.js **v22.22.3+** (Angular CLI 22 no arranca con versiones menores).
- pnpm (via `corepack enable`).

## Desarrollo

```bash
pnpm install
pnpm start
```

Abre `http://localhost:4200`.

## Build

```bash
pnpm build
```

## Tests

```bash
pnpm test
```
