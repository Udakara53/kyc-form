<template>
  <div class="header">
    <v-container fluid d-flex class="u-top">
      <v-img
        width="100vw"
        height="312px"
        cover
        src="../assets/cover.png"
      ></v-img>

      <v-container d-flex class="upper">
        <div class="logo-kyc">
          <v-img
            class="alignment"
            width="60px"
            height="18.77px"
            src="../assets/logoKYC.png"
          >
          </v-img>
        </div>
        <div class="contact">
          <ContactBtn />
        </div>
      </v-container>
    </v-container>
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
.u-top {
  position: relative;
}
.upper {
  display: flex;
  justify-content: space-between;
  position: absolute;
  outline: 1px solid red;
  top: 16px;
  height: 49px;
}
.upper .alignment {
  margin: 10px;
}
.contact {
  width: 100%;
}
</style>
