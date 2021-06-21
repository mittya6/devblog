import React from "react"
import Helmet from "react-helmet"

export default ({ children }) => (

  <div className="uk-container uk-container-xsmall ">
    <Helmet>
      <title>Program Praia</title>
      <meta name="description" content="このページはGastbyサンプルです。" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <html lang="ja" />
    </Helmet>
    <nav className="uk-navbar-container uk-navbar-transparent" uk-navbar="true" uk-sticky="true">
      <div className="uk-navbar-left">

        <ul className="uk-navbar-nav">
          <li className="uk-active"><a href="/"><span uk-icon="home"></span>
          </a></li>
          <li>
            <a href="#">Parent</a>
            <div className="uk-navbar-dropdown">
              <ul className="uk-nav uk-navbar-dropdown-nav">
                <li className="uk-active"><a href="/#">Active</a></li>
                <li><a href="/#">Item</a></li>
                <li><a href="/#">Item</a></li>
              </ul>
            </div>
          </li>
          <li><a href="/#">Item</a></li>
        </ul>

      </div>
    </nav>

    {children}
  </div>

)