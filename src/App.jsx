/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Issue from '../components/Issue'
import './App.css'

function App () {
  const [bgColor, setBgColor] = useState('var(--pink)')
  const [fitstLinkColor, setFirstLinkColor] = useState('var(--pink)')
  const imgLinks = [
    '../src/assets/backstagetalks_cover_issue_7.png',
    '../src/assets/backstagetalks_cover_issue_6.png',
    '../src/assets/backstagetalks_cover_issue_5.png',
    '../src/assets/backstagetalks_cover_issue_4.png',
    '../src/assets/backstagetalks_cover_issue_3.png',
    '../src/assets/backstagetalks_cover2017.png',
    '../src/assets/backstagetalks_cover2016_n.png'
  ]

  const handleScroll = () => {
    if (window.scrollY > window.innerHeight * 5.5) {
      setBgColor('var(--red)')
    } else if (window.scrollY > window.innerHeight * 4.5) {
      setBgColor('var(--blue)')
    } else if (window.scrollY > window.innerHeight * 3.5) {
      setBgColor('var(--yellow)')
    } else if (window.scrollY > window.innerHeight * 2.5) {
      setBgColor('var(--orange)')
    } else if (window.scrollY > window.innerHeight * 1.5) {
      setBgColor('var(--sky-blue)')
      setFirstLinkColor('#FFFFFF')
    } else if (window.scrollY > window.innerHeight * 0.5) {
      setBgColor('var(--white)')
      setFirstLinkColor('var(--pink)')
    } else {
      setBgColor('var(--pink)')
      setFirstLinkColor('#FFFFFF')
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header>
        <img src='../src/assets/logo.png' alt= 'logo' className='logo-img' />
      </header>
      <main style={{ backgroundColor: bgColor }}>
        <Issue
          img={imgLinks[0]}
          title={'Issue #7'}
          buyLink={['BUY HERE', '(Europe)']}
          buyLink2={['BUY HERE', '(UK & Overseas)']}
          buyText
          bgColor={'var(--orange)'}
          linkColor={fitstLinkColor}
        />
        <Issue
          img={imgLinks[1]}
          title={'Issue #6'}
          buyLink={['BUY HERE']}
          buyText
          linkColor={fitstLinkColor}
        />
        <Issue
          img={imgLinks[2]}
          title={'Issue #5'}
          buyLink={['BUY HERE']}
          buyText
        />
        <Issue
          img={imgLinks[3]}
          title={'Issue #4 is sold out.'}
          desc
        />
        <Issue
          img={imgLinks[4]}
          title={'Issue #3'}
          buyLink={['BUY HERE']}
          buyText
        />
        <Issue
          img={imgLinks[5]}
          title={'Issue #2'}
          buyLink={['BUY HERE']}
          buyText
        />
        <Issue
          img={imgLinks[6]}
          title={'Issue #1 is sold out.'}
          desc
        />
      </main>
      <Footer />
    </>
  )
}

export default App
