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
    useBreakpointValue,
    Image,
  } from '@chakra-ui/react';
import { useContext, useEffect, useState } from 'react';
import axios from "axios";
import {Link as RouterLink} from "react-router-dom"
import { FaCartPlus } from "react-icons/fa";
import { AuthContext } from '../Context/AuthContextProvider';
import Footer from './Footer';
import { CartContext } from '../Context/CartContextProvider';
  
  export default function NewPersonalDetails() {
    const [but1, setBut1] = useState(false);
    const [but2, setBut2] = useState(false);
    const [but3, setBut3] = useState(false);
    const [but4, setBut4] = useState(false);
    const {state,toggleAuth}=useContext(AuthContext)
    const {total_price}=useContext(CartContext)
const {isAuth,name,adress,locality,phone}=state
    function handlebut1() {
      setBut1(true);
      setBut2(false);
      setBut3(false);
      setBut4(false);
    }
    function handlebut2() {
      setBut1(false);
      setBut2(true);
      setBut3(false);
      setBut4(false);
    }
    function handlebut3() {
      setBut1(false);
      setBut2(false);
      setBut3(true);
      setBut4(false);
    }
    function handlebut4() {
      setBut1(false);
      setBut2(false);
      setBut3(false);
      setBut4(true);
    }
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
      const myname= e.target.type==="select" ? placeholder : "State"
      setData({...data, [myname]:value})
    };
    // let dataArr;
    let dataObj=JSON.parse(localStorage.getItem("newdetails")) || {}
    let auth;
    // let name;
    // let adress;
    // let locality;
    // let phone;

    const handleSubmit=(e)=>{
      e.preventDefault()
    //   dataArr.push(data)
      localStorage.setItem("newdetails", JSON.stringify(data))
        toggleAuth(name=dataObj.name, auth=true, adress=dataObj.adress,locality=dataObj.locality,phone=locality.phone)
    }

    return (
      <>
      <Flex
        bg={useColorModeValue("blackAlpha.400", "gray.800")}
        color={useColorModeValue("white", "white")}
        minH={"150px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        // borderBottom={1}
        // borderStyle={"solid"}
        // borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"start"}
        // className={styles.header}
        position={"fixed"}
        top={"0"}
        left={"0"}
        width={"100%"}
        transition={"0.6s"}
        zIndex={"100000"}
        backgroundColor={"white"}
      >
        <Flex
          gap={60}
          flex={{ base: 1 }}
          justify={{ base: "center", md: "start" }}
        >
          <Box></Box>

        

          <RouterLink to={"/"}>
            <Box
              textAlign={useBreakpointValue({ base: "center", md: "left" })}
              fontFamily={"heading"}
              //   color={useColorModeValue('gray.800', 'white')}
              position={"relative"}
              transition="0.6s"
            >
              <Image
                width={"170px"}
                // src="https://payload177.cargocollective.com/1/7/226816/5848049/prt_310x400_1368705984_o.jpg"
                // src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/9b991924668429.56338097af083.jpg"
                // src="https://c8.alamy.com/comp/2J055AP/spain-11th-mar-2022-in-this-photo-illustration-a-zara-logo-seen-displayed-on-a-smartphone-with-a-zara-logo-in-the-background-photo-by-thiago-prudenciosopa-imagessipa-usa-credit-sipa-usaalamy-live-news-2J055AP.jpg"
                src="https://www.freepnglogos.com/uploads/zara-brand/clothing-brand-zara-hd-zara-logo-2020-3.jpg"
              />
            </Box>
          </RouterLink>
          {/* <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
              <DesktopNav />
            </Flex> */}
        </Flex>
        {/* <Flex position={"relative"} marginRight={20}>
            <RouterLink to={"/search"}>
              <Button bg={"none"} borderBottom={"1px"}>
                Search
              </Button>
            </RouterLink>
          </Flex> */}

        <Flex position={"relative"} marginRight={20}>
          {/* <Input borderRight={"none"} borderTop={"none"} borderLeft={"none"} borderColor={"black"} placeholder="Search"></Input> */}
          <RouterLink to={"/search"}>
            <Button bg={"none"} color={"black"} borderBottom={"1px"}>
              Search
            </Button>
          </RouterLink>
        </Flex>
        <Stack
          flex={{ base: 1, md: 0 }}
          //   justify={"flex-end"}
          justify={{ base: "center", md: "start" }}
          //   alignItems={{base:"baseline"}}
          direction={"row"}
          spacing={10}
          position={"relative"}
        >
          <RouterLink to={"/login"}>
              <Button
                as={"a"}
                fontSize={"lg"}
                fontWeight={700}
                variant={"link"}
                href={"#"}
              >
                {isAuth ? name : "LOG IN"}
              </Button>
            </RouterLink>
          <RouterLink to={"/help"}>
            <Button
              as={"a"}
              fontSize={"lg"}
              fontWeight={700}
              variant={"link"}
              href={"#"}
            >
              HELP
            </Button>
          </RouterLink>

          {/* <RiLuggageCartFill/> */}
          <RouterLink position={"relative"} to={"/cart"}>
            <Stack color={useColorModeValue("gray.800", "white")} width={"10"}>
              <FaCartPlus size={"md"} />
            </Stack>
          </RouterLink>
        </Stack>
      </Flex>
      
      <Flex
        minH={'110vh'}
        align={'center'}
        justify={"left"}
        marginLeft={"14"}>
        <Stack spacing={8} mx={'auto'} maxW={'6xl'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>WRITE YOUR PERSONAL DETAILS</Heading>
            {/* <Text fontSize={'lg'} color={'gray.600'}>
              to enjoy all of our cool <Link color={'blue.400'}>features</Link>
            </Text> */}
          </Stack>
          <Box textAlign={"left"}>
            <Flex gap={50}>
                <Stack >
                <form onSubmit={handleSubmit}>
                  <Input height={"7"} width="2xl" type="name" placeholder='name' onChange={inputHandler} />
                  <br />
                  <br />
                  <Input height={"7"} type="email" placeholder='email' onChange={inputHandler}/>
                  <br />
                  <br />
                  <Input height={"7"} type="password" placeholder='password' onChange={inputHandler} />
                  <br />
                  <br />
                  <Input height={"7"} type="text" placeholder='address' onChange={inputHandler} />
                  <br />
                  <br />
                  <Input height={"7"} type="text" placeholder='locality' onChange={inputHandler} />
                  <br />
                  <br />
                  <Input height={"7"} type="number" placeholder='phone' onChange={inputHandler} />
                  <br />
                  <br />
                  <Select height={"7"} placeholder='state' onChange={inputHandler}>
                    {
                      country.map((item)=>(
                        <option key={item.state_id} value={item.state_name}>{item.state_name}</option>
                      ))
                    }
                  </Select>

                    
                  {/* <Input 
                  bg={'black'}
                  color={'white'}
                  _hover={{
                    bg: 'gray',
                  }} type={"submit"} value={"CREATE ACCOUNT"}/> */}
              </form>
              </Stack>
              <Stack>
              
              <FormControl id="repeatpassword">
                <Input  height={"7"} width={"96"} placeholder='REPEAT PASSWORD' type="password" />
              </FormControl>
              <br />
              <FormControl id="pincode">
                <Input  height={"7"} placeholder='pincode' onChange={inputHandler} type="number" />
              </FormControl>
              <FormControl id="more">
                <FormLabel>MORE INFO</FormLabel>
                <Input  height={"7"} placeholder='OPTIONAL' type="text" />
              </FormControl>
              <FormControl id="city">
                <Input  height={"7"} placeholder='CITY' type="text" />
              </FormControl>
              </Stack>
            </Flex>
          </Box>
        </Stack>
      </Flex>
      <Stack background={"black"} height={"200px"} width={"100%"} position={"fixed"} top={"650px"} transition={"0.6s"}
        zIndex={"100000"}
        backgroundColor={"white"}>
            {/* <Box></Box> */}
            <Flex gap={5} justify={"flex-end"}>
            <Box>
                  <Text><b>Total:</b> {total_price}</Text>
                </Box>
                <RouterLink to={"/payment"}>

                <Stack width={"300px"} color={"white"} ><Button background={"black"}>CONTINUE</Button></Stack>
                </RouterLink>
            </Flex>

      </Stack>
      <div style={{marginTop:"-60vh"}} >
    <Footer/>
    </div>
      </>
    );
  }