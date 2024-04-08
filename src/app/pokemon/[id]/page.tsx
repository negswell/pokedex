"use client";

import { useGetPokemon } from "@/hooks/api/pokemon";
import BackHeader from "@/organisms/back-header";
import { Flex, Loader, Text, Title, Badge, Spoiler } from "@mantine/core";
import Image from "next/image";
import BasicDetails from "./_components/BasicDetails";
import Stats from "./_components/Stats";
import "./page.css";
import Moves from "./_components/Moves";

interface PokemonParamsType {
  id: string;
}

const Pokemon = ({ params }: { params: PokemonParamsType }) => {
  const { data, isLoading } = useGetPokemon({
    id: params?.id,
  });

  if (isLoading) {
    return (
      <Flex justify={"center"} w={"100vw"} h={"100vh"} align={"center"}>
        <Loader color="red" size="xl" type="bars" />
      </Flex>
    );
  }

  if (!data) {
    return (
      <Flex justify={"center"} w={"100vw"} h={"100vh"} align={"center"}>
        <Text fw={"700"} size="xl">
          Pokemon Not Found
        </Text>
      </Flex>
    );
  }

  return (
    <main>
      <BackHeader />
      <Title
        order={1}
        mt={"xl"}
        style={{ textAlign: "center", textTransform: "uppercase" }}
      >
        {data.name}
      </Title>
      <Flex
        gap={"xl"}
        justify={"center"}
        mt={"xl"}
        p={"lg"}
        direction={{ lg: "row", base: "column" }}
      >
        <Flex flex={{ lg: "0.7", base: "1" }}>
          <BasicDetails data={data} />
        </Flex>
        <Flex flex={1} justify={"center"} align={"center"}>
          <Image
            id="pokemon-image"
            src={data.sprites["other"]["official-artwork"]["front_default"]}
            alt={data.name}
            priority
            width="500"
            height="500"
            layout="responsive"
            style={{
              maxHeight: "500px",
              maxWidth: "500px",
            }}
          />
        </Flex>
        <Flex flex={{ lg: "0.7", base: "1" }}>
          <Stats data={data.stats} />
        </Flex>
      </Flex>
      <Moves data={data?.moves} />
    </main>
  );
};

export default Pokemon;
