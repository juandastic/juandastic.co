import Head from 'next/head'
import Wrapper from './Wrapper'
import Header from 'components/Header'
import Footer from 'components/Footer'
import Contact from 'components/Contact'
import GlobalStyles from  'styles/global-styles';

export default ({ children, title = 'This is the default title' }) => (
  <Wrapper>
    <GlobalStyles />
    <Head>
      <title>{ title }</title>
    </Head>

    <Header />

    <main>
      { children }
    </main>
    <Contact/>
    <Footer />
  </Wrapper>
)
