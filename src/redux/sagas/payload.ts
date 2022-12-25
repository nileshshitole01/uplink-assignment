import { put, takeEvery, call } from 'redux-saga/effects';
import { PAYLOAD_API_REQUEST, PAYLOAD_API_SUCCESS, PAYLOAD_API_FAILURE, PayloadState } from '../slices/payloadSlice';
import { fetchPayloadApi } from '../../api';

export function* fetchPaylaods(action: any) {
    try {
        const res: PayloadState = yield call(fetchPayloadApi);
        yield put(PAYLOAD_API_SUCCESS(res));
    } catch (error) {
        yield put(PAYLOAD_API_FAILURE(error));
    }
}

export function* watchPayloads() {
    yield takeEvery(PAYLOAD_API_REQUEST, fetchPaylaods)
}