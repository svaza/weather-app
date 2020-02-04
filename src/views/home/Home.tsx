import React from 'react';
import './Home.scss';

interface HomeProp {

}

interface HomeState {
    wIndex: number;
    itemIcons: string[];
}

export default class Home extends React.Component<HomeProp, HomeState> {

    _weatherIcons = ['01d', '02d', '03d', '04d', '09d', '10d', '11d', '13d', '50d'];
    _clearInterval: any;
    constructor(props: HomeProp) {
        super(props);
        this.state = {
            wIndex: 0,
            itemIcons: [
                this._weatherIcons[this.getRandomArbitrary(0, 9)],
                this._weatherIcons[this.getRandomArbitrary(0, 9)],
                this._weatherIcons[this.getRandomArbitrary(0, 9)],
                this._weatherIcons[this.getRandomArbitrary(0, 9)],
                this._weatherIcons[this.getRandomArbitrary(0, 9)]
            ]
        };
    }

    getRandomArbitrary(min: number, max: number) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    componentDidMount() {
        setInterval(() => {
            this.setState((prevState: HomeState, props: HomeProp) => {
                return { wIndex: (prevState.wIndex === this._weatherIcons.length - 1 ? 0 : prevState.wIndex + 1) };
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
                    <img className="current-status__weather-ico" src={`https://openweathermap.org/img/wn/${this._weatherIcons[this.state.wIndex]}@2x.png`} alt="weather info"></img>
                    <div className="current-status__temp-info">
                        <p className="temp">
                            26&deg;C
                        </p>
                        <p className="oth-det">
                            Overcast 27/26&deg;C
                        </p>
                    </div>
                    <div className="current-status__misc-info">
                        <div>
                            <p>Sunrise 7:30AM</p>
                            <p>Sunset 8:00PM</p>
                        </div>
                        <div className="loc">
                            <i className="material-icons">place</i> 
                            <a href="#"><p>(19.0144, 72.8479)</p></a>
                        </div>
                    </div>
                </div>

                <div className="future-status">
                    <div className="future-status__item">
                        <label className="item">Wed</label>
                        <label className="item">Feb 1</label>
                        <img className="item ico"
                            src={`https://openweathermap.org/img/wn/${this.state.itemIcons[0]}@2x.png`}
                            alt="weather info"></img>
                        <label className="item">Windy</label>
                        <label className="item">1/10&deg;C</label>
                    </div>
                    <div className="future-status__item">
                        <label className="item">Thu</label>
                        <label className="item">Feb 2</label>
                        <img className="item ico"
                            src={`https://openweathermap.org/img/wn/${this.state.itemIcons[1]}@2x.png`}
                            alt="weather info"></img>
                        <label className="item">Cloudy</label>
                        <label className="item">1/10&deg;C</label>
                    </div>
                    <div className="future-status__item">
                        <label className="item">Fri</label>
                        <label className="item">Feb 3</label>
                        <img className="item ico"
                            src={`https://openweathermap.org/img/wn/${this.state.itemIcons[2]}@2x.png`}
                            alt="weather info"></img>
                        <label className="item">Snowy</label>
                        <label className="item">1/10&deg;C</label>
                    </div>
                    <div className="future-status__item">
                        <label className="item">Sat</label>
                        <label className="item">Feb 4</label>
                        <img className="item ico"
                            src={`https://openweathermap.org/img/wn/${this.state.itemIcons[3]}@2x.png`}
                            alt="weather info"></img>
                        <label className="item">Sunny</label>
                        <label className="item">1/10&deg;C</label>
                    </div>
                    <div className="future-status__item">
                        <label className="item">Sun</label>
                        <label className="item">Feb 5</label>
                        <img className="item ico"
                            src={`https://openweathermap.org/img/wn/${this.state.itemIcons[4]}@2x.png`}
                            alt="weather info"></img>
                        <label className="item">Dizzle</label>
                        <label className="item">1/10&deg;C</label>
                    </div>
                </div>

            </div>
        );
    }

}