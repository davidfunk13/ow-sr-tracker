import { combineReducers } from 'redux';
import showModal from './modalReducer';
import accountsSavedForm from './accountsSavedReducer'

const rootReducer = combineReducers({
  showModal,
  accountsSavedForm,
});

export default rootReducer;
