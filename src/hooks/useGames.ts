import { GameQuery } from "../App";
import useData from "./useDate";

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
    rating_top: number;
    
  }
  

const useGames = (gameQuery:GameQuery) => useData<Game>("/games", {
  params: {
    genres: gameQuery.genre?.id,
     platforms: gameQuery.platform?.id,
    ordering: gameQuery.sortOrder,
    search: gameQuery.searchText
    }}, [gameQuery])

export default useGames;