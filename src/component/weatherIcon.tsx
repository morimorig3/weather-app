import { VFC } from "react";
import { Weather } from "../lib/getWeather";
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
  BsCloudSun,
} from "react-icons/bs";

export const weatherMap = {
  Thunderstorm: [{ title: "雷雨", icon: BsCloudLightningRain }],
  Drizzle: [{ title: "霧雨", icon: BsCloudDrizzle }],
  Rain: [{ title: "雨", icon: BsCloudRain }],
  Snow: [{ title: "雪", icon: BsCloudSnow }],
  Mist: [{ title: "もや", icon: BsCloudFog }],
  Smoke: [{ title: "煙", icon: BsCloudHaze }],
  Haze: [{ title: "かすみ", icon: BsCloudHaze }],
  Dust: [{ title: "砂塵", icon: BsCloudHaze }],
  Fog: [{ title: "霧", icon: BsCloudHaze }],
  Sand: [{ title: "砂", icon: BsCloudHaze1 }],
  Ash: [{ title: "灰", icon: BsCloudHaze1 }],
  Squall: [{ title: "スコール", icon: BsCloudRainHeavy }],
  Tornado: [{ title: "竜巻", icon: BsTornado }],
  Clear: [{ title: "快晴", icon: BsSun }],
  Clouds: [
    { id: 801, title: "晴れ", icon: BsCloudSun },
    { id: 802, title: "晴れ", icon: BsCloudSun },
    { id: 803, title: "くもり", icon: BsCloud },
    { id: 804, title: "くもり", icon: BsCloud },
  ],
} as const;

export type WeatherType = keyof typeof weatherMap;

type Props = {
  weather: Weather;
  size: string;
};

export const WeatherIcon: VFC<Props> = ({ weather, size = "5em" }) => {
  let Icon = BsSun;
  const weatherType = weather.main;

  if (weatherType === "Clouds") {
    const weatherId = weather.id;
    // @ts-ignore
    Icon = weatherMap["Clouds"].find(({ id }) => id === weatherId).icon;
  } else {
    Icon = weatherMap[weatherType]?.[0].icon;
  }
  return <Icon size={size} />;
};
