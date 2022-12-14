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
import { Link as RouterLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContextProvider";
// import {useState} from "react"

// import { Input } from '@chakra-ui/react'
// import React from 'react'
import Footer from '../Components/Footer'
// import { NavbarSearch } from '../Components/Navbar'
import { Grid, GridItem } from '@chakra-ui/react'
import {useState, useEffect} from "react"
import axios from "axios";
import ProductCard from '../Components/ProductCard'
import {useSearchParams} from "react-router-dom";

const getUrl=(url,filterBy)=>{
  // if(text && filterBy){
  //   url=`${url}?q=${text}&section=${filterBy}`
  // } 
  // if(text){
  //   url=`${url}&q=${text}`
  //  }
  if(filterBy){
    url=`${url}&section=${filterBy}`
  }

    return url
}
const Search = () => {
  const [searchParams, setSearchParams]=useSearchParams()
  const [data, setData]=useState([])
  const { isOpen, onToggle } = useDisclosure();
const {state}=useContext(AuthContext)
const {isAuth,name}=state
const [filterBy,setFilterBy]=useState("") //(searchParams.get("section")|| "")
const [text, setText]=useState(searchParams.get("q")||"")

// console.log(query)
  
  useEffect(()=>{
    let apiUrl=getUrl(
      `http://localhost:8080/products?q=${text}`,
      filterBy
    )
    fetch(apiUrl)
        .then((res)=>{
            // setTotalCount(Number(res.headers.get("X-Total-Count")))
            return res.json()})
        .then((res)=>{
            setData(res)
            
        })
  },[text, filterBy])

  useEffect(()=>{
    let paramsObj={}
    if(text){
      paramsObj.q=text
    }
    if(filterBy){
      paramsObj.section=filterBy
    }
    setSearchParams(paramsObj)
  },[text, filterBy])

  return (
    <>
      
      <div>
            <div>

        <Flex
          bg={useColorModeValue("blackAlpha.400", "gray.800")}
          color={useColorModeValue("white", "white")}
          minH={"260px"}
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
            <button style={{backgroundColor:"gray"}} class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">=</button>

<div style={{width:"300px"}} class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasScrollingLabel">Offcanvas with body scrolling</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div style={{color:"black"}} class="offcanvas-body">
  <Flex gap={2}>

<Text>WOMAN</Text>
<Text>MAN</Text>
<Text>KIDS</Text>
<Text>ZARA ORIGINS</Text>
</Flex>
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
              position={"relative"} transition="0.6s"
            >
              <Image
                width={"170px"}
                // src="https://payload177.cargocollective.com/1/7/226816/5848049/prt_310x400_1368705984_o.jpg"
                // src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/9b991924668429.56338097af083.jpg"
                src="https://c8.alamy.com/comp/2J055AP/spain-11th-mar-2022-in-this-photo-illustration-a-zara-logo-seen-displayed-on-a-smartphone-with-a-zara-logo-in-the-background-photo-by-thiago-prudenciosopa-imagessipa-usa-credit-sipa-usaalamy-live-news-2J055AP.jpg"
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

          <Flex position={"relative"} gap={"5"} marginRight={"200px"} fontFamily={"heading"}
              color={useColorModeValue("gray.800", "white")} cursor={"pointer"}>

            <Text onClick={()=>setFilterBy("woman")}>WOMAN</Text>
            <Text onClick={()=>setFilterBy("man")}>MAN</Text>
            <Text onClick={()=>setFilterBy("kid")}>KIDS</Text>
          </Flex>
          <Flex
            marginTop={"130px"} 
            width={"70%"}
            position={"fixed"}
            left={"300px"}
            top={"40px"} transition={"0.6s"}
            zIndex={"100000"}
          >



            <Input color={"black"} onChange={(e)=>setText(e.target.value)} placeholder='ENTER SERCH TERMS' borderRight={"none"} borderTop={"none"} borderLeft={"none"} borderBottom={"2px"}/>
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

              <FaCartPlus size={"md"}/>
              </Stack>
            </RouterLink>
          </Stack>
          
        </Flex>
            </div>
          <div>
            {/* <div style={{ height:"200px", width:"100%",
            marginTop:"250px",
          // top:"130px",
          // left:"0",
          // width:"100%",
          // transition:"0.6s",
          // zIndex:"100000",
          background:"black",
          // marginTop:"220px"
           }}>
          <Input onChange={(e)=>setText(e.target.value)} placeholder='ENTER SERCH TERMS' borderRight={"none"} borderTop={"none"} borderLeft={"none"} borderBottom={"2px"}
          // position={"fixed"}
          // top={"300px"}
          // left={"100px"}
          // width={"80%"}
          // transition={"0.6s"}
          // zIndex={"100000"}
          backgroundColor={"white"}
          marginTop={"5px"}
          />
          
          </div> */}
          </div>
          
        {/* <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse> */}
      
      </div>
      {/* <h1>search page content</h1> */}
      {/* <div style={{width:"100%", height:"100px", backgroundColor:"black", position:"fixed",top:"130px",zIndex:"100000",transition:"0.6s",}}>

      </div> */}
      {/* <div style={{width:"100%", height:"160px", backgroundColor:"black", position:"fixed",top:"260px",zIndex:"100000",transition:"0.6s",}}>

      </div> */}
      {/* <div style={{ height:"150px", width:"100%", position:"fixed",
          top:"40px",
          // left:"0",
          width:"100%",
          transition:"0.6s",
          zIndex:"100000",
          background:"white",
          marginTop:"220px"
           }}>
          <Input onChange={(e)=>setText(e.target.value)} placeholder='ENTER SERCH TERMS' borderRight={"none"} borderTop={"none"} borderLeft={"none"} borderBottom={"2px"}
          position={"fixed"}
          top={"300px"}
          left={"150px"}
          width={"80%"}
          transition={"0.6s"}
          zIndex={"100000"}
          backgroundColor={"white"}
          marginTop={"20px"}
          />
          
      </div> */}
      <div style={{marginTop:"230px", position:"relative", height:"auto",}}>
        

        
      <Grid  templateColumns='repeat(5, 1fr)' gap={6} position="relative">
        {
          data?.length>0 && data.map((item)=>{
            return(

              <GridItem key={item.id} >
                  <ProductCard 
                  id={item.id}
                  category={item.category}
                  image={item.img}
                  title={item.title}
                  price={item.price}
                  />
              </GridItem>
              )
        })

        }
      </Grid>
      </div>
      <div style={{height:"auto"}}>

      <Footer/>
      </div>
    </>
  )
}

export default Search
