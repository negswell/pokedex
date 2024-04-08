import { SWRResponse } from "swr";
import useSWRImmutable from "swr/immutable";
import { getFetcher } from "./fetchers";
import { PokeDataType, PokemonType } from "./types";
import useSWRInfinite, { SWRInfiniteResponse } from "swr/infinite";

export function useGetPokemons({
  url = "https://pokeapi.co/api/v2/pokemon",
  options = {},
  queryParams = {},
}): SWRResponse<PokeDataType, any> {
  const query = new URLSearchParams(queryParams);
  const res = useSWRImmutable(
    Object.values(queryParams).some((val) => val === undefined)
      ? null
      : url + "?" + query,
    getFetcher,
    {
      ...options,
    }
  );
  return res;
}

export function useGetPokemon({
  url,
  options = {},
  id,
}: {
  url?: string;
  options?: Record<string, string>;
  id?: string;
}): SWRResponse<PokemonType, any> {
  const res = useSWRImmutable(
    url ? url : `https://pokeapi.co/api/v2/pokemon/${id}`,
    getFetcher,
    {
      ...options,
    }
  );
  return res;
}

const getKey = (pageIndex: number) => {
  const limit = 15;
  const offset = pageIndex * limit;

  return `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
};

export function useGetInfinitePokemons({
  options = {},
}): SWRInfiniteResponse<PokeDataType, any> {
  const res = useSWRInfinite(getKey, getFetcher, {
    ...options,
  });
  return res;
}
