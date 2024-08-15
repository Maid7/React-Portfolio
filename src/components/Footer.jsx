import { Flex, Box, Text, Heading } from "@chakra-ui/react";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <Flex
      w="100%"
      flexDirection={["column", "column", "row", "row"]}
      h={["300px", "300px", "150px", "150px"]}
      bg="gray.100"
      align={['flex-start',"flex-start","center","center"]}
      justify="space-between"
      px={10}
      borderTop="1px solid gray"
    >
      <Box>
        <Heading fontWeight="bold" fontSize={["2rem","2rem","1rem","1rem"]}>
          Phone
        </Heading>
        <Text fontSize={["20px","20px","12px","12px"]} mt="5px">
          064 44 04 964
        </Text>
      </Box>
      <Box>
        <Heading fontWeight="bold" fontSize={["2rem","2rem","1rem","1rem"]}>
          Email
        </Heading>
        <Text fontSize={["20px","20px","12px","12px"]} mt="5px">
          maidsejdinovic3@gmail.com
        </Text>
      </Box>
      <Box>
        <Heading fontWeight="bold" fontSize={["2rem","2rem","1rem","1rem"]}>
          Follow Me
        </Heading>
        <Flex gap={2} alignItems="center" justify="center">
          <Link target="_blank" to="https://www.facebook.com/profile.php?id=61557715601832" isExternal mx={2}>
            <FaFacebook size={24} color="black" />
          </Link>
          <Link  target="_blank" to="https://github.com/Maid7" isExternal mx={2}>
            <FaGithub size={24} color="black" />
          </Link>
        </Flex>
      </Box>
      <Box>
        <Text fontSize={["16px","16px","12px","12px"]}> &copy; {new Date().getFullYear()} By Maid Sejdinovic. <br /> All rights reserved.</Text>
      </Box>
    </Flex>
  );
}
