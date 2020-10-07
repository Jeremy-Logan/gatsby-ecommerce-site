import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
// import Image from '../components/image'
import SEO from '../components/seo'
import { Heading, Container, Text, Grid, Card, Box, Image, Button, useColorMode } from 'theme-ui'

const IndexPage = () => {
const[colorMode, setColorMode] = useColorMode()

  return (
  <Layout>
    <SEO title="Home" />
    <Button onClick={(e) => {
      setColorMode(colorMode === 'default' ? 'dark' : 'default')
    }}>
    Toggle {colorMode === 'default' ? 'Dark' : 'Light'}
    </Button>
    <Container>
      <Heading as="h1"> Very Good Fruit Store</Heading>
      <Grid columns={[1, 2, 3]} gap={20}>
        <Card>
          <Heading>Fresh</Heading>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            tempor urna in orci porttitor, sit amet molestie lorem imperdiet.
            Cras fermentum arcu nec ante egestas, sit amet rhoncus nunc finibus.
            Pellentesque eget dapibus velit.
          </Text>
        </Card>
        <Card>
          <Heading>Tasty</Heading>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            tempor urna in orci porttitor, sit amet molestie lorem imperdiet.
            Cras fermentum arcu nec ante egestas, sit amet rhoncus nunc finibus.
            Pellentesque eget dapibus velit.
          </Text>
        </Card>
        <Card>
          <Heading>Organic</Heading>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            tempor urna in orci porttitor, sit amet molestie lorem imperdiet.
            Cras fermentum arcu nec ante egestas, sit amet rhoncus nunc finibus.
            Pellentesque eget dapibus velit.
          </Text>
        </Card>
      </Grid>
      <Grid columns={[1,2]}>
      <Box>
      <Image src={'https://www.fillmurray.com/400/300'
      } style={{backgroundSize: 'contain'}}/>
      </Box>
      <Heading>This Store is Great!</Heading>
      <Text variant={'text.caps'}> 
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            tempor urna in orci porttitor, sit amet molestie lorem imperdiet.
            Cras fermentum arcu nec ante egestas, sit amet rhoncus nunc finibus.
            Pellentesque eget dapibus velit.
      </Text>
      <Heading>This Store is Great!</Heading>
      <Text> 
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            tempor urna in orci porttitor, sit amet molestie lorem imperdiet.
            Cras fermentum arcu nec ante egestas, sit amet rhoncus nunc finibus.
            Pellentesque eget dapibus velit.
      </Text>
      <Box>
      <Image src={'https://www.fillmurray.com/400/300'
      } style={{backgroundSize: 'contain'}}/>
      </Box>
      </Grid>
    </Container>
  </Layout>
)
}

export default IndexPage
