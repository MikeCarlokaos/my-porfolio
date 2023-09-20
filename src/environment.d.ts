export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      REACT_APP_SERVICE_ID: srting;
      REACT_APP_TEMPLATE_ID: string;
      REACT_APP_PUBLIC_KEY: string;
    }
  }
}
