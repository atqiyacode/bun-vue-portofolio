<script lang="ts" setup>
import Avatar from 'primevue/avatar'
import Dock from 'primevue/dock'
import type { MenuItem } from 'primevue/menuitem'
import { ref } from 'vue'

const items = ref<MenuItem[]>([
  {
    label: 'App Store',
    icon: 'https://primefaces.org/cdn/primevue/images/dock/appstore.svg',
    command: () => {
      console.log('App Store')
    },
  },
  {
    label: 'Indo Bharat Rayon',
    icon: 'icon/ibr.png',
    command: () => {
      console.log('Indo Bharat Rayon')
    },
  },
  {
    label: 'Photos',
    icon: 'https://primefaces.org/cdn/primevue/images/dock/photos.svg',
    command: () => {
      console.log('Photos')
    },
  },
  {
    label: 'Trash',
    icon: 'https://primefaces.org/cdn/primevue/images/dock/trash.png',
    command: () => {
      console.log('Trash')
    },
  },
])

const onDockItemClick = (
  event: MouseEvent, // Use MouseEvent for click events
  item: MenuItem,
) => {
  if (item.command) {
    // Call command with the appropriate event structure
    item.command({
      originalEvent: event, // Pass the MouseEvent
      item, // Pass the clicked item
    })
  }
  event.preventDefault()
}
</script>

<template>
  <div class="card dock-demo">
    <div class="dock-window">
      <Dock :model="items" position="bottom">
        <template #item="{ item }">
          <Avatar
            :alt="item.label"
            :image="item.icon"
            class="p-dock-link"
            size="xlarge"
            @click="onDockItemClick($event, item)"
            v-tooltip.top="item.label"
          />
        </template>
      </Dock>
    </div>
  </div>
</template>

<style scoped>
.dock-demo > .dock-window {
  width: 100%;
  height: 100vh;
  position: relative;
  z-index: 1;
}

.dock-demo > .p-dock {
  z-index: 1000;
}

.p-dock-link {
  cursor: pointer;
}

.overlay {
  color: white;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.overlay span {
  color: white;
  font-size: 4rem; /* Adjust the font size as needed */
}
</style>
