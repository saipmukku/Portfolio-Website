import { Button, ClipboardRoot, Image, Flex, Link } from "@chakra-ui/react";
import { MdEmail } from "react-icons/md";
import { ClipboardButton } from '../components/ui/clipboard';
import { RiMailLine } from "react-icons/ri"

function ContactPage() {
    return (
        <Flex direction="column" height="100%" width="100%" justify="center" align="center" p={16}>
            <Image src="/documents/leo.png" borderRadius="full" height="420px" width="420px" />
            <Flex direction="row" width="50vw" justify="space-evenly" p={10}>
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
                    <Link href="https://www.github.com/saipmukku" target="_blank" rel="noopener noreferrer">
                        <Image src="documents/githublogo.png" height="64px" width="64px" />
                    </Link>
                </Flex>
            </Flex>
        </Flex>
    );
}

export default ContactPage;