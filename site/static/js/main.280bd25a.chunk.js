(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{60:function(e,t,a){e.exports=a(76)},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){"use strict";a.r(t);var r=a(10),n=a.n(r),c=a(0),o=a.n(c),s=a(16),i=(a(65),a(66),a(18)),l=a(13),u=a(48),m=a(49),p=a(52),h=(a(67),a(114)),d={appid:"adb9dd6b20cadd87d12b7df253187477",forecastPivotHour:8,api:{currentWeatherDataByCityUrl:"https://api.openweathermap.org/data/2.5/weather?q={location}&appid={appid}&units=metric",currentWeatherDataByCoordUrl:"https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={appid}&units=metric",currentWeatherForecastDataByCoordUrl:"https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=adb9dd6b20cadd87d12b7df253187477&units=metric"}},f=function(){function e(){Object(i.a)(this,e)}return Object(l.a)(e,null,[{key:"getDistinctForecastItems",value:function(t,a){var r=new Map,n=new Date(1);return n.setUTCSeconds(t.dt),a.list.forEach((function(t,a){var c=new Date(1);c.setUTCSeconds(t.dt),e.isSameDay(n,c)||r.has(c.getDate())||c.getHours()===d.forecastPivotHour&&r.set(c.getDate(),t)})),r}},{key:"filterForecastItems",value:function(t,a){var r=[],n=new Date(1);return n.setUTCSeconds(t),a.forEach((function(t){var a=new Date(1);a.setUTCSeconds(t.dt),e.isSameDay(n,a)&&r.push(t)})),r}},{key:"forecastItemToCurrentWeatherModel",value:function(e,t){var a={};return a.clouds=e.clouds,a.coord=t.coord,a.dt=e.dt,a.main=e.main,a.name=t.name,a.sys={country:t.sys.country},a.weather=e.weather,a.wind=e.wind,JSON.parse(JSON.stringify(a))}},{key:"isSameDay",value:function(e,t){return e.getDate()===t.getDate()&&e.getMonth()===t.getMonth()&&e.getFullYear()===t.getUTCFullYear()}}]),e}(),b=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=null;this.props.current.sys.sunrise&&(e=new Date(1)).setUTCSeconds(this.props.current.sys.sunrise);var t=null;this.props.current.sys.sunset&&(t=new Date(1)).setUTCSeconds(this.props.current.sys.sunset);var a=new Date(1);a.setUTCSeconds(this.props.current.dt);var r=f.isSameDay(a,new Date);return o.a.createElement("div",{className:"current-weather-cont"},o.a.createElement("div",{className:"title"},o.a.createElement(h.a,{variant:"outlined",color:"primary",label:(r?"Today ":"")+a.toDateString()+" "+a.toLocaleTimeString()})),o.a.createElement("img",{className:"weather-ico",src:"https://openweathermap.org/img/wn/".concat(this.props.current.weather[0].icon,"@2x.png"),alt:"weather info"}),o.a.createElement("div",{className:"temp-info"},o.a.createElement("p",{className:"temp bold"},this.props.current.main.temp,"\xb0C",o.a.createElement("span",{className:"feels_like"},"feels like ",this.props.current.main.feels_like,"\xb0C")),o.a.createElement("p",{className:"sep"},"|"),o.a.createElement("p",{className:"oth-det"},o.a.createElement("span",{className:"bold"},this.props.current.weather[0].main)),o.a.createElement("p",{className:"sep"},"|"),o.a.createElement("p",{className:"oth-det"}," ",this.props.current.main.temp_min,"/",this.props.current.main.temp_max,"\xb0C")),o.a.createElement("p",{className:"misc-info misc-info--sep"},"Pressure ",this.props.current.main.pressure," hPa ",o.a.createElement("span",{className:"gap"})," Humidity ",this.props.current.main.humidity,"%"),o.a.createElement("p",{className:"misc-info"},"Wind speed ",this.props.current.wind.speed," mtr/sec ",o.a.createElement("span",{className:"gap"})," Wind direction ",this.props.current.wind.deg,"\xb0(meteorological)"),e&&t?o.a.createElement("p",{className:"misc-info"},"Sunrise ",e.getHours()+":"+e.getMinutes()," ",o.a.createElement("span",{className:"gap"})," Sunset ",t.getHours()+":"+t.getMinutes()):"",o.a.createElement("p",{className:"loc misc-info"},o.a.createElement("i",{className:"material-icons"},"place"),o.a.createElement("span",null,"(",this.props.current.coord.lat,", ",this.props.current.coord.lon,")")))}}]),t}(o.a.Component),E=a(23),g=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],v=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function w(e){var t=new Date(1);t.setUTCSeconds(e.item.dt);var a=Object(E.f)();return o.a.createElement("div",{className:"future-status__item",onClick:function(){a.push("/day/".concat(e.item.dt))}},o.a.createElement("label",{className:"item"},g[t.getDay()]),o.a.createElement("label",{className:"item"},v[t.getMonth()]," ",t.getDate()),o.a.createElement("label",{className:"item"},t.getHours()+":"+t.getMinutes()),o.a.createElement("img",{className:"item ico",src:"https://openweathermap.org/img/wn/".concat(e.item.weather[0].icon,"@2x.png"),alt:"weather info"}),o.a.createElement("label",{className:"item"},e.item.weather[0].main),o.a.createElement("label",{className:"item"},parseFloat((e.item.main.temp_min+e.item.main.temp_max)/2).toFixed(2),"\xb0C"))}function y(e){if(!e.currentWeather)return null;var t=[];return e.forecast&&f.getDistinctForecastItems(e.currentWeather,e.forecast).forEach((function(e){t.push(o.a.createElement(w,{item:e,key:e.dt}))})),o.a.createElement("div",{className:"home-container"},o.a.createElement(b,{current:e.currentWeather}),o.a.createElement("div",{className:"future-status"},t))}var D=a(106),O=a(107),j=a(112),S=a(113),N=a(109),k=a(108),W=a(31),C=a.n(W),x=a(39),F=function(){function e(t){Object(i.a)(this,e),this.appDataStore=t}return Object(l.a)(e,[{key:"getCurrentForecastWeatherData",value:function(){var e=Object(x.a)(C.a.mark((function e(t){var a,r,n;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.appDataStore.currentForecastWeather){e.next=2;break}return e.abrupt("return",this.appDataStore.currentForecastWeather);case 2:if(a="",!t.lat||!t.lon){e.next=7;break}a=d.api.currentWeatherForecastDataByCoordUrl.replace("{lat}",t.lat.toString()).replace("{lon}",t.lon.toString()),e.next=8;break;case 7:throw new Error("Location not defined");case 8:return a=a.replace("{appid}",d.appid),e.next=11,fetch(a);case 11:if(!(r=e.sent).ok){e.next=21;break}return e.next=15,r.json();case 15:return n=e.sent,this.appDataStore.currentForecastWeather=n,this.appDataStore.currentForecastWeather$.next(n),e.abrupt("return",n);case 21:throw new Error("error while invoking current weather data");case 22:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getCurrentWeatherData",value:function(){var e=Object(x.a)(C.a.mark((function e(t){var a,r,n;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.appDataStore.currentWeather){e.next=2;break}return e.abrupt("return",this.appDataStore.currentWeather);case 2:if(a="",!t.city){e.next=7;break}a=d.api.currentWeatherDataByCityUrl.replace("{location}",t.city),e.next=12;break;case 7:if(!t.lat||!t.lon){e.next=11;break}a=d.api.currentWeatherDataByCoordUrl.replace("{lat}",t.lat.toString()).replace("{lon}",t.lon.toString()),e.next=12;break;case 11:throw new Error("Location not defined");case 12:return a=a.replace("{appid}",d.appid),e.next=15,fetch(a);case 15:if(!(r=e.sent).ok){e.next=25;break}return e.next=19,r.json();case 19:return n=e.sent,this.appDataStore.currentWeather=n,this.appDataStore.currentWeather$.next(n),e.abrupt("return",n);case 25:throw new Error("error while invoking current weather data");case 26:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),T=a(110),U=new(function(){function e(){Object(i.a)(this,e),this.currentWeather=null,this.currentForecastWeather=null,this.currentLocation={},this.currentWeather$=new T.a,this.currentForecastWeather$=new T.a}return Object(l.a)(e,[{key:"destroy",value:function(){this.currentWeather$.unsubscribe()}}]),e}()),M=new F(U),_=o.a.createContext(M),B=o.a.createContext(U),H=a(111),I=a(103),P=a(104),J=a(105);function L(e){var t=Object(c.useState)(e.open),a=Object(s.a)(t,2),r=a[0],n=a[1];return Object(c.useEffect)((function(){n(e.open)}),[e.open]),o.a.createElement(o.a.Fragment,null,o.a.createElement(H.a,{open:r,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},o.a.createElement(I.a,{id:"alert-dialog-title"},e.title),o.a.createElement(P.a,null,o.a.createElement(J.a,{id:"alert-dialog-description"},e.children))))}a(74);function $(){var e=Object(E.h)().dt,t=Object(c.useContext)(B),a=f.filterForecastItems(Number(e),t.currentForecastWeather.list).find((function(t){return t.dt===Number(e)})),r=f.forecastItemToCurrentWeatherModel(a,t.currentWeather);return o.a.createElement("div",{className:"weatherday-container"},o.a.createElement(b,{current:r}))}var A=Object(E.i)((function(){var e=Object(c.useState)(),t=Object(s.a)(e,2),a=t[0],r=t[1],n=Object(c.useState)(!1),i=Object(s.a)(n,2),l=i[0],u=i[1],m=Object(c.useState)(!1),p=Object(s.a)(m,2),h=p[0],d=p[1],f=Object(c.useContext)(_),b=a?a.currentWeather:null,g=a?a.currentForecast:null;return Object(c.useEffect)((function(){!navigator.geolocation||a||l||h?navigator.geolocation||d(!0):navigator.geolocation.getCurrentPosition((function(e){var t={};t.currentLocation={lat:e.coords.latitude,lon:e.coords.longitude,city:""},f.getCurrentWeatherData(t.currentLocation).then((function(e){t.currentWeather=e,f.getCurrentForecastWeatherData(t.currentLocation).then((function(e){t.currentForecast=e,r(t)}))}))}),(function(){u(!0)}))}),[a,l,h,f]),o.a.createElement("div",{className:"root-container top-level-containers"},o.a.createElement(z,null),o.a.createElement("div",{className:"content"},o.a.createElement(E.c,null,o.a.createElement(E.a,{path:"/day/:dt"},o.a.createElement($,null)),o.a.createElement(E.a,{path:"/"},o.a.createElement(y,{currentWeather:b,forecast:g})))),o.a.createElement("div",{className:"footer"},o.a.createElement(q,null)),o.a.createElement(L,{open:l,title:"Allow location access"},o.a.createElement("span",null,"App needs access to your current location to get your geo coordinates, However it seems like you have dsabled or denied it")),o.a.createElement(L,{open:h,title:"Geolocation not supported"},o.a.createElement("span",null,"It seems like you are using a crapy old device or you might have disabled geolocation")))}));var z=Object(E.i)((function(e){var t=Object(E.g)(),a=Object(E.f)(),r=Object(c.useState)({}),n=Object(s.a)(r,2),i=(n[0],n[1]);return Object(c.useEffect)((function(){var t=e.history.listen((function(e){i({})}));return function(){t()}})),o.a.createElement(D.a,{position:"static"},o.a.createElement(O.a,null,o.a.createElement(k.a,{edge:"start",color:"inherit","aria-label":"menu",onClick:function(){"/"===t.pathname||a.goBack()}},o.a.createElement("i",{className:"material-icons"},"/"===t.pathname?"menu":"arrow_back")),o.a.createElement(Y,null),o.a.createElement("div",null,o.a.createElement(S.a,{"aria-label":"position",name:"position",row:!0,value:"m"},o.a.createElement(N.a,{value:"m",control:o.a.createElement(j.a,null),label:"Metric",labelPlacement:"start"})))))}));function Y(){var e=Object(c.useState)(),t=Object(s.a)(e,2),a=t[0],r=t[1],n=Object(c.useContext)(B);return Object(c.useEffect)((function(){var e=n.currentWeather$.subscribe((function(e){r(e)}));return function(){e.unsubscribe()}})),o.a.createElement("div",{className:"app-title"},o.a.createElement("h1",null,a?a.name:""))}function q(){return o.a.createElement("p",null,"</> with \u2665 by ",o.a.createElement("a",{href:"https://twitter.com/iamsvaza",rel:"noopener noreferrer",target:"_blank"},"svaza"))}a(75);var G=a(28);n.a.render(o.a.createElement(_.Provider,{value:M},o.a.createElement(B.Provider,{value:U},o.a.createElement(G.a,null,o.a.createElement(A,null)))),document.getElementById("app-root"))}},[[60,1,2]]]);
//# sourceMappingURL=main.280bd25a.chunk.js.map