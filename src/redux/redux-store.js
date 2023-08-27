import { combineReducers, legacy_createStore as createStore } from 'redux'
import { projectsReducer } from './projectsReducer'
import { headerReducer } from './headerReducer'

let reducers = combineReducers({
    projectsPage: projectsReducer,
    headerPage: headerReducer
})

export let store = createStore(reducers);