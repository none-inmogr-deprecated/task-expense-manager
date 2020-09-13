declare module NodeJS {
  interface Global {
    ROUTES: GlobalRoutes;
    REDIRECT_URL_ANDROID: string;
    REDIRECT_URL_IOS: string;
  }
}
