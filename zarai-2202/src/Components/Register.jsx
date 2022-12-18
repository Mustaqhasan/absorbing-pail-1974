import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
 
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { useState } from "react";


export default function Register() {
 
  return (
    <>
      
      <Flex minH={"100vh"} align={"center"} justify={"left"} textAlign={"left"}>
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"} textAlign={"left"}>
            <Heading fontSize={"4xl"} textAlign={"left"}>
              Register
            </Heading>
            {/* <Text fontSize={'lg'} color={'gray.600'}>
              to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
            </Text> */}
          </Stack>
          <Box>
            <Stack spacing={4}>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"left"}
                  textAlign={"left"}
                >
                  <Text>
                    IF YOU STILL DON'T HAVE A ZARA.COM ACCOUNT, USE THIS OPTION
                    TO ACCESS THE REGISTRATION FORM.
                  </Text>
                </Stack>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"left"}
                  textAlign={"left"}
                >
                  <Text>
                    BY GIVING US YOUR DETAILS, PURCHASING IN ZARA.COM WILL BE
                    FASTER AND AN ENJOYABLE EXPERIENCE.
                  </Text>
                </Stack>
                <RouterLink to={"/signup"}>
                  <Button
                    bg={"black"}
                    color={"white"}
                    textAlign={"left"}
                    
                  >
                    CREATE ACCOUNT
                  </Button>
                </RouterLink>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </>
  );
}
