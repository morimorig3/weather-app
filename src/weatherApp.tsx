import { Button } from "@chakra-ui/react";
import { useWeather } from "./useWeather";
import { Weather } from "./weather";

export const WeatherApp = () => {
  const [city, weather, reload] = useWeather();
  const handleOnClick = () => reload();

  // const { current, daily } = weather;

  console.log(city);
  console.log(weather);

  /**
   * TODO: APIで情報取得　どんな情報取れるか見てみる
   */

  return (
    <div>
      <div>
        {city && <p>市: {city}</p>}
        {weather && <p>天気: {weather.current.weather[0].description}</p>}
      </div>
      <div>
        <Button onClick={handleOnClick}>現在位置取得</Button>
      </div>
      {weather && <Weather data={weather.current} />}
      <p>日付</p>
      <p>お天気マーク</p>
      <p>気温とか情報</p>
      <div>
        <p>明日の天気簡易表示</p>
        <p>明後日の天気簡易表示</p>
      </div>
    </div>
  );
};
