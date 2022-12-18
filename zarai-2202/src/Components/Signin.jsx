import {
    Flex,
    Box,
    Input,
    Stack,
    Link,
    Heading,
  } from '@chakra-ui/react';
import { useContext, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContextProvider';


  export default function SignIn() {
    const {state,toggleAuth}=useContext(AuthContext);
    const {isAuth}=state
    const [currData, setCurrData]=useState({})
    
    // const [auth, setAuth]=useState(false)
    

    const usersArr=JSON.parse(localStorage.getItem("users"))
   
      const inputHandler=(e)=>{
        e.preventDefault()
        const {placeholder,value}=e.target;
        setCurrData({...currData, [placeholder]:value})
      };
      // console.log(currData)
      const handleClick=(e)=>{
        e.preventDefault();
        let ans=false;
        let name;
        let adress;
        let locality;
        let phone;
        usersArr.map((user)=>{
            if(currData.email===user.email && currData.password===user.password){
              ans=true;
              name=user.name
              adress=user.address
              locality=user.locality
              phone=user.phone
              return;
            }
        })
        if(ans){
          toggleAuth(true, name,adress,locality,phone)
        }else{
          toggleAuth(false, null)
          alert("Failed")
        }
        // if(currData.email==enterUser.email && currData.password==enterUser.password){
        //   toggleAuth(true, enterUser.name)
          
        // }else{
        //   toggleAuth(false, null)
        //   alert("Failed")
        // }

      }
      
      if(isAuth){
        return <Navigate to={"/adress"}/>
      }
    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={"left"}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Log in</Heading>
            {/* <Text fontSize={'lg'} color={'gray.600'}>
              to enjoy all of our cool <Link color={'blue.400'}>features</Link> 
            </Text> */}
          </Stack>
          <Box>
            <form  action="">

            <Stack spacing={4}>
                {/* <FormLabel>Email address</FormLabel> */}
                <Input onChange={inputHandler} placeholder='email' type="email" />
                {/* <FormLabel>Password</FormLabel> */}
                <Input onChange={inputHandler} placeholder='password' type="password" />
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Link fontSize={"smaller"}>HAVE YOU FORGOTTEN YOUR PASSWORD?</Link>
                </Stack>
                <Input
                onClick={handleClick}
                  bg={'black'}
                  color={'white'}
                  type={"submit"}
                  _hover={{
                    bg: 'gray',
                  }}
                  value={"LOG IN"}/>

              </Stack>
                    </form>
          </Box>
        </Stack>
      </Flex>
    );
  }