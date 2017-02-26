import $ from 'jquery'
import 'jquery-ui/ui/core'
import 'jquery-ui/ui/widgets/tooltip'
import 'jquery-ui/themes/base/core.css'
import 'jquery-ui/themes/base/theme.css'
import 'jquery-ui/themes/base/tooltip.css'

export default (elements) => {
  $(elements).tooltip()
}
