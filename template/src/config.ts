export default {
  appId: Number(process.env.REACT_APP_APP_ID) || 0,
  apiEndpoint: process.env.REACT_APP_API_ENDPOINT,
  sign: process.env.REACT_APP_SIGN,
  amplitudeApiKey: process.env.REACT_APP_AMPLITUDE_API_KEY,
};
