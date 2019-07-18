import { put, takeLatest, all, call } from 'redux-saga/effects'
import axios from 'axios'

function getContacts() {
  return axios({
    method: 'get',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    url: `contacts.json`
  })
}

function* workerSaga() {
  try {
    const response = yield call(getContacts)
    const collection = response.data.collection

    yield put({ type: 'CONTACTS_SUCCESS', collection })
  } catch (error) {
    yield put({ type: 'CONTACTS_ERROR', error })
  }
}
function* actionWatcher() {
  yield takeLatest('GET_CONTACTS', workerSaga)
}
export default function* rootSaga() {
  yield all([actionWatcher()])
}
