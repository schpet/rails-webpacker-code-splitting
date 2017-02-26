// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb

import logger from 'logger'
import Foo from 'foo'

new Foo()

const datepickers = document.querySelectorAll('[data-datepicker]')
if (datepickers.length) {
  logger('datepickers found on page!')

  require.ensure(['date-picker'], function(require) {
    const datepicker = require('date-picker').default
    datepicker(datepickers)
  })
} else {
  logger('no datepickers on page')
}

const tooltips = document.querySelectorAll('[data-tooltip]')
if (tooltips.length) {
  logger('tooltips found on page!')

  require.ensure(['tooltip'], function(require) {
    const tooltip = require('tooltip').default
    tooltip(tooltips)
  })
} else {
  logger('no tooltips on page')
}

