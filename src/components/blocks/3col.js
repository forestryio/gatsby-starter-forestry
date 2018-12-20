import React from 'react'

import Column from './inc/column'

const ThreeCol = ({ block }) => (
  <section className="hero is-medium">
    <div className="hero-body">
      <div className="container">
        {block.title && (
          <h2 className="title is-3 has-text-centered">{block.title}</h2>
        )}
        <div className="columns">
          <div className="column">
            <Column columnData={block.col1} />
          </div>
          <div className="column">
            <Column columnData={block.col2} />
          </div>
          <div className="column">
            <Column columnData={block.col3} />
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default ThreeCol
