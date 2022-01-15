import { ChakraProvider, Box } from "@chakra-ui/react";
import { Layout } from "./layout";

export function App() {
  return (
    <ChakraProvider>
      <Layout>
        <Box>aaaa</Box>
      </Layout>
    </ChakraProvider>
  );
}
