import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/Index'



const middleware = [thunk];




const stateInitial = {};



//Store(Contiene el state de la aplicación) y Create Store
const store = createStore(rootReducer, stateInitial, compose(applyMiddleware(...middleware)
));


export default store;