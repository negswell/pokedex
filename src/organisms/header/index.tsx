"use client";

import { useGetPokemons } from "@/hooks/api/pokemon";
import { Text, Flex, Autocomplete, AutocompleteProps } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";

const option: AutocompleteProps["renderOption"] = ({ option }) => {
  return (
    <Link href={`/pokemon/${option.value}`} style={{ width: "100%" }}>
      <Text size="sm" className="capitalize" fw={"500"}>
        {option.value}
      </Text>
    </Link>
  );
};

const Header = () => {
  const { data } = useGetPokemons({ queryParams: { offset: 0, limit: 2000 } });

  const pokemons = useMemo(() => {
    return data?.results.map((pokemon) => pokemon.name);
  }, [data?.results]);

  return (
    <Flex
      direction={"column"}
      gap={"md"}
      p="lg"
      align={"center"}
      style={{ background: "#DC0A2D", zIndex: 2 }}
      pos={"sticky"}
      top={0}
    >
      <Flex direction={"row"} gap={"lg"} align={"center"}>
        <Image
          src={"/svgs/pokeball.svg"}
          alt="pokeball"
          width={"30"}
          height={"30"}
        />
        <Text size="xl" fw={"700"} c="white">
          PokéDex
        </Text>
      </Flex>
      <Autocomplete
        placeholder="Search Pokemon"
        limit={20}
        data={pokemons}
        radius={"lg"}
        w={"320px"}
        renderOption={option}
        comboboxProps={{
          transitionProps: { transition: "pop", duration: 200 },
        }}
      />
    </Flex>
  );
};

export default Header;
