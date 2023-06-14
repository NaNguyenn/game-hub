import { HStack, Image, Text } from "@chakra-ui/react";

const NavBar = () => {
  return (
    <HStack>
      <Image
        src={
          "https://game-icons.net/icons/ffffff/000000/1x1/caro-asercion/barn-owl.svg"
        }
        boxSize="30px"
      />
      <Text>NavBar</Text>
    </HStack>
  );
};

export default NavBar;
