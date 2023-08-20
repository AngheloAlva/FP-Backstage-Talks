/* eslint-disable no-unused-vars */
import Issue from '../components/Issue'
import './App.css'

function App () {
  const imgLinks = [
    '../src/assets/backstagetalks_cover_issue_7.png',
    '../src/assets/backstagetalks_cover_issue_6.png',
    '../src/assets/backstagetalks_cover_issue_5.png',
    '../src/assets/backstagetalks_cover_issue_4.png',
    '../src/assets/backstagetalks_cover_issue_3.png',
    '../src/assets/backstagetalks_cover2017.png',
    '../src/assets/backstagetalks_cover2016_n.png'
  ]

  return (
    <>
      <h1>BACKSTAGE TALKS</h1>

      <Issue
        img={imgLinks[0]}
        title={'Issue #7'}
        buyLink={['BUY HERE', '(Europe)']}
        buyLink2={['BUY HERE', '(UK & Overseas)']}
        buyText
      />
      <Issue
        img={imgLinks[1]}
        title={'Issue #6'}
        buyLink={['BUY HERE']}
        buyText
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
        buyText
      />
      <Issue
        img={imgLinks[5]}
        title={'Issue #2'}
        buyText
      />
      <Issue
        img={imgLinks[6]}
        title={'Issue #1 is sold out.'}
        desc
        buyText
      />
    </>
  )
}

export default App
