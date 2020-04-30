<template>
  <div class="container">
    <Area />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import Area from '@/components/Area.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld,
    Area,
    
  }
}
</script>
