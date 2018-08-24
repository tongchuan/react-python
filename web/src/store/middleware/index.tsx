import { applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import { logger } from './loggerMiddleware'
const middleware =  compose(applyMiddleware(thunk,logger))
export default middleware;