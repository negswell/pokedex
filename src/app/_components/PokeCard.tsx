import { useGetPokemon } from "@/hooks/api/pokemon";
import { PokeDataResult } from "@/hooks/api/types";
import { Badge, Card, Flex, Group, Loader, Stack, Text } from "@mantine/core";
import Image from "next/image";
import { FC } from "react";
import "./pokeCard.css";
import Link from "next/link";

const PokeCard: FC<{ pokeData: PokeDataResult }> = ({ pokeData }) => {
  const { name, url } = pokeData;
  const { data, isLoading } = useGetPokemon({ url });

  if (isLoading || !data) {
    return (
      <Flex justify={"center"} w={200} h={200}>
        <Loader color="red" size="lg" type="bars" />
      </Flex>
    );
  }

  return (
    <Card radius="lg">
      <Link href={`/pokemon/${data.name}`}>
        <Card.Section>
          <Stack align="center" p={"sm"}>
            <Text fw={700} style={{ alignSelf: "flex-end" }} p={"lg"}>
              #{data.id}
            </Text>
            <Image
              src={data.sprites["other"]["official-artwork"]["front_default"]}
              height={180}
              width={180}
              alt={name}
            />
          </Stack>
        </Card.Section>
        <Stack className="name" gap={"lg"} align="center" p="md">
          <Text fw={700}>{name}</Text>
          <Group gap={"md"}>
            {data?.types.map(({ type }) => (
              <Badge key={type.name} color="#DC0A2D" size="sm">
                {type.name}
              </Badge>
            ))}
          </Group>
        </Stack>
      </Link>
    </Card>
  );
};

export default PokeCard;
