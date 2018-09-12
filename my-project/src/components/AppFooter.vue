<template>
     <v-footer
        dark
        height="auto"
        id = "footer"
      >
        <v-card
          flat
          tile
          class="indigo lighten-1 white--text text-xs-center"
        >
        <img src="../assets/location.png" style="width:57px; height:70pxs">
          <!-- <v-card-text>
            <v-btn
              v-for="icon in icons"
              :key="icon"
              class="mx-3 white--text"
              icon
            >
              <v-icon size="24px">{{ icon }}</v-icon>
            </v-btn>
          </v-card-text> -->
          <v-card-text class="title">
            Lorem ipsum dolor sit amet,consectetur
          </v-card-text>

          <v-card-text class="white--text pt-0 special">
            Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
          </v-card-text>
          <v-card-text class="white--text pt-0">
            aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris risi ut aliquip ex ea commodo consequat.
          </v-card-text>
          <v-card-text class="white--text pt-0">
             eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </v-card-text>
          <v-btn color="info" class="btn">LIST YOUR CAR</v-btn>
          <v-divider></v-divider>
          <v-card-text class="bottom">
            &copy;2018 — <strong>Vuetify</strong>
          </v-card-text>
        </v-card>
    </v-footer>
</template>
<script>
export default {
    data: () => ({
      icons: [
        'fab fa-facebook',
        'fab fa-twitter',
        'fab fa-google-plus',
        'fab fa-linkedin',
        'fab fa-instagram'
      ]
    })
  }
</script>
<style>
#footer > .indigo.lighten-1 {
  background-color: #F69721!important;
  padding-top:45px;
  width: 100%;
}
.indigo.lighten-1>.tilte {
  font-weight: bold;
}
.v-card__text {
  padding:0;
  padding-top:30px;
}
.special {
  margin-top: 20px;
}
.indigo.lighten-1 .btn {
  margin:0px;
  margin-top:38px;
  margin-bottom:55px;
  height:26px;
  width: 100px;
  background-color: #B8DD59!important; 
  border-radius:4px;
}
.indigo.lighten-1 .v-btn  .v-btn__content {
  font-size:12px;
}
.indigo.lighten-1 .bottom {
  background-color: black;
  color:black;
}
</style>
