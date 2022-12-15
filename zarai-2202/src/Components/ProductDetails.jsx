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
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { MdLocalShipping } from "react-icons/md";
import { useParams } from "react-router-dom";
import { Link as RouetLink } from "react-router-dom";

import { FaCartPlus } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContextProvider";
import Footer from "../Components/Footer";
// import { NavbarSearch } from '../Components/Navbar'
import { Grid, GridItem } from "@chakra-ui/react";
import ProductCard from "../Components/ProductCard";
import { CartContext } from "../Context/CartContextProvider";
import MyImage from "./MyImage";

const imgArr = [
  {
    url: "https://static.zara.net/photos///2023/V/0/1/p/2055/298/401/2/w/37/2055298401_1_1_1.jpg?ts=1670577295475",
  },
  {
    url: "https://static.zara.net/photos///2023/V/0/1/p/2055/298/401/2/w/37/2055298401_2_1_1.jpg?ts=1670577293431",
  },
  {
    url: "https://static.zara.net/photos///2023/V/0/1/p/2055/298/401/2/w/37/2055298401_2_2_1.jpg?ts=1670577293428",
  },
  {
    url: "https://static.zara.net/photos///2023/V/0/1/p/2055/298/401/2/w/37/2055298401_2_3_1.jpg?ts=1670577293349",
  },
];
export default function ProductDetails() {
  const { addToCart } = useContext(CartContext);
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const { isOpen, onToggle } = useDisclosure();
  const { state } = useContext(AuthContext);
  const { isAuth, name } = state;
  const [but1, setBut1] = useState(false);
  const [but2, setBut2] = useState(false);
  const [but3, setBut3] = useState(false);
  const [but4, setBut4] = useState(false);
  // const [mainImage, setMainImage] = useState(imgs[0]);
  useEffect(() => {
    axios.get(`http://localhost:8080/products/${id}`).then(({ data }) => {
      setProduct(data);
      // console.log(data);
    });
  }, [id]);

  const { img, title, category, price } = product;
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
          </Box>

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
                src="https://c8.alamy.com/comp/2J055AP/spain-11th-mar-2022-in-this-photo-illustration-a-zara-logo-seen-displayed-on-a-smartphone-with-a-zara-logo-in-the-background-photo-by-thiago-prudenciosopa-imagessipa-usa-credit-sipa-usaalamy-live-news-2J055AP.jpg"
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
          <RouterLink position={"relative"} to={"/cart"}>
            <Stack color={useColorModeValue("gray.800", "white")} width={"10"}>
              <FaCartPlus size={"md"} />
            </Stack>
          </RouterLink>
        </Stack>
      </Flex>

      <Container maxW={"7xl"}>
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 18, md: 24 }}
        >
          <Flex gap={"50px"}>
            <Stack
              marginTop={"200px"}
              marginLeft={"100px"}
              textAlign={"left"}
              spacing={{ base: 6, md: 10 }}
            >
              <Box width={"150px"} as={"header"}>
                <Heading
                  lineHeight={1}
                  fontWeight={600}
                  fontSize={"sm"}
                  // fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}
                >
                  MATERIALS, CARE AND ORIGIN
                </Heading>
                <br />

                {/*  */}
                <Text fontSize={"sm"}>
                  We work with monitoring programmes to ensure compliance with
                  our social, environmental and health and safety standards for
                  our garments.
                </Text>
                <br />
                <Text fontSize={"sm"}>
                  To assess compliance, we have developed a programme of audits
                  and continuous improvement plans.
                </Text>
                <br />
              </Box>
            </Stack>
            {/* <MyImage /> */}
            <Stack>
            <Image
              rounded={"md"}
              alt={"product image"}
              src={img}
              fit={"cover"}
              align={"center"}
              w={"100%"}
              h={{ base: "100%", sm: "400px", lg: "500px" }}
              marginLeft={"300px"}
              />
              </Stack>
            {/* <div>
              <div>
                {imgs.map((item) => 
                   (
                      <img
                        // key={item.url}
                        onClick={() => setMainImage(item)}
                        src={item.url}
                        alt="pic-name"
                      />
                  )
                )}
              </div>
              <div>
                <img src={mainImage.url} alt="main-pic" />
              </div>
            </div> */}
            <Stack
              divider={
                <StackDivider
                  borderColor={useColorModeValue("black", "gray.600")}
                />
              }
              marginTop={"100px"}
              marginLeft={"300px"}
              textAlign={"left"}
              spacing={{ base: 6, md: 10 }}
            >
              <Box marginBottom={"-40px"} width={"300px"} as={"header"}>
                <Heading
                  lineHeight={1}
                  fontWeight={600}
                  fontSize={"lg"}
                  // fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}
                >
                  {title}
                </Heading>
                <br />

                {/*  */}
                <Text fontSize={"sm"}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                  aliquid amet at delectus doloribus dolorum expedita hic, ipsum
                  maxime modi nam officiis porro, quae, quisquam quos
                  reprehenderit velit? Natus, totam.
                </Text>

                <Text
                  color={useColorModeValue("gray.900", "gray.400")}
                  fontWeight={300}
                  fontSize={"xl"}
                >
                  Price:${price} USD
                </Text>
              </Box>
              <Stack
                cursor={"pointer"}
                marginTop={"-40px"}
                marginBottom={"-40px"}
                fontSize={"10px"}
              >
                <Text
                  _hover={{
                    backgroundColor: "gray",
                  }}
                >
                  XS
                </Text>
                <Text
                  _hover={{
                    backgroundColor: "gray",
                  }}
                >
                  S
                </Text>
                <Text
                  _hover={{
                    backgroundColor: "gray",
                  }}
                >
                  M
                </Text>
                <Text
                  _hover={{
                    backgroundColor: "gray",
                  }}
                >
                  L
                </Text>
                <Text
                  _hover={{
                    backgroundColor: "gray",
                  }}
                >
                  XL
                </Text>
              </Stack>
              <Flex
                marginTop={"-40px"}
                marginBottom={"-40px"}
                fontSize={"10px"}
                justify={"space-between"}
              >
                <Text>FIND YOUR SIZE</Text>
                <Text>SIZE GUIDE</Text>
              </Flex>
              <RouetLink to={"/cart"}>
                <Button
                  onClick={() => addToCart(product)}
                  marginBottom={"-40px"}
                  rounded={"none"}
                  w={"full"}
                  mt={8}
                  size={"lg"}
                  py={"7"}
                  bg={useColorModeValue("gray.900", "gray.50")}
                  color={useColorModeValue("white", "gray.900")}
                  textTransform={"uppercase"}
                  // _hover={{
                  //   transform: "translateY(2px)",
                  //   boxShadow: "lg",
                  // }}
                >
                  ADD TO BAG
                </Button>
              </RouetLink>
              <Stack fontSize={"sm"} marginTop={"-40px"}>
                <Text>CHECK IN-STORE AVAILABILITY</Text>
                <Text>DELIVERY, EXCHANGES AND RETURNS</Text>
              </Stack>
            </Stack>
          </Flex>
        </SimpleGrid>
      </Container>
    </>
  );
}
