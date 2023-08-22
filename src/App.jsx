/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from 'react'
import { Element, scroller } from 'react-scroll'
import Footer from '../components/Footer'
import Issue from '../components/Issue'
import './App.css'

function App () {
  const [bgColor, setBgColor] = useState('var(--pink)')
  const [fitstLinkColor, setFirstLinkColor] = useState('var(--pink)')
  const [currentIssue, setCurrentIssue] = useState(1)
  const [lastScrollPsotition, setLastScrollPosition] = useState(0)
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

  const scrollToNextIssue = (currentIssue) => {
    let nextIssue = currentIssue

    if (nextIssue < 7) {
      nextIssue += 1
      setCurrentIssue(nextIssue)
    }

    scroller.scrollTo(`issue-${nextIssue}`, {
      duration: 500,
      delay: 0,
      smooth: 'easeInOutQuart'
    })
  }

  const scrollToPrevIssue = (currentIssue) => {
    let prevIssue = currentIssue

    if (prevIssue > 1) {
      prevIssue -= 1
      setCurrentIssue(prevIssue)
    }

    scroller.scrollTo(`issue-${prevIssue}`, {
      duration: 500,
      delay: 0,
      smooth: 'easeInOutQuart'
    })
  }

  const handleScroll = () => {
    const scrollPostion = window.pageYOffset

    if (window.innerWidth > 992) {
      if (scrollPostion > lastScrollPsotition) {
        scrollToNextIssue(currentIssue)
      } else {
        scrollToPrevIssue(currentIssue)
      }
      setLastScrollPosition(scrollPostion)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleBgColor)
    return () => window.removeEventListener('scroll', handleBgColor)
  }, [])

  return (
    <>
      <header>
        <img src='../src/assets/logo.png' alt= 'logo' className='logo-img' />
      </header>
      <main style={{ backgroundColor: bgColor }}>
        <Element name='issue-7'>
          <Issue
            id='issue-7'
            img={imgLinks[0]}
            title={'Issue #7'}
            buyLink={['BUY HERE', '(Europe)']}
            buyLink2={['BUY HERE', '(UK & Overseas)']}
            buyText
            bgColor={'var(--orange)'}
            linkColor={fitstLinkColor}
          />
        </Element>
        <Element name='issue-6'>
          <Issue
            id='issue-6'
            img={imgLinks[1]}
            title={'Issue #6'}
            buyLink={['BUY HERE']}
            buyText
            linkColor={fitstLinkColor}
          />
        </Element>
        <Element name='issue-5'>
          <Issue
            id='issue-5'
            img={imgLinks[2]}
            title={'Issue #5'}
            buyLink={['BUY HERE']}
            buyText
          />
        </Element>
        <Element name='issue-4'>
          <Issue
            id='issue-4'
            img={imgLinks[3]}
            title={'Issue #4 is sold out.'}
            desc
          />
        </Element>
        <Element name='issue-3'>
          <Issue
            id='issue-3'
            img={imgLinks[4]}
            title={'Issue #3'}
            buyLink={['BUY HERE']}
            buyText
          />
        </Element>
        <Element name='issue-2'>
          <Issue
            id='issue-2'
            img={imgLinks[5]}
            title={'Issue #2'}
            buyLink={['BUY HERE']}
            buyText
          />
        </Element>
        <Element name='issue-1'>
          <Issue
            id='issue-1'
            img={imgLinks[6]}
            title={'Issue #1 is sold out.'}
            desc
          />
        </Element>
      </main>
      <Footer />
    </>
  )
}

export default App
