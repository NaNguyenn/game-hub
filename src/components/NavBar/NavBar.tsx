import { HStack, Image } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack padding="10px">
      <Image
        src={
          "https://game-icons.net/icons/ffffff/000000/1x1/caro-asercion/barn-owl.svg"
        }
        boxSize="30px"
      />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
