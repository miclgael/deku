<template>
  <deku-section
    element="main"
    :use-container="false"
  >
    <deku-section theme="gray-1">
      <div class="grid grid--2 grid--align-center grid--space-between">
        <h1>Deku sandbox</h1>
        <div class="grid__last">
          <img
            :src="sticker"
            alt="Deku nut sticker from Super smash bros"
          >
          <p>
            <em>Stunning!</em>
          </p>
        </div>
      </div>
    </deku-section>

    <deku-section theme="gray-2">
      <h1>Deku Test Sandbox</h1>
      <p>
        This is a sandbox for testing deku components. It is not intended to be
        used as a template for a real project.
      </p>

      <deku-accordion>
        <template #summary>
          Accordion
        </template>

        <p>
          This is an accordion component. It is a wrapper around the HTML
          <code>details</code> element.
        </p>

        <deku-accordion>
          <template #summary>
            Nested
          </template>
          <p>
            This is a nested accordion component. It is a wrapper around the HTML
            <code>details</code> element.
          </p>
        </deku-accordion>
      </deku-accordion>
    </deku-section>

    <deku-section theme="gray-3">
      <deku-accordion open>
        <template #summary>
          A list of potential components from component.gallery
        </template>
        <ul>
          <li>Accordion ✅ - Yer lookin' at it!</li>
          <li>Alert ✅ - It's up there ☝️</li>
          <li>
            <deku-accordion>
              <template #summary>
                Avatar ✅
              </template>
              <deku-avatar
                src="https://picsum.photos/200"
                alt="A random image"
              />
            </deku-accordion>
          </li>
          <li>Badge</li>
          <li>Breadcrumb</li>
          <li>Button Group</li>
          <li>Button</li>
          <li>Card</li>
          <li>
            <deku-accordion open>
              <template #summary>
                Drawer (panel) ✅
              </template>

              <deku-drawer
                :open="nah"
                @update:open="nah = !nah"
              >
                <p>
                  This is a drawer component.
                  Close it over there 👉
                </p>
              </deku-drawer>
              <button
                class="nah"
                @click="nah = !nah"
              >
                Open the drawer
              </button>
            </deku-accordion>
          </li>
          <li>Dropdown menu</li>
          <li>Fieldset</li>
          <li>Footer</li>
          <li>Form</li>
          <li>Gallery</li>
          <li>Header</li>
          <li>Heading</li>
          <li>Hero</li>
          <li>Icon</li>
          <li>Image</li>
          <li>Label</li>
          <li>List</li>
          <li>Logo</li>
          <li>Message</li>
          <li>Modal</li>
          <li>Navigation</li>
          <li>Pagination</li>
          <li>Popover</li>
          <li>Progress</li>
          <li>Quote</li>
          <li>Skip Link</li>
          <li>Spinner</li>
          <li>Table</li>
          <li>Tabs</li>
          <li>Toast</li>
          <li>Toggle</li>
          <li>Tooltip</li>
        </ul>
      </deku-accordion>
    </deku-section>

    <deku-section
      theme="gray-2"
      :use-container="false"
    >
      <KitchenSink />
    </deku-section>
  </deku-section>
  <deku-alert level="warning">
    <template #title>
      Alert
    </template>
    <p>
      This is an alert component. It's default level is <code>info</code>.
    </p>
  </deku-alert>
</template>

<script setup>
import sticker from '@/assets/images/deku-nut-sticker.png'

const nah = ref(false)
</script>

<script>
import KitchenSink from './fixtures/kitchen-sink.vue'

export default {
  components: {
    KitchenSink
  }
}
</script>
