import { Box, Container } from '@chakra-ui/react';
import React from 'react';
import About2 from './About2';
import Banner2 from './Banner2';
import Experience from './Experience';
import ExtraPortfolio from './ExtraPortfolio';
import Footer from './Footer';
import Navbar from './Navbar';
import Portfolio from './Portfolio';
import Service from './Service';
  const Home = () => {
    return (
    <Box>
    <Navbar/>
    <Banner2/>
   {/* <MyDocument/> */}
    <Container maxW="5xl">
    <About2/>
    <Service/>
     {/* <About/> */}
     {/* <Service/> */}
     <Portfolio/>
     {/* <DialogBox/> */}
     <ExtraPortfolio/>
     <Experience/>
    </Container>
    {/* <SocialMedia/> */}
    <Footer/>
  </Box>
    );
  };
  
  export default Home;
  