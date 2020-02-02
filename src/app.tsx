import React from 'react';
import Home from './views/home/Home';

interface AppProps {
    input1: string;
}

interface AppState {
    state1: number;
}

export class App extends React.Component<AppProps, AppState> {

    constructor(props: AppProps) {
        super(props);
        this.state = {
            state1: 123
        };
    }

    render() {
        return (
            <div>
                <Home></Home>
                <h1>Hello World, state = {this.state.state1}, props = {this.props.input1}</h1>
            </div>
        );
    }

}
