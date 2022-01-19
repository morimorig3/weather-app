import { useState, useEffect } from "react";
import { useCurrentPosition, Position } from "./useCurrentPosition";
import {
  OPEN_WEATHER_ENDPOINT_GEOCORDING,
  OPEN_WEATHER_ENDPOINT_ONECALL,
} from "../constans";
import { WeatherMap } from "../component/weatherCard";

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

type ResponseWeather = {
  current: WeatherInfo;
  daily: WeatherInfo[];
  hourly: WeatherInfo[];
  lat: number;
  lon: number;
  timezone: string;
  timezone_offset: number;
};

export const useWeather = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState<ResponseWeather | null>(null);
  const [position, getPosition] = useCurrentPosition();

  const reload = () => getPosition();

  const getCityName = async (position: Position): Promise<string> => {
    const res = await fetch(
      `${OPEN_WEATHER_ENDPOINT_GEOCORDING}?lat=${position.lat}&lon=${
        position.lon
      }&limit=1&lang=ja&appid=${import.meta.env.VITE_API_KEY}`
    );

    const city = await res.json();

    return city.pop().local_names.ja;
  };

  const getWeather = async (position: Position): Promise<ResponseWeather> => {
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

  useEffect(() => {
    setIsLoading(false);
    const fetchData = async () => {
      const cityName = await getCityName(position);
      const weather = await getWeather(position);
      setCity(cityName);
      setWeather(weather);
      setIsLoading(true);
    };
    fetchData();
  }, [position]);

  return [city, weather, reload, isLoading] as const;
};
