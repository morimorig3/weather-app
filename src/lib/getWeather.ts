import { OPEN_WEATHER_ENDPOINT_ONECALL } from "../constans";
import { Position } from "../hooks/useCurrentPosition";
import { WeatherMap } from "../component/weatherCard";

export type ResponseWeather = {
  current: WeatherInfo;
  daily: WeatherInfo[];
  hourly: WeatherInfo[];
  lat: number;
  lon: number;
  timezone: string;
  timezone_offset: number;
};

type Hour = {
  "1h": number;
};

export type Weather = {
  description: string;
  icon: string;
  id: number;
  main: WeatherMap;
};

type dailyTemp = {
  morn: number;
  day: number;
  eve: number;
  night: number;
  min: number;
  max: number;
};

export type WeatherInfo = {
  clouds: number;
  dew_point: number;
  dt: number;
  feels_like: number;
  humidity: number;
  pressure: number;
  sunrise: number;
  sunset: number;
  temp: number | dailyTemp;
  uvi: number;
  visibility: number;
  weather: Weather[];
  wind_deg: number;
  wind_speed: number;
  wind_gust?: number;
  rain?: Hour;
  snow?: Hour;
};

export const getWeather = async (
  position: Position
): Promise<ResponseWeather> => {
  const res = await fetch(
    `${OPEN_WEATHER_ENDPOINT_ONECALL}?lat=${position.lat}&lon=${
      position.lon
    }&exclude=minutely,alerts&units=metric&lang=ja&appid=${
      import.meta.env.VITE_API_KEY
    }
      `
  );

  const weather = await res.json();

  return weather;
};
