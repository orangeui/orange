/*
 * Import Components
 * */
import Message from '../site/components/Message/Message'
import Callout from '../site/components/Callout/Callout'
import EmptyState from '../site/components/EmptyState/EmptyState'
import ProgressBar from '../site/components/ProgressBar/ProgressBar'
import Navigation from '../site/components/Navigation/Navigation'
import NavigationItem from '../site/components/Navigation/NavigationItem'
import Breadcrumbs from '../site/components/Breadcrumbs/Breadcrumbs'
import BreadcrumbsItem from '../site/components/Breadcrumbs/BreadcrumbsItem'
import Avatar from '../site/components/Avatar/Avatar.vue'
import Label from '../site/components/Label/Label'
import Button from '../site/components/Button/Button'
import Icon from '../site/components/Icon/Icon'
import Card from '../site/components/Card/Card'
import CardHeader from '../site/components/Card/CardHeader'
import CardBody from '../site/components/Card/CardBody'
import CardFooter from '../site/components/Card/CardFooter'

/* List */
import List from '../site/components/List/List'
import ListItem from '../site/components/List/ListItem'

/* Form */
import Checkbox from '../site/components/Checkbox/Checkbox'
import CheckboxGroup from '../site/components/Checkbox/CheckboxGroup'
import Radio from '../site/components/Radio/Radio'
import RadioGroup from '../site/components/Radio/RadioGroup'
import Toggle from '../site/components/Toggle/Toggle'
import Input from '../site/components/Input/Input'
// import InputFormat from '../site/components/InputFormat/InputFormat'
// import FormInputProtocol from '../site/components/Input/FormInputProtocol'
import InputTextarea from '../site/components/Textarea/InputTextarea'

/*
 * Import Docs Components
 * */
// import DocsItem from '../site/components/DocsComponents/DocsItem'
import DocsSimpleList from '../site/components/DocsComponents/DocsSimpleList'
import DocsBackgroundColorList from '../site/components/DocsComponents/DocsBackgroundColorList'
import CodeBlock from '../site/components/DocsComponents/CodeBlock/CodeBlock'

/*
 * Import All Styles
 * */
import '../src/scss/src/main.scss'

function install(Vue) {
  // Vue.stylesheet('orangeui.min.css')

  Vue.component('o-message', Message)
  Vue.component('o-callout', Callout)
  Vue.component('o-empty-state', EmptyState)
  Vue.component('o-progress-bar', ProgressBar)
  Vue.component('o-navigation', Navigation)
  Vue.component('o-navigation-item', NavigationItem)
  Vue.component('o-breadcrumbs', Breadcrumbs)
  Vue.component('o-breadcrumbs-item', BreadcrumbsItem)
  Vue.component('o-avatar', Avatar)
  Vue.component('o-label', Label)
  Vue.component('o-button', Button)
  Vue.component('o-icon', Icon)
  Vue.component('o-card', Card)
  Vue.component('o-card-header', CardHeader)
  Vue.component('o-card-body', CardBody)
  Vue.component('o-card-footer', CardFooter)

  /* List */
  Vue.component('o-list', List)
  Vue.component('o-list-item', ListItem)

  /* Form */
  Vue.component('o-checkbox', Checkbox)
  Vue.component('o-checkbox-group', CheckboxGroup)
  Vue.component('o-radio', Radio)
  Vue.component('o-radio-group', RadioGroup)
  Vue.component('o-toggle', Toggle)
  Vue.component('o-input', Input)
  // Vue.component('o-input-format', InputFormat)
  Vue.component('o-textarea', InputTextarea)

  /* Docs components */
  // Vue.component('docs-item', DocsItem)
  Vue.component('docs-simple-list', DocsSimpleList)
  Vue.component('docs-background-color-list', DocsBackgroundColorList)
  Vue.component('code-block', CodeBlock)
}

export default { install }