import { PokemonType } from "@/hooks/api/types";
import { Group, Badge, Button, Collapse, Flex } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { FC } from "react";

const Moves: FC<{ data: PokemonType["moves"] }> = ({ data }) => {
  const [opened, { toggle }] = useDisclosure(false);
  const moves = data?.map((item) => item.move.name);

  return (
    <Flex direction={"column"} gap={"sm"} p={"xl"} flex={1}>
      <Group justify="center">
        <Button onClick={toggle} color="black" radius={"md"}>
          View All Moves
        </Button>
      </Group>
      <Collapse in={opened} mt={"xl"}>
        <Group gap={"sm"} wrap="wrap">
          {moves?.map((move) => (
            <Badge key={move} color="#DC0A2D">
              {move}
            </Badge>
          ))}
        </Group>
      </Collapse>
    </Flex>
  );
};

export default Moves;
