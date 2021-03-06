import { Button, Heading, VStack, HStack } from "@chakra-ui/react";
import { useWeather } from "../hooks/useWeather";
import { WeatherCard } from "./weatherCard";
import { WeatherCardMini } from "./weatherCardMini";

export const WeatherApp = () => {
  const [city, weather, reload, isLoading] = useWeather();
  const handleOnClick = () => reload();

  return (
    <VStack p={4} alignItems="flex-start">
      <Button onClick={handleOnClick} isLoading={!isLoading}>
        現在位置取得
      </Button>
      {city && <Heading as="h1">{city}のお天気</Heading>}
      {weather && <WeatherCard data={weather.current} />}
      <HStack w="full" spacing={4} py={6} overflowX="scroll">
        {weather &&
          weather.daily.map((data, index) => (
            <WeatherCardMini key={index} data={data} />
          ))}
      </HStack>
    </VStack>
  );
};
