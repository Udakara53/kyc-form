<template>
  <div class="contactBtn">
    <div class="logo-container">
      <v-img width="28px" height="28px" src="../assets/Frame.png"> </v-img>
    </div>
    <div class="contact-num"><p>+94 713 3432 2</p></div>
  </div>
</template>

<script>
export default {
  name: 'ContactBtn',
};
</script>

<style>
.contactBtn {
  padding: 4px 10px;
  display: flex;
  justify-content: space-between;
  width: 170px;
  background: #e53935;
  border-radius: 10px;
}
.logo-container {
  margin-right: 10px; 
}
.contact-num p{
    color: white;
}
</style>
