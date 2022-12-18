import {
    Box,
    Flex,
    Text,
    Button,
    Stack,
    useColorModeValue,
    useBreakpointValue,
    Image,
  } from "@chakra-ui/react";
  import { Link as RouterLink} from "react-router-dom";
  import { useContext } from "react";
  import { AuthContext } from "../Context/AuthContextProvider";
  import Footer from "../Components/Footer";
  import { Grid, GridItem } from "@chakra-ui/react";
  import React from "react";
  import { CartsProductCardAdress } from "../Components/CartsProductsCard";
  import { CartContext } from "../Context/CartContextProvider";
import Model from "../Components/Model";
  
  
  
  const Summary = () => {
    const { state } = useContext(AuthContext);
    const { isAuth, name,adress ,locality,phone} = state;
    
  
    const {total_price,cart } = useContext(CartContext);
  
  
   
  
   
    
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
                    <Text fontSize={"13px"} color={"rgb(229, 126, 57)"}>FREE SHIPPING OVER ₹ 2,990 APPLIES ONLY FOR FULL PRICE ITEMS</Text>
                  </Box>
                </Box>
                
              </Flex>
            </div>
            <br />
            {/* <Text fontWeight={"bold"}>ITEMS</Text> */}
          </div>
          <Grid cursor={"pointer"} fontSize={"small"} marginTop={"20px"} marginLeft={"100px"} templateColumns="repeat(2, 450px)" gap={1}>
            <Box textAlign={"left"} >
                <Text fontSize={"md"} fontWeight={"bold"}>DELIVERY</Text>
                <Text fontSize={"sm"} fontWeight={"bold"}>STANDARD HOME SHIPPING: {new Date().getUTCDate()+3}-{new Date().getMonth()+1}-{new Date().getFullYear()}</Text>
                <br />
                <Text>FREE SHIPPING FOR ORDERS OVER ₹ 2,990 APPLIES ONLY FOR FULL PRICE ITEMS</Text>
                <br />
                <u><Text>EDIT</Text></u>
                <br />
                <Text>{name}</Text>
                <Text>{adress}</Text>
                <Text>{locality}</Text>
                <Text>{phone}</Text>
                <br />
                <Text><u>EDIT</u>
                    </Text>
                <br />
                <Text fontSize={"md"} fontWeight={"bold"}>PAYMENT</Text>
                <br />
                <Flex gap={5}>
                    <Text fontSize={"lg"} fontWeight={"extrabold"}>CASH</Text>
                    <Text>CASH ON DELIVERY</Text>
                </Flex>
            </Box>
            <Box textAlign={"left"} >
            <Text fontSize={"md"} fontWeight={"bold"}>DELIVERY</Text>
            <Text>ITEMS: {cart.length}</Text>
            <Grid marginTop={"30px"} marginLeft={"20"} templateColumns="repeat(2, 150px)">
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
  
                  {/* <Stack width={"300px"} color={"white"} ><Button background={"black"}>CONTINUE</Button></Stack> */}

                  <Model/>
              </Flex>
  
        </Stack>
        <div style={{ marginTop: "-60vh" }}>
          <Footer />
        </div>
      </>
    );
  };
  // }
  
  export default Summary;
  