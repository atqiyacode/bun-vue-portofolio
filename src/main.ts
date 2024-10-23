import 'primevue/resources/themes/tailwind-light/theme.css'
import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import Primevue from 'primevue/config'
import Tooltip from 'primevue/tooltip'

const app = createApp(App)
app.use(Primevue)
app.directive('tooltip', Tooltip)
app.mount('#app')
