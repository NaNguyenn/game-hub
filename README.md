# GAME HUB APP

## Technologies

- Vite: to create a light-weight React App
- React: library for front-end
- Typescript: main language
- Chakra UI: for stylings

## Steps

Here are the steps used to build this project:

1. Create new vite project using React + Typescript, add Chakra UI.
2. Build responsive main layout with grid.
3. Create navbar.
4. Add dark mode.
5. Add color mode switch.
6. Add Rawg API, fetch games data in to GameGrid.
7. Create custom useGames hook to fetch games data.
8. Create game card, switch from npm to yarn.
9. Add platform icons.
10. Add critic score.
11. Add optimized image for game cards.
12. Add game card loading state and skeleton.
13. Add game card container to style both the game card and its skeleton.
14. Fetch genres.
15. Create generic useData hook to fetch data.
16. Style the genres list.
17. Add genre loading spinner.
18. Add filtering games by genre:
    - Add onSelectGenre Props to GenreList to tell parent (App) if a genre is selected.
    - Add selectedGenre state to App and pass to GameGrid.
    - Add selectedGenre Props to GameGrid and pass to useGames hook
    - Pass selectedGenre from useGames to useData as params for AxiosRequestConfig.
    - Add the requestConfig to useData get request.
19. Add hightlight to selected genre in genre list by passing selectedGenre from App to GenreList.
20. Build the platform selector dropdown menu.
21. Add filtering games by platforms (same as 18.)
22. Refactor all query variables into a query object to pass around.
23. Add sorting selector (same as 21).
24. Add search bar.
25. Add game heading.
26. Export genres (rarely-changed) as static data to reduce api calls.
