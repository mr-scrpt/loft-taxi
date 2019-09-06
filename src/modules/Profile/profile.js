import {handleActions} from 'redux-actions';
import {profileDataSet} from './actions';
import {createSelector} from 'reselect';
import {combineReducers} from "redux";

const profileData = handleActions({
  [profileDataSet]: (_state, action) => action.payload
}, null);

export default combineReducers({
  profileData
});

export const getProfileData = createSelector(
  state => state.profile.profileData,
  profileData => profileData
);