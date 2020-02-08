import { ForecastItem } from "../api-model";
import React from "react";
import { useHistory } from "react-router-dom";

const day = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

interface WeatherItemProp {
    item: ForecastItem;
}

export function WeatherItem(props: WeatherItemProp) {

    const date = new Date(1);
    date.setUTCSeconds(props.item.dt);
    const history = useHistory();
    function navigate() {
        history.push(`/day/${props.item.dt}`);
    }

    return (
        <div className="future-status__item" onClick={navigate}>
            <label className="item">{day[date.getDay()]}</label>
            <label className="item">{month[date.getMonth()]} {date.getDate()}</label>
            <label className="item">{date.getHours() + ':' + date.getMinutes()}</label>
            <img className="item ico"
                src={`https://openweathermap.org/img/wn/${props.item.weather[0].icon}@2x.png`}
                alt="weather info"></img>
            <label className="item">{props.item.weather[0].main}</label>
            <label className="item">{parseFloat((props.item.main.temp_min + props.item.main.temp_max) / 2 as any).toFixed(2)}&deg;C</label>
        </div>
    );
} 