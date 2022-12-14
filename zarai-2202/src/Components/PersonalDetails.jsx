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
    Select,
  } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import axios from "axios";
import {Link as RouterLink} from "react-router-dom"
  
  export default function PersonalDetails() {
    const [country, setCountry] =useState([])
    const [data, setData]=useState({})

    useEffect(()=>{
      axios.get(`http://localhost:8080/states`)
      .then((res)=>{
        console.log(res.data)
        setCountry(res.data)
      })
      
    },[])

    const inputHandler=(e)=>{
      e.preventDefault()
      const {placeholder,value}=e.target;
      setData({...data, [placeholder]:value})
    };
    let dataArr;
    dataArr=JSON.parse(localStorage.getItem("users")) || []
    const handleSubmit=(e)=>{
      e.preventDefault()
      dataArr.push(data)
      localStorage.setItem("users", JSON.stringify(dataArr))

    }

    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={"left"}
        marginLeft={"-64"}>
        <Stack spacing={8} mx={'auto'} maxW={'6xl'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Personal Details</Heading>
            {/* <Text fontSize={'lg'} color={'gray.600'}>
              to enjoy all of our cool <Link color={'blue.400'}>features</Link>
            </Text> */}
          </Stack>
          <Box textAlign={"left"}>
            <Flex gap={50}>
                <Stack >
                <form onSubmit={handleSubmit}>
                  <Input width="2xl" type="name" placeholder='name' onChange={inputHandler} />
                  <br />
                  <Input type="email" placeholder='email' onChange={inputHandler}/>
                  <br />
                  <Input type="password" placeholder='password' onChange={inputHandler} />
                  <br />
                  <Input type="text" placeholder='address' onChange={inputHandler} />
                  <br />
                  <Input type="text" placeholder='locality' onChange={inputHandler} />
                  <br />
                  <Select placeholder='state' onChange={inputHandler}>
                    {
                      country.map((item)=>(
                        <option key={item.state_id} value={item.state_name}>{item.state_name}</option>
                      ))
                    }
                  </Select>

                    
                  <Input 
                  bg={'black'}
                  color={'white'}
                  _hover={{
                    bg: 'gray',
                  }} type={"submit"} value={"CREATE ACCOUNT"}/>
              </form>
              </Stack>
              <Stack>
              
              <FormControl id="repeatpassword">
                <Input width={"96"} placeholder='REPEAT PASSWORD' type="password" />
              </FormControl>
              <FormControl id="pincode">
                <Input placeholder='PINCODE' type="number" />
              </FormControl>
              <FormControl id="more">
                <FormLabel>MORE INFO</FormLabel>
                <Input placeholder='OPTIONAL' type="text" />
              </FormControl>
              <FormControl id="city">
                <Input placeholder='CITY' type="text" />
              </FormControl>
              </Stack>
            </Flex>
          </Box>
        </Stack>
      </Flex>
    );
  }