import { ChakraProvider } from "@chakra-ui/react";
import { Layout } from "./layout";
import { WeatherApp } from "./weatherApp";

export function App() {
  return (
    <ChakraProvider>
      <Layout>
        <WeatherApp />
      </Layout>
    </ChakraProvider>
  );
}
