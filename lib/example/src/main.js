import Vue from 'vue'
import App from './App.vue'

import _ from "lodash";
Vue.prototype._ = _;
window._ = require('lodash');



// Import and register build files
// import OrangeVue from '@orange-ui/vue';
// import '@orange-ui/vue/dist/style.css';

// Vue.use(OrangeVue);

// Import and register source files
// import "@orange-ui/orange/src/scss/src/styles.scss";

// import "@orange-ui/vue/src/scss/src/styles.scss";
import "./orange-scss.scss";

/*
 * Import Orange Components
 * */
import OAvatar from "@orange-ui/vue/src/components/Avatar/Avatar";

import OBreadcrumbs from "@orange-ui/vue/src/components/Breadcrumbs/Breadcrumbs";
import OBreadcrumbsItem from "@orange-ui/vue/src/components/Breadcrumbs/BreadcrumbsItem";

import OButton from "@orange-ui/vue/src/components/Button/Button";
import OCallout from "@orange-ui/vue/src/components/Callout/Callout";

import OCard from "@orange-ui/vue/src/components/Card/Card";
import OCardBody from "@orange-ui/vue/src/components/Card/CardBody";
import OCardFooter from "@orange-ui/vue/src/components/Card/CardFooter";
import OCardHeader from "@orange-ui/vue/src/components/Card/CardHeader";
import OCardImage from "@orange-ui/vue/src/components/Card/CardImage";
import OCardSection from "@orange-ui/vue/src/components/Card/CardSection";

import OCheckbox from "@orange-ui/vue/src/components/Checkbox/Checkbox";
import OCheckboxGroup from "@orange-ui/vue/src/components/Checkbox/CheckboxGroup";

import OInputDropdown from "@orange-ui/vue/src/components/Dropdown/InputDropdown";
import OEmptyState from "@orange-ui/vue/src/components/EmptyState/EmptyState";
import OIcon from "@orange-ui/vue/src/components/Icon/Icon";
import OImage from "@orange-ui/vue/src/components/Image/Image";
import OInput from "@orange-ui/vue/src/components/Input/Input";
import OLabel from "@orange-ui/vue/src/components/Label/Label";

import OList from "@orange-ui/vue/src/components/List/List";
import OListItem from "@orange-ui/vue/src/components/List/ListItem";
import OListItemSlot from "@orange-ui/vue/src/components/List/ListItemSlot";

import OMessage from "@orange-ui/vue/src/components/Message/Message";

import ONavigation from "@orange-ui/vue/src/components/Navigation/Navigation";
import ONavigationItem from "@orange-ui/vue/src/components/Navigation/NavigationItem";

import ORadio from "@orange-ui/vue/src/components/Radio/Radio";
import ORadioGroup from "@orange-ui/vue/src/components/Radio/RadioGroup";

import OTable from "@orange-ui/vue/src/components/Table/Table";
import OTableWrapper from "@orange-ui/vue/src/components/Table/TableWrapper";

import OTextarea from "@orange-ui/vue/src/components/Textarea/Textarea";
import OToggle from "@orange-ui/vue/src/components/Toggle/Toggle";


/*
 * Register Components globally
 * */
Vue.component("o-avatar", OAvatar);

Vue.component("o-breadcrumbs", OBreadcrumbs);
Vue.component("o-breadcrumbs-item", OBreadcrumbsItem);

Vue.component("o-button", OButton);
Vue.component("o-callout", OCallout);

Vue.component("o-card", OCard);
Vue.component("o-card-body", OCardBody);
Vue.component("o-card-footer", OCardFooter);
Vue.component("o-card-header", OCardHeader);
Vue.component("o-card-image", OCardImage);
Vue.component("o-card-section", OCardSection);

Vue.component("o-checkbox", OCheckbox);
Vue.component("o-checkbox-group", OCheckboxGroup);

Vue.component("o-form-dropdown", OInputDropdown);
Vue.component("o-empty-state", OEmptyState);
Vue.component("o-icon", OIcon);
Vue.component("o-image", OImage);
Vue.component("o-form-input", OInput);
Vue.component("o-label", OLabel);

Vue.component("o-list", OList);
Vue.component("o-list-item", OListItem);
Vue.component("o-list-item-slot", OListItemSlot);

Vue.component("o-message", OMessage);

Vue.component("o-navigation", ONavigation);
Vue.component("o-navigation-item", ONavigationItem);

Vue.component("o-radio", ORadio);
Vue.component("o-radio-group", ORadioGroup);

Vue.component("o-table", OTable);
Vue.component("o-table-wrapper", OTableWrapper);

Vue.component("o-form-textarea", OTextarea);
Vue.component("o-toggle", OToggle);


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
