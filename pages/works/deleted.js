import {
  Container,
  Badge,
  
  List,
  ListItem,
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Title,  Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="DELETED">
    <Container>
      <Title>
        DELETED <Badge>2021</Badge>
      </Title>
      <P>There is nothing here. You can leave :)</P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>PC</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Node.JS</span>
        </ListItem>
      </List>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
