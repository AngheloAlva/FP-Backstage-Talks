/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from 'react'
import Footer from '../components/Footer'
import Issue from '../components/Issue'
import './App.css'

function App () {
  const [bgColor, setBgColor] = useState('var(--pink)')
  const [fitstLinkColor, setFirstLinkColor] = useState('var(--pink)')
  const issue1Ref = useRef(null)
  const issue2Ref = useRef(null)
  const issue3Ref = useRef(null)
  const issue4Ref = useRef(null)
  const issue5Ref = useRef(null)
  const issue6Ref = useRef(null)
  const issue7Ref = useRef(null)
  const imgLinks = [
    '../src/assets/backstagetalks_cover_issue_7.png',
    '../src/assets/backstagetalks_cover_issue_6.png',
    '../src/assets/backstagetalks_cover_issue_5.png',
    '../src/assets/backstagetalks_cover_issue_4.png',
    '../src/assets/backstagetalks_cover_issue_3.png',
    '../src/assets/backstagetalks_cover2017.png',
    '../src/assets/backstagetalks_cover2016_n.png'
  ]

  const handleBgColor = () => {
    const scrollPosition = window.pageYOffset

    if (scrollPosition > issue6Ref.current.offsetTop + issue6Ref.current.offsetHeight / 1.8) {
      setBgColor('var(--red)')
    } else if (scrollPosition > issue5Ref.current.offsetTop + issue5Ref.current.offsetHeight / 1.8) {
      setBgColor('var(--blue)')
    } else if (scrollPosition > issue4Ref.current.offsetTop + issue4Ref.current.offsetHeight / 1.8) {
      setBgColor('var(--yellow)')
    } else if (scrollPosition > issue3Ref.current.offsetTop + issue3Ref.current.offsetHeight / 1.8) {
      setBgColor('var(--orange)')
    } else if (scrollPosition > issue2Ref.current.offsetTop + issue2Ref.current.offsetHeight / 1.8) {
      setBgColor('var(--sky-blue)')
      setFirstLinkColor('#FFFFFF')
    } else if (scrollPosition > issue1Ref.current.offsetTop + issue1Ref.current.offsetHeight / 1.8) {
      setBgColor('var(--white)')
      setFirstLinkColor('var(--pink)')
    } else {
      setBgColor('var(--pink)')
      setFirstLinkColor('#FFFFFF')
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleBgColor)
    return () => window.removeEventListener('scroll', handleBgColor)
  }, [])

  const nextIssue = () => {
    const scrollPosition = window.pageYOffset

    if (scrollPosition < issue1Ref.current.offsetTop) {
      window.scrollTo({
        top: issue1Ref.current.offsetTop,
        behavior: 'smooth'
      })
    } else if (scrollPosition < issue2Ref.current.offsetTop) {
      window.scrollTo({
        top: issue2Ref.current.offsetTop,
        behavior: 'smooth'
      })
    } else if (scrollPosition < issue3Ref.current.offsetTop) {
      window.scrollTo({
        top: issue3Ref.current.offsetTop,
        behavior: 'smooth'
      })
    } else if (scrollPosition < issue4Ref.current.offsetTop) {
      window.scrollTo({
        top: issue4Ref.current.offsetTop,
        behavior: 'smooth'
      })
    } else if (scrollPosition < issue5Ref.current.offsetTop) {
      window.scrollTo({
        top: issue5Ref.current.offsetTop,
        behavior: 'smooth'
      })
    } else if (scrollPosition < issue6Ref.current.offsetTop) {
      window.scrollTo({
        top: issue6Ref.current.offsetTop,
        behavior: 'smooth'
      })
    } else if (scrollPosition < issue7Ref.current.offsetTop) {
      window.scrollTo({
        top: issue7Ref.current.offsetTop,
        behavior: 'smooth'
      })
    }
  }

  const prevIssue = () => {
    const scrollPosition = window.pageYOffset

    if (scrollPosition > issue7Ref.current.offsetTop) {
      window.scrollTo({
        top: issue7Ref.current.offsetTop,
        behavior: 'smooth'
      })
    } else if (scrollPosition > issue6Ref.current.offsetTop) {
      window.scrollTo({
        top: issue6Ref.current.offsetTop,
        behavior: 'smooth'
      })
    } else if (scrollPosition > issue5Ref.current.offsetTop) {
      window.scrollTo({
        top: issue5Ref.current.offsetTop,
        behavior: 'smooth'
      })
    } else if (scrollPosition > issue4Ref.current.offsetTop) {
      window.scrollTo({
        top: issue4Ref.current.offsetTop,
        behavior: 'smooth'
      })
    } else if (scrollPosition > issue3Ref.current.offsetTop) {
      window.scrollTo({
        top: issue3Ref.current.offsetTop,
        behavior: 'smooth'
      })
    } else if (scrollPosition > issue2Ref.current.offsetTop) {
      window.scrollTo({
        top: issue2Ref.current.offsetTop,
        behavior: 'smooth'
      })
    } else if (scrollPosition > issue1Ref.current.offsetTop) {
      window.scrollTo({
        top: issue1Ref.current.offsetTop,
        behavior: 'smooth'
      })
    }
  }

  const handleScroll = () => {
    if (window.innerWidth > 992) {
      if (window.event.deltaY > 0) {
        nextIssue()
      } else {
        prevIssue()
      }
    }
  }

  useEffect(() => {
    window.addEventListener('wheel', handleScroll)
    return () => window.removeEventListener('wheel', handleScroll)
  }, [])

  return (
    <>
      <header>
        <img src='../src/assets/logo.png' alt= 'logo' className='logo-img' />
      </header>
      <main style={{ backgroundColor: bgColor }}>
        <Issue
          ref={issue1Ref}
          img={imgLinks[0]}
          title={'Issue #7'}
          buyLink={['BUY HERE', '(Europe)']}
          buyLink2={['BUY HERE', '(UK & Overseas)']}
          buyText
          bgColor={'var(--orange)'}
          linkColor={fitstLinkColor}
        />
        <Issue
          ref={issue2Ref}
          img={imgLinks[1]}
          title={'Issue #6'}
          buyLink={['BUY HERE']}
          buyText
          linkColor={fitstLinkColor}
        />
        <Issue
          ref={issue3Ref}
          img={imgLinks[2]}
          title={'Issue #5'}
          buyLink={['BUY HERE']}
          buyText
        />
        <Issue
          ref={issue4Ref}
          img={imgLinks[3]}
          title={'Issue #4 is sold out.'}
          desc
        />
        <Issue
          ref={issue5Ref}
          img={imgLinks[4]}
          title={'Issue #3'}
          buyLink={['BUY HERE']}
          buyText
        />
        <Issue
          ref={issue6Ref}
          img={imgLinks[5]}
          title={'Issue #2'}
          buyLink={['BUY HERE']}
          buyText
        />
        <Issue
          ref={issue7Ref}
          img={imgLinks[6]}
          title={'Issue #1 is sold out.'}
          desc
        />
      </main>
      <Footer
        issue7Ref={issue7Ref}
        issue6Ref={issue6Ref}
        issue5Ref={issue5Ref}
        issue4Ref={issue4Ref}
        issue3Ref={issue3Ref}
        issue2Ref={issue2Ref}
        issue1Ref={issue1Ref}
      />
    </>
  )
}

export default App
