import { combineReducers } from 'redux'

import {
  SET_GOAL_FILTER,
  GoalFilters,
  SET_CATEGORY_FILTER,
  CategoryFilters,
} from '../actions/actions'

function allFilters(state = { goalFilter: GoalFilters.SHOW_ALL, categoryFilter: CategoryFilters.SHOW_ALL}, action) {

  switch (action.type) {
    case SET_GOAL_FILTER:
      return Object.assign({}, state, {
        goalFilter: action.filter
      })

    case SET_CATEGORY_FILTER:
      return Object.assign({}, state, {
        categoryFilter: action.filter
      })

  default:
    return state
  }
}

function goals(state = {goals: []}, action) {
  
    return state
}

const goalReducer = combineReducers({
  allFilters,
  goals
})

export default goalReducer
