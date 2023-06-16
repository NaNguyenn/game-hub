import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await apiClient.get<FetchGamesResponse>("/games", {
          signal: controller.signal,
        });
        setGames(response.data.results);
        setIsLoading(false);
      } catch (err: any) {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setIsLoading(false);
      }
    };

    fetchData();
    return () => controller.abort();
  }, []);

  return { games, error, isLoading };
};

export default useGames;
