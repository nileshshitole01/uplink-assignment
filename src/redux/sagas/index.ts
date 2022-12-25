import { all } from "redux-saga/effects";
import { watchHistory } from "./history";
import { watchPayloads } from "./payload";

export default function* rootSagas() {
    yield all([
        watchHistory(),
        watchPayloads()
    ]);
}