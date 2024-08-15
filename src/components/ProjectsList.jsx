import { Flex, VStack, Heading, Text, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
// import images
import TheGazetteImage from "../assets/TheGazetteImage.png";
import PulseBuy from "../assets/PulseBuyImage.png";
import GamerGalaxy from "../assets/GamerGalaxyImage.png";

export default function ProjectsList() {
  return (
    <Flex flexDirection="column" gap={10} w="100%" mt="2rem">
      <Flex
        gap={10}
        mt="2rem"
        flexDirection={["column", "column", "row", "row"]}
      >
        <VStack flex={1} as="flex" align="flex-start">
          <Heading fontSize="16px">The Gazette</Heading>
          <Text fontSize="14px">
            Welcome to my page dedicated to my favorite band, where I share
            everything I love about their music and journey.Join me in
            celebrating the melodies and memories that make this band an
            integral part of my life.
          </Text>
        </VStack>
        <a
          href="https://the-gazette.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Box
            flex={1.5}
            bgImage={TheGazetteImage}
            h={["250px", "250px", "270px", "270px"]}
            w={["320px", "320px", "350px", "400px"]}
            backgroundSize="cover"
            backgroundPosition="center"
          ></Box>
        </a>
      </Flex>
      <Flex
        gap={5}
        mt="2rem"
        flexDirection={["column", "column", "row", "row"]}
      >
        <VStack flex={1} as="flex" align="flex-start">
          <Heading fontSize="16px">Gamer Galaxy</Heading>
          <Text fontSize="14px">
            Welcome to my gamer catalog website, your ultimate resource for
            discovering and exploring the latest and greatest video games. Built
            using the RAWG API, our site provides details about the game ,
            comprehensive guides, and up-to-date news on upcoming releases. Join
            our community of gamers to share insights, strategies, and your
            passion for gaming.
          </Text>
        </VStack>
        <a
          href="https://gamer-galaxy.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Box
            flex={1.5}
            bgImage={GamerGalaxy}
            h={["250px", "250px", "270px", "270px"]}
            w={["320px", "320px", "350px", "400px"]}
            backgroundSize="cover"
            backgroundPosition="center"
          ></Box>
        </a>
      </Flex>
      <Flex
        gap={5}
        mt="2rem"
        flexDirection={["column", "column", "row", "row"]}
      >
        <VStack flex={1} as="flex" align="flex-start">
          <Heading fontSize="16px">Pulse Buy</Heading>
          <Text fontSize="14px">
            Electronics e-commerce website, your one-stop shop for the latest
            gadgets and tech accessories. Explore a wide range of high-quality
            products, from smartphones and laptops to home entertainment
            systems. Enjoy seamless shopping, exclusive deals, and top-notch
            customer service with us.
          </Text>
        </VStack>
        <a
          href="https://pulse-buy.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Box
            flex={1.5}
            bgImage={PulseBuy}
            h={["250px", "250px", "270px", "270px"]}
            w={["320px", "320px", "350px", "400px"]}
            backgroundSize="cover"
            backgroundPosition="center"
          ></Box>
        </a>
      </Flex>
    </Flex>
  );
}
