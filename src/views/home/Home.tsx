import React from 'react';
import './Home.scss';
import CurrentWeather from './CurrentWeather';

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

    render() {
        const currentWeather: any = {};
        return (
            <div className="home-container">
                <CurrentWeather current={currentWeather}></CurrentWeather>

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