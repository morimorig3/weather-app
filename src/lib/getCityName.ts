import { OPEN_WEATHER_ENDPOINT_GEOCORDING } from "../constans";
import { Position } from "../hooks/useCurrentPosition";

export const getCityName = async (position: Position): Promise<string> => {
  const res = await fetch(
    `${OPEN_WEATHER_ENDPOINT_GEOCORDING}?lat=${position.lat}&lon=${
      position.lon
    }&limit=1&lang=ja&appid=${import.meta.env.VITE_API_KEY}`
  );

  const city = await res.json();

  return city.pop().local_names.ja;
};
