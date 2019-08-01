<template>
  <div class="docs__section">
    <div class="docs__header">
      <h1>Colors</h1>
    </div>

    <!-- Primary & Secondary colors -->
    <docs-item title="Primary">
      <docs-background-color-list :items="primary" slot="body"></docs-background-color-list>
    </docs-item>

    <docs-item title="Secondary">
      <docs-background-color-list :items="secondary" slot="body"></docs-background-color-list>
    </docs-item>

    <!-- Colors -->
    <docs-item title="Red">
      <docs-background-color-list :items="red" slot="body"></docs-background-color-list>
    </docs-item>

    <docs-item title="Orange">
      <docs-background-color-list :items="orange" slot="body"></docs-background-color-list>
    </docs-item>

    <docs-item title="Yellow">
      <docs-background-color-list :items="yellow" slot="body"></docs-background-color-list>
    </docs-item>

    <docs-item title="Green">
      <docs-background-color-list :items="green" slot="body"></docs-background-color-list>
    </docs-item>

    <docs-item title="Indigo">
      <docs-background-color-list :items="indigo" slot="body"></docs-background-color-list>
    </docs-item>

    <docs-item title="Blue">
      <docs-background-color-list :items="blue" slot="body"></docs-background-color-list>
    </docs-item>

    <docs-item title="Violet">
      <docs-background-color-list :items="violet" slot="body"></docs-background-color-list>
    </docs-item>

    <!-- Grayscale -->
    <docs-item title="Black">
      <docs-background-color-list :items="black" slot="body"></docs-background-color-list>
    </docs-item>

    <docs-item title="Gray">
      <docs-background-color-list :items="gray" slot="body"></docs-background-color-list>
    </docs-item>

    <docs-item title="White">
      <docs-background-color-list :items="white" slot="body"></docs-background-color-list>
    </docs-item>


<!--     <docs-item title="Grayscale">
      <docs-background-color-list :items="black" slot="body"></docs-background-color-list>
      <br>
      <docs-background-color-list :items="gray" slot="body"></docs-background-color-list>
      <br>
      <docs-background-color-list :items="white" slot="body"></docs-background-color-list>
    </docs-item> -->

    <docs-item title="Customizing" :css_code="customizing_css">
      <div slot="body">
        <p>All colors are defined in a map, found in <code>_vars.scss</code>.</p>
        <p>Simply add or modify existing colors to automatically generate new classes and rules.</p>
      </div>
    </docs-item>

  </div>
</template>

<script>
export default {
  name: 'DocsColors',

  data () {
    return {
      customizing_css: `...`,
      
      primary: [
        {
          title: 'Primary dark',
          variable: 'primary-dark',
          hex: '#null',
          class: 'bg-primary-dark'
        },
        {
          title: 'Primary',
          variable: 'primary',
          hex: '#null',
          class: 'bg-primary'
        },
        {
          title: 'Primary light',
          variable: 'primary-light',
          hex: '#null',
          class: 'bg-primary-light'
        }
      ],
      secondary: [
        {
          title: 'Secondary dark',
          variable: 'secondary-dark',
          hex: '#null',
          class: 'bg-secondary-dark'
        },
        {
          title: 'Secondary',
          variable: 'secondary',
          hex: '#null',
          class: 'bg-secondary'
        },
        {
          title: 'Secondary light',
          variable: 'secondary-light',
          hex: '#null',
          class: 'bg-secondary-light'
        }
      ],

      red: [
        {
          title: 'Red dark',
          variable: 'red-dark',
          hex: '#null',
          class: 'bg-red-dark'
        },
        {
          title: 'Red',
          variable: 'red',
          hex: '#null',
          class: 'bg-red'
        },
        {
          title: 'Red light',
          variable: 'red-light',
          hex: '#null',
          class: 'bg-red-light'
        }
      ],
      orange: [
        {
          title: 'Orange dark',
          variable: 'orange-dark',
          hex: '#null',
          class: 'bg-orange-dark'
        },
        {
          title: 'Orange',
          variable: 'orange',
          hex: '#null',
          class: 'bg-orange'
        },
        {
          title: 'Orange light',
          variable: 'orange-light',
          hex: '#null',
          class: 'bg-orange-light'
        }
      ],
      yellow: [
        {
          title: 'Yellow dark',
          variable: 'yellow-dark',
          hex: '#null',
          class: 'bg-yellow-dark'
        },
        {
          title: 'Yellow',
          variable: 'yellow',
          hex: '#null',
          class: 'bg-yellow'
        },
        {
          title: 'Yellow light',
          variable: 'yellow-light',
          hex: '#null',
          class: 'bg-yellow-light'
        }
      ],
      green: [
        {
          title: 'Green dark',
          variable: 'green-dark',
          hex: '#null',
          class: 'bg-green-dark'
        },
        {
          title: 'Green',
          variable: 'green',
          hex: '#null',
          class: 'bg-green'
        },
        {
          title: 'Green light',
          variable: 'green-light',
          hex: '#null',
          class: 'bg-green-light'
        }
      ],
      indigo: [
        {
          title: 'Indigo dark',
          variable: 'indigo-dark',
          hex: '#null',
          class: 'bg-indigo-dark'
        },
        {
          title: 'Indigo',
          variable: 'indigo',
          hex: '#null',
          class: 'bg-indigo'
        },
        {
          title: 'Indigo light',
          variable: 'indigo-light',
          hex: '#null',
          class: 'bg-indigo-light'
        }
      ],
      blue: [
        {
          title: 'Blue dark',
          variable: 'blue-dark',
          hex: '#null',
          class: 'bg-blue-dark'
        },
        {
          title: 'Blue',
          variable: 'blue',
          hex: '#null',
          class: 'bg-blue'
        },
        {
          title: 'Blue light',
          variable: 'blue-light',
          hex: '#null',
          class: 'bg-blue-light'
        }
      ],
      violet: [
        {
          title: 'Violet dark',
          variable: 'violet-dark',
          hex: '#null',
          class: 'bg-violet-dark'
        },
        {
          title: 'Violet',
          variable: 'violet',
          hex: '#null',
          class: 'bg-violet'
        },
        {
          title: 'Violet light',
          variable: 'violet-light',
          hex: '#null',
          class: 'bg-violet-light'
        }
      ],

      black: [
        {
          title: 'Black',
          variable: 'black',
          hex: '#null',
          class: 'bg-black'
        }
      ],
      gray: [
        {
          title: 'Gray darkest',
          variable: 'gray-darkest',
          hex: '#null',
          class: 'bg-gray-darkest'
        },
        {
          title: 'Gray dark',
          variable: 'gray-dark',
          hex: '#null',
          class: 'bg-gray-dark'
        },
        {
          title: 'Gray',
          variable: 'gray',
          hex: '#null',
          class: 'bg-gray'
        },
        {
          title: 'Gray light',
          variable: 'gray-light',
          hex: '#null',
          class: 'bg-gray-light'
        },
        {
          title: 'Gray lightest',
          variable: 'gray-lightest',
          hex: '#null',
          class: 'bg-gray-lightest'
        }
      ],
      white: [
        {
          title: 'White',
          variable: 'white',
          hex: '#null',
          class: 'bg-white'
        }
      ],
      map_css: `.example {
  background-color: color('green-light');
}`
    }
  }
}
</script>
