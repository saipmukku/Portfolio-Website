import { Box, Image, Flex, Text } from "@chakra-ui/react";
import { FaArrowLeft, FaArrowUp } from "react-icons/fa";

function ResumePage() {
    const isMobile = window.innerWidth <= 786;

    return (
        <>
            {isMobile ? MobileContent() : DesktopContent()}
        </>
    );
}

function DesktopContent() {
    return (
        <Flex direction="row" justify="space-evenly" align="center" width="100%">
            <Image src="/documents/resume.jpeg" fit="cover"
                onClick={() => window.open('/documents/Resume.pdf', 'ResumeWindow')} />
            <Flex direction="column" align="center">
                <Box animation="bounce" p={10}>
                    <FaArrowLeft size="50px" animation="bounce" />
                </Box>
                <Text fontFamily="heading" align="center" justify="center" fontSize="3xl">
                    Click to open in a new tab
                </Text>
            </Flex>
        </Flex>
    );
}

function MobileContent() {
    return (
        <Flex direction="column" justify="space-evenly" align="center" width="100%">
            <Image src="/documents/resume.jpeg" fit="cover"
                onClick={() => window.open('/documents/Resume.pdf', '_blank')} />
            <Flex direction="column" align="center" p={10}>
                <Box animation="bounce">
                    <FaArrowUp size="50px" animation="bounce" />
                </Box>
                <Text fontFamily="heading" align="center" justify="center" fontSize="2xl">
                    Click to open in a new tab
                </Text>
            </Flex>
        </Flex>
    );
}

export default ResumePage;