// this file is for exporting vue component into the react app
import { createApp } from 'vue';

import Header from './components/Header.vue';

export default function placeHeader(el) {
  createApp(Header).mount(el);
}
