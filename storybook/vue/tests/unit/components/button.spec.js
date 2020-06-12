import { shallowMount } from "@vue/test-utils";
import OButton from "../../../src/components/Button/Button.vue";

describe("Button tests", () => {
  /** ROLES */
  it("renders button roles", () => {
    // Primary
    const button_primary = shallowMount(OButton, {
      propsData: {
        text: "Primary",
        role: "primary"
      }
    });

    expect(button_primary.classes()).toContain("o-button--primary");

    // Secondary
    const button_secondary = shallowMount(OButton, {
      propsData: {
        text: "Secondary",
        role: "secondary"
      }
    });

    expect(button_secondary.classes()).toContain("o-button--secondary");

    // Basic
    const button_basic = shallowMount(OButton, {
      propsData: {
        text: "Basic",
        role: "basic"
      }
    });

    expect(button_basic.classes()).toContain("o-button--basic");
  });

  /** SIZES */
  it("renders button sizes", () => {
    // Large
    const button_large = shallowMount(OButton, {
      propsData: {
        text: "Large",
        role: "large"
      }
    });

    expect(button_large.classes()).toContain("o-button--large");

    // Regular
    const button_regular = shallowMount(OButton, {
      propsData: {
        text: "Regular"
      }
    });

    expect(button_regular.classes("o-button")).toBe(true);

    // Small
    const button_small = shallowMount(OButton, {
      propsData: {
        text: "Small",
        role: "small"
      }
    });

    expect(button_small.classes()).toContain("o-button--small");
  });

  /** WIDE */
  it("renders wide button", () => {
    const button_wide = shallowMount(OButton, {
      propsData: {
        text: "Wide",
        wide: true
      }
    });

    expect(button_wide.classes()).toContain("o-button--wide");
  });

  /** ICON */
  it("renders buttons with icon", () => {
    // Icon only
    const button_icon_only = shallowMount(OButton, {
      propsData: {
        icon: "remove"
      }
    });

    expect(button_icon_only.find(".o-icon-remove").exists()).toBe(true);
    expect(button_icon_only.classes()).toContain("o-button--icon-only");

    // Icon with text
    const button_icon_text = shallowMount(OButton, {
      propsData: {
        text: "With an icon",
        icon: "arrow-right"
      }
    });

    expect(button_icon_text.find(".o-icon-arrow-right").exists()).toBe(true);
    expect(button_icon_text.text()).toBe("With an icon");
    expect(button_icon_text.classes("o-button--icon-only")).toBe(false);
  });

  /** DISABLED */
  it("renders disabled button", () => {
    const button_text = "Can't touch this";

    const button = shallowMount(OButton, {
      propsData: {
        text: button_text,
        is_disabled: true
      }
    });

    // Trigger click
    button.trigger("click");

    // If not disabled it should trigger click and change text
    if (button.emitted().click) {
      button.setProps({ text: "I can touch it" });
    }

    expect(button.attributes("disabled")).toBe("disabled");
    expect(button.vm.text).toMatch(button_text);
  });

  /** COLORS */
  it("renders button colors", () => {
    // Red
    const button_red = shallowMount(OButton, {
      propsData: {
        text: "Red",
        color: "red"
      }
    });

    expect(button_red.classes()).toContain("o-button--color-red");

    // Secondary
    const button_secondary = shallowMount(OButton, {
      propsData: {
        text: "Secondary",
        color: "secondary"
      }
    });

    expect(button_secondary.classes()).toContain("o-button--color-secondary");
  });

  /** INVERTED */
  it("renders inverted button", () => {
    const button_inverted = shallowMount(OButton, {
      propsData: {
        text: "Inverted",
        inverted: true
      }
    });

    expect(button_inverted.classes()).toContain("o-button--inverted");
  });
});
