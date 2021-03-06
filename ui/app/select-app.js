const inherits = require('util').inherits
const Component = require('react').Component
const connect = require('react-redux').connect
const h = require('react-hyperscript')
const { HashRouter } = require('react-router-dom')
const OldApp = require('../../old-ui/app/app')
const { setFeatureFlag } = require('./actions')
const I18nProvider = require('./i18n-provider')

function mapStateToProps (state) {
  return {
    isUnlocked: state.metamask.isUnlocked,
    firstTime: Object.keys(state.metamask.identities).length === 0,
  }
}

function mapDispatchToProps (dispatch) {
  return {
    setFeatureFlagWithModal: () => {
      return dispatch(setFeatureFlag('betaUI', true, 'BETA_UI_NOTIFICATION_MODAL'))
    },
    setFeatureFlagWithoutModal: () => {
      return dispatch(setFeatureFlag('betaUI', true))
    },
  }
}
module.exports = connect(mapStateToProps, mapDispatchToProps)(SelectedApp)

inherits(SelectedApp, Component)
function SelectedApp () {
  Component.call(this)
}

SelectedApp.prototype.render = function () {
  // Code commented out until we begin auto adding users to NewUI
  // const { betaUI, firstTime } = this.props
  // const Selected = betaUI || firstTime ? App : OldApp

  return h(HashRouter, {
    hashType: 'noslash',
  }, [
    h(I18nProvider, [ h(OldApp) ]),
  ])
}
