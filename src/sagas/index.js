/**
 * Created by NguyenBa on 7/28/2017.
 */
import { all, call, put, take, takeEvery, takeLatest } from 'redux-saga/effects';
import { delay, eventChannel } from 'redux-saga';
import store from 'store';

import Api from '../ultils/api';
function* getProfile() {
    try {
        const res = yield call(Api.Get, '/v1/profile');
        yield put({
            type: 'GET_PROFILE_SUCCESS',
            res,
        });
    } catch (error) {
        yield put({
            type: 'GET_PROFILE_ERROR',
            error,
        });
    }
}
/** watcher */
export default function* watcher() {
    yield takeLatest('GET_PROFILE', getProfile);
}