import { Flex, Heading, Text, UnorderedList, ListItem } from "@chakra-ui/react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaCodeBranch,
  FaLightbulb,
} from "react-icons/fa";
import { AiFillThunderbolt } from "react-icons/ai";


export default function ResumeList() {
  return (
    <Flex flexDirection="column" w="100%" mt="2rem">
      <Flex flexDirection={["column","column","row","row"]} width="100%" borderBottom="1px solid black" py={4}>
        <Flex flex="1">
          <Heading fontSize="16px" mb={["10px","10px","0px","0px"]}>Work Experience</Heading>
        </Flex>
        <Flex flex="2" gap={10} flexDirection="column">
          <Flex>
            <Flex flex="1">
              <Text fontSize="12px">2018-Present</Text>
            </Flex>
            <Flex flex="3" flexDirection="column">
              <Heading fontSize="14px">Tiler[Self-Employed]</Heading>
              <Text fontSize="12px" mt="10px">
                Demonstrated exceptional precision in measuring, cutting, and
                installing tiles, ensuring high-quality results and a
                professional finish. This meticulousness translates well to the
                accuracy required in coding and debugging.Effectively addressed
                and resolved challenges on-site, such as adapting to unexpected
                issues or designing creative solutions for complex layouts.
                Developed strong analytical skills that are applicable to
                software development.Built strong relationships with clients
                through clear communication and attentive service, enhancing my
                ability to work effectively in client-facing roles and
                understand user needs.
              </Text>
            </Flex>
          </Flex>
          <Flex>
            <Flex flex="1">
              <Text fontSize="12px">2017/2018</Text>
            </Flex>
            <Flex flex="3" flexDirection="column">
              <Heading fontSize="14px">Waiter[Dobra Klopa]</Heading>
              <Text fontSize="12px" mt="10px">
                Provided exceptional service to guests, handling requests and
                resolving issues promptly. Developed strong interpersonal skills
                and the ability to manage high-pressure situations.Worked
                closely with kitchen and front-of-house staff to ensure smooth
                operations and a positive dining experience. Enhanced teamwork
                and communication skills.Efficiently managed multiple tables and
                tasks simultaneously, demonstrating strong organizational skills
                and the ability to prioritize effectively.Prepared and cooked
                food items to high standards, maintaining consistency and
                quality. Gained experience in a fast-paced environment, which
                contributed to a strong work ethic and attention to detail.
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Flex flexDirection={["column","column","row","row"]} width="100%" borderBottom="1px solid black" py={4}>
        <Flex flex="1">
          <Heading fontSize="16px" mb={["10px","10px","0px","0px"]}>Education</Heading>
        </Flex>
        <Flex flex="2" gap={10} flexDirection="column">
          <Flex>
            <Flex flex="1">
              <Text fontSize="12px">2001-2010</Text>
            </Flex>
            <Flex flex="3" flexDirection="column">
              <Heading fontSize="14px">
                Primary school[Vuk Stefanovic Karadzic]
              </Heading>
              <Text fontSize="12px" mt="10px">
                I attended primary school at Vuk Stefanović Karadžić in Doboj.
                Named after the renowned Serbian philologist and reformer, the
                school provided a solid foundation in education and personal
                development. During my time there, I benefited from a supportive
                learning environment and engaged in a variety of academic and
                extracurricular activities that helped shape my early years. The
                school's emphasis on learning and community involvement played a
                significant role in my growth and development.
              </Text>
            </Flex>
          </Flex>
          <Flex>
            <Flex flex="1">
              <Text fontSize="12px">2011/2014</Text>
            </Flex>
            <Flex flex="3" flexDirection="column">
              <Heading fontSize="14px">
                High School[Saobracajna i Electro]
              </Heading>
              <Text fontSize="12px" mt="10px">
                I attended Srednja saobraćajna i elektro škola in Doboj, where I
                focused on electrical engineering. This experience provided me
                with foundational knowledge in the field and was an important
                step in my educational journey.
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Flex flexDirection={["column","column","row","row"]} width="100%" py={4}>
        <Flex flex="1">
          <Heading fontSize="16px" mb="10px">Skills & Expertise</Heading>
        </Flex>
        <Flex flex="2" gap={10} flexDirection="column">
          <Flex>
            <Flex flex="1"></Flex>
            <Flex flex="3" flexDirection="column" w={["300px"]}>
              <UnorderedList styleType="none">
                <ListItem>
                  <Flex gap={1} align="center">
                    <FaHtml5 /> HTML
                  </Flex>
                </ListItem>
                <ListItem>
                  <Flex gap={1} align="center">
                    <FaCss3Alt /> CSS
                  </Flex>{" "}
                </ListItem>
                <ListItem>
                  <Flex gap={1} align="center">
                    <FaJs /> JS
                  </Flex>{" "}
                </ListItem>
                <ListItem>
                  <Flex gap={1} align="center">
                    <FaReact /> REACT JS
                  </Flex>{" "}
                </ListItem>
                <ListItem>
                    <Flex gap={1} align="center">
                    <AiFillThunderbolt />
                    CHAKRA UI
                    </Flex>
                     </ListItem>
                <ListItem>
                  <Flex  gap={1} align="center">
                    <FaCodeBranch /> VERSION CONTROL
                  </Flex>{" "}
                </ListItem>
                <ListItem>
                  <Flex  gap={1} align="center">
                    <FaLightbulb /> PROBLEM SOLVING
                  </Flex>{" "}
                </ListItem>
              </UnorderedList>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
