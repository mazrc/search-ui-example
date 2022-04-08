import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 1 }}>
        <Link
          to="/"
          activeClassName="active"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          IBIQ
        </Link>
        <Link
          to="/catalog"
          activeClassName="active"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          Catalog
        </Link>
        <Link
          to="/dropzone"
          activeClassName="active"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          Dropzone
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
