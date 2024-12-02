import { useState } from 'react';
import { Card, Collapsible, Flex, Grid, IconButton, Image, GridItem, HStack, Separator, StatLabel, StatRoot,
StatValueText, Text, VStack } from "@chakra-ui/react";
import { BsArrowDownUp } from "react-icons/bs";

function ExperiencePage() {
    const isMobile = window.innerWidth <= 786;

    return (
        <>
            {isMobile ? MobileContent() : DesktopContent()}
        </>
    );
}

function DesktopContent() {
    const [collapseAll, setCollapseAll] = useState(false);
    const aws = generateJobCards("documents/awslogo.png", "20vh", "Amazon Web Services", "Software Development Engineer Intern",
        "May 2024 - August 2024", ["TypeScript", "Java", "AWS Lambda", "AWS API Gateway", "AWS CLI", "Kotlin"]);
    const uhg = generateJobCards("documents/uhglogo.png", "3vh", "UnitedHealth Group", "Software Development Engineer Intern",
        "June 2023 - August 2023", ["Vite", "React", "Python", "Django", "PostgreSQL", "Kubernetes"]);
    const arl = generateJobCards("documents/arllogo.png", "12vh", "Army Research Laboratory", "Research Intern",
        "June 2022 - August 2022", ["Python", "Raspberry Pi", "Research"]);
    const dennys = generateJobCards("documents/dennyslogo.png", "20vh", "Denny's", "Service Assistant",
        "June 2021 - August 2021", ["Teamwork"]);
    const awsContent = "I worked as a software engineer intern at AWS where I was responsible for a project that updates user permissions for AWS's Identity and Access Management department. I used AWS Lambda for calling validation functions for the permission updates, and AWS API Gateway to call the lambda when a CLI call was made. Business logic was coded in Java/Kotlin, and AWS infrastructure was developed in TypeScript."
    const uhgContent = "I worked as a software engineer intern at UnitedHealth Group where I worked on a project in an intern team for managing help desk ticket as they came in across the enterprise on a dashboard. The dashboard was a website, and my intern team used Vite as the React framework for the frontend, and MaterialUI components for building the website layout. Our team also used a proprietary database for grabbing help desk ticket data, and we used Django and PostgreSQL to manage this database. Finally, the application was deployed using Kubernetes."
    const arlContent = "This was a research role where a team of undergraduate interns of various STEM majors worked on an engineering problem under a mentor. The problem was to have a drone prototype survive a fall from terminal velocity and then collect data once it reaches the ground. The drone prototype was equipped with a Raspberry Pi, and we used Python and the various sensors on the prototype to locate and store data on an ArUco marker.";
    const dennysContent = "The summer before college, I was cleaning dishes and bussing tables at Denny's.";

    return (
        <Flex direction="column" justify="center" align="center">
            <Flex p={2} align="center">
                <Text p={8}>Collapse All</Text>
                <IconButton onClick={() => setCollapseAll(!collapseAll)}>
                    <BsArrowDownUp />
                </IconButton>
            </Flex>
            <Flex direction="column" justify="center" align="center" gap="6vh">
                {generateFullCollapsible(collapseAll, aws, awsContent, ["documents/ts.png", "documents/java.svg", "documents/awslambda.png", "documents/apigw.png", "documents/cli.png", "documents/kotlin.png"], 20, "100px")}
                {generateFullCollapsible(collapseAll, uhg, uhgContent, ["documents/vite.png", "documents/react.png", "documents/python.png", "documents/django.png", "documents/postgresql.png", "documents/kubernetes.png"], 20, "100px")}
                {generateFullCollapsible(collapseAll, arl, arlContent, ["documents/python.png"], 20, "100px")}
                {generateFullCollapsible(collapseAll, dennys, dennysContent, [], 20, "100px")}
            </Flex>
            <Flex p={2} align="center">
                <Text p={8}>Collapse All</Text>
                <IconButton onClick={() => setCollapseAll(!collapseAll)}>
                    <BsArrowDownUp />
                </IconButton>
            </Flex>
        </Flex>
    );
}

