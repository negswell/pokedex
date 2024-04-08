import { PokemonType } from "@/hooks/api/types";
import { Group, Text, Badge, Progress } from "@mantine/core";
import { FC } from "react";

const Stats: FC<{ data: PokemonType["stats"] }> = ({ data }) => {
  const maxStat = Math.max(...data.map((stat) => Number(stat.base_stat)));
  return (
    <table width={"100%"}>
      <tbody>
        {data.map((stat) => (
          <tr key={stat.stat.name}>
            <td>
              <Text fw={"500"} className="capitalize">
                {stat.stat.name}
              </Text>
            </td>
            <td width={"100%"}>
              <Group gap={"md"} w={"100%"} wrap="nowrap">
                <Text size="sm">{stat.base_stat}</Text>
                <Progress
                  w={"100%"}
                  radius="xl"
                  size="lg"
                  color="#DC0A2D"
                  value={(stat.base_stat / maxStat) * 100}
                  animated
                />
              </Group>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Stats;
