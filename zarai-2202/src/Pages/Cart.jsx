import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  VisuallyHidden,
  List,
  ListItem,
  useBreakpointValue,
  useDisclosure,
  Input,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { CartContext } from "../Context/CartContextProvider";
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from "../Context/AuthContextProvider";
import CartsProductCard from "../Components/CartsProductsCard";


const Cart = () => {
  const { state } = useContext(AuthContext);
  
  const { isAuth, name } = state;
  const {cart,total_price,total_item}=useContext(CartContext)
  
  


  return (
    <div>
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
          {/* <Box>
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
                  <Box align={"left"}>
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
                  <Box align={"left"}>
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
                  <Box align={"left"}>
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
                {but4 && <Box align={"left"}></Box>}
              </div>
            </div>
          </Box> */}
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
              {isAuth ? name : "SIGN IN"}
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
          
        </Stack>
      </Flex>
      <div style={{marginLeft:"200px"}}>

      
      <div style={{position:"fixed",left:"200px", marginTop:"-140px",transition:"0.6", zIndex:"100000", background:"white",width:"100%"}}>
         
            <Flex fontWeight={600} gap={10}>
              <Text>CART:{" "}{total_item}</Text>
              <Text>FAVORITES</Text>
            </Flex>
            <Stack marginBottom={"30px"}  padding={2} width={"520px"} background={"gray.300"} fontSize={"sm"} textAlign={"left"}>
              <Text>ITEMS IN THE BASKET ARE NOT RESERVED UNTIL COMPLETING THE PURCHASE.</Text>
            </Stack>

      </div>
      </div>
      <Grid marginTop={"280px"} templateColumns='repeat(20, 300px)' gap={6} marginLeft={"200px"} >

      {
        cart.map((item)=>{
          return(
            <>
            
            <GridItem key={item.id} >
                <CartsProductCard 
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
            )
      })
      }
      
      </Grid>
      
      <Stack background={"black"} height={"200px"} width={"100%"} position={"fixed"} top={"650px"} transition={"0.6s"}
        zIndex={"100000"}
        backgroundColor={"white"}>
            {/* <Box></Box> */}
            <Flex gap={5} justify={"flex-end"}>
            <Box>
                  <Text><b>Total:</b> {total_price}</Text>
                </Box>
                <RouterLink to={"/adress"}>

                <Stack width={"300px"} color={"white"} ><Button background={"black"}>CONTINUE</Button></Stack>
                </RouterLink>
            </Flex>

      </Stack>
    </div>
  )
}

export default Cart
