import { Box, Divider, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { copyIcon, generateIcon } from "../../assets/svgs/svg";
import CustomButton from "../../components/CustomButton/customButton";
import NavBar from "../../components/NavBar";
import { generatePhrase } from "../../utils.js/helpers";

const GeneratePassphrase = ({ handleVerify }) => {
    const [words, setWords] = useState(generatePhrase());

    const generateNew = () => {
        setWords(generatePhrase());
    }

    return (
        <NavBar>
            <Box w="100%">
                <Box
                    w="40%"
                    mx="auto"
                    my="30px"
                    p="20px"
                    boxShadow="rgba(0, 0, 0, 0.05) 0px 0px 0px 1px"
                    borderRadius="8px"
                >
                    <Text fontSize="40px" fontWeight="bold">
                        Setup Your Secure PassPhrase
                    </Text>
                    <Divider />
                    <Box my="10px" color="brand.gray">
                        <Text>
                            Ensure to write down the following key words in order and keep
                            them safe somewhere.
                        </Text>

                        <Box
                            boxShadow="rgba(17, 17, 26, 0.05) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px"
                            p="15px"
                            my="20px"
                            borderRadius="4px"
                            mx="10px"
                        >
                            <SimpleGrid columns={3} gap="15px">
                                {words.map((res, index) => (
                                    <Box bg="#F9F9F9" color="black">
                                        <Flex
                                            alignItems="center"
                                            fontSize="14px"
                                            py="10px"
                                            mx="20px"
                                        >
                                            <Text color="brand.gray">{index + 1}</Text>
                                            <Text ml="10px">{res}</Text>
                                        </Flex>
                                    </Box>
                                ))}
                            </SimpleGrid>
                        </Box>

                        <Flex justifyContent="space-evenly" w="100%" mx="auto" mt="40px">
                            <CustomButton
                                w="180px"
                                bg="brand.white"
                                border="1px solid black"
                                color="black"
                                hoverBg="black"
                                hoverColor="brand.white"
                                testid="on-close"
                            // href="/create-wallet"
                            >
                                <Box>{copyIcon}</Box>
                                <Text ml="15px">Copy</Text>
                            </CustomButton>

                            <CustomButton
                                w="180px"
                                bg="brand.white"
                                border="1px solid black"
                                color="black"
                                hoverBg="black"
                                hoverColor="brand.white"
                                testid="on-close"
                                onClick={() => generateNew()}
                            >
                                <Box>{generateIcon}</Box>
                                <Text ml="15px">Generate New</Text>
                            </CustomButton>
                        </Flex>

                        <Text color="black" my="20px" textAlign="center" fontSize="14px">Note: Ensure to keep it safe and do not share with any one else.</Text>

                        <CustomButton
                            w="100%"
                            bg="black"
                            border="1px solid black"
                            color="white"
                            hoverBg="white"
                            hoverColor="black"
                            testid="on-close"
                            onClick={() => { console.log(words); handleVerify(words) }}
                            mt="20px"
                        >
                            Proceed
                        </CustomButton>
                    </Box>
                </Box>
                <Box color="brand.gray" textAlign="center">
                    <Text>Already have a wallet ?</Text>
                    <Text as="u" mt="10px" cursor="pointer">
                        Import Existing Wallet
                    </Text>
                </Box>
            </Box>
        </NavBar>
    );
};

export default GeneratePassphrase;