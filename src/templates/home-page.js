// Modules
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import marked from 'marked';
import Typed from 'typed.js';

// Components
import Features from '../components/Features'
import Testimonials from '../components/Testimonials'
import Pricing from '../components/Pricing'
import { HTMLContent } from '../components/Content'

const options = {
  strings: [
    "Never give up",
    "Believe in yourself",
    "If you can dream it, you can do it",
    "Stay Positive",
    "Keep moving forward",
    "I can, therefore I am."
  ],
  typeSpeed: 40,
  backSpeed: 20,
  backDelay: 1200,
  shuffle: true,
  loop: true,
  loopCount: Infinity,
  cursorChar: ""
}

export const HomePageTemplate = ({
  image,
  title,
  heading1,
  heading2,
  description,
  testimonials,
  fullImage
}) => {
  description = marked(description);

  return (
    <section className="ptm-hero section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
  
                {/* Hero banner */}
                <div
                  className="full-width-image-container type--parallax margin-top-0"
                  style={{ backgroundImage: `url(${image})` }}
                >
                  <h1
                    className="ptm-hero__text has-text-weight-bold is-size-1"
                    style={{
                      boxShadow: '0.5rem 0 0 #f40, -0.5rem 0 0 #f40',
                      backgroundColor: '#f40',
                      color: 'white',
                      padding: '1rem',
                    }}
                  >
                    
                  </h1>
                </div>
  
                <div className="columns is-centered">
                  <div className="column is-10">
                    <h2 className="has-text-weight-semibold is-size-2">
                      {heading1}
                    </h2>
                    <HTMLContent className="content" content={description} />
                  </div>
                </div>
                <div
                  className="full-width-image-container type--parallax"
                  style={{ backgroundImage: `url(${fullImage})` }}
                />
                
                <h2 className="has-text-weight-semibold is-size-2">
                  {heading2}
                </h2>
                <Testimonials testimonials={testimonials} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

HomePageTemplate.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  heading1: PropTypes.string,
  heading2: PropTypes.string,
  description: PropTypes.string,
  testimonials: PropTypes.array,
  fullImage: PropTypes.string,
}

// const ProductPage = ({ data }) => {
//   const { frontmatter } = data.markdownRemark

//   return (
//     <HomePageTemplate
//       image={frontmatter.image}
//       title={frontmatter.title}
//       heading1={frontmatter.heading1}
//       heading2={frontmatter.heading2}
//       description={frontmatter.description}
//       testimonials={frontmatter.testimonials}
//       fullImage={frontmatter.full_image}
//     />
//   )
// }

export default class ProductPage extends Component {
  componentDidMount() {
    const typed = new Typed(".ptm-hero__text", options);
  }

  render() {
    const { data } = this.props;
    const { frontmatter } = data.markdownRemark

    return (
      <HomePageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading1={frontmatter.heading1}
        heading2={frontmatter.heading2}
        description={frontmatter.description}
        testimonials={frontmatter.testimonials}
        fullImage={frontmatter.full_image}
      />
    );
  }
}

ProductPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export const productPageQuery = graphql`
  query ProductPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        image
        heading1
        description
        heading2
        testimonials {
          author
          quote
        }
        full_image
      }
    }
  }
`
