import React from 'react'

const CTA = ({ block }) => (
  <section
    className={
      block.background
        ? `hero is-medium has-text-centered is-${block.background}`
        : 'hero is-medium has-text-centered'
    }
  >
    <div className="hero-body">
      <div className="container">
        <h2 className="title is-2">{block.title}</h2>
        {block.subtitle && <p className="subtitle">{block.subtitle}</p>}
        <a
          target="_blank"
          rel="noopener noreferrer"
          className={
            block.background &&
            (block.background === 'primary' || block.background === 'dark')
              ? 'button is-primary is-large is-inverted is-outlined'
              : 'button is-primary is-large'
          }
          href={block.button.url}
        >
          {block.button.text}
        </a>
      </div>
    </div>
  </section>
)

export default CTA
