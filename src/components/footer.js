import React from 'react'
import Link from 'gatsby-link'

// Modules
import fontawesome from '@fortawesome/fontawesome'
import faHeart from '@fortawesome/fontawesome-free-solid/faHeart'

fontawesome.library.add(faHeart)

const currentYear = new Date().getFullYear();

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="content has-text-centered">
        <p>
          Built with <span class="icon has-text-danger"><i className="fas fa-heart"></i></span> from Postivmind.org Team
          <br/>
          &copy; {currentYear} Postivmind.org
        </p>
      </div>
    </div>
  </footer>
)

export default Footer
