import Vue from 'vue'

/*
 * Import External Components
 * */
import VeeValidate from 'vee-validate'
import Lodash from 'lodash'

/*
 * Import Components
 * */
import Message from '@/components/Message/Message'
import Callout from '@/components/Callout/Callout'
import EmptyState from '@/components/EmptyState/EmptyState'
import ProgressBar from '@/components/ProgressBar/ProgressBar'
import Navigation from '@/components/Navigation/Navigation'
import NavigationItem from '@/components/Navigation/NavigationItem'
import Breadcrumbs from '@/components/Breadcrumbs/Breadcrumbs'
import BreadcrumbsItem from '@/components/Breadcrumbs/BreadcrumbsItem'
import Avatar from '@/components/Avatar/Avatar.vue'
import Label from '@/components/Label/Label'
import Button from '@/components/Button/Button'
import Icon from '@/components/Icon/Icon'
import Card from '@/components/Card/Card'
import CardHeader from '@/components/Card/CardHeader'
import CardBody from '@/components/Card/CardBody'
import CardFooter from '@/components/Card/CardFooter'

/* List */
import List from '@/components/List/List'
import ListItem from '@/components/List/ListItem'

/* Form */
import Checkbox from '@/components/Checkbox/Checkbox'
import CheckboxGroup from '@/components/Checkbox/CheckboxGroup'
import Radio from '@/components/Radio/Radio'
import RadioGroup from '@/components/Radio/RadioGroup'
import Toggle from '@/components/Toggle/Toggle'
import Input from '@/components/Input/Input'
import InputFormat from '@/components/InputFormat/InputFormat'
// import FormInputProtocol from '@/components/Input/FormInputProtocol'
import InputTextarea from '@/components/Textarea/InputTextarea'

/*
 * Import Docs Components
 * */
import DocsItem from '@/components/DocsComponents/DocsItem'
import DocsSimpleList from '@/components/DocsComponents/DocsSimpleList'
import DocsBackgroundColorList from '@/components/DocsComponents/DocsBackgroundColorList'
import CodeBlock from '@/components/DocsComponents/CodeBlock/CodeBlock'

/*
* Import Directives
* */
import AutoExpand from '@/modules/directives/AutoExpand'
import Highlightjs from '@/modules/directives/Highlightjs'

/*
* Import Styles
* */
import 'highlight.js/styles/default.css'
import '@/assets/styles/styles.scss'

/*
* Use External Components
* */
Vue.use(VeeValidate, {
  fieldsBagName: 'validate_fields'
})
Object.defineProperty(Vue.prototype, '_', { value: Lodash })

/*
* Use Components
* */
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
Vue.component('o-input-format', InputFormat)
// Vue.component('form-input-protocol', FormInputProtocol)
Vue.component('o-textarea', InputTextarea)

/* Docs components */
Vue.component('docs-item', DocsItem)
Vue.component('docs-simple-list', DocsSimpleList)
Vue.component('docs-background-color-list', DocsBackgroundColorList)
Vue.component('code-block', CodeBlock)

/*
* Use Directives
* */
Vue.directive(AutoExpand)
Vue.directive(Highlightjs)
