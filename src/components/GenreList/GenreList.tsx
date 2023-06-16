import { HStack, Heading, Image, List, ListItem } from "@chakra-ui/react";
import useData from "../../hooks/useData";
import { Genre } from "../../hooks/useGenres";
import getCroppedImageUrl from "../../services/image-url";

const GenreList = () => {
  const { data } = useData<Genre>("/genres");
  return (
    <>
      <Heading fontSize="2xl" marginTop={9} marginBottom={3}>
        Genres
      </Heading>
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                objectFit="cover"
                src={getCroppedImageUrl(genre.image_background)}
              />
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
