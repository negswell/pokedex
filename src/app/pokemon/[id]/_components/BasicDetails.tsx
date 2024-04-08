import { PokemonType } from "@/hooks/api/types";
import { Group, Text, Badge, Table } from "@mantine/core";
import { FC } from "react";

const BasicDetails: FC<{ data: PokemonType }> = ({ data }) => {
  return (
    <table width={"100%"}>
      <tbody>
        <tr>
          <td>
            <Text fw={"500"}>ID</Text>
          </td>
          <td>
            <Text>#{data.id}</Text>
          </td>
        </tr>
        <tr>
          <td>
            <Text fw={"500"}>Height</Text>
          </td>
          <td>
            <Text>{data.height} meters</Text>
          </td>
        </tr>
        <tr>
          <td>
            <Text fw={"500"}>Weight</Text>
          </td>
          <td>
            <Text>{data.weight} Kgs</Text>
          </td>
        </tr>
        <tr>
          <td>
            <Text fw={"500"}>Abilities</Text>
          </td>
          <td>
            <Group gap={"sm"}>
              {data.abilities.map((item) => (
                <Badge
                  key={item.ability.name}
                  size="md"
                  radius="sm"
                  color="#DC0A2D"
                >
                  {item.ability.name}
                </Badge>
              ))}
            </Group>
          </td>
        </tr>
        <tr>
          <td>
            <Text fw={"500"}>Type</Text>
          </td>
          <td>
            <Group gap={"sm"}>
              {data.types.map((item) => (
                <Badge
                  key={item.type.name}
                  size="md"
                  radius="sm"
                  color="#DC0A2D"
                >
                  {item.type.name}
                </Badge>
              ))}
            </Group>
          </td>
        </tr>
        <tr>
          <td>
            <Text fw={"500"}>Forms</Text>
          </td>
          <td>
            <Group gap={"sm"}>
              {data.forms.map((item) => (
                <Badge key={item.name} size="md" radius="sm" color="#DC0A2D">
                  {item.name}
                </Badge>
              ))}
            </Group>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default BasicDetails;
