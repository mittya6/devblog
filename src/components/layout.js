import React from "react"
import Helmet from "react-helmet"

export default ({ children }) => (
  <div >
    <Helmet>
      <title>Gastbyサンプル</title>
      <meta name="description" content="このページはGastbyサンプルです。" />
      <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.23.0/prism.min.js" integrity="sha512-YBk7HhgDZvBxmtOfUdvX0z8IH2d10Hp3aEygaMNhtF8fSOvBZ16D/1bXZTJV6ndk/L/DlXxYStP8jrF77v2MIg==" crossorigin="anonymous"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.23.0/plugins/toolbar/prism-toolbar.min.js" integrity="sha512-cu2C9EssrOrVXT4thyL4gz/qWyh3Lq9XbICUXYyh3zJRCSKk1J08tBKPXnsSpdpZXOliaK/OJBygw/l0twAmwA==" crossorigin="anonymous"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.23.0/plugins/copy-to-clipboard/prism-copy-to-clipboard.min.js" integrity="sha512-bWzyGaP/f19RLeYGN6ZhDgvkS7GM0Fq23lOI1/PB3lV6I775RIDzXLxCGR4iiDGzeMsQ3lncuXUQMFP7qO9lIQ==" crossorigin="anonymous"></script>
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

    <div className="uk-container uk-container-xsmall uk-margin-small-top">
      {children}
    </div>
  </div>
)