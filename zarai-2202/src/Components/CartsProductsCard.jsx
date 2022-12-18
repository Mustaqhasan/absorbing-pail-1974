import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
    Button,
  } from '@chakra-ui/react';
import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../Context/CartContextProvider';
import { FaTrash } from 'react-icons/fa';
  
  export default function CartsProductCard({
    id,image,title,price,category,myprice,amount
  }) {

    
    
    const {setIncrease, setDecrease,removeItem}=useContext(CartContext);

    return (
      <Center py={12}>
        {/* <RouterLink to={`/products/${id}`}> */}

        <Box
        
          role={'group'}
          p={6}
          maxW={'330px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          // boxShadow={'2xl'}
          // rounded={'lg'}
          pos={'relative'}
          zIndex={1}>
          <Box
            // rounded={'lg'}
            mt={-12}
            pos={'relative'}
            height={'300px'}
            _after={{
              transition: 'all .3s ease',
              content: '""',
              w: 'full',
              h: 'full',
              pos: 'absolute',
              top: 5,
              left: 0,
              // backgroundImage: `url(${IMAGE})`,
              // filter: 'blur(15px)',
              zIndex: -1,
            }}
            _groupHover={{
              _after: {
                filter: 'blur(20px)',
            },
            }}>
            <Image
              // rounded={'lg'}
              height={340}
              width={282}
              objectFit={'cover'}
              src={image}
            />
          </Box>
          <Stack pt={10} align={'center'}>
            <Text color={'gray.900'} fontSize={'sm'} textTransform={'uppercase'}>
              {title}
            </Text>
            
            <Stack direction={'row'} align={'center'}>
              <Text fontWeight={800} fontSize={'xl'}>
               {myprice*amount}
              </Text>
              <Text textDecoration={'line-through'} color={'gray.600'}>
                {myprice*2}
              </Text>
            </Stack>
            <Stack direction={'row'} align={'center'}>
              <Button onClick={()=>setDecrease(id)} fontWeight={800} fontSize={'xl'}>
               -
              </Button>
              <Button  fontWeight={800} fontSize={'xl'}>
               {amount}
              </Button>
              <Button onClick={()=>setIncrease(id)} textDecoration={'line-through'} color={'gray.600'}>
                +
              </Button>
            </Stack>
            <Stack>
                <FaTrash cursor={"pointer"} onClick={()=>removeItem(id)} />
            </Stack>
          </Stack>
        </Box>
              {/* </RouterLink> */}
      </Center>
    );  
  }
  export function CartsProductCardAdress({
    id,image,title,price,category,myprice,amount
  }) {

   
    const {setIncrease, setDecrease,removeItem}=useContext(CartContext);

    return (
      <Center py={12}>
        {/* <RouterLink to={`/products/${id}`}> */}

        <Box
        
          role={'group'}
          p={6}
          maxW={'330px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          // boxShadow={'2xl'}
          // rounded={'lg'}
          pos={'relative'}
          zIndex={1}>
          <Box
            // rounded={'lg'}
            mt={-12}
            pos={'relative'}
            height={'300px'}
            _after={{
              transition: 'all .3s ease',
              content: '""',
              w: 'full',
              h: 'full',
              pos: 'absolute',
              top: 5,
              left: 0,
              // backgroundImage: `url(${IMAGE})`,
              // filter: 'blur(15px)',
              zIndex: -1,
            }}
            _groupHover={{
              _after: {
                filter: 'blur(20px)',
            },
            }}>
            <Image
              // rounded={'lg'}
              height={250}
              width={150}
              objectFit={'cover'}
              src={image}
            />
          </Box>
          {/* <Stack pt={10} align={'center'}>
            <Text color={'gray.900'} fontSize={'sm'} textTransform={'uppercase'}>
              {title}
            </Text>
            
            <Stack direction={'row'} align={'center'}>
              <Text fontWeight={800} fontSize={'xl'}>
               {myprice*amount}
              </Text>
              <Text textDecoration={'line-through'} color={'gray.600'}>
                {myprice*2}
              </Text>
            </Stack>
            <Stack direction={'row'} align={'center'}>
              <Button onClick={()=>setDecrease(id)} fontWeight={800} fontSize={'xl'}>
               -
              </Button>
              <Button  fontWeight={800} fontSize={'xl'}>
               {amount}
              </Button>
              <Button onClick={()=>setIncrease(id)} textDecoration={'line-through'} color={'gray.600'}>
                +
              </Button>
            </Stack>
            <Stack>
                <FaTrash cursor={"pointer"} onClick={()=>removeItem(id)} />
            </Stack>
          </Stack> */}
        </Box>
        
              {/* </RouterLink> */}
      </Center>
    );  
  }