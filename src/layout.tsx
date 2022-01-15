import { FunctionComponent, ComponentChildren } from "preact";
import { Container, Text } from "@chakra-ui/react";

type Props = {
  children: ComponentChildren;
};

export const Layout: FunctionComponent<Props> = ({ children }) => (
  <Container>
    <Text>テキスト</Text>
    <Text>あああああ</Text>
  </Container>
);
