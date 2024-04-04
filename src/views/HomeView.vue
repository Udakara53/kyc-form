<template>
  <v-app>
    <v-main>
    <HeaderSection />
    <FooterSection/>
  </v-main>
  </v-app>
</template>

<script>
// @ is an alias to /src
import HeaderSection from '@/components/HeaderSection.vue';
import FooterSection from '@/components/FooterSection';

export default {
  name: 'HomeView',
  components: {
    
    HeaderSection,
    FooterSection
  },
};
</script>
