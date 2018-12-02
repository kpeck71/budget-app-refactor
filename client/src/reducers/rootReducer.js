import { combineReducers } from 'redux';
import BudgetReducer from './budgetReducer'
import GoalReducer from './goalReducer'

const rootReducer = combineReducers({
  budget: BudgetReducer,
  goals: GoalReducer
})

export default rootReducer
