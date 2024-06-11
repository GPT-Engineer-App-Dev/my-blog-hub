import { Box, Container, Flex, Heading, Link, Text, VStack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  return (
    <Box>
      {/* Header */}
      <Box as="header" bg="brand.700" color="white" py={4}>
        <Container maxW="container.lg">
          <Flex justify="space-between" align="center">
            <Heading as="h1" size="lg">
              My Personal Blog
            </Heading>
            <Flex>
              <Link as={RouterLink} to="/" mx={2} color="white">
                Home
              </Link>
              <Link as={RouterLink} to="/about" mx={2} color="white">
                About
              </Link>
              <Link as={RouterLink} to="/blog" mx={2} color="white">
                Blog
              </Link>
            </Flex>
          </Flex>
        </Container>
      </Box>

      {/* Main Content */}
      <Container maxW="container.lg" py={8}>
        <VStack spacing={4}>
          <Heading as="h2" size="md">
            Welcome to My Blog
          </Heading>
          <Text>
            This is a placeholder for blog posts. Stay tuned for more content!
          </Text>
        </VStack>
      </Container>

      {/* Footer */}
      <Box as="footer" bg="gray.700" color="white" py={4} mt={8}>
        <Container maxW="container.lg">
          <Text textAlign="center">
            © {new Date().getFullYear()} My Personal Blog. All rights reserved.
          </Text>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;