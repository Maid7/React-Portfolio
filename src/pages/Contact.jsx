import { Box, Text, Flex, Heading } from "@chakra-ui/react";
// import contact form component
import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <Flex
      bg="gray.100"
      width="100%"
      flexDirection={["column", "column", "row", "row"]}
      h="80vh"
    >
      <Flex flex="1" pl="1rem" align={["flex-start","flex-start","center","center"]} pt={["1rem","1rem","4rem","5rem"]} flexDirection="column">
        <Box w="220px">
          <Heading>Contact</Heading>
          <Text fontSize="12px">Looking forward to hearing from you</Text>
        </Box>

        <Box mt="2rem" w="220px">
          <Heading fontSize="16px" fontWeight="700">
            Phone
          </Heading>
          <Text fontSize="12px">064 44 04 964</Text>
          <Heading fontSize="16px" fontWeight="700" mt="10px">
            Email
          </Heading>
          <Text fontSize="12px">maidsejdinovic3@gmail.com</Text>
        </Box>
      </Flex>
      <ContactForm />
    </Flex>
  );
}
