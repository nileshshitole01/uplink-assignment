import { put, takeEvery, call } from 'redux-saga/effects';
import { HISTORY_REQUEST, HISTORY_SUCCESS, HISTORY_FAILURE, HistoryState } from '../slices/historySlice';
import { fetchHistoryApi } from '../../api';

export function* fetchHistory(action: any) {
    try {
        const res: HistoryState = yield call(fetchHistoryApi);
        yield put(HISTORY_SUCCESS(res));
    } catch (error) {
        yield put(HISTORY_FAILURE(error));
    }
}

export function* watchHistory() {
    yield takeEvery(HISTORY_REQUEST, fetchHistory)
}