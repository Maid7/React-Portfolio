import { Box, Flex, Text, Heading } from "@chakra-ui/react";
import HeroImage from "../assets/portfolioImage.jpg";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <Flex
      w="100%"
      bg="gray.100"
      h={["100vh","100vh","110vh","110vh"]}
      px={10}
      align="center"
      justify="center"
      gap={5}
      flexDirection={["column-reverse","column-reverse","row","row"]}
    >
      <Box
        bgImage={HeroImage}
        h={["250px","250px","350px","400px"]}
        w={["250px","250px","350px","400px"]}
        borderRadius="50%"
        backgroundSize="cover"
        backgroundPosition="center"
      ></Box>
      <Flex
        flexDirection="column"
        align="flex-start"
        justify="center"
        h="400px"
        w={["300px","300px","400px","400px"]}
      >
        <Heading fontSize="5rem" fontWeight="bold">
          Hello
        </Heading>
        <Text mt="1rem">A bit About Me</Text>
        <Text fontSize="12px">
          I'm a passionate front-end developer with expertise in React and
          Chakra UI. I have a strong understanding of modern web development
          principles and love creating intuitive and visually appealing user
          interfaces. With a keen eye for detail and a commitment to delivering
          high-quality code, I strive to create seamless user experiences. Let's
          build something amazing together! When I'm not at the computer,I'm
          usually in the gym,playing video games or reading books.
        </Text>
        <Flex
        
         flexDirection="row" 
         align="center"
         gap={2}
          mt="1rem">
            <Link to="resume">
            <Flex
            alignItems="center"
            justifyContent="center"
            transition="background-color 0.3s ease-in-out"
            border="1px solid black"
            _hover={{ bg: "gray.100" }}
            h={["100px","100px","110px","120px"]}
            w={["100px","100px","110px","120px"]}
            borderRadius="50%"
            bg="orange.400"
          >
            <Text fontWeight="bold">Resume</Text>
          </Flex>
            </Link>
         <Link to="projects">
         <Flex
            alignItems="center"
            justifyContent="center"
            transition="background-color 0.3s ease-in-out"
            border="1px solid black"
            _hover={{ bg: "gray.100" }}
            h={["100px","100px","110px","120px"]}
            w={["100px","100px","110px","120px"]}
            borderRadius="50%"
            bg="red.300"
          >
            <Text fontWeight="bold">Projects</Text>
          </Flex>
         </Link>

     <Link to="contact">
     <Flex
            alignItems="center"
            justifyContent="center"
            transition="background-color 0.3s ease-in-out"
            border="1px solid black"
            _hover={{ bg: "gray.100" }}
            h={["100px","100px","110px","120px"]}
            w={["100px","100px","110px","120px"]}
            borderRadius="50%"
            bg="blue.200"
          >
            <Text fontWeight="bold">Contact</Text>
          </Flex>
     </Link>         
         
        </Flex>
      </Flex>
    </Flex>
  );
}
