import { Box, Tabs } from "@chakra-ui/react";
import HomePage from './HomePage.js';
import ResumePage from './ResumePage.js';
import ExperiencePage from './ExperiencePage.js';
import ContactPage from './ContactPage.js';

function Main() {
    const animation = { animation: "fade-in 4000ms" };

    return (
        <Box data-state="open" _open={animation}>
            <Tabs.Root defaultValue="home" width="100%" variant="subtle" fontFamily="body" color="secondary" fitted lazyMount unmountOnExit>
                <Tabs.List>
                    <Tabs.Trigger fontSize="xl" height="5vh" value="home">Home</Tabs.Trigger>
                    <Tabs.Trigger fontSize="xl" height="5vh" value="resume">Resume</Tabs.Trigger>
                    <Tabs.Trigger fontSize="xl" height="5vh" value="experience">Experience</Tabs.Trigger>
                    <Tabs.Trigger fontSize="xl" height="5vh" value="contact">Contact</Tabs.Trigger>
                    <Tabs.Indicator rounded="l2" />
                </Tabs.List>
                <Tabs.Content value="home">
                    <HomePage/>
                </Tabs.Content>
                <Tabs.Content value="resume"><ResumePage /></Tabs.Content>
                <Tabs.Content value="experience"><ExperiencePage /></Tabs.Content>
                <Tabs.Content value="contact"><ContactPage /></Tabs.Content>
            </Tabs.Root>
        </Box>
    );
}



export default Main;