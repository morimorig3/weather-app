import { FunctionComponent, ComponentChildren } from "preact";
import { Container, HStack, VStack, Box, Link } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

type Props = {
  children: ComponentChildren;
};

export const Layout: FunctionComponent<Props> = ({ children }) => (
  <Container maxW="container.lg">
    <VStack minHeight="100vh" px={5}>
      <Box w="full" flex={1} py={10}>
        {children}
      </Box>
      <HStack>
        <Link href="https://www.morimorig3.com/">morimorig3.com</Link>
        <Link href="https://github.com/morimorig3/weather-app" isExternal>
          Github <ExternalLinkIcon mx="2px" />
        </Link>
      </HStack>
    </VStack>
  </Container>
);
