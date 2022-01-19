import { OPEN_WEATHER_ENDPOINT_GEOCORDING } from "../constans";
import { Position } from "../hooks/useCurrentPosition";

export const getCity = async (position: Position) => {
  const res = await fetch(
    `${OPEN_WEATHER_ENDPOINT_GEOCORDING}?lat=${position.lat}&lon=${
      position.lon
    }&limit=1&lang=ja&appid=${import.meta.env.VITE_API_KEY}`
  );

  const weather = await res.json();

  return weather.pop();
};
