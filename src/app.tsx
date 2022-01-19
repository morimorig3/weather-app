import { ChakraProvider } from "@chakra-ui/react";
import { Layout } from "./component/layout";
import { WeatherApp } from "./component/weatherApp";

export function App() {
  return (
    <ChakraProvider>
      <Layout>
        <WeatherApp />
      </Layout>
    </ChakraProvider>
  );
}
