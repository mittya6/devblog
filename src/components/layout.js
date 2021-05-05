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
      <html lang="ja" />
    </Helmet>
    <div className="uk-container uk-container-small">
      {children}
    </div>
  </div>
)