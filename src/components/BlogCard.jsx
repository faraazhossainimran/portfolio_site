import {
  Avatar, Box, Center,
  Heading, Stack, Text, useColorModeValue
} from '@chakra-ui/react';
import React from 'react';

export default function BlogCard() {
  return (
    <Center py={6}>
     <Box
        maxW={'445px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'md'}
        p={6}
        overflow={'hidden'}>
        {/* <Box
          h={'210px'}
          bg={'gray.100'}
          mt={-6}
          mx={-6}
          mb={6}
          pos={'relative'}>
              <Box layout={'fill'} backgroundImage={
          'url(https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)'
        }></Box> */}
        {/* </Box> */}
        <Stack>
          {/* <Button
            color={'white'}
            textTransform={'uppercase'}
            fontWeight={500}
            fontSize={'sm'}
            letterSpacing={1.1}
            p={2}
            bg={'green.500'}
            width={'14'}
            >
            Blog
          </Button> */}
          <Heading
            color={useColorModeValue('gray.700', 'white')}
            fontSize={'2xl'}
            fontFamily={'body'}>
            Always Remember Giving up for lossers
          </Heading>
          <Text color={'gray.500'}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr
          </Text>
        </Stack>
        <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
          <Avatar
            src={'https://avatars0.githubusercontent.com/u/1164541?v=4'}
            alt={'Author'}
          />
         <Stack>
         <Text fontWeight={600}>Imran Hossain</Text>
         <Text color={'gray.500'}>Feb 08, 2021 . 6min read</Text>
         </Stack>
        </Stack>
      </Box>
    </Center>
  );
}