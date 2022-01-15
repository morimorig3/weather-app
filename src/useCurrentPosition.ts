import { useState } from "preact/hooks";

const DEFAULT_POSITION = {
  lat: 0,
  lon: 0,
};

export const useCurrentPosition = () => {
  const [position, setPosition] = useState(DEFAULT_POSITION);

  const successCallback = (position: GeolocationPosition) => {
    setPosition({
      lat: position.coords.latitude,
      lon: position.coords.longitude,
    });
  };
  const handleError = ({ code, message }: GeolocationPositionError) => {
    switch (code) {
      case 1:
        console.error(
          "このページにはアクセス許可がないため、位置情報の取得に失敗しました。"
        );
        break;
      case 2:
        console.error(
          "少なくともひとつの位置情報ソースが内部的なエラーを返したため、位置情報の取得に失敗しました。"
        );
        break;
      case 3:
        console.error(
          "指定された制限時間内に位置情報を取得することができませんでした。"
        );
        break;
      default:
        console.error(message);
    }
  };

  const options = {
    timeout: Infinity,
  };

  const resetPosition = () => setPosition(DEFAULT_POSITION);

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
