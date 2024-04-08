import { Flex, Text, Button } from "@mantine/core";
import Image from "next/image";
import { useRouter } from "next/navigation";

const BackHeader = () => {
  const router = useRouter();
  return (
    <Flex
      direction={"row"}
      gap={"md"}
      px="lg"
      py="sm"
      align={"center"}
      justify={"space-between"}
      style={{ background: "#DC0A2D", zIndex: 2 }}
      pos={"sticky"}
      top={0}
    >
      <Button
        variant="transparent"
        color="white"
        onClick={() => router.back()}
        title="back"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m12 19-7-7 7-7" />
          <path d="M19 12H5" />
        </svg>
      </Button>
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
    </Flex>
  );
};

export default BackHeader;
