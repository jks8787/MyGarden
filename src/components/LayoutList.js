import React, { PropTypes } from 'react'
import Layout from './Layout'

const LayoutList = ({ layouts, onLayoutClick }) => (
  <ul className='columns'>
    {layouts.map(layout =>
      <Layout
        key={layout.id}
        {...layout}
        onClick={() => onLayoutClick(layout.id)}
      />
    )}
  </ul>
)

LayoutList.propTypes = {
  layouts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onLayoutClick: PropTypes.func.isRequired
};

export default LayoutList;
