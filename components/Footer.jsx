import './Footer.css'

const Footer = () => {
  return (
    <footer>
      <p>
        Backstage Talks is a magazine of casual, but in depth dialogues on design and business. Our decisions shape and influence this complex world--to have a chance to make the right ones, we need to talk.
      </p>
      <p className='footer__copyright'>
        © 2023 <a href="#">Published by Büro Milk</a>
      </p>

      <h3 className='footer__policy'><a href="#">Privacy Policy</a></h3>
      <h3 className='footer__email'><a href="#">info@backstagestalks.com</a></h3>
    </footer>
  )
}

export default Footer
