import React from 'react';
import { BrowserRouter as Router,Route, Switch, Redirect } from 'react-router-dom';
import Footer from '../components/footer/Footer';
import MainScreen from '../components/MainScreen';
import ProblemA from '../components/ProblemA';
import ProblemB from '../components/ProblemB';
import ProblemC from '../components/ProblemC';
import NavBar from '../components/navbar/NavBar';

const AppRouter = () => {

    return (
        <>
            <Router>
                <NavBar/>
                <div>
                    <Switch>
                        <Route exact path='/problem-1' component={ ProblemA } />
                        <Route exact path='/problem-2' component={ ProblemB } />
                        <Route exact path='/problem-3' component={ ProblemC } />
                        <Route exact path='/' component={ MainScreen } />
                        <Redirect to='/' />
                    </Switch>
                </div>
                <Footer/>
            </Router>
        </>
    )
}

export default AppRouter;