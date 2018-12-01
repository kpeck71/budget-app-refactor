import React, { Component } from 'react';
import './App.css';
import GoalsContainer from './containers/GoalsContainer';
import ExpensesContainer from './containers/ExpensesContainer';
import BudgetContainer from './containers/BudgetContainer';
import GoalIdeas from './containers/GoalIdeas';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Status from './components/Status';
import CompletedGoals from './components/CompletedGoals';


class App extends Component {
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
                 <GoalIdeas />
               </React.Fragment>
             }/>
           <Route exact path='/status' render={routerProps => <Status {...routerProps} budget={this.props.budget} />} />
           <Route exact path='/completed' render={routerProps => <CompletedGoals {...routerProps} goals={this.props.goals.goals} />}/>
           <Route exact path='/ideas' component={GoalIdeas} />
          </React.Fragment>
        </Router>
      </div>
    );
  }
}

export default App;
