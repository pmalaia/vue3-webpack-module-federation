<template>
  <div class="mt-10 text-3xl mx-auto max-w-6xl">
    <Header />
    <div>Name: host</div>
    <div>Framework: vue3</div>
    <div>Language: JavaScript</div>
    <div>CSS: Tailwind</div>
    <div class="mt-10">Count: {{ count }}</div>
    <button
      @click="addOne"
      class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
    >
      Add one
    </button>
    <div class="mt-10">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';

// example of static import
// import Header from 'remote/Header';

// example of dynamic import
const Header = defineAsyncComponent(() => import('remote/Header'));

export default {
  components: {
    Header,
  },
  computed: {
    count() {
      return this.$store.state.count;
    },
  },
  methods: {
    addOne() {
      this.$store.commit('addOne');
    },
  },
};
</script>
