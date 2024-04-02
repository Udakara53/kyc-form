<template>
  <v-app>
    <v-main>
    <HeaderSection />
  </v-main>
  </v-app>
</template>

<script>
// @ is an alias to /src
import HeaderSection from '@/components/HeaderSection.vue';

export default {
  name: 'HomeView',
  components: {
    
    HeaderSection,
  },
};
</script>
