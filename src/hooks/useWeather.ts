import { useState, useEffect } from "react";
import { useCurrentPosition } from "./useCurrentPosition";
import { getWeather, ResponseWeather } from "../lib/getWeather";
import { getCityName } from "../lib/getCityName";

export const useWeather = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState<ResponseWeather | null>(null);
  const [position, getPosition] = useCurrentPosition();

  const reload = () => getPosition();

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
