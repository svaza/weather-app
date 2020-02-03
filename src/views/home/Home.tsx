import React from 'react';
import Button from '@material-ui/core/Button';
import './Home.scss';

interface HomeProp {

}

interface HomeState {
    wIndex: number;
}

export default class Home extends React.Component<HomeProp, HomeState> {

    _weatherClasses = ['wi-day-sleet-storm', 'wi-night-clear', 'wi-night-alt-hail', 'wi-lunar-eclipse', 'wi-windy'];
    _clearInterval: any;
    constructor(props: HomeProp) {
        super(props);
        this.state = {
            wIndex: 0
        };
    }

    componentDidMount() {
        setInterval(() => {
            this.setState((prevState: HomeState, props: HomeProp) => {
                return { wIndex: (prevState.wIndex === this._weatherClasses.length-1 ? 0 : prevState.wIndex + 1) };
            });
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this._clearInterval);
    }

    render() {
        return (
            <div className="home-container">
                <div className="current-status">
                    <i className={'wi ' + this._weatherClasses[this.state.wIndex] + ' current-status__weather-ico'}></i>
                    <div className="current-status__temp-info">
                        <p className="temp">
                            26&deg;C
                        </p>
                        <p className="oth-det">
                            Overcast 27/26&deg;C
                        </p>
                    </div>
                </div>

            </div>
        );
    }

}