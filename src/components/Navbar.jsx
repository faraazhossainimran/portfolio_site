import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import {
  Box, Button, Container, Flex, HStack, IconButton, Menu, MenuButton, useDisclosure
} from '@chakra-ui/react';
import React from 'react';
import { FaGithub } from "react-icons/fa";
// import Blogs from '../pages/About2';
import { Link } from 'react-router-dom';



// const Links = ['About me', 'Portfolio', 'Blog'];
const links = {
  navTitle: "Blogs",
  path: "/blogs"
};
// const NavLink = ({ children }: { children: ReactNode }) => (
//   <Link
//     px={2}
//     py={1}
//     rounded={'md'}
//     _hover={{
//       textDecoration: 'none',
//       bg: useColorModeValue('gray.200', 'gray.700'),
//     }}
//     href={'#'}>
//     {children}
//   </Link>
// );

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box zIndex={1000} position="fixed" bg={'rgba(245,250,253,0.9)!important'} width="100%" borderBottom="1px solid" borderColor={'#ccc'} boxShadow="sm">
      <Container px={4} maxW="5xl" alignItems={'center'} >
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={10}>
           <Link to="/">IMS</Link>
          </HStack>
          <HStack
              alignItems={'center'}
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {/* {Links.map((link) => (
                <Link key={link}>{link}</Link>
              ))} */}
             <Link to={links.path}>{links.navTitle}</Link>
            </HStack>
          <Flex alignItems={'center'}>
            <Menu>
            <a href='https://github.com/faraazhossainimran' target="_blank" rel="noreferrer">
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}> 
                 
                  <FaGithub
                  size={'30px'}
                  color='black'
                  />
                 
              </MenuButton>
              </a>
              {/* <MenuList>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem>Link 3</MenuItem>
              </MenuList> */}
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            {/* <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <Link key={link}>{link}</Link>
              ))}
            </Stack> */}
            <Link to={links.path}>{links.navTitle}</Link>
          </Box>
        ) : null}
      </Container>
    </Box>
  );
}

export default Navbar