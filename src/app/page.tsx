"use client";

import { useGetInfinitePokemons } from "@/hooks/api/pokemon";
import Header from "@/organisms/header";
import {
  Text,
  Flex,
  Box,
  SimpleGrid,
  Loader,
  Affix,
  Button,
  Transition,
} from "@mantine/core";
import PokeCard from "./_components/PokeCard";
import { useWindowScroll, useInViewport } from "@mantine/hooks";
import { useEffect } from "react";

export default function Home() {
  const [scroll, scrollTo] = useWindowScroll();
  const { ref, inViewport } = useInViewport();
  const { data, size, setSize, isLoading } = useGetInfinitePokemons({});
  const total = data ? data[0]?.count : 0;
  const limit = 15;
  const content = limit * size <= total;

  useEffect(() => {
    if (inViewport && content) {
      setSize(size + 1);
    }
  }, [inViewport]);

  return (
    <main>
      <Header />
      <section>
        <Box px={"xl"} pt={"xl"}>
          {!isLoading && (
            <Text size="md" fw={"700"}>
              Total Pokemons : {total}
            </Text>
          )}
        </Box>
        {isLoading ? (
          <Flex justify={"center"}>
            <Loader color="red" size="xl" type="bars" />
          </Flex>
        ) : (
          <SimpleGrid
            cols={{ base: 1, sm: 2, md: 3, lg: 4, xl: 5 }}
            p={"xl"}
            spacing={{ base: "sm", sm: "lg", xl: "xl" }}
            verticalSpacing={"xl"}
          >
            {data?.map((page) =>
              page.results.map((item) => (
                <PokeCard key={item.name} pokeData={item} />
              ))
            )}
          </SimpleGrid>
        )}
        {
          <Flex justify={"center"} p="xl" ref={ref}>
            {content && (
              <Button
                color="black"
                size="md"
                radius="md"
                onClick={() => setSize(size + 1)}
              >
                Load More
              </Button>
            )}
          </Flex>
        }
      </section>
      <Affix position={{ bottom: 20, right: 20 }}>
        <Transition transition="slide-up" mounted={scroll.y > 0}>
          {(transitionStyles) => (
            <Button
              leftSection={
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
                  <path d="m5 12 7-7 7 7" />
                  <path d="M12 19V5" />
                </svg>
              }
              style={transitionStyles}
              color="#DC0A2D"
              onClick={() => scrollTo({ y: 0 })}
            >
              Scroll to top
            </Button>
          )}
        </Transition>
      </Affix>
    </main>
  );
}
