import React from 'react';

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
        return <h1>Hello World, state = {this.state.state1}, props = {this.props.input1}</h1>;
    }

}