function MobileContent() {
    const [collapseAll, setCollapseAll] = useState(false);
    const aws = generateMobileJobCards("documents/awslogo.png", "20vh", "Amazon Web Services", "Software Development Engineer Intern",
        "May 2024 - August 2024", ["TypeScript", "Java", "AWS Lambda", "AWS API Gateway", "AWS CLI", "Kotlin"]);
    const uhg = generateMobileJobCards("documents/uhglogo.png", "3vh", "UnitedHealth Group", "Software Development Engineer Intern",
        "June 2023 - August 2023", ["Vite", "React", "Python", "Django", "PostgreSQL", "Kubernetes"]);
    const arl = generateMobileJobCards("documents/arllogo.png", "12vh", "Army Research Laboratory", "Research Intern",
        "June 2022 - August 2022", ["Python", "Raspberry Pi", "Research"]);
    const dennys = generateMobileJobCards("documents/dennyslogo.png", "20vh", "Denny's", "Service Assistant",
        "June 2021 - August 2021", ["Teamwork"]);
    const awsContent = "I worked as a software engineer intern at AWS where I was responsible for on a project that updates user permissions for AWS's Identity and Access Management department. I used AWS Lambda for calling validation functions for the permission updates, and AWS API Gateway to call the lambda when a CLI call was made. Business logic was coded in Java/Kotlin, and AWS infrastructure was developed in TypeScript."
    const uhgContent = "I worked as a software engineer intern at UnitedHealth Group where I worked on a project in an intern team for managing help desk ticket as they came in across the enterprise on a dashboard. The dashboard was a website, and my intern team used Vite as the React framework for the frontend, and MaterialUI components for building the website layout. Our team also used a proprietary database for grabbing help desk ticket data, and we used Django and PostgreSQL to manage this database. Finally, the application was deployed using Kubernetes."
    const arlContent = "This was a research role where a team of undergraduate interns of various STEM majors worked on an engineering problem under a mentor. The problem was to have a drone prototype survive a fall from terminal velocity and then collect data once it reaches the ground. The drone prototype was equipped with a Raspberry Pi, and we used Python and the various sensors on the prototype to locate and store data on an ArUco marker.";
    const dennysContent = "The summer before college, I was cleaning dishes and bussing tables at Denny's.";

    return (
        <Flex direction="column">
            <Flex p={2} align="center" justify="center">
                <Text p={8}>Collapse All</Text>
                <IconButton onClick={() => setCollapseAll(!collapseAll)}>
                    <BsArrowDownUp />
                </IconButton>
            </Flex>
            <Flex justify="center" align="center">
                <Grid gap="6vh">
                    <GridItem>
                        {generateFullCollapsible(collapseAll, aws, awsContent, ["documents/ts.png", "documents/java.svg", "documents/awslambda.png", "documents/apigw.png", "documents/cli.png", "documents/kotlin.png"], 5, "75px")}
                    </GridItem>
                    <GridItem>
                        {generateFullCollapsible(collapseAll, uhg, uhgContent, ["documents/vite.png", "documents/react.png", "documents/python.png", "documents/django.png", "documents/postgresql.png", "documents/kubernetes.png"], 5, "75px")}
                    </GridItem>
                    <GridItem>
                        {generateFullCollapsible(collapseAll, arl, arlContent, ["documents/python.png"], 5, "75px")}
                    </GridItem>
                    <GridItem>
                        {generateFullCollapsible(collapseAll, dennys, dennysContent, [], 5, "75px")}
                    </GridItem>
                </Grid>
            </Flex>
            <Flex p={2} align="center" justify="center">
                <Text p={8}>Collapse All</Text>
                <IconButton onClick={() => setCollapseAll(!collapseAll)}>
                    <BsArrowDownUp />
                </IconButton>
            </Flex>
        </Flex>
    );
}

function generateFullCollapsible(collapse, company, content, imgPath, gap, size) {
    const images = imgPath.map(img => (
        <GridItem>
            <Image src={img} maxHeight={size} maxWidth={size} />
        </GridItem>
    ));
    const tempCols = `repeat(${imgPath.length > 1 ? imgPath.length / 2 : imgPath.length}, 1fr)`;
    return (
        <Collapsible.Root width="75vw" open={collapse}>
            <Collapsible.Trigger>{company}</Collapsible.Trigger>
            <Collapsible.Content textAlign="center" fontSize="xl" pt={8}>
                {content}
                <Flex justify="center" pt={10} direction="row">
                    <Grid templateColumns={tempCols} gap={gap}>
                        {images}
                    </Grid>
                </Flex>
            </Collapsible.Content>
        </Collapsible.Root>
    );
}

function generateJobCards(imgPath, imgHeight, company, role, employmentDates, skills) {
    const allSkills = skills.map((skill) => (
        <StatValueText key={skill} fontSize="xl">{skill}</StatValueText>
    ));
    return (
        <Card.Root width="75vw" boxShadow="subtle">
            <Card.Body gap="2">
                <Flex direction="row" p={6}>
                    <Flex direction="column" flex={1} justify="center" align="center">
                        <Image src={imgPath} maxHeight="400px" maxWidth="400px" height={imgHeight} />
                        <Card.Title mt="10" fontSize="2xl">
                            {company}
                        </Card.Title>
                    </Flex>
                    <Flex direction="column" textAlign="center" justify="space-evenly" align="center" flex={1.75}>
                        <Text textAlign="center" fontSize="3xl">{role}</Text>
                        <Text fontSize="xl" pb={16}>{employmentDates}</Text>
                        <Separator pt={16} />
                        <StatRoot>
                            <StatLabel fontSize="2xl" p={2}>Skills</StatLabel>
                            <HStack gap="10px">
                                {allSkills}
                            </HStack>
                        </StatRoot>
                    </Flex>
                </Flex>
            </Card.Body>
        </Card.Root>
    );
}

function generateMobileJobCards(imgPath, imgHeight, company, role, employmentDates, skills) {
    const allSkills = skills.map((skill) => (
        <StatValueText key={skill} fontSize="xl">{skill}</StatValueText>
    ));
    return (
        <Card.Root width="75vw" maxWidth="1500px" boxShadow="subtle">
            <Card.Body gap="2">
                <Flex direction="column" p={6}>
                    <Flex direction="column" flex={1} justify="center" align="center">
                        <Image src={imgPath} maxHeight="400px" maxWidth="400px" height={imgHeight} />
                        <Card.Title mt="10" fontSize="2xl">
                            {company}
                        </Card.Title>
                    </Flex>
                    <Flex direction="column" textAlign="center" justify="space-evenly" align="center" flex={1.75}>
                        <Text textAlign="center" fontSize="3xl" p={8}>{role}</Text>
                        <Text fontSize="xl" pb={16}>{employmentDates}</Text>
                        <Separator pt={16} />
                        <StatRoot>
                            <StatLabel fontSize="2xl" p={2}>Skills</StatLabel>
                            <VStack gap="10px">
                                {allSkills}
                            </VStack>
                        </StatRoot>
                    </Flex>
                </Flex>
            </Card.Body>
        </Card.Root>
    );
}

export default ExperiencePage;