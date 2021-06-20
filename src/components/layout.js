import React from "react"
import Helmet from "react-helmet"

export default ({ children }) => (



  <div className="uk-container uk-container-small ">
    <Helmet>
      <title>Program Praia</title>
      <meta name="description" content="このページはGastbyサンプルです。" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <script src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.6.20/js/uikit.min.js" integrity="sha512-SKcdAvrPgF8Iy45+CmcEwF4S2uhVLyTNM8o4UVfggZCQbUIv69qT+b2ppvFlud86827BuRNe7CtCrppmkmdOvQ==" crossorigin="anonymous"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.6.20/js/uikit-icons.min.js" integrity="sha512-5kjeg68TagkjC5zqP4kfrzqewo2G7mku+uYr0UImSe/FsjIDdh6JGN1XvxRznmXJe2ZZ+epKPfHE8amCM9bZ8Q==" crossorigin="anonymous"></script>
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
                <li className="uk-active"><a href="#">Active</a></li>
                <li><a href="#">Item</a></li>
                <li><a href="#">Item</a></li>
              </ul>
            </div>
          </li>
          <li><a href="#">Item</a></li>
        </ul>

      </div>
    </nav>

    {children}
  </div>

)