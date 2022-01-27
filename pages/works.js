import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbDeleted from '../public/images/works/deleted.png'


const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="deleted" title="Work Deleted..." thumbnail={thumbDeleted}>
            This project has been deleted.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="deleted"
            title="Work Deleted..."
            thumbnail={thumbDeleted}
          >
            This project has been deleted.
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="deleted"
            title="Work Deleted..."
            thumbnail={thumbDeleted}
          >
            This project has been deleted.
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="deleted" thumbnail={thumbDeleted} title="Work Deleted">
            This project has been deleted.
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Collaborations
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem
            id="deleted"
            thumbnail={thumbDeleted}
            title="Work Deleted..."
          >
            This project has been deleted.
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem id="deleted" thumbnail={thumbDeleted} title="Work Deleted...">
            This project has been deleted.
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.4}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Old works
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
           <Section delay={0.5}>
          <WorkGridItem id="deleted" thumbnail={thumbDeleted} title="Work Deleted...">
            This project has been deleted.
          </WorkGridItem>
        </Section>
        <Section delay={0.5}>
          <WorkGridItem
            id="deleted"
            thumbnail={thumbDeleted}
            title="Work Deleted..."
          >
            This project has been deleted.
          </WorkGridItem>
        </Section>
        <Section delay={0.6}>
          <WorkGridItem id="deleted" thumbnail={thumbDeleted} title="Work Deleted...">
            This project has been deleted.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout> 
)

export default Works
export { getServerSideProps } from '../components/chakra'
