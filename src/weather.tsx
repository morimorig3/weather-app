import { FunctionComponent } from "preact";
import { AlertDescription, Box, Text } from "@chakra-ui/react";
import { WeatherInfo } from "./useWeather";
import { unixtimeToDate, formatDate, formatTime } from "./utils";

type Props = {
  data: WeatherInfo;
};

const weatherMap = {
  Thunderstorm: "雷雨",
  Drizzle: "霧雨",
  Rain: "雨",
  Snow: "雪",
  Mist: "もや",
  Smoke: "煙",
  Haze: "かすみ",
  Dust: "砂塵",
  Fog: "霧",
  Sand: "砂",
  Ash: "灰",
  Squall: "スコール",
  Tornado: "竜巻",
  Clear: "快晴",
  Clouds: "曇り",
} as const;

export type WeatherMap = keyof typeof weatherMap;

export const Weather: FunctionComponent<Props> = ({ data }) => {
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
  const description = data.weather[0].description;

  return (
    <Box>
      <Text>
        {date} {time}
      </Text>
      <Text>天気は{weather}</Text>
      <Text>詳細:{description}</Text>
      <Text>気温:{temp}℃</Text>
      <Text>湿度:{humidity}%</Text>
      <Text>風速:{windSpeed}メートル/秒</Text>
      {rain && <Text>雨量:{rain}ミリメートル/時</Text>}
      {snow && <Text>降雪量:{snow}ミリメートル/時</Text>}
      <Text>日の出時刻:{sunRise}</Text>
      <Text>日没時刻:{sunSet}</Text>
    </Box>
  );
};
