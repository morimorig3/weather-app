import { FunctionComponent } from "preact";
import { Box, Text } from "@chakra-ui/react";
import { WeatherInfo } from "./useWeather";
import { unixtimeToDate, formatDate } from "./utils";

type Props = {
  data: WeatherInfo;
};

export const Weather: FunctionComponent<Props> = ({ data }) => {
  const date = formatDate(unixtimeToDate(data.dt));

  return (
    <Box>
      <Text>{date}</Text>
    </Box>
  );
};
