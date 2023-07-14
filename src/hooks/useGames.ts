import { GameQuery } from "../App";
import useData from "./useDate";
import { Genre } from "./useGenres";

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

export interface Game {
    id: number;
    name: string;
    background_image: string; 
    parent_platforms: {platform: Platform}[] //Array of objects where each object has a property called Platform of type platform
    metacritic: number;
  }
  

const useGames = (gameQuery:GameQuery) => useData<Game>("/games", {
  params: {
    genres: gameQuery.genre?.id,
     platforms: gameQuery.platform?.id,
    ordering: gameQuery.sortOrder
    }}, [gameQuery])

export default useGames;