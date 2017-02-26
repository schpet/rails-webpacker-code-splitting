import $ from 'jquery'
import 'jquery-ui/ui/core'
import 'jquery-ui/ui/widgets/datepicker'
import 'jquery-ui/themes/base/core.css'
import 'jquery-ui/themes/base/theme.css'
import 'jquery-ui/themes/base/datepicker.css'

export default (elements) => {
  $(elements).datepicker()
}
