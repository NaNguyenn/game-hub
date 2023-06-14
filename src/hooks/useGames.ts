import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface Game {
  id: number;
  name: string;
}

interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      try {
        const response = await apiClient.get<FetchGamesResponse>("/games", {
          signal: controller.signal,
        });
        setGames(response.data.results);
      } catch (err: any) {
        if (err instanceof CanceledError) return;
        setError(err.message);
      }
    };

    fetchData();
    return () => controller.abort();
  }, []);

  return { games, error };
};

export default useGames;
