import Head from 'next/head'
import Wrapper from './Wrapper'
import Header from 'components/Header'
import Footer from 'components/Footer'

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

    <Footer />
  </Wrapper>
)
