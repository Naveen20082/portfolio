import Reducer from "./Reducers/Index";

import { createStoreHook } from "react-redux";


const store = createStoreHook(Reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store