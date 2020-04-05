import Head from 'next/head'
import Wrapper from './Wrapper'
import Header from 'components/Header'
import Footer from 'components/Footer'
import Contact from 'components/Contact'
import GlobalStyles from  'styles/global-styles';
import { get } from 'utils'

export default ({ children, project, title = 'This is the default title'}) => {

  const contactComponent = project.page_sections && project.page_sections.find((component) => {
    return component.content_id === "contact-section"
  })

  return (
    <Wrapper>
      <GlobalStyles />
      <Head>
        <title>{ get(project, "title", title)}</title>
      </Head>

      <Header siteName={get(project, "title", "A new Site")} />

      <main>
        { children }
      </main>
      <Contact contactInfo={contactComponent} />
      <Footer />
    </Wrapper>
  )
}
