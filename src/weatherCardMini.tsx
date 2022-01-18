import { FunctionComponent } from "preact";
import { Box, HStack, VStack, Text } from "@chakra-ui/react";
import { WeatherInfo } from "./useWeather";
import { unixtimeToDate, formatDate, formatTime } from "./utils";
import {
  BsCloudLightningRain,
  BsCloudDrizzle,
  BsCloudRain,
  BsCloudSnow,
  BsCloudFog,
  BsCloudHaze,
  BsCloudHaze1,
  BsCloudRainHeavy,
  BsTornado,
  BsSun,
  BsCloud,
  BsClock,
  BsCalendar3,
} from "react-icons/bs";

const weatherMap = {
  Thunderstorm: { title: "雷雨", icon: BsCloudLightningRain },
  Drizzle: { title: "霧雨", icon: BsCloudDrizzle },
  Rain: { title: "雨", icon: BsCloudRain },
  Snow: { title: "雪", icon: BsCloudSnow },
  Mist: { title: "もや", icon: BsCloudFog },
  Smoke: { title: "煙", icon: BsCloudHaze },
  Haze: { title: "かすみ", icon: BsCloudHaze },
  Dust: { title: "砂塵", icon: BsCloudHaze },
  Fog: { title: "霧", icon: BsCloudHaze },
  Sand: { title: "砂", icon: BsCloudHaze1 },
  Ash: { title: "灰", icon: BsCloudHaze1 },
  Squall: { title: "スコール", icon: BsCloudRainHeavy },
  Tornado: { title: "竜巻", icon: BsTornado },
  Clear: { title: "快晴", icon: BsSun },
  Clouds: { title: "くもり", icon: BsCloud },
} as const;

export type WeatherMap = keyof typeof weatherMap;

type Props = {
  data: WeatherInfo;
};

export const WeatherCardMini: FunctionComponent<Props> = ({ data }) => {
  const date = formatDate(unixtimeToDate(data.dt));
  const time = formatTime(unixtimeToDate(data.dt));
  const maxTemp = Math.round(data.temp.max * 10) / 10;
  const minTemp = Math.round(data.temp.min * 10) / 10;
  const humidity = data.humidity;
  const weather = weatherMap[data.weather[0].main];

  return (
    <Box minW={40} boxShadow="lg" p={4} rounded="md">
      <VStack alignItems="flex-start">
        <HStack>
          <BsCalendar3 />
          <Text fontSize="sm">{date}</Text>
        </HStack>
        <HStack>
          <BsClock />
          <Text fontSize="sm">{time}</Text>
        </HStack>
      </VStack>
      <HStack justifyContent="center">
        <weather.icon size="3em" />
      </HStack>
      <VStack alignItems="flex-start" gap={0}>
        <Text fontSize="sm">
          気温 {maxTemp} / {minTemp}℃
        </Text>
        <Text fontSize="sm">湿度 {humidity}%</Text>
      </VStack>
    </Box>
  );
};
