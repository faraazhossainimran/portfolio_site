import { Avatar, Container, Heading, HStack, Stack, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../components/Layout';
const Blog = () => {
  const params = useParams();
  return (
    <div>
      <Layout>
        <Container maxW="3xl">
          <VStack paddingTop="80px" spacing="2" alignItems="flex-start">
            <Heading lineHeight={1.3} as="h2">
             Post No: {params.blogId} Reasons Behind JavaScript Is Still Better Than Python
            </Heading>
            <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
              <Avatar
                src={'https://avatars0.githubusercontent.com/u/1164541?v=4'}
                alt={'Author'}
              />
              <HStack>
                <Text fontWeight={600}>Imran Hossain .</Text>
                <Text color={'gray.500'}>Feb 08, 2021</Text>
              </HStack>
            </Stack>
            <Text as="p" fontSize="lg">
              Several new Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              condimentum quam arcu, eu tempus tortor molestie at. Vestibulum
              pret
            </Text>
            <Text as="p" fontSize="lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              condimentum quam arcu, eu tempus tortor molestie at. Vestibulum
              pretium condimentum dignissim. Vestibulum ultrices vitae nisi sed
              imperdiet. Mauris quis erat consequat, commodo massa quis, feugiat
              sapien. Suspendisse placerat vulputate posuere. Curabitur neque
              tortor, mattis nec lacus non, placerat congue elit.
            </Text>
            <Text as="p" fontSize="lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              condimentum quam arcu, eu tempus tortor molestie at. Vestibulum
              pretium condimentum dignissim. Vestibulum ultrices vitae nisi sed
              imperdiet. Mauris quis erat consequat, commodo massa quis, feugiat
              sapien. Suspendisse placerat vulputate posuere. Curabitur neque
              tortor, mattis nec lacus non, placerat congue elit.
            </Text>
            <Text as="p" fontSize="lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              condimentum quam arcu, eu tempus tortor molestie at. Vestibulum
              pretium condimentum dignissim. Vestibulum ultrices vitae nisi sed
              imperdiet. Mauris quis erat consequat, commodo massa quis, feugiat
              sapien. Suspendisse placerat vulputate posuere. Curabitur neque
              tortor, mattis nec lacus non, placerat congue elit.
            </Text>
            <Text as="p" fontSize="lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              condimentum quam arcu, eu tempus tortor molestie at. Vestibulum
              pretium condimentum dignissim. Vestibulum ultrices vitae nisi sed
              imperdiet. Mauris quis erat consequat, commodo massa quis, feugiat
              sapien. Suspendisse placerat vulputate posuere. Curabitur neque
              tortor, mattis nec lacus non, placerat congue elit.
            </Text>
          </VStack>
        </Container>
      </Layout>
    </div>
  );
};

export default Blog;
