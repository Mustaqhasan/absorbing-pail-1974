import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
  } from '@chakra-ui/react';
  import {Link as RouterLink} from "react-router-dom"
  
  export default function ProductCard({
    id,image,title,price,category,myprice
  }) {
    return (
      <Center py={12}>
        <RouterLink to={`/products/${id}`}>

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
            <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
              {category}
            </Heading>
            <Stack direction={'row'} align={'center'}>
              <Text fontWeight={800} fontSize={'xl'}>
               {price}
              </Text>
              <Text textDecoration={'line-through'} color={'gray.600'}>
                {myprice}
              </Text>
            </Stack>
            {/* <Text color={'gray.600'}>
                Rating:{rating}
            </Text>
            <Text color={'gray.600'}>
                Count:{count}
            </Text> */}
          </Stack>
        </Box>
              </RouterLink>
      </Center>
    );  
  }