import Vue from "vue";
import App from "./App.vue";

/*
 * Import Orange styles
 * */
import "../../../src/scss/src/styles.scss";

/*
 * Import Orange Components
 * */
import OAvatar from "./components/Avatar/Avatar";

import OBreadcrumbs from "./components/Breadcrumbs/Breadcrumbs";
import OBreadcrumbsItem from "./components/Breadcrumbs/BreadcrumbsItem";

import OButton from "./components/Button/Button";
import OCallout from "./components/Callout/Callout";

import OCard from "./components/Card/Card";
import OCardBody from "./components/Card/CardBody";
import OCardFooter from "./components/Card/CardFooter";
import OCardHeader from "./components/Card/CardHeader";
import OCardImage from "./components/Card/CardImage";
import OCardSection from "./components/Card/CardSection";

import OCheckbox from "./components/Checkbox/Checkbox";
import OCheckboxGroup from "./components/Checkbox/CheckboxGroup";

import OInputDropdown from "./components/Dropdown/InputDropdown";
import OEmptyState from "./components/EmptyState/EmptyState";
import OIcon from "./components/Icon/Icon";
import OImage from "./components/Image/Image";
import OInput from "./components/Input/Input";
import OLabel from "./components/Label/Label";

import OList from "./components/List/List";
import OListItem from "./components/List/ListItem";
import OListItemSlot from "./components/List/ListItemSlot";

import OMessage from "./components/Message/Message";

import ONavigation from "./components/Navigation/Navigation";
import ONavigationItem from "./components/Navigation/NavigationItem";

import ORadio from "./components/Radio/Radio";
import ORadioGroup from "./components/Radio/RadioGroup";

import OTable from "./components/Table/Table";
import OTableWrapper from "./components/Table/TableWrapper";

import OTextarea from "./components/Textarea/Textarea";
import OToggle from "./components/Toggle/Toggle";

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

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
