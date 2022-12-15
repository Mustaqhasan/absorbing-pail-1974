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
  
  export default function CartsProductCard({
    id,image,title,price,category,myprice
  }) {

    
    const [newprice, setNewPrice]=useState(myprice)
    const [qua, setQua]=useState(1)
    function handleQuantity(val) {
      setQua(qua+val)
      
    }

    // function handleInc(){
    //     setQua(qua-1)
        
    // }
    // function handleDec(){
    //     setQua(qua+1)
    // }

    useEffect(()=>{
        setNewPrice((qua)*myprice)
    },[qua])
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
               {newprice}
              </Text>
              <Text textDecoration={'line-through'} color={'gray.600'}>
                {myprice*2}
              </Text>
            </Stack>
            <Stack direction={'row'} align={'center'}>
              <Button disabled={qua===1} onClick={()=>handleQuantity(-1)} fontWeight={800} fontSize={'xl'}>
               -
              </Button>
              <Button  fontWeight={800} fontSize={'xl'}>
               {qua}
              </Button>
              <Button onClick={()=>handleQuantity(1)} textDecoration={'line-through'} color={'gray.600'}>
                +
              </Button>
            </Stack>
            {/* <Text color={'gray.600'}>
                Rating:{rating}
            </Text>
            <Text color={'gray.600'}>
                Count:{count}
            </Text> */}
          </Stack>
        </Box>
              {/* </RouterLink> */}
      </Center>
    );  
  }