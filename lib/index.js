/*
 * Import Components
 * */
import Message from '../storybook/vue/src/components/Message/Message'
import Callout from '../storybook/vue/src/components/Callout/Callout'
import EmptyState from '../storybook/vue/src/components/EmptyState/EmptyState'
// import ProgressBar from '../storybook/vue/src/components/ProgressBar/ProgressBar'
import Navigation from '../storybook/vue/src/components/Navigation/Navigation'
import NavigationItem from '../storybook/vue/src/components/Navigation/NavigationItem'
import Breadcrumbs from '../storybook/vue/src/components/Breadcrumbs/Breadcrumbs'
import BreadcrumbsItem from '../storybook/vue/src/components/Breadcrumbs/BreadcrumbsItem'
import Avatar from '../storybook/vue/src/components/Avatar/Avatar.vue'
import Label from '../storybook/vue/src/components/Label/Label'
import Button from '../storybook/vue/src/components/Button/Button'
import Icon from '../storybook/vue/src/components/Icon/Icon'
import Card from '../storybook/vue/src/components/Card/Card'
import CardHeader from '../storybook/vue/src/components/Card/CardHeader'
import CardBody from '../storybook/vue/src/components/Card/CardBody'
import CardFooter from '../storybook/vue/src/components/Card/CardFooter'

/* List */
import List from '../storybook/vue/src/components/List/List'
import ListItem from '../storybook/vue/src/components/List/ListItem'

/* Form */
import Checkbox from '../storybook/vue/src/components/Checkbox/Checkbox'
import CheckboxGroup from '../storybook/vue/src/components/Checkbox/CheckboxGroup'
import Radio from '../storybook/vue/src/components/Radio/Radio'
import RadioGroup from '../storybook/vue/src/components/Radio/RadioGroup'
import Toggle from '../storybook/vue/src/components/Toggle/Toggle'
import Input from '../storybook/vue/src/components/Input/Input'
// import InputFormat from '../storybook/vue/src/components/InputFormat/InputFormat'
// import FormInputProtocol from '../storybook/vue/src/components/Input/FormInputProtocol'
// import InputTextarea from '../storybook/vue/src/components/Textarea/InputTextarea'

/*
 * Import Docs Components
 * */
// import DocsItem from '../storybook/vue/src/components/DocsComponents/DocsItem'
// import DocsSimpleList from '../storybook/vue/src/components/DocsComponents/DocsSimpleList'
// import DocsBackgroundColorList from '../storybook/vue/src/components/DocsComponents/DocsBackgroundColorList'
// import CodeBlock from '../storybook/vue/src/components/DocsComponents/CodeBlock/CodeBlock'

/*
 * Import All Styles
 * */
import '../src/scss/src/main.scss'

function install(Vue) {
  // Vue.stylesheet('orangeui.min.css')

  Vue.component('o-message', Message)
  Vue.component('o-callout', Callout)
  Vue.component('o-empty-state', EmptyState)
  // Vue.component('o-progress-bar', ProgressBar)
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
  // Vue.component('o-textarea', InputTextarea)

  /* Docs components */
  // Vue.component('docs-item', DocsItem)
  // Vue.component('docs-simple-list', DocsSimpleList)
  // Vue.component('docs-background-color-list', DocsBackgroundColorList)
  // Vue.component('code-block', CodeBlock)
}

export default { install }