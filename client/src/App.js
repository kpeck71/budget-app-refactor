import React, { Component } from 'react';
import './App.css';
import * as actions from './actions/actions';
import { connect } from 'react-redux';
import GoalsContainer from './containers/GoalsContainer';
import ExpensesContainer from './containers/ExpensesContainer';
import BudgetContainer from './containers/BudgetContainer';
import GoalIdeas from './containers/GoalIdeas';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Status from './components/Status';
import CompletedGoals from './components/CompletedGoals';

class App extends Component {

  componentDidMount() {
    actions.fetchGoals()
  }

  render() {
    return (
      <div className="App">
        <Router>
          <React.Fragment>
            <NavBar />
            <Route exact path='/' render={routerProps =>
               <React.Fragment>
                 <BudgetContainer />
                 <ExpensesContainer />
                 <GoalsContainer />
               </React.Fragment>
             }/>
           <Route exact path='/status' render={routerProps => <Status {...routerProps} budget={this.props.budget} />}  />
           <Route exact path='/ideas' component={GoalIdeas} />
          </React.Fragment>
        </Router>
      </div>
    );
  }
}
const mapStateToProps = state => { return {goals: state.goals, budget: state.budget} }

export default connect(mapStateToProps)(App);
