/*
 * Import Orange Components
 * */
import OAvatar from "./src/components/Avatar/Avatar";

import OBreadcrumbs from "./src/components/Breadcrumbs/Breadcrumbs";
import OBreadcrumbsItem from "./src/components/Breadcrumbs/BreadcrumbsItem";

import OButton from "./src/components/Button/Button";
import OCallout from "./src/components/Callout/Callout";

import OCard from "./src/components/Card/Card";
import OCardBody from "./src/components/Card/CardBody";
import OCardFooter from "./src/components/Card/CardFooter";
import OCardHeader from "./src/components/Card/CardHeader";
import OCardImage from "./src/components/Card/CardImage";
import OCardSection from "./src/components/Card/CardSection";

import OCheckbox from "./src/components/Checkbox/Checkbox";
import OCheckboxGroup from "./src/components/Checkbox/CheckboxGroup";

import OInputDropdown from "./src/components/Dropdown/InputDropdown";
import OEmptyState from "./src/components/EmptyState/EmptyState";
import OIcon from "./src/components/Icon/Icon";
import OImage from "./src/components/Image/Image";
import OInput from "./src/components/Input/Input";
import OLabel from "./src/components/Label/Label";

import OList from "./src/components/List/List";
import OListItem from "./src/components/List/ListItem";
import OListItemSlot from "./src/components/List/ListItemSlot";

import OMessage from "./src/components/Message/Message";

import ONavigation from "./src/components/Navigation/Navigation";
import ONavigationItem from "./src/components/Navigation/NavigationItem";

import ORadio from "./src/components/Radio/Radio";
import ORadioGroup from "./src/components/Radio/RadioGroup";

import OTable from "./src/components/Table/Table";
import OTableWrapper from "./src/components/Table/TableWrapper";

import OTextarea from "./src/components/Textarea/Textarea";
import OToggle from "./src/components/Toggle/Toggle";

/*
 * Import All Styles
 * */
// import '@orange-ui/orange/src/scss/src/styles.scss';
import './src/scss/src/styles.scss';

function install(Vue) {
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
}

export default { install }