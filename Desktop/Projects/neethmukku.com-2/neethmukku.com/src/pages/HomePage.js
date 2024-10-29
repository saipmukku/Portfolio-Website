import { Flex, Heading, Icon, Image, Separator, Text } from "@chakra-ui/react";
import { FaArrowDown } from "react-icons/fa6";

function HomePage() {

    return (
        <Flex direction="column" height="100%" width="100%">
            <Flex direction="row" height="93.5vh" minHeight="800px" minWidth="1000px">
                <Flex flex={1} p={12}>
                    <Image src="/documents/portrait.jpeg" borderRadius="full" />
                </Flex>
                <Flex direction="column" flex={2} justify="center" align="center" fontFamily="body">
                    <Heading size="7xl" p={6} textAlign="center">My name is Saipraneeth,</Heading>
                    <Heading size="4xl" textAlign="center">but they call me Neeth</Heading>
                    <Flex direction="column" p={20}>
                        <Icon animation="bounce" fontSize="75px">
                            <FaArrowDown size="2xl" />
                        </Icon>
                    </Flex>
                </Flex>
            </Flex>
            <Separator />
            <Flex p={10}>
                <Text fontSize="3xl" textAlign="center">
                    I am currently a senior at the University of Maryland, College Park, 
                    studying Computer Science with a minor in General Business. I have 
                    experience building software for various companies, and am always 
                    looking for ways to expand my skillset. Click through the tabs to 
                    view my resume, experience, and contact me with inquiries!
                </Text>
            </Flex>
        </Flex>
    );
}

export default HomePage;