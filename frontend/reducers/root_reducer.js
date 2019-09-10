import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import entities_reducer from './entities_reducer';

const rootReducer = combineReducers({
    entities: entities_reducer,
    session: sessionReducer
});

export default rootReducer;