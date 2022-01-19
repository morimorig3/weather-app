import { useState } from "react";

const DEFAULT_POSITION_OSAKA = {
  lat: 34.68639,
  lon: 135.52,
};

export type Position = typeof DEFAULT_POSITION_OSAKA;

export const useCurrentPosition = () => {
  const [position, setPosition] = useState(DEFAULT_POSITION_OSAKA);

  const successCallback = (position: GeolocationPosition) => {
    setPosition({
      lat: position.coords.latitude,
      lon: position.coords.longitude,
    });
  };
  const handleError = ({ code, message }: GeolocationPositionError) => {
    switch (code) {
      case 1:
        alert(
          "このページにはアクセス許可がないため、位置情報の取得に失敗しました。"
        );
        break;
      case 2:
        alert(
          "少なくともひとつの位置情報ソースが内部的なエラーを返したため、位置情報の取得に失敗しました。"
        );
        break;
      case 3:
        alert(
          "指定された制限時間内に位置情報を取得することができませんでした。"
        );
        break;
      default:
        alert(message);
    }
  };

  const options = {
    timeout: Infinity,
  };

  const resetPosition = () => setPosition(DEFAULT_POSITION_OSAKA);

  const getPosition = () => {
    resetPosition();
    navigator.geolocation.getCurrentPosition(
      successCallback,
      handleError,
      options
    );
  };

  return [position, getPosition] as const;
};
