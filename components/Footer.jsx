import './Footer.css'

const Footer = () => {
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
          <h3 className='footer__email'><a href="#">info@backstagestalks.com</a></h3>
      </div>

      <div className='footer__issues'>
        <ul>
          <li>Issue #7</li>
          <li>Issue #6</li>
          <li>Issue #5</li>
          <li>Issue #4</li>
          <li>Issue #3</li>
          <li>Issue #2</li>
          <li>Issue #1</li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
