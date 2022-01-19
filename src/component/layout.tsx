import { VFC, ReactNode } from "react";
import { Container, HStack, VStack, Box, Link } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

type Props = {
  children: ReactNode;
};

export const Layout: VFC<Props> = ({ children }) => (
  <Container maxW="container.md">
    <VStack minHeight="100vh">
      <Box w="full" flex={1} py={4}>
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
