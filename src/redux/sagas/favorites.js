import api from 'services/api';

import { Types as FavoritesTypes } from 'redux/ducks/favorites';

import { call, put } from 'redux-saga/effects';

export function* searchAndAddRepository(action) {
  const response = yield call(api.get, `repos/${action.payload.repositoryName}`);

  yield put({ type: FavoritesTypes.ADD, payload: { repository: response.data } });
}
