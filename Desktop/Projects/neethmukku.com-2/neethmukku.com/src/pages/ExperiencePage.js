import { Card, Collapsible, Flex, Grid, Image, GridItem, HStack, Separator, StatLabel, StatRoot,
StatValueText, Text } from "@chakra-ui/react";

function ExperiencePage() {
    const aws = generateJobCards("documents/awslogo.png", "20vh", "Amazon Web Services", "Software Development Engineer Intern",
        "May 2024 - August 2024", ["TypeScript", "Java", "AWS Lambda", "AWS API Gateway", "AWS CLI", "Kotlin"]);
    const uhg = generateJobCards("documents/uhglogo.png", "3vh", "UnitedHealth Group", "Software Development Engineer Intern",
        "June 2023 - August 2023", ["Vite", "React", "Python", "Django", "PostgreSQL", "Kubernetes"]);
    const arl = generateJobCards("documents/arllogo.png", "12vh", "Army Research Laboratory", "Research Intern",
        "June 2022 - August 2022", ["Python", "Raspberry Pi", "Research"]);
    const dennys = generateJobCards("documents/dennyslogo.png", "20vh", "Denny's", "Service Assistant",
        "June 2021 - August 2021", ["Teamwork"]);

    return (
        <Flex direction="column" justify="center" align="center">
            <Grid gap="6vh">
                <GridItem>
                        <Collapsible.Root width="75vw">
                            <Collapsible.Trigger>{aws}</Collapsible.Trigger>
                            <Collapsible.Content textAlign="center" fontSize="xl" pt={8}>
                                I worked as a software engineer intern at AWS where I was responsible 
                                for on a project that updates user permissions for AWS's Identity and
                                Access Management department. I used AWS Lambda for calling
                                validation functions for the permission updates, and AWS API
                                Gateway to call the lambda when a CLI call was made. Business logic
                                was coded in Java/Kotlin, and AWS infrastructure was developed in
                                TypeScript.
                                <Flex direction="row" justify="space-evenly" p={6}>
                                    <Image src="documents/ts.png" maxHeight="100px" maxWidth="100px" />
                                    <Image src="documents/java.svg" maxHeight="100px" maxWidth="100px" />
                                    <Image src="documents/awslambda.png" maxHeight="100px" maxWidth="100px" />
                                    <Image src="documents/apigw.png" maxHeight="100px" maxWidth="100px" />
                                    <Image src="documents/cli.png" maxHeight="100px" maxWidth="100px" />
                                    <Image src="documents/kotlin.png" maxHeight="100px" maxWidth="100px" />
                                </Flex>
                            </Collapsible.Content>
                        </Collapsible.Root>
                </GridItem>
                <GridItem>
                    <Collapsible.Root width="75vw">
                        <Collapsible.Trigger>{uhg}</Collapsible.Trigger>
                        <Collapsible.Content textAlign="center" fontSize="xl" pt={8}>
                            I worked as a software engineer intern at UnitedHealth Group
                            where I worked on a project in an intern team for managing help
                            desk ticket as they came in across the enterprise on a dashboard. 
                            The dashboard was a website, and my intern team used Vite as the
                            React framework for the frontend, and MaterialUI components for 
                            building the website layout. Our team also used a proprietary
                            database for grabbing help desk ticket data, and we used Django
                            and PostgreSQL to manage this database. Finally, the application
                            was deployed using Kubernetes.
                            <Flex direction="row" justify="space-evenly" p={6}>
                                <Image src="documents/vite.png" maxHeight="100px" maxWidth="100px" />
                                <Image src="documents/react.png" maxHeight="100px" maxWidth="100px" />
                                <Image src="documents/python.png" maxHeight="100px" maxWidth="100px" />
                                <Image src="documents/django.png" maxHeight="100px" maxWidth="100px" />
                                <Image src="documents/postgresql.png" maxHeight="100px" maxWidth="100px" />
                                <Image src="documents/kubernetes.png" maxHeight="100px" maxWidth="100px" />
                            </Flex>
                        </Collapsible.Content>
                    </Collapsible.Root>
                </GridItem>
                <GridItem>
                    <Collapsible.Root width="75vw">
                        <Collapsible.Trigger>{arl}</Collapsible.Trigger>
                        <Collapsible.Content textAlign="center" fontSize="xl" pt={8}>
                            This was a research role where a team of undergraduate interns
                            of various STEM majors worked on an engineering problem under a
                            mentor. The problem was to have a drone prototype survive a fall
                            from terminal velocity and then collect data once it reaches the
                            ground. The drone prototype was equipped with a Raspberry Pi, and
                            we used Python and the various sensors on the prototype to locate
                            and store data on an ArUco marker.
                            <Flex direction="row" justify="space-evenly" p={6}>
                                <Image src="documents/python.png" maxHeight="100px" maxWidth="100px" />
                            </Flex>
                        </Collapsible.Content>
                    </Collapsible.Root>
                </GridItem>
                <GridItem>
                    <Collapsible.Root width="75vw">
                        <Collapsible.Trigger>{dennys}</Collapsible.Trigger>
                        <Collapsible.Content textAlign="center" fontSize="xl" pt={8} pb={12}>
                            The summer before college, I was cleaning dishes and bussing tables
                            at Denny's.
                        </Collapsible.Content>
                    </Collapsible.Root>
                </GridItem>
            </Grid>
        </Flex>
    );
}

function generateJobCards(imgPath, imgHeight, company, role, employmentDates, skills) {
    return (
        <Card.Root width="75vw" maxWidth="1500px" boxShadow="subtle">
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
                                {generateSkills(skills)}
                            </HStack>
                        </StatRoot>
                    </Flex>
                </Flex>
            </Card.Body>
        </Card.Root>
    );
}

function generateSkills(skills) {
    return skills.map((skill) => (
      <StatValueText key={skill} fontSize="xl">{skill}</StatValueText>
    ));
}

export default ExperiencePage;