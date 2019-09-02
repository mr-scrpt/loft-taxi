import { createAction } from 'redux-actions';

export const fetchLoggedRequest = createAction('AUTH/LOGGED_REQUEST');

export const fetchLoggedSuccess = createAction('AUTH/LOGGED_SUCCESS');

export const fetchLoggedOut = createAction('AUTH/LOGGED_SUCCESS');
