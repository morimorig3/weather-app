import { VFC } from "react";
import { Divider, Box, HStack, VStack, Spacer, Text } from "@chakra-ui/react";
import { WeatherInfo } from "../lib/getWeather";
import { WeatherIcon, weatherMap } from "./weatherIcon";
import { unixtimeToDate, formatDate, formatTime } from "../lib/utils";
import {
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

type Props = {
  data: WeatherInfo;
};

export const WeatherCard: VFC<Props> = ({ data }) => {
  const date = formatDate(unixtimeToDate(data.dt));
  const time = formatTime(unixtimeToDate(data.dt));
  const sunRise = formatTime(unixtimeToDate(data.sunrise));
  const sunSet = formatTime(unixtimeToDate(data.sunset));
  const humidity = data.humidity;
  const windSpeed = data.wind_speed;
  const rain = data?.rain?.["1h"];
  const snow = data?.snow?.["1h"];

  const weatherType = data.weather[0].main;
  const weatherTitle = weatherMap[weatherType][0].title;
  let temp = 0;
  if (typeof data.temp === "number") {
    temp = Math.round(data.temp * 10) / 10;
  }

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
        <WeatherIcon weather={data.weather[0]} size="5em" />
        <Text fontSize="2xl" fontWeight="bold">
          {weatherTitle}
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
