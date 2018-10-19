import {FETCH_WEATHER} from '../actions/index'


export default function (state = [], action) {
    switch (action.type) {
        case FETCH_WEATHER:
            /*
             =========================
             @ES6 syntax: The following piece of code is in ES6 syntax.
             It means, take the data from `action.payload` and append
             it in the front position of the state array. The `...` means
             take everything that are currently in the state array.

             This way we are not doing, state.push(action.payload.data).
             Because we should not mutate state. Reducers mess up if state is
             mutated.

             If I did not want to use the ES6 syntax, I could've written
             `state.concat(action.payload.data)`

             This won't mutate the state as it is just concatenating the state
             but it will store the data in the rear of the state array
             =========================
            */
            return [action.payload.data, ...state]
    }

    return state
}