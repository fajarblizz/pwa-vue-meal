<template>
  <div class="container">
    <Navbar />
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import Category from '@/components/Category.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld,
    Category
  }
}
</script>
