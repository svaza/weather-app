import React from 'react';
import './App.scss';
import Home from './views/home/Home';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import IconButton from '@material-ui/core/IconButton';

interface AppProps {
    input1: string;
}

interface AppState {
    state1: number;
}

export default class App extends React.Component<AppProps, AppState> {

    constructor(props: AppProps) {
        super(props);
        this.state = {
            state1: 123
        };
    }

    render() {

        const appHeader: JSX.Element = (
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <i className="material-icons">menu</i>
                    </IconButton>
                    <h1 className="root-container__app-title">Mumbai, India</h1>
                    <div>
                        <RadioGroup aria-label="position" name="position" row value="m">
                            <FormControlLabel
                                value="m"
                                control={<Radio />}
                                label="Metric"
                                labelPlacement="start"
                            />
                            <FormControlLabel
                                value="i"
                                control={<Radio />}
                                label="Imperial"
                                labelPlacement="start"
                            />
                        </RadioGroup>
                    </div>
                </Toolbar>
            </AppBar>
        );

        return (
            <div className="root-container">
                {appHeader}
                <div>
                    <Home></Home>
                </div>
            </div>

        );
    }

}