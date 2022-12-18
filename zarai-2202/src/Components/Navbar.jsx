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
import { BsCart } from "react-icons/bs";
import { Link as RouterLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContextProvider";
import {useState} from "react"
import { CartContext } from "../Context/CartContextProvider";
// import styles from "./../Styles/Navbar"

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();
  const {state}=useContext(AuthContext)
  const {isAuth,name}=state;
  const {total_item}=useContext(CartContext)
  const [but1, setBut1]=useState(false)
const [but2, setBut2]=useState(false)
const [but3, setBut3]=useState(false)
const [but4, setBut4]=useState(false)

  function handlebut1(){
    setBut1(true)
    setBut2(false)
    setBut3(false)
    setBut4(false)

  }
  function handlebut2(){
    setBut1(false)
    setBut2(true)
    setBut3(false)
    setBut4(false)
  }
  function handlebut3(){
    setBut1(false)
    setBut2(false)
    setBut3(true)
    setBut4(false)
  }
  function handlebut4(){
    setBut1(false)
    setBut2(false)
    setBut3(false)
    setBut4(true)
  }

  return (
      <div>
        <Flex
          bg={useColorModeValue("blackAlpha.400", "gray.800")}
          color={useColorModeValue("white", "white")}
          minH={"60px"}
          py={{ base: 2 }}
          px={{ base: 4 }}
          // borderBottom={1}
          // borderStyle={"solid"}
          // borderColor={useColorModeValue("gray.200", "gray.900")}
          align={"baseline"}
          // className={styles.header}
          position={"fixed"}
          top={"0"}
          left={"0"}
          width={"100%"}
          transition={"0.6s"}
          zIndex={"100000"}
          backgroundColor={"blackAlpha.400"}
        >
          {/* <Flex
            flex={{ base: 1, md: "auto" }}
            ml={{ base: -2 }}
            display={{ base: "flex", md: "none" }}
          >
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? (
                  <CloseIcon w={3} h={3} />
                ) : (
                  <HamburgerIcon w={5} h={5} />
                )
              }
              variant={"ghost"}
              aria-label={"Toggle Navigation"}
            />
          </Flex> */}
          <Flex
            gap={60}
            flex={{ base: 1 }}
            justify={{ base: "center", md: "start" }}
          >
             <Box>
            <button style={{backgroundColor:"gray"}} class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">=</button>

<div style={{width:"300px"}} class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasScrollingLabel">Offcanvas with body scrolling</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div style={{color:"black", backgroundColor:"white"}}  class="offcanvas-body">
  <Flex cursor={"pointer"} fontSize={"sm"}  position={"fixed"}
          top={"60px"} transition={"0.6s"}
          zIndex={"100000"}
          backgroundColor={"white"} gap={2}>

<Text onClick={()=>handlebut1()}>WOMAN</Text>
<Text onClick={()=>handlebut2()}>MAN</Text>
<Text onClick={()=>handlebut3()}>KIDS</Text>
<Text onClick={()=>handlebut4()}>ZARA ORIGINS</Text>
</Flex>
    <br />
    <br />
    {
      but1 && <Box cursor={"pointer"} align={"left"}>
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
    }
    {
      but2 && <Box cursor={"pointer"} align={"left"}>
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
    }
    {
      but3 && <Box cursor={"pointer"} align={"left"}>
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
    }
    {
      but4 && <Box cursor={"pointer"} align={"left"}>
      
     </Box>
    }
 

  </div>
</div>    

            </Box>
            <RouterLink to={"/"}>

            
            <Box
              textAlign={useBreakpointValue({ base: "center", md: "left" })}
              fontFamily={"heading"}
              //   color={useColorModeValue('gray.800', 'white')}
              position={"relative"} transition="0.6s"
            >
              <Image
                
                width={"170px"}
                // src="https://payload177.cargocollective.com/1/7/226816/5848049/prt_310x400_1368705984_o.jpg"
                // src='https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/9b991924668429.56338097af083.jpg'
                src='https://www.freepnglogos.com/uploads/zara-brand/clothing-brand-zara-hd-zara-logo-2020-3.jpg'
                  // src='https://c8.alamy.com/comp/2J055AP/spain-11th-mar-2022-in-this-photo-illustration-a-zara-logo-seen-displayed-on-a-smartphone-with-a-zara-logo-in-the-background-photo-by-thiago-prudenciosopa-imagessipa-usa-credit-sipa-usaalamy-live-news-2J055AP.jpg'
              />
            </Box>
            </RouterLink>
            {/* <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
              <DesktopNav />
            </Flex> */}
          </Flex>
          <Flex position={"relative"} marginRight={20}>
            {/* <Input borderRight={"none"} borderTop={"none"} borderLeft={"none"} borderColor={"black"} placeholder="Search"></Input> */}
            <RouterLink to={"/search"}>
              <Button color={"black"} bg={"none"} borderBottom={"1px"}>
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
                fontWeight={400}
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
                fontWeight={400}
                variant={"link"}
                href={"#"}
              >
                HELP
              </Button>
            </RouterLink>

            {/* <RiLuggageCartFill/> */}
            <RouterLink  to={"/cart"}>
            
            <Flex  color={useColorModeValue("gray.800", "white")} width={"10"}>
              
                  <BsCart size={"40px"}>
                  </BsCart>
              <Text marginTop={"1"} marginLeft={"-7"} color={"black"} fontSize={"lg"} fontWeight={"bold"} >{total_item}</Text>
                    {/* <span backgroundColor={"green"}>{total_item}</span> */}
            </Flex>
          </RouterLink>
          </Stack>
        </Flex>

        {/* <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse> */}
      </div>
  );
}




// const DesktopNav = () => {
//   const linkColor = useColorModeValue("gray.600", "gray.200");
//   const linkHoverColor = useColorModeValue("gray.800", "white");
//   const popoverContentBgColor = useColorModeValue("white", "gray.800");

//   return (
//     <Stack direction={"row"} spacing={4}>
//       {NAV_ITEMS.map((navItem) => (
//         <Box key={navItem.label}>
//           <Popover trigger={"hover"} placement={"bottom-start"}>
//             <PopoverTrigger>
//               <Link
//                 p={2}
//                 href={navItem.href ?? "#"}
//                 fontSize={"sm"}
//                 fontWeight={500}
//                 color={linkColor}
//                 _hover={{
//                   textDecoration: "none",
//                   color: linkHoverColor,
//                 }}
//               >
//                 {navItem.label}
//               </Link>
//             </PopoverTrigger>

//             {navItem.children && (
//               <PopoverContent
//                 border={0}
//                 boxShadow={"xl"}
//                 bg={popoverContentBgColor}
//                 p={4}
//                 rounded={"xl"}
//                 minW={"sm"}
//               >
//                 <Stack>
//                   {navItem.children.map((child) => (
//                     <DesktopSubNav key={child.label} {...child} />
//                   ))}
//                 </Stack>
//               </PopoverContent>
//             )}
//           </Popover>
//         </Box>
//       ))}
//     </Stack>
//   );
// };

// const DesktopSubNav = ({ label, href, subLabel }) => {
//   return (
//     <Link
//       href={href}
//       role={"group"}
//       display={"block"}
//       p={2}
//       rounded={"md"}
//       _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
//     >
//       <Stack direction={"row"} align={"center"}>
//         <Box>
//           <Text
//             transition={"all .3s ease"}
//             _groupHover={{ color: "pink.400" }}
//             fontWeight={500}
//           >
//             {label}
//           </Text>
//           <Text fontSize={"sm"}>{subLabel}</Text>
//         </Box>
//         <Flex
//           transition={"all .3s ease"}
//           transform={"translateX(-10px)"}
//           opacity={0}
//           _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
//           justify={"flex-end"}
//           align={"center"}
//           flex={1}
//         >
//           <Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} />
//         </Flex>
//       </Stack>
//     </Link>
//   );
// };

// const MobileNav = () => {
//   return (
//     <Stack
//       bg={useColorModeValue("white", "gray.800")}
//       p={4}
//       display={{ md: "none" }}
//     >
//       {NAV_ITEMS.map((navItem) => (
//         <MobileNavItem key={navItem.label} {...navItem} />
//       ))}
//     </Stack>
//   );
// };

// const MobileNavItem = ({ label, children, href }) => {
//   const { isOpen, onToggle } = useDisclosure();

//   return (
//     <Stack spacing={4} onClick={children && onToggle}>
//       <Flex
//         py={2}
//         as={Link}
//         href={href ?? "#"}
//         justify={"space-between"}
//         align={"center"}
//         _hover={{
//           textDecoration: "none",
//         }}
//       >
//         <Text
//           fontWeight={600}
//           color={useColorModeValue("gray.600", "gray.200")}
//         >
//           {label}
//         </Text>
//         {children && (
//           <Icon
//             as={ChevronDownIcon}
//             transition={"all .25s ease-in-out"}
//             transform={isOpen ? "rotate(180deg)" : ""}
//             w={6}
//             h={6}
//           />
//         )}
//       </Flex>

//       <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
//         <Stack
//           mt={2}
//           pl={4}
//           borderLeft={1}
//           borderStyle={"solid"}
//           borderColor={useColorModeValue("gray.200", "gray.700")}
//           align={"start"}
//         >
//           {children &&
//             children.map((child) => (
//               <Link key={child.label} py={2} href={child.href}>
//                 {child.label}
//               </Link>
//             ))}
//         </Stack>
//       </Collapse>
//     </Stack>
//   );
// };

// //   interface NavItem {
// //     label: string;
// //     subLabel?: string;
// //     children?: Array<NavItem>;
// //     href?: string;
// //   }

// const NAV_ITEMS = [
//   {
//     label: "Inspiration",
//     children: [
//       {
//         label: "Explore Design Work",
//         subLabel: "Trending Design to inspire you",
//         href: "#",
//       },
//       {
//         label: "New & Noteworthy",
//         subLabel: "Up-and-coming Designers",
//         href: "#",
//       },
//     ],
//   },
//   {
//     label: "Find Work",
//     children: [
//       {
//         label: "Job Board",
//         subLabel: "Find your dream design job",
//         href: "#",
//       },
//       {
//         label: "Freelance Projects",
//         subLabel: "An exclusive list for contract work",
//         href: "#",
//       },
//     ],
//   },
//   {
//     label: "Learn Design",
//     href: "#",
//   },
//   {
//     label: "Hire Designers",
//     href: "#",
//   },
// ];
