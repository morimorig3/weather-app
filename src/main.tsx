import { ColorModeScript } from "@chakra-ui/react";
import { render } from "preact";
import { App } from "./app";
import { theme } from "./theme";

render(
  <>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <App />
  </>,
  document.getElementById("app")!
);
