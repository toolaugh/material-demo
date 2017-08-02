import queryString from 'query-string';
import store from 'store';

import configs from '../configs';

let token = store.get('token');

function request(method, path, params, headers, options = {}) {
    let url = `${configs.API_BASE_URL}${path}`;
    const opts = {
        method,
        headers,
    };

    if (options.token || token) {
        opts.headers = { ...opts.headers, Authorization: `Bearer ${options.token || token}` };
    }

    if (typeof params === 'object' && Object.keys(params).length > 0) {
        if (method === 'GET' || method === 'DELETE') {
            const query = queryString.stringify(params);
            if (query) {
                url += `?${query}`;
            }
        } else {
            opts.headers = { ...opts.headers, 'Content-Type': 'application/json' };
            opts.body = JSON.stringify(params);
        }
    }

    return fetch(url, opts).then((response) => {
        if (response.ok) {
            return response.json();
        }

        return response.json().then(json => Promise.reject(json));
    }).catch((e) => {
        const ex = e instanceof Error ? {
            code: 999,
            message: 'Something went wrong!',
            error: e.message,
        } : e;

        throw ex;
    });
}

export default {
    SetToken(t) {
        token = t;
    },
    Get(path, params, options = {}) {
        return request('GET', path, params, {}, options);
    },
    Post(path, params, options = {}) {
        return request('POST', path, params, {}, options);
    },
    Put(path, params, options = {}) {
        return request('PUT', path, params, {}, options);
    },
    Patch(path, params, options = {}) {
        return request('PATCH', path, params, {}, options);
    },
    Delete(path, params, options = {}) {
        return request('DELETE', path, params, {}, options);
    },
    Websocket(path, params) {
        let url = `${configs.WS_BASE_URL}${path}`;
        const query = queryString.stringify(params);
        if (query) {
            url += `?${query}`;
        }
        return new WebSocket(url);
    },
};
