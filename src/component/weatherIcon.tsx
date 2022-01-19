import { VFC } from "react";
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
} from "react-icons/bs";

export const weatherMap = {
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

export type WeatherType = keyof typeof weatherMap;

type Props = {
  weatherType: WeatherType;
  size: string;
};

export const WeatherIcon: VFC<Props> = ({ weatherType, size = "5em" }) => {
  const Icon = weatherMap[weatherType].icon;
  return <Icon size={size} />;
};
