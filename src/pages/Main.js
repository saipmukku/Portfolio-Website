import { Box, Tabs } from "@chakra-ui/react";
import HomePage from './HomePage.js';
import ResumePage from './ResumePage.js';
import ExperiencePage from './ExperiencePage.js';
import ContactPage from './ContactPage.js';

function Main() {
    const animation = { animation: "fade-in 4000ms" };

    return (
        <Box data-state="open" _open={animation}>
            <Tabs.Root defaultValue="home" variant="line" justify="center" fontFamily="heading" color="secondary" size="lg" lazyMount unmountOnExit>
                <Tabs.List bg="bg.muted" rounded="12">
                    <Tabs.Trigger fontSize="xl" value="home">Home</Tabs.Trigger>
                    <Tabs.Trigger fontSize="xl" value="resume">Resume</Tabs.Trigger>
                    <Tabs.Trigger fontSize="xl" value="experience">Experience</Tabs.Trigger>
                    <Tabs.Trigger fontSize="xl" value="contact">Contact</Tabs.Trigger>
                    <Tabs.Indicator rounded="12" />
                </Tabs.List>
                <Tabs.Content value="home"><HomePage/></Tabs.Content>
                <Tabs.Content value="resume"><ResumePage /></Tabs.Content>
                <Tabs.Content value="experience"><ExperiencePage /></Tabs.Content>
                <Tabs.Content value="contact"><ContactPage /></Tabs.Content>
            </Tabs.Root>
        </Box>
    );
}

export default Main;