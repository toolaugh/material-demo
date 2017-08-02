/**
 * Created by NguyenBa on 7/28/2017.
 */
const configs = {
    API_BASE_URL: '/api',
    WS_BASE_URL: 'wss://adx.appota.com/api',
    BASE_URL: '/adx',
    APPOTA_CLIENT_ID: 'e594378a091f1c7c33794e7441b4b3a005874b7a4',
};

if (process.env.NODE_ENV === 'development') {
    // configs.API_BASE_URL = 'http://localhost:9090'; // used proxy config on package.json instead of this
    configs.WS_BASE_URL = 'ws://localhost:9090';
    configs.API_BASE_URL = 'http://adx-staging.appota.com/api';
    configs.WS_BASE_URL = 'ws://adx-staging.appota.com/api';
}

if (window.location.host === 'adx-staging.appota.com') {
    configs.WS_BASE_URL = 'ws://adx-staging.appota.com/api';
}

export default configs;
