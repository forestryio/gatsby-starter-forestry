import React from 'react'

const Footer = ({ copyright }) => (
  <footer className="section site-footer">
    <div className="container has-text-centered">
      Copyright {new Date().getFullYear()}{' '}
      {copyright.url ? (
        <a href={copyright.url}>{copyright.name}</a>
      ) : (
        copyright.name
      )}
    </div>
  </footer>
)

export default Footer
