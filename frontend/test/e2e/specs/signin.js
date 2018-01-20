
module.exports = {
  'open signin page test': function (browser) {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js
    const path = 'account/signin'
    const devServer = `${browser.globals.devServerURL}/${path}`

    browser
    .url(devServer)
    .waitForElementVisible('#app', 5000)
    .getLog('browser', (result) => {
        console.log(result)
    })
    .assert.elementPresent('h1')
    .assert.containsText('h1', 'Signin')
    .end()
  }
}
