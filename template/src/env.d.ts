export { };

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production';

      /** Идентификатор приложения */
      REACT_APP_APP_ID: string;
      /** Эндпоинт АПИ */
      REACT_APP_API_ENDPOINT: string;
      /** Подпись пользователя для дев разработки */
      REACT_APP_SIGN: string;
      /** АПИ ключ для Амплитуды */
      REACT_APP_AMPLITUDE_API_KEY: string;
    }
  }
}
