import { createWidget } from 'discourse/widgets/widget'
import { h } from 'virtual-dom'

export default createWidget('bid-13-header', {
  tagName: 'li.bid-13-header',
  buildKey(attrs) { return 'bid-13-header' },

  html() {
    let links = [
      this.link("https://bid13.com/auctions", "Auctions", "search-lg"),
      this.link("https://bid13.com/storage-auction-map", "Map", "map-idle"),
      this.link("/", "Forum", "forum-idle"),
      this.link("https://bid13.com/faq", "Support", "support-idle"),
    ]
    if (Discourse.User.current()) {
      links.push(this.link("https://bid13.com/my-account", "My Account", "usermenu"))
    }

    return h('div.links', links)
  },

  link(href, text, icon) {
    return h(`a.link#${text.toLowerCase()}`, { href }, [
      h(`svg.svg-icon.icon-${icon}`,
        h('use', { attributes: { "xlink:href": `#icon-${icon}` } })
      ),
      h('span.link-name', text)
    ])
  }
})
