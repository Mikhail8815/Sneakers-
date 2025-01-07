import {combineReducers, createStore} from "redux";
import {todolistsReducer} from "../model/torolists-reducer";
import {tasksReducer} from "../model/tasks-reducer";

const rootReducers = combineReducers({
    todolists : todolistsReducer,
    tasks: tasksReducer
})

export type AppRootState = ReturnType<typeof rootReducers>

export const store = createStore(rootReducers)

// @ts-ignore
window.store = store