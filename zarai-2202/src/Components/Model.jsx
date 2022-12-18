import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    Text,
    Box
  } from '@chakra-ui/react'
  import {Link as RouterLink} from "react-router-dom"

  function Model() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
    //   <div>
    //     <Button background={"black"} color={"white"} width={"300px"} onClick={onOpen}>CONTINUE</Button>
  
    //     <Modal isOpen={isOpen} onClose={onClose}>
    //       <ModalOverlay />
    //       <ModalContent>
    //         <ModalHeader>Succesfull..!</ModalHeader>
    //         <ModalCloseButton />
    //         <ModalBody>
    //           Order Placed
    //         </ModalBody>
  
    //         <ModalFooter>
    //           <Button colorScheme='blue' mr={3} onClick={onClose}>
    //             Close
    //           </Button>
    //           <Button variant='ghost'>Continue For More Shopping</Button>
    //         </ModalFooter>
    //       </ModalContent>
    //     </Modal>
    //   </div>

    
          <>
            <Button background={"black"} color={"white"} width={"300px"} onClick={onOpen}>ORDER</Button>
            
            <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
              <Box marginTop={"50px"}></Box>
                <ModalHeader background={"antiquewhite"}>Succesfull..!</ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>
                  {/* <Lorem count={2} /> */}
                  <Text fontSize={"lg"} fontWeight={"bold"}>ORDER PLACED</Text>
                  <Text fontWeight={"bold"}>
                    EXPECTED :{new Date().getUTCDate()+3}-{new Date().getMonth()+1}-{new Date().getFullYear()}

                    </Text>
                    <br />
                    <br />
                    <Text>THANK YOU! FOR SHOPPING ON ZARA</Text>
                </ModalBody>
      
                <ModalFooter>
                  {/* <Button colorScheme='blue' mr={3}>
                    Save
                  </Button> */}
                  <RouterLink to={"/search"}>

                  <Button>CONTINUE FOR MORE SHOPPING</Button>
                  </RouterLink>
                  <RouterLink to={"/"}>

                  <Button onClick={onClose}>CLOSE</Button>
                  </RouterLink>
                </ModalFooter>
              </ModalContent>
            </Modal>
            
          </>
        )
  }

  export default Model;