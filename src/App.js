import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Route, Switch } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import ErrorPage from './components/ErrorPage';
import HomePage from './components/HomePage';
import Err500Page from './components/Error500Page';
class App extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <Switch>
                    <Route path="/" exact component={HomePage}/>
                    <Route path="/login" component={LoginPage}/>
                    <Route path="/error" component={ErrorPage}/>
                    <Route path="/500" component={Err500Page}/>
                    <Route
                        render={() => (<ErrorPage
                            error={{
                                code: 404,
                                message: 'The page you are looking for could not be found.',
                            }}
                        />)}
                    />
                </Switch>
            </MuiThemeProvider>
        );
    }
}

export default App;
