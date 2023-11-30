<template>
  <deku-section
    element="main"
    :use-container="false"
  >
    <deku-section theme="red">
      <div class="grid grid--2 grid--align-center grid--space-between">
        <h1>Deku sandbox</h1>
        <p class="grid__last">
          Stunning!
        </p>
      </div>
    </deku-section>

    <deku-section theme="red">
      <h1>Deku Test Sandbox</h1>
      <p>
        This is a sandbox for testing deku components. It is not intended to be
        used as a template for a real project.
      </p>
    </deku-section>

    <deku-section theme="orange">
      <h2>A list of potential components from component.gallery</h2>
      <ul>
        <li>Accordion</li>
        <li>Alert</li>
        <li>Avatar</li>
        <li>Badge</li>
        <li>Breadcrumb</li>
        <li>Button</li>
        <li>Button Group</li>
        <li>Card</li>
        <li>Drawer (panel)</li>
        <li>Dropdown menu</li>
        <li>Message</li>
        <li>Fieldset</li>
        <li>Form</li>
        <li>Footer</li>
        <li>Header</li>
        <li>Hero</li>
        <li>Icon</li>
        <li>Image</li>
        <li>Heading</li>
        <li>Label</li>
        <li>List</li>
        <li>Modal</li>
        <li>Navigation</li>
        <li>Logo</li>
        <li>Popover</li>
        <li>Pagination</li>
        <li>Progress</li>
        <li>Quote</li>
        <li>Spinner</li>
        <li>Skip Link</li>
        <li>Table</li>
        <li>Tabs</li>
        <li>Toggle</li>
        <li>Toast</li>
        <li>Tooltip</li>
        <li>Gallery</li>
      </ul>
    </deku-section>

    <deku-section
      theme="blue"
      :use-container="false"
    >
      <KitchenSink />
    </deku-section>
  </deku-section>
</template>

<script>
import KitchenSink from './fixtures/kitchen-sink.vue'
export default {
  components: {
    KitchenSink
  }
}
</script>
