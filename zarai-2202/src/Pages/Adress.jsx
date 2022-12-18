import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Image,
  Input,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  AddIcon,
  ExternalLinkIcon,
  RepeatIcon,
  EditIcon,
} from "@chakra-ui/icons";
import { FaCartPlus } from "react-icons/fa";
import { BsBoxSeam } from "react-icons/bs";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { Link as RouterLink, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContextProvider";
// import {useState} from "react"

// import { Input } from '@chakra-ui/react'
// import React from 'react'
import Footer from "../Components/Footer";
// import { NavbarSearch } from '../Components/Navbar'
import { Grid, GridItem } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "../Components/ProductCard";
import { useSearchParams } from "react-router-dom";
import React from "react";
import Navbar from "../Components/Navbar";
import Register from "../Components/Register";
import SignIn from "../Components/Signin";
import CartsProductCard, { CartsProductCardAdress } from "../Components/CartsProductsCard";
import { CartContext } from "../Context/CartContextProvider";

const getUrl = (url, filterBy) => {
  if (filterBy) {
    url = `${url}&section=${filterBy}`;
  }

  return url;
};

const Adress = () => {
  
  // const [searchParams, setSearchParams] = useSearchParams();
  // const [data, setData] = useState([]);
  const { isOpen, onToggle } = useDisclosure();
  const { state } = useContext(AuthContext);
  const { isAuth, name,adress ,locality,phone} = state;
  // const [filterBy, setFilterBy] = useState(""); //(searchParams.get("section")|| "")
  // const [text, setText] = useState(searchParams.get("q") || "");
  const [but1, setBut1] = useState(false);
  const [but2, setBut2] = useState(false);
  const [but3, setBut3] = useState(false);
  const [but4, setBut4] = useState(false);
  // const [adress, setAdresss]=useState(null)

  const { cart, total_item,total_price } = useContext(CartContext);
  const [currData, setCurrData]=useState({})

  
  

  // useEffect(() => {
  //   let apiUrl = getUrl(`http://localhost:8080/products?q=${text}`, filterBy);
  //   fetch(apiUrl)
  //     .then((res) => {
  //       // setTotalCount(Number(res.headers.get("X-Total-Count")))
  //       return res.json();
  //     })
  //     .then((res) => {
  //       setData(res);
  //     });
  // }, [text, filterBy]);

  // useEffect(() => {
  //   let paramsObj = {};
  //   if (text) {
  //     paramsObj.q = text;
  //   }
  //   if (filterBy) {
  //     paramsObj.section = filterBy;
  //   }
  //   setSearchParams(paramsObj);
  // }, [text, filterBy]);

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

  // let dt = new Date();
  // dt.setDate(dt.getDate() + 3);
 
  
  return (
    <>
      <Flex
        bg={useColorModeValue("blackAlpha.400", "gray.800")}
        color={useColorModeValue("white", "white")}
        minH={"130px"}
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
                // backgroundColor={""}
                width={"170px"}
                // src="https://payload177.cargocollective.com/1/7/226816/5848049/prt_310x400_1368705984_o.jpg"
                src="https://www.freepnglogos.com/uploads/zara-brand/clothing-brand-zara-hd-zara-logo-2020-3.jpg"
                // src="https://c8.alamy.com/comp/2J055AP/spain-11th-mar-2022-in-this-photo-illustration-a-zara-logo-seen-displayed-on-a-smartphone-with-a-zara-logo-in-the-background-photo-by-thiago-prudenciosopa-imagessipa-usa-credit-sipa-usaalamy-live-news-2J055AP.jpg"
              />
            </Box>
          </RouterLink>
          {/* <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
              <DesktopNav />
            </Flex> */}
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
          {/* <RouterLink position={"relative"} to={"/cart"}>
              <Stack color={useColorModeValue("gray.800", "white")} width={"10"}>

              <FaCartPlus size={"md"}/>
              </Stack>
            </RouterLink> */}
        </Stack>
      </Flex>
      <div
        style={{
          //   display: "flex",
          width: "80%",
          marginTop: "20px",
          marginLeft: "150px",
        }}
      >
        {/* <div style={{marginLeft:"60px"}} >
  
        <SignIn/>
        </div>
        <div style={{marginLeft:"70px"}}>
          <Register/>
        </div> */}
        <div
          style={{
            marginTop: "130px",
            background: "white",
            width: "100%",
            color: "black",
            // border: "1px solid",
            textAlign: "left",
            marginLeft:"100px"
          }}
        >
          {/* <Flex fontWeight={600} gap={10}>
        <Text>CART:{" "}{total_item}</Text>
        <Text>FAVORITES</Text>
      </Flex> */}
          <div>
            <Stack>
              <Text fontSize={"lg"} fontWeight={"bold"} color={"black"}>
                WHERE DO YOU WANT TO RECEIVE YOUR ORDER?
              </Text>
            </Stack>
          </div>
          <div style={{ marginTop: "30px", marginBottom: "20px" }}>
            <Flex fontSize={"15px"} gap={5}>
              <Box
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                height={"28"}
                border={"1px solid"}
                width={"28"}
              >
                <Box textAlign={"center"}>
                  <BsBoxSeam marginLeft={"10"} size={"20"} />
                  <Text>HOME</Text>
                </Box>
              </Box>
              <Box
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                height={"28"}
                border={"1px solid"}
                width={"28"}
              >
                <Box textAlign={"center"}>
                  <AiOutlineAppstoreAdd size={"20"} />
                  <Text>ZARA STORE</Text>
                </Box>
              </Box>
            </Flex>
          </div>
          <Text>{adress}</Text>
          <Box>
            <button
              // class="btn btn-primary"
              
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasWithBothOptions"
              aria-controls="offcanvasWithBothOptions"
            >
              <u>

              EDIT
              </u>
            </button>

            <div
              style={{ marginTop: "130px" }}
              class="offcanvas offcanvas-start"
              data-bs-scroll="true"
              tabindex="-1"
              id="offcanvasWithBothOptions"
              aria-labelledby="offcanvasWithBothOptionsLabel"
            >
              <div class="offcanvas-header">
                <h5
                  class="offcanvas-title"
                  id="offcanvasWithBothOptionsLabel"
                ></h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div class="offcanvas-body">
                {/* <p>
                  Try scrolling the rest of the page to see this option in
                  action.
                </p> */}
                <Text>SELECT A DELIVERY LOCATION</Text>
                <br />
                <br />
                {/* <div style={{color:"black"}}>
                  <p>

                  {name}
                  </p>
                  {adress}
                  {locality}
                  {phone}
                </div> */}
                {
                  <Box>
                    <b>{name}</b>
                    <p>{adress}</p>
                    <p>{locality}</p>
                    <p>{phone}</p>
                  </Box>
                }
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <hr />
                <RouterLink to={"/newaddress"}>

                <Button>ADD NEW HOME ADDRESS</Button>
                </RouterLink>
              </div>
            </div>
          </Box>
          <br />
          <Text fontWeight={"bold"}>ITEMS</Text>
        </div>
        <Grid marginTop={"30px"} marginLeft={"20"} templateColumns="repeat(7, 300px)" gap={1}>
          {cart.map((item) => {
            return (
              <>
                <GridItem key={item.id}>
                  <CartsProductCardAdress
                    id={item.id}
                    category={item.category}
                    image={item.img}
                    title={item.title}
                    price={item.price}
                    myprice={item.myprice}
                    amount={item.amount}
                  />
                </GridItem>
              </>
            );
          })}
        </Grid>
        <Box fontSize={"sm"} border={"1px solid gray"} borderLeft={"none"} borderRight={"none"} marginLeft={"20"} textAlign={"left"}>
          <Text fontWeight={"bold"}>
            {new Date().getUTCDate()+3}-{new Date().getMonth()+1}-{new Date().getFullYear()}

          </Text>
          <Text>FREE SHIPPING FOR ORDERS OVER ₹ 2,990 APPLIES ONLY FOR FULL PRICE ITEMS</Text>
          <ul>
            <Text>DELIVERY TIME FRAMES</Text>
          </ul>
        </Box>
      </div>
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
      <div style={{ marginTop: "-60vh" }}>
        <Footer />
      </div>
    </>
  );
};
// }

export default Adress;
