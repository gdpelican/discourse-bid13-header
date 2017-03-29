import { withPluginApi, reopenWidget } from 'discourse/lib/plugin-api'

export default {
  name: 'bid-13-header-init',
  initialize() {
    withPluginApi('0.8.5', api => {
      api.decorateWidget('header-icons:before', function(helper) {
        return helper.attach('bid-13-header')
      })

      api.reopenWidget('home-logo', {
        settings: {
          href: "https://www.bid13.com/"
        },
      })
    })
  }
}
