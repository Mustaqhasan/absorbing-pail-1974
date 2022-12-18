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
  
  export default function PersonalDetails() {
    const [but1, setBut1] = useState(false);
    const [but2, setBut2] = useState(false);
    const [but3, setBut3] = useState(false);
    const [but4, setBut4] = useState(false);
    const {state}=useContext(AuthContext)
const {isAuth,name}=state
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
      axios.get(`https://zara-server-app.onrender.com/states`)
      .then((res)=>{
        console.log(res.data)
        setCountry(res.data)
      })
      
    },[])

    const inputHandler=(e)=>{
      e.preventDefault()
      const {placeholder,value}=e.target;
      // const name= e.target.type==="select" ? placeholder : "State"
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
          <Box>
            <button
              style={{ backgroundColor: "gray" }}
              class="btn btn-primary"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasScrolling"
              aria-controls="offcanvasScrolling"
            >
              =
            </button>

            <div
              style={{ width: "300px" }}
              class="offcanvas offcanvas-start"
              data-bs-scroll="true"
              data-bs-backdrop="false"
              tabindex="-1"
              id="offcanvasScrolling"
              aria-labelledby="offcanvasScrollingLabel"
            >
              <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasScrollingLabel">
                  Offcanvas with body scrolling
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div
                style={{ color: "black", backgroundColor: "white" }}
                class="offcanvas-body"
              >
                <Flex
                cursor={"pointer"}
                  fontSize={"sm"}
                  position={"fixed"}
                  top={"60px"}
                  transition={"0.6s"}
                  zIndex={"100000"}
                  backgroundColor={"white"}
                  gap={2}
                >
                  <Text onClick={() => handlebut1()}>WOMAN</Text>
                  <Text onClick={() => handlebut2()}>MAN</Text>
                  <Text onClick={() => handlebut3()}>KIDS</Text>
                  <Text onClick={() => handlebut4()}>ZARA ORIGINS</Text>
                </Flex>
                <br />
                <br />
                {but1 && (
                  <Box cursor={"pointer"} align={"left"}>
                    <p>WOMAN</p>
                    <p>NEW</p>
                    <p>PARTY</p>
                    <p>BEST SELLERSNEW</p>
                    <p>BASICS</p>
                    <p>KNITWEAR</p>
                    <p>COATS | PUFFER JACKETS</p>
                    <p>DRESSES | JUMPSUITS</p>
                    <p>SHIRTS</p>
                    <p>TOPS</p>
                    <p>TROUSERS</p>
                    <p>JEANS</p>
                    <p>BLAZERS</p>
                    <p>JACKETS | OVERSHIRTS</p>
                    <p>SWEATSHIRTS</p>
                    <p>T-SHIRTS</p>
                    <p>WAISTCOATS | GILETS</p>
                    <p>SKIRTS | SHORTS</p>
                    <p>CO-ORD SETS</p>
                    <p>SUITS</p>
                    <p>ACCESSORIES</p>
                    <p>SHOES</p>
                    <p>BAGS</p>
                    <p>PERFUMES</p>
                    <p>SPECIAL PRICES</p>
                    <p>GIFT IDEASNEW</p>
                    <p>SPECIAL EDITION</p>
                  </Box>
                )}
                {but2 && (
                  <Box cursor={"pointer"} align={"left"}>
                    <p>NEW</p>
                    <p>PARTY</p>
                    <p>EDITION</p>
                    <p>ZARA ORIGINS</p>
                    <p>ZARA ATHLETICZ</p>
                    <p>BEST SELLERS</p>
                    <p>BASICS</p>
                    <p>COATS | TRENCH COATS</p>
                    <p>JACKETS</p>
                    <p>PUFFERS</p>
                    <p>SHIRTS</p>
                    <p>HOODIES | SWEATSHIRTS</p>
                    <p>SWEATERS | CARDIGANS</p>
                    <p>T-SHIRTS</p>
                    <p>POLO SHIRTS</p>
                    <p>TROUSERS</p>
                    <p>JEANS</p>
                    <p>OVERSHIRTS</p>
                    <p>GILETS</p>
                    <p>BLAZERS</p>
                    <p>SUITS</p>
                    <p>TRACKSUITS</p>
                    <p>SHOES</p>
                    <p>BAGS | BACKPACKS</p>
                    <p>ACCESSORIES</p>
                    <p>PERFUMES</p>
                    <p>SPECIAL PRICES</p>
                  </Box>
                )}
                {but3 && (
                  <Box cursor={"pointer"} align={"left"}>
                    <p>GIFT GUIDENEW</p>
                    <p>JEANS REDESIGNNEW</p>
                    <p>GIRL | 6 - 14 YEARS</p>
                    <p>BOY | 6 - 14 YEARS</p>
                    <p>BABY GIRL | 6 MONTHS - 5 YEARS</p>
                    <p>BABY BOY | 6 MONTHS - 5 YEARS</p>
                    <p>NEWBORN | 0-12 MONTHS</p>
                    <p>ACCESSORIES | SHOES</p>
                    <p>JOIN LIFE</p>
                  </Box>
                )}
                {but4 && <Box cursor={"pointer"} align={"left"}></Box>}
              </div>
            </div>
          </Box>

          {/* <Box
              textAlign={useBreakpointValue({ base: "center", md: "left" })}
              fontFamily={"heading"}
              color={useColorModeValue("gray.800", "white")}
              position={"relative"}
             
            >
              <Menu>
                <MenuButton
                  as={IconButton}
                  // aria-label="Options"
                  icon={<HamburgerIcon />}
                  variant="outline"
                  
                />
                <MenuList cursor={"pointer"} paddingLeft={"10px"} marginTop={"0px"} width={"sm"} fontSize={"sm"}>
                  <Flex gap={5}
                  >
                    <Text>WOMAN</Text>
                    <Text>MAN</Text>
                    <Text>KID</Text>
                    <Text>ZARA ORIGINS</Text>

                  </Flex>
                  <Stack>
                    <Text>ede</Text>
                    <Text>ede</Text>
                    <Text>ede</Text>
                    <Text>ede</Text>
                    <Text>ede</Text>
                    <Text>ede</Text>
                    <Text>ede</Text>
                    <Text>ede</Text>
                    <Text>ede</Text>
                    <Text>ede</Text>
                    <Text>ede</Text>
                  </Stack>
                </MenuList>
              </Menu>
              
            </Box> */}

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
                  <Input type="number" placeholder='phone' onChange={inputHandler} />
                  <br />
                  <Select placeholder='state' onChange={inputHandler}>
                    {
                      country.map((item)=>(
                        <option key={item.state_id} value={item.state_name}>{item.state_name}</option>
                      ))
                    }
                  </Select>

                    {/* <RouterLink to={"/login"}> */}

                  <Input 
                  bg={'black'}
                  color={'white'} type={"submit"} value={"CREATE ACCOUNT"}/>
                  {/* </RouterLink> */}
              </form>
              </Stack>
              <Stack>
              
              <FormControl id="repeatpassword">
                <Input width={"96"} placeholder='REPEAT PASSWORD' type="password" />
              </FormControl>
              <FormControl id="pincode">
                <Input placeholder='pincode' type="number" />
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
      <div style={{marginTop:"-60vh"}} >
    <Footer/>
    </div>
      </>
    );
  }