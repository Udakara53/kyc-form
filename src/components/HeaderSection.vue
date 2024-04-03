<template>
  <div class="header">
    <v-img
      width="100vw"
      height="312px"
      aspect-ratio="1728/544"
      cover
      src="../assets/cover.png"
    >
      <div class="d-flex flex-row justify-space-between pa-5 px-9">
        <v-sheet class="" style="background-color: transparent">
          <v-img
            class="align-start"
            width="60px"
            height="30.77px"
            src="../assets/logoKYC.png"
          >
          </v-img>
        </v-sheet>
        <v-sheet class="ma-2 px-7 py-2 contactBtn"><ContactBtn /></v-sheet>
      </div>
    </v-img>
  </div>
</template>

<script>
import ContactBtn from './ContactBtn.vue';
export default {
  name: 'HeaderSection',
  components: {
    ContactBtn,
  },
};
</script>

<style socped>
.contactBtn {
  background: #f54d4d;
  border-radius: 20px;
}
</style>
