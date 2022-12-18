import {
  Box,
  Flex,
  Text,
  Button,
  Stack,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Image,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContextProvider";
// import {useState} from "react"

// import { Input } from '@chakra-ui/react'
// import React from 'react'
import Footer from "../Components/Footer";
// import { NavbarSearch } from '../Components/Navbar'
import { Grid } from "@chakra-ui/react";
import { useState } from "react";
import React from "react";
import { CartContext } from "../Context/CartContextProvider";

const getUrl = (url, filterBy) => {
  if (filterBy) {
    url = `${url}&section=${filterBy}`;
  }

  return url;
};

const Payment = () => {
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
  const [border1, setBorder1]=useState(false)
  const [border2, setBorder2]=useState(false)
  const [border3, setBorder3]=useState(false)
  const [border4, setBorder4]=useState(false)
  const [border5, setBorder5]=useState(false)
  const [border6, setBorder6]=useState(false)
  const [border7, setBorder7]=useState(false)
  const [border8, setBorder8]=useState(false)
  const [border9, setBorder9]=useState(false)


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
              CHOOSE A PAYMENT METHOD
              </Text>
            </Stack>
          </div>
          <div style={{ marginTop: "30px", marginBottom: "20px" }}>
            <Flex fontSize={"15px"} gap={5}>
              <Box
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                // height={"28"}
                border={"1px solid rgb(229, 126, 57)"}
                width={"550px"}
                padding={"10px"}
              >
                <Box textAlign={"left"}>
                  {/* <BsBoxSeam marginLeft={"10"} size={"20"} /> */}
                  <Text fontSize={"13px"} color={"rgb(229, 126, 57)"}>Please note that only cards that use 3D Secure are accepted. Contact your bank to activate it or for further instructions.</Text>
                </Box>
              </Box>
              {/* <Box
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
              </Box> */}
            </Flex>
          </div>
          <br />
          {/* <Text fontWeight={"bold"}>ITEMS</Text> */}
        </div>
        <Grid cursor={"pointer"} fontSize={"x-small"} marginTop={"80px"} marginLeft={"20"} templateColumns="repeat(6, 150px)" gap={1}>
          
          <Box
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                height={"28"}
                border={border1 ? "2px solid black" : "1px solid gray"}       //{"1px solid gray"}
                width={"28"}
                
              >
                <Box onClick={()=>setBorder1(true)} textAlign={"center"}>
                  {/* <RiVisaLine color="blue" marginLeft={"10"} size={"50"} /> */}
                  <img className="w-100" src="https://static.zara.net/static/images/payment/payment/icon-payment-visa.svg" alt="" />
                  <Text>VISA</Text>
                </Box>
              </Box>
          <Box
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                height={"28"}
                border={border2 ? "2px solid black" : "1px solid gray"} 
                width={"28"}
              >
                <Box onClick={()=>setBorder2(true)} textAlign={"center"}>
                  {/* <SiMastercard marginLeft={"10"} size={"50"} /> */}
                  <img src="https://static.zara.net/static/images/payment/payment/icon-payment-mastercard.svg" alt="" />
                  <Text>MASTERCARD</Text>
                </Box>
              </Box>
          <Box
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                height={"28"}
                border={border3 ? "2px solid black" : "1px solid gray"} 
                width={"28"}
              >
                <Box onClick={()=>setBorder3(true)} textAlign={"center"}>
                  {/* <SiAmericanexpress marginLeft={"10"} size={"50"} /> */}
                  <img src="https://static.zara.net/static/images/payment/payment/icon-payment-amex_2.svg" alt="" />
                  <Text>AMERICAN EXPRESS</Text>
                </Box>
              </Box>
          <Box
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                height={"28"}
                border={border4 ? "2px solid black" : "1px solid gray"} 
                width={"28"}
              >
                <Box onClick={()=>setBorder4(true)} textAlign={"center"}>
                  {/* <BsBoxSeam marginLeft={"10"} size={"20"} /> */}
                  <img src="https://static.zara.net/static/images/payment/payment/ru-pay.svg" alt="" />
                  <Text>RUPAY</Text>
                </Box>
              </Box>
          <Box
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                height={"28"}
                border={border5 ? "2px solid black" : "1px solid gray"} 
                width={"28"}
              >
                <Box onClick={()=>setBorder5(true)} textAlign={"center"}>
                  {/* <BsBoxSeam marginLeft={"10"} size={"20"} /> */}
                  <img src="https://static.zara.net/static/images/payment/payment/net-banking.svg" alt="" />
                  <Text>NETBANKING</Text>
                </Box>
              </Box>
          <Box
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                height={"28"}
                border={border6 ? "2px solid black" : "1px solid gray"} 
                width={"28"}
              >
                <Box onClick={()=>setBorder6(true)} textAlign={"center"}>
                  {/* <BsBoxSeam marginLeft={"10"} size={"20"} /> */}
                  <img src="https://static.zara.net/static/images/payment/payment/upi.svg" alt="" />
                  <Text>UNIFIED PAYMENTS INTERFACE</Text>
                </Box>
              </Box>
        </Grid>

         <Grid cursor={"pointer"} fontSize={"x-small"} marginTop={"20px"} marginLeft={"20"} templateColumns="repeat(6, 150px)" gap={1}>
         <Box
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                height={"28"}
                border={border7 ? "2px solid black" : "1px solid gray"} 
                width={"28"}
              >
                <Box onClick={()=>setBorder7(true)} textAlign={"center"}>
                  {/* <BsBoxSeam marginLeft={"10"} size={"20"} /> */}
                  <img src="https://static.zara.net/static/images/payment/payment/IcoBank-GiftCard.svg" alt="" />
                  <Text>GIFT CARD</Text>
                </Box>
              </Box>
          </Grid>     
         <Grid cursor={"pointer"} fontSize={"x-small"} marginTop={"20px"} marginLeft={"20"} templateColumns="repeat(6, 150px)" gap={1}>
         <Box
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                height={"28"}
                border={border8 ? "2px solid black" : "1px solid gray"} 
                width={"28"}
              >
                <Box onClick={()=>setBorder8(true)} textAlign={"center"}>
                  {/* <BsBoxSeam marginLeft={"10"} size={"20"} /> */}
                  <img src="https://static.zara.net/static/images/payment/payment/co-djpen.svg" alt="" />
                  <Text>CASH ON DELIVERY</Text>
                </Box>
              </Box>
          </Grid>     
         <Grid cursor={"pointer"} fontSize={"x-small"} marginTop={"20px"} marginLeft={"20"} templateColumns="repeat(6, 150px)" gap={1}>
         <Box
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                height={"28"}
                border={border9 ? "2px solid black" : "1px solid gray"} 
                width={"28"}
              >
                <Box onClick={()=>setBorder9(true)} textAlign={"center"}>
                  {/* <BsBoxSeam marginLeft={"10"} size={"20"} /> */}
                  <img src="https://static.zara.net/static/images/payment/payment/in.svg" alt="" />
                  <Text>IN CARD</Text>
                </Box>
              </Box>
          </Grid>     
      </div>
      <Stack background={"black"} height={"200px"} width={"100%"} position={"fixed"} top={"650px"} transition={"0.6s"}
        zIndex={"100000"}
        backgroundColor={"white"}>
            {/* <Box></Box> */}
            <Flex gap={5} justify={"flex-end"}>
            <Box>
                  <Text><b>Total:</b> {total_price}</Text>
                </Box>
                <RouterLink to={"/summary"}>

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

export default Payment;
