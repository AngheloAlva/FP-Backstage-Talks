import React from 'react'
import './Issue.css'

const Issue = React.forwardRef(({
  img,
  title,
  buyLink = ['', ''],
  buyLink2 = ['', ''],
  buyText = false,
  desc = false,
  linkColor
}, ref) => {
  return (
    <div className='issue-container' ref={ref}>
      <img src={img} alt={title} className="issue-img" />
      <div className='issue-text'>
        <h3>{title}</h3>
        <p>
          <a href='#' style={{ color: linkColor }}>{buyLink[0]} </a>
          {buyLink[1]}
        </p>
        <p>
          <a href="#" style={{ color: linkColor }}>{buyLink2[0]} </a>
          {buyLink2[1]}
        </p>
        {
          buyText && <p style={{ marginTop: '.938rem' }}>or in <a href="#" style={{ color: linkColor }}>selected stores</a>.</p>
        }
        {
          desc && <p>If you ar lucky, you may get the last pieces in <a href="#" style={{ color: linkColor }}>selected stores</a>.</p>
        }
      </div>
    </div>
  )
})

export default Issue
