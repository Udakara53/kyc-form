<template>
  <v-app>
    <v-main>
    <HeaderSection />
    <MainSection />
    <FooterSection/>
  </v-main>
  </v-app>
</template>

<script>
// @ is an alias to /src
import HeaderSection from '@/components/HeaderSection.vue';
import FooterSection from '@/components/FooterSection';
import MainSection from '@/components/MainSection';

export default {
  name: 'HomeView',
  components: {
    HeaderSection,
    FooterSection,
    MainSection
  },
};
</script>
