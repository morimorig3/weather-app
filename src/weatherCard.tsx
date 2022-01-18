import { FunctionComponent } from "preact";
import { Divider, Box, HStack, VStack, Spacer, Text } from "@chakra-ui/react";
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
  BsThermometerHalf,
  BsMoisture,
  BsWind,
  BsSunrise,
  BsSunset,
  BsCalendar3,
  BsWater,
  BsSnow,
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

export const WeatherCard: FunctionComponent<Props> = ({ data }) => {
  const date = formatDate(unixtimeToDate(data.dt));
  const time = formatTime(unixtimeToDate(data.dt));
  const sunRise = formatTime(unixtimeToDate(data.sunrise));
  const sunSet = formatTime(unixtimeToDate(data.sunset));
  const temp = Math.round(data.temp * 10) / 10;
  const humidity = data.humidity;
  const windSpeed = data.wind_speed;
  const rain = data?.rain?.["1h"];
  const snow = data?.snow?.["1h"];
  const weather = weatherMap[data.weather[0].main];
  // const description = data.weather[0].description;

  return (
    <Box w="full" boxShadow="lg" p="6" rounded="md">
      <HStack>
        <HStack>
          <BsCalendar3 />
          <Text fontSize="md">{date}</Text>
        </HStack>
        <Spacer />
        <HStack>
          <BsClock />
          <Text fontSize="md">{time}</Text>
        </HStack>
      </HStack>
      <HStack justifyContent="center" spacing={4}>
        <weather.icon size="5em" />
        <Text fontSize="2xl" fontWeight="bold">
          {weather.title}
        </Text>
      </HStack>
      <Divider m={2} />
      <HStack justifyContent="space-around" wrap="wrap">
        <VStack>
          <Text fontSize="md">気温</Text>
          <BsThermometerHalf size="2em" />
          <Text fontSize="md">{temp}℃</Text>
        </VStack>
        <VStack>
          <Text fontSize="md">湿度</Text>
          <BsMoisture size="2em" />
          <Text fontSize="md">{humidity}%</Text>
        </VStack>
        <VStack>
          <Text fontSize="md">風速</Text>
          <BsWind size="2em" />
          <Text fontSize="md">{windSpeed}m/秒</Text>
        </VStack>
        <VStack>
          <Text fontSize="md">日出</Text>
          <BsSunrise size="2em" />
          <Text fontSize="md">{sunRise}</Text>
        </VStack>
        <VStack>
          <Text fontSize="md">日入</Text>
          <BsSunset size="2em" />
          <Text fontSize="md">{sunSet}</Text>
        </VStack>
        {rain && (
          <VStack>
            <Text fontSize="md">降水量</Text>
            <BsWater size="2em" />
            <Text fontSize="md">{rain}mm/時</Text>
          </VStack>
        )}
        {snow && (
          <VStack>
            <Text fontSize="md">降雪量</Text>
            <BsSnow size="2em" />
            <Text fontSize="md">{snow}mm/時</Text>
          </VStack>
        )}
      </HStack>
    </Box>
  );
};
