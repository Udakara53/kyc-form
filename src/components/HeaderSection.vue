<template>
  <div class="header">
    <v-img width="100vw" height="312px" cover src="../assets/cover.png ">
      <div class="d-flex flex-row justify-space-between pa-5 px-9">
        <v-sheet class="ma-2 pa-2" style="background-color: transparent">
          <v-img
            class="alignment"
            width="60px"
            height="30.77px"
            src="../assets/logoKYC.png"
          >
          </v-img>
        </v-sheet>
        <v-sheet class="ma-2 px-7 py-2 contactBtn"><ContactBtn /></v-sheet>
      </div>
    </v-img>
    <!-- <v-sheet fluid class="u-top">
      <v-img
        width="100vw"
        height="312px"
        cover
        src="../assets/cover.png"
      ></v-img>

      <v-col
        cols="12"
        style="background-color: blue; display: flex; flex-direction: row"
        class="upper"
      >
        <v-col
          cols="3"
          style="background-color: red; height: 20px; width: 20px"
        >
        </v-col>
        <v-col
          cols="3"
          style="background-color: red; height: 20px; width: 20px"
        ></v-col>
        <div>
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
      </v-col>
    </v-sheet> -->
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
.contactBtn {
  background: #f54d4d;
  border-radius: 20px;
}
</style>
