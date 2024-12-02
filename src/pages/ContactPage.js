import { Button, ClipboardRoot, Image, Flex, Link, Text, Tooltip } from "@chakra-ui/react";
import { MdEmail } from "react-icons/md";
import { ClipboardButton } from '../components/ui/clipboard';
import { RiMailLine } from "react-icons/ri"

function ContactPage() {
    const isMobile = window.innerWidth <= 786;

    return (
        <>
            {isMobile ? MobileContent() : DesktopContent()}
        </>
    );
}

function DesktopContent() {
    return (
        <Flex direction="column" height="100%" justify="center" align="center" pt={12} overflowX="hidden">
            <Image src="/documents/leo.png" borderRadius="full" height="420px" width="420px" />
            <Flex direction="row" width="50vw" justify="space-evenly" align="center" p={8} gap="4">
                <Flex direction="column" gap="10px">
                    <ClipboardRoot value="saipmukku@gmail.com" justify="center" align="center">
                        <MdEmail size="64px"/>
                        <ClipboardButton />
                    </ClipboardRoot>
                    <Button size="sm" p={2} variant="surface">
                        <Link href="mailto:saipmukku@gmail.com">
                            <RiMailLine /> Open Email
                        </Link>
                    </Button>
                </Flex>
                <Flex>
                    <Link href="https://www.linkedin.com/in/saipmukku" target="_blank" rel="noopener noreferrer">
                        <Image src="documents/linkedinlogo.png" height="64px" width="64px" />
                    </Link>
                </Flex>
                <Flex>
                    <Link href="https://www.github.com/saipmukku" target="_blank" rel="noopener noreferrer" border="24px solid rounded">
                        <Image src="documents/githublogowhite.png" height="64px" width="64px" />
                    </Link>
                </Flex>
                <Flex direction="column" align="center">
                    <Image src="documents/instagramlogo.png" height="64px" width="64px" />
                    <Text p={2}>@neeth1234</Text>
                </Flex>
            </Flex>
        </Flex>
    );
}

function MobileContent() {
    return (
        <Flex direction="column" height="100%" justify="center" align="center" pt={12} overflowX="hidden">
            <Image src="/documents/leo.png" borderRadius="full" height="350px" width="350px" />
            <Flex direction="column" width="50vw" justify="space-evenly" align="center" p={8} gap="4">
                <Flex direction="column" gap="10px">
                    <ClipboardRoot value="saipmukku@gmail.com" justify="center" align="center">
                        <MdEmail size="64px"/>
                        <ClipboardButton />
                    </ClipboardRoot>
                    <Button size="sm" p={2} variant="surface">
                        <Link href="mailto:saipmukku@gmail.com">
                            <RiMailLine /> Open Email
                        </Link>
                    </Button>
                </Flex>
                <Flex>
                    <Link href="https://www.linkedin.com/in/saipmukku" target="_blank" rel="noopener noreferrer">
                        <Image src="documents/linkedinlogo.png" height="64px" width="64px" />
                    </Link>
                </Flex>
                <Flex>
                    <Link href="https://www.github.com/saipmukku" target="_blank" rel="noopener noreferrer" border="24px solid rounded">
                        <Image src="documents/githublogowhite.png" height="64px" width="64px" />
                    </Link>
                </Flex>
                <Flex direction="column" align="center">
                    <Image src="documents/instagramlogo.png" height="64px" width="64px" />
                    <Text p={2}>@neeth1234</Text>
                </Flex>
            </Flex>
        </Flex>
    );
}

export default ContactPage;