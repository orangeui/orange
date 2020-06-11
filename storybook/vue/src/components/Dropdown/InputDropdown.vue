<template>
  <div class="form__item">
    <div
      :id="id"
      v-on-clickaway="closeMenu"
      class="o-form-dropdown"
      :class="classes"
      @click="toggleMenu($event)"
    >
      <label class="o-form-dropdown__label" :for="id">{{ label }}</label>

      <input
        v-if="search"
        :id="id"
        ref="input"
        v-model="search_value"
        type="text"
        class="o-form-dropdown__input"
      />
      <input
        v-else
        :id="id"
        ref="input"
        v-model="value"
        type="text"
        :name="id"
        class="o-form-dropdown__input"
      />

      <div
        v-if="dropdown_item_title"
        :class="[
          search ? 'o-form-dropdown__search-text' : 'o-form-dropdown__text',
          { 'no-label': !label }
        ]"
      >
        {{ dropdown_item_title }}
      </div>
      <div v-else-if="!search" class="o-form-dropdown__text">
        {{ placeholder }}
      </div>

      <div class="o-form-dropdown__icon">
        <svg viewBox="0 0 24 24">
          <path
            fill="#000000"
            d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
          />
        </svg>
        <svg viewBox="0 0 24 24">
          <path
            fill="#000000"
            d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
          />
        </svg>
      </div>

      <div class="o-form-dropdown__content">
        <ul class="o-form-dropdown__menu">
          <li
            v-for="item in !search ? dropdown_items : dropdown_items_search"
            :key="item.id ? item.id : item"
            :class="{ 'is-selected': item.is_selected }"
            @click="updateValue(item)"
          >
            <template v-if="_.isObject(item)">{{
              item[title_property]
            }}</template>
            <template v-else>{{ item }}</template>
            <o-icon v-if="item.is_selected" symbol="yes" />
          </li>
        </ul>
      </div>
    </div>

    <div v-if="description" class="o-form__description">{{ description }}</div>
  </div>
</template>

<script>
import Vue from "vue";
import _ from "lodash";
Vue.prototype._ = _;

import OIcon from "../Icon/Icon";
import { mixin as clickaway } from "vue-clickaway";

export default {
  name: "formInputDropdown",

  // inject: [ '$validator' ],

  mixins: [clickaway],

  components: {
    OIcon
  },

  props: {
    /**
     * Set value with <code>v-model</code> prop
     */
    value: {
      required: true
    },

    /**
     * Dropdown array of items
     */
    items: {
      type: Array,
      required: true,
      default: null
    },

    /**
     * Property to display in dropdown list
     *
     * Possible only when passing array of object
     */
    // selected_items: {
    //   type: Array,
    //   required: false,
    //   default: null
    // },

    /**
     * Set id to label and input to enable opening
     */
    id: {
      type: String,
      required: true,
      default: null
    },

    /**
     * Label text
     */
    label: {
      type: String,
      required: true,
      default: "Dropdown label"
    },

    /**
     * Placeholder text when search is not activated
     */
    placeholder: {
      type: String,
      required: true,
      default: null
    },

    /**
     * Description text below dropdown
     */
    description: {
      type: String,
      required: false,
      default: null
    },

    /**
     * Property to display in dropdown list
     *
     * Possible only when passing array of object
     */
    title_property: {
      type: String,
      required: false,
      default: "name"
    },

    /**
     * Value of property we pass to parent
     *
     * Possible only when passing array of object
     */
    value_property: {
      type: String,
      required: false,
      default: "id"
    },

    /**
     * Pass full object to parent
     *
     * Possible only when passing array of object
     */
    value_as_object: {
      type: Boolean,
      required: false,
      default: false
    },

    /**
     * Enable search input
     */
    search: {
      type: Boolean,
      required: false,
      default: false
    },

    /**
     * Disable dropdown
     */
    disabled: {
      type: Boolean,
      required: false,
      default: false
    }

    /**
     * Enable validation
     */
    // validate: {
    //   type: String,
    //   default: null
    // }
  },

  data() {
    return {
      is_open: false,
      search_value: null
    };
  },

  computed: {
    classes() {
      return {
        "is-open": this.is_open,
        "has-value": this.dropdown_item_title || (this.search && this.value),
        "is-disabled": this.disabled,
        "o-form-dropdown--search": this.search
        // 'error': this.errors.has(this.id)
      };
    },

    is_dropdown_with_objects() {
      let is_object;

      this.dropdown_items.forEach(item => {
        is_object = _.isObject(item);
      });

      return is_object;
    },

    dropdown_item_title() {
      // This serves as a title if it's array of strings
      let title = this.value;

      // If value is object, set title from title_property, else if value is not object (value_as_object !== true), then find the item in the array based on value and value_property
      if (_.isObject(this.value)) {
        title = this.value[this.title_property]
          ? this.value[this.title_property]
          : this.value[this.value_property];
      } else if (this.value && this.is_dropdown_with_objects) {
        const item = this.dropdown_items.find(dropdown_item => {
          if (
            dropdown_item[this.value_property].toString() ===
            this.value.toString()
          ) {
            return dropdown_item;
          }
        });

        // If item is found, return title, else return title set from the first line in the method
        if (item) {
          title = item[this.title_property];
        }
      }

      return title;
    },

    dropdown_items() {
      /*
       * Map array of dropdown items into objects, so we can add 'is_selected` property to it
       * (It doesn't matter if it's array of strings or objects, it handles both)
       * */
      return _.map(this.items, item => {
        const title_property = _.isObject(item)
          ? item[this.title_property]
          : item;

        const modified_object = {
          [this.title_property]: title_property,
          is_selected: this.selected_items
            ? this.selected_items.indexOf(item.id ? item.id : item) !== -1
            : false
        };

        return _.isObject(item) ? Object.assign(modified_object, item) : item;
      });
    },

    dropdown_items_search() {
      if (this.search_value) {
        return _.filter(this.dropdown_items, item => {
          let value = item;

          if (_.isObject(item)) {
            value = item[this.title_property];
          }

          return (
            value.toLowerCase().indexOf(this.search_value.toLowerCase()) !== -1
          );
        });
      } else {
        return this.dropdown_items;
      }
    }
  },

  watch: {
    // value () {
    //   if (!this.value && this.validate) {
    //     this.$nextTick(() => {
    //       this.$validator.validate(this.id)
    //     })
    //   }
    // }
  },

  methods: {
    updateValue(value) {
      // If value item is object
      if (_.isObject(value)) {
        // If item is already selected, disable updating the value
        if (value.is_selected) {
          return;
        }

        // Remove 'is_selected' property out of the object so we don't pass it outside of this component
        _.unset(value, "is_selected");
      }

      const returned_value =
        this.value_as_object || !_.isObject(value)
          ? value
          : value[this.value_property];

      /**
       * Passthrough <code>input</code> event
       * @type {Event}
       */
      this.$emit("input", returned_value);

      if (this.search) {
        this.search_value = null;
      }

      // if (this.validate) {
      //   this.$nextTick(() => {
      //     this.$validator.validate(this.id)
      //   })
      // }
    },

    toggleMenu(event) {
      // Disable closing the dropdown when clicking on already selected items
      if (
        event.target.tagName === "LI" &&
        event.target.className.indexOf("is-selected") !== -1
      ) {
        return;
      }
      this.is_open = !this.is_open;

      if (this.search) {
        if (!this.is_open) {
          this.$refs.input.blur();
        }
      }
    },

    closeMenu() {
      if (this.is_open) {
        this.is_open = false;
      }
    }
  }
};
</script>
