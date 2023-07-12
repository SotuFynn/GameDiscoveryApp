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
  

const useGames = (selectedGenre: Genre | null) => useData<Game>('/games', {params: {genres: selectedGenre?.id}}, [selectedGenre?.id])

export default useGames;