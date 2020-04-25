import Head from 'next/head'
import Wrapper from './Wrapper'
import Header from 'components/Header'
import Footer from 'components/Footer'
import Contact from 'components/Contact'
import GlobalStyles from  'styles/global-styles';
import { get } from 'utils'
import { DefaultSeo } from 'next-seo';

export default ({ children, project = {}, pageUrl}) => {

  const contactComponent = project.page_sections && project.page_sections.find((component) => {
    return component.content_id === "contact-section"
  })

  return (
    <Wrapper>
      <GlobalStyles />
      <DefaultSeo
        titleTemplate={`%s | ${get(project, "title", "project.title")}`}
        canonical={pageUrl}
        {...project.seo_metadata}
      />

      <Header siteName={get(project, "title", "project.title")} />

      <main>
        { children }
      </main>
      <Contact contactInfo={contactComponent} />
      <Footer />
    </Wrapper>
  )
}
