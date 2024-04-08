<template>
  <div
    class="pt-7"
    style="aspect-ratio: 1728 / 408; max-width: 100vw; background: #f54d4d"
  >
    <div class="d-flex justify-space-around mb-6">
      <v-sheet
        class="d-flex ma-2 pa-5"
        style="
          align-items: center;
          justify-content: center;
          width: 40%;
          background: transparent;
        "
      >
        <v-img
          class="v-center"
          width="35%"
          height="36.5%"
          src="../assets/LogoKYC-white.png"
        />
      </v-sheet>
      <v-sheet
        class="d-flex flex-column ma-2 pa-2"
        style="width: 20%; background: transparent"
      >
        <div class="">
          <p
            style="
              text-align: left;
              font-family: 'Poppins';
              font-family: 'Poppins', sans-serif;
              font-size: 24px;
              font-weight: 600;
              color: white;
            "
          >
            Contact US
          </p>
        </div>
        <div style="align-self: flex-start" class="d-flex mt-2 mb-2">
          <v-img width="20.41px" height="20px" src="../assets/Frame.png">
          </v-img>
          <p>
            &nbsp;&nbsp;<span class="text-white" style="font-size: 14px"
              >+94 71 313 4322</span
            >
          </p>
        </div>
        <div style="align-self: flex-start" class="d-flex mt-1">
          <v-img width="20.41px" height="20px" src="../assets/Message.png">
          </v-img>
          <p>
            &nbsp;&nbsp;<span class="text-white" style="font-size: 14px"
              >care@paymedia.lk</span
            >
          </p>
        </div>
        <div style="align-self: flex-start; display: flex" class="my-2">
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
      <!-- add social-media icon -->
      <v-sheet class="ma-2 pa-2" style="width: 20%; background: transparent">
        <div class="mb-2">
          <p
            style="
              text-align: left;
              font-family: 'Poppins';
              font-family: 'Poppins', sans-serif;
              font-size: 24px;
              font-weight: 600;
              color: white;
            "
          >
            Social Media
          </p>
        </div>
        <div class="d-flex">
          <div class="icon-outer mr-2">
            <div class="icon-inner">
              <v-img
                class="social-icon"
                width="20px"
                height="14px"
                src="../assets/Youtube.png"
              ></v-img>
            </div>
          </div>
          <div class="icon-outer mx-2">
            <div class="icon-inner">
              <v-img
                class="social-icon"
                width="20px"
                height="14px"
                src="../assets/instagram.png"
              ></v-img>
            </div>
          </div>
          <div class="mx-2 icon-outer">
            <div class="icon-inner">
              <v-img
                class="social-icon"
                width="20px"
                height="14px"
                src="../assets/Tweeter.png"
              ></v-img>
            </div>
          </div>
          <div class="mx-2 icon-outer">
            <div class="icon-inner">
              <v-img
                class="social-icon"
                width="20px"
                height="14px"
                src="../assets/Facebook.png"
              ></v-img>
            </div>
          </div>
          <div class="mx-2 icon-outer">
            <div class="icon-inner">
              <v-img
                width="20px"
                height="14px"
                src="../assets/Linkedin.png"
              ></v-img>
            </div>
          </div>
        </div>
      </v-sheet>
      <!-- end social-media icon -->
      <!-- start footer -->
      <v-sheet
        class="d-flex ma-2 pa-5"
        style="
          align-items: center;
          justify-content: center;
          width: 20%;
          background: transparent;
        "
      >
      </v-sheet>
      <!-- end footer -->
    </div>
    <div class="d-flex mb-1">
      <v-sheet
        class="ma-2 pa-2 flex-grow-1"
        style="height: 125; background: transparent"
      >
        <div class="horizontal-line"></div>
        <div class="mt-3">
          <p class="footer-paragraph">
            Copyright ©2023 PayMedia. All Rights Reserved
          </p>
        </div>
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
.icon-outer {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 40px;
  height: 40px;
  border: 1.5px solid #ccc;
  border-radius: 50%;
}
.icon-inner {
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.horizontal-line {
  width: 82.6%;
  margin: 0 auto;
  border-top: 2px solid #fff;
}
.footer-paragraph {
  font-family: 'Poppins', sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 27px;
  text-align: center;
  color: white;
}
.social-icon {
  object-fit: cover;
  max-width: 100%;
  max-height: 100%;
}
</style>
