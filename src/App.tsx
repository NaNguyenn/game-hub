import { Grid, GridItem, Show } from "@chakra-ui/react";

const App = () => {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav">Nav</GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          Aside
        </GridItem>
      </Show>
      <GridItem area="main">Main</GridItem>
    </Grid>
  );
};

export default App;
