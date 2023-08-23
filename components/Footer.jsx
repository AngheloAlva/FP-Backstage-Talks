import './Footer.css'

const Footer = ({ issue1Ref, issue2Ref, issue3Ref, issue4Ref, issue5Ref, issue6Ref, issue7Ref }) => {
  return (
    <footer>
      <p className='footer__desc'>
        Backstage Talks is a magazine of casual, but in depth dialogues on design and business. Our decisions shape and influence this complex world--to have a chance to make the right ones, we need to talk.
      </p>
      <p className='footer__copyright'>
        © 2023 <a href="#">Published by Büro Milk</a>
      </p>

      <div className='footer__links'>
        <h3 className='footer__policy'><a href="#">Privacy Policy</a></h3>
          <h3 className='footer__email'><a href="#">info@backstagetalks.com</a></h3>
      </div>

      <div className='footer__issues'>
        <ul>
          <li onClick={() => window.scrollTo({ behavior: 'smooth', top: issue1Ref.current.offsetTop })}>Issue #7</li>
          <li onClick={() => window.scrollTo({ behavior: 'smooth', top: issue2Ref.current.offsetTop })}>Issue #6</li>
          <li onClick={() => window.scrollTo({ behavior: 'smooth', top: issue3Ref.current.offsetTop })}>Issue #5</li>
          <li onClick={() => window.scrollTo({ behavior: 'smooth', top: issue4Ref.current.offsetTop })}>Issue #4</li>
          <li onClick={() => window.scrollTo({ behavior: 'smooth', top: issue5Ref.current.offsetTop })}>Issue #3</li>
          <li onClick={() => window.scrollTo({ behavior: 'smooth', top: issue6Ref.current.offsetTop })}>Issue #2</li>
          <li onClick={() => window.scrollTo({ behavior: 'smooth', top: issue7Ref.current.offsetTop })}>Issue #1</li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
