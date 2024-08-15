import {
  Box,
  Flex,
  Text,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
  useBreakpointValue,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const linkSpacing = useBreakpointValue({ base: 2, md: 4 });
  const flexDirection = useBreakpointValue({ base: "column", md: "row" });
  const alignItems = useBreakpointValue({ base: "flex-start", md: "center" });
  const showHamburger = useBreakpointValue({ base: true, md: false });

  return (
    <Box bg="gray.100" px={6} py={4}>
      <Flex
        h={{ base: "auto", md: 12 }}
        flexDirection={flexDirection}
        alignItems={alignItems}
        justifyContent="space-between"
      >
        <Flex alignItems="center" mb={{ base: 4, md: 0 }}>
          <Box bg="orange.400" borderRadius="full" w={5} h={5} mr={2} />
          <Flex gap={1}>
           <Link to="/">
           <Text fontWeight="bold" color="black">
              Maid Sejdinovic
            </Text>
           </Link> 
            <Text fontSize="16px" color="gray.500">
              React Developer
            </Text>
          </Flex>
        </Flex>
        {showHamburger ? (
          <IconButton
            icon={<HamburgerIcon />}
            aria-label="Open Menu"
            variant="outline"
            onClick={onOpen}
          />
        ) : (
          <Flex alignItems={alignItems} gap={linkSpacing}>
            <Link
              to="resume"
              style={{
                color: "black",
                textDecoration: "none",
                padding: "0 8px",
                fontSize: "small",
              }}
              onMouseOver={(e) => (e.currentTarget.style.color = "orange")}
              onMouseOut={(e) => (e.currentTarget.style.color = "black")}
            >
              Resume
            </Link>
            <Link
              to="projects"
              style={{
                color: "black",
                textDecoration: "none",
                padding: "0 8px",
                fontSize: "small",
                borderLeft:
                  window.innerWidth >= 768 ? "1px solid black" : "none",
                borderRight:
                  window.innerWidth >= 768 ? "1px solid black" : "none",
              }}
              onMouseOver={(e) => (e.currentTarget.style.color = "orange")}
              onMouseOut={(e) => (e.currentTarget.style.color = "black")}
            >
              Projects
            </Link>
            <Link
              to="contact"
              style={{
                color: "black",
                textDecoration: "none",
                padding: "0 8px",
                fontSize: "small",
              }}
              onMouseOver={(e) => (e.currentTarget.style.color = "orange")}
              onMouseOut={(e) => (e.currentTarget.style.color = "black")}
            >
              Contact
            </Link>
          </Flex>
        )}
      </Flex>

      <Drawer isOpen={isOpen} onClose={onClose} placement="right" size="md">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
            <Flex flexDirection="column" gap={4}>
              <Link
                color="black"
                fontSize="sm"
                _hover={{ color: "orange.400" }}
                to="resume"
                onClick={onClose}
              >
                Resume
              </Link>
              <Link
                color="black"
                _hover={{ color: "orange.400" }}
                to="projects"
                borderLeft="1px solid"
                borderRight="1px solid"
                borderColor="black"
                px={2}
                fontSize="sm"
                onClick={onClose}
              >
                Projects
              </Link>
              <Link
                color="black"
                fontSize="sm"
                _hover={{ color: "orange.400" }}
                to="contact"
                onClick={onClose}
              >
                Contact
              </Link>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Navbar;
