import React from 'react'
import PropTypes from 'prop-types'
import { NormalPage } from '../../templates/normal-page'

const NormalPagePreview = ({ entry, widgetFor }) => (
  <NormalPage
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

NormalPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default NormalPagePreview
