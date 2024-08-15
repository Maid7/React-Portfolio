import { Flex, Heading } from "@chakra-ui/react";
import ResumeList from "../components/ResumeList";
export default function Resume() {
  return (
    <Flex
      width="100%"
      bg="gray.100"
      px={["1rem", "1rem", "8rem", "10rem"]}
      py="5rem"
      flexDirection="column"
    >
      <Heading>Resume</Heading>
      <ResumeList/>
    </Flex>
  );
}
