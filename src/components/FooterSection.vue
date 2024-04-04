<template>
  <div
    class="pt-7"
    style="aspect-ratio: 1728 / 408; max-width: 100vw; background: #f54d4d"
  >
    <div class="d-flex justify-space-around mb-9" style="background: green">
      <v-sheet
        class="d-flex ma-2 pa-5 flex-grow-1"
        style="align-items: center; justify-content: center"
      >
        <v-img
          class="v-center"
          width="60px"
          height="19%"
          src="../assets/logoKYC.png"
        />
      </v-sheet>
      <v-sheet class="d-flex flex-column ma-2 pa-2 flex-grow-1">
        <div class="">
          <p
            style="
              text-align: left;
              font-family: 'Poppins';
              font-family: 'Poppins', sans-serif;
              font-size: 24px;
              font-weight: 600;
            "
          >
            Contact US
          </p>
        </div>
        <div
          style="background: green; align-self: flex-start"
          class="d-flex mt-2 mb-2"
        >
          <v-img width="20.41px" height="20px" src="../assets/Frame.png">
          </v-img>
          <p>
            &nbsp;&nbsp;<span class="text-white" style="font-size: 14px"
              >+94 71 313 4322</span
            >
          </p>
        </div>
        <div
          style="background: blue; align-self: flex-start"
          class="d-flex mt-1"
        >
          <v-img width="20.41px" height="20px" src="../assets/Message.png">
          </v-img>
          <p>
            &nbsp;&nbsp;<span class="text-white" style="font-size: 14px"
              >care@paymedia.lk</span
            >
          </p>
        </div>
        <div
          style="background: brown; align-self: flex-start; display: flex"
          class="my-2"
        >
          <v-img width="20.41px" height="20px" src="../assets/Location.png">
          </v-img>

          <p style="line-height: 0.9; margin-left: 2px">
            <span class="text-white" style="font-size: 14px"
              >PayMedia Limited,<br />
              106 Havelock Road,<br />
              Colombo 5.</span
            >
          </p>
        </div>
      </v-sheet>
      <v-sheet class="ma-2 pa-2 flex-grow-1"> logo </v-sheet>
    </div>
    <div class="d-flex justify- mb-1">
      <v-sheet class="ma-2 pa-2 flex-grow-1" style="height: 125">
        justify-space-around
      </v-sheet>
    </div>
  </div>
</template>
<script>
export default {
  name: 'FooterSection',
  components: {},
};
</script>
<style>
.logo-align {
  align-items: center;
  justify-content: center;
}
</style>
