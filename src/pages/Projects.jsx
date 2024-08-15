import { Flex, Heading } from "@chakra-ui/react";
// import ProjectList component
import ProjectsList from "../components/ProjectsList";
export default function Projects() {
  return (
    <Flex
      flexDirection="column"
      bg="gray.100"
      px={["1rem", "1rem", "8rem", "10rem"]}
      py="5rem"
      w="100%"
    >
      <Heading>Projects</Heading>
      <ProjectsList />
    </Flex>
  );
}
