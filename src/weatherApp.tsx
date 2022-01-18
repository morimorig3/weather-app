import { Button, Heading, VStack } from "@chakra-ui/react";
import { useWeather } from "./useWeather";
import { WeatherCard } from "./weatherCard";

export const WeatherApp = () => {
  const [city, weather, reload] = useWeather();
  const handleOnClick = () => reload();

  return (
    <VStack spacing={4} alignItems="flex-start">
      <Button onClick={handleOnClick}>現在位置取得</Button>
      {city && <Heading as="h1">{city}のお天気</Heading>}
      {weather && <WeatherCard data={weather.current} />}
      <div>
        <p>明日の天気簡易表示</p>
        <p>明後日の天気簡易表示</p>
      </div>
    </VStack>
  );
};
