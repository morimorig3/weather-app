import { Button } from "@chakra-ui/react";
import { useCurrentPosition } from "./useCurrentPosition";
console.log(import.meta.env.VITE_API_KEY);

export const WeatherApp = () => {
  const [position, getPosition] = useCurrentPosition();
  const handleOnClick = () => getPosition();

  return (
    <div>
      <div>
        <p>lat: {position.lat}</p>
        <p>lon: {position.lon}</p>
      </div>
      <div>
        <Button onClick={handleOnClick}>現在位置取得</Button>
      </div>
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
