import { useState } from "react";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  useToast,
} from "@chakra-ui/react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const toast = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch("https://formspree.io/f/xjkbrlno", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      toast({
        render: () => (
          <Box
            bg="orange.400"
            color="white"
            p={3}
            borderRadius="md"
            boxShadow="md"
          >
            <strong>Form submitted.</strong> We've received your message.
          </Box>
        ),
        duration: 5000,
        isClosable: true,
      });
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        render: () => (
          <Box
            bg="red.500"
            color="white"
            p={3}
            borderRadius="md"
            boxShadow="md"
          >
            <strong>Error submitting form.</strong> Please try again later.
          </Box>
        ),
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Box p={4} bg="gray.100" flex="1.5" w="100%" mx="auto">
      <form onSubmit={handleSubmit}>
        <Flex
          h="100%"
          direction="column"
          align="flex-start"
          justify="center"
          gap={4}
        >
          {/* First Row */}
          <Flex gap={4}>
            <FormControl id="first-name" flex={1} isRequired>
              <FormLabel fontWeight="normal" fontSize="12px">
                First Name
              </FormLabel>
              <Input
                type="text"
                name="firstName"
                borderRadius="none"
                border="1px solid black"
                value={formData.firstName}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl id="last-name" flex={1} isRequired>
              <FormLabel fontWeight="normal" fontSize="12px">
                Last Name
              </FormLabel>
              <Input
                type="text"
                name="lastName"
                borderRadius="none"
                border="1px solid black"
                value={formData.lastName}
                onChange={handleChange}
              />
            </FormControl>
          </Flex>
          {/* Second Row */}
          <Flex gap={4}>
            <FormControl id="email" flex={1} isRequired>
              <FormLabel fontWeight="normal" fontSize="12px">
                Email
              </FormLabel>
              <Input
                type="email"
                name="email"
                borderRadius="none"
                border="1px solid black"
                value={formData.email}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl id="phone" flex={1} isRequired>
              <FormLabel fontWeight="normal" fontSize="12px">
                Phone
              </FormLabel>
              <Input
                type="tel"
                name="phone"
                borderRadius="none"
                border="1px solid black"
                value={formData.phone}
                onChange={handleChange}
              />
            </FormControl>
          </Flex>
          {/* Third Row */}
          <Flex gap={4}>
            <FormControl id="message" flex={2} isRequired>
              <FormLabel fontWeight="normal" fontSize="12px">
                Message
              </FormLabel>
              <Input
                type="text"
                name="message"
                borderRadius="none"
                h="120px"
                w={["200px", "200px", "300px", "300px"]}
                border="1px solid black"
                value={formData.message}
                onChange={handleChange}
              />
            </FormControl>
            <Box flex={1} alignSelf="flex-end">
              <Button
                type="submit" 
                alignItems="center"
                justifyContent="center"
                transition="background-color 0.3s ease-in-out"
                border="1px solid black"
                _hover={{ bg: "gray.100" }}
                h={["120px", "120px", "120px", "120px"]}
                w={["120px", "120px", "110px", "120px"]}
                borderRadius="50%"
                bg="orange.400"
              >
                Submit
              </Button>
            </Box>
          </Flex>
        </Flex>
      </form>
    </Box>
  );
};

export default ContactForm;
