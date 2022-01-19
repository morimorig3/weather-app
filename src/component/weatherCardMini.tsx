import { VFC } from "react";
import { Box, HStack, VStack, Text } from "@chakra-ui/react";
import { WeatherInfo } from "../lib/getWeather";
import { WeatherIcon } from "./weatherIcon";
import { unixtimeToDate, formatDate, formatTime } from "../lib/utils";
import { BsClock, BsCalendar3 } from "react-icons/bs";

type Props = {
  data: WeatherInfo;
};

export const WeatherCardMini: VFC<Props> = ({ data }) => {
  const date = formatDate(unixtimeToDate(data.dt));
  const time = formatTime(unixtimeToDate(data.dt));
  const humidity = data.humidity;
  const weatherType = data.weather[0].main;
  const temp = {
    max: 0,
    min: 0,
  };
  if (typeof data.temp !== "number") {
    temp.max = Math.round(data.temp.max * 10) / 10;
    temp.min = Math.round(data.temp.min * 10) / 10;
  }

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
        <WeatherIcon weather={data.weather[0]} size="3em" />
      </HStack>
      <VStack alignItems="flex-start" gap={0}>
        <Text fontSize="sm">
          気温 {temp.max} / {temp.min}℃
        </Text>
        <Text fontSize="sm">湿度 {humidity}%</Text>
      </VStack>
    </Box>
  );
};
