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

      <Issue img={imgLinks[0]} title={'Issue #7'} buyLink={['BUY HERE', '(Europe)']} buyLink2={['BUY HERE', '(UK & Overseas)']} buyText />
    </>
  )
}

export default App
