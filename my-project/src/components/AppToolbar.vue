<template>
    <v-toolbar id="toolbar">
          <v-toolbar-title>
            <img src="../assets/logo.jpg" alt="">
          </v-toolbar-title>
          
          <v-toolbar-items class="hidden-sm-and-down">
            <v-btn flat>FIND A CAR</v-btn>
            <v-btn flat>JOIN YOUR CAR</v-btn>
            <v-btn flat>SUPPORT</v-btn>
            <v-btn flat>CONTACT</v-btn>
          </v-toolbar-items>
          <v-btn color="info">LOG IN</v-btn>
              <v-overflow-btn 
                label="JOIN"
                target="#dropdown-example"
              ></v-overflow-btn>
      </v-toolbar>
</template>
<style>
#toolbar {
    box-shadow: none;
  }
  .v-toolbar > .v-toolbar__content {
    background-color: #fdfbfc;
  }
  .v-toolbar > .v-toolbar__content > .v-toolbar__title {
    padding-left: 74px;
  }
  .v-toolbar > .v-toolbar__content > .v-toolbar__items {
    padding-left: 150px;
  }
  .v-toolbar > .v-toolbar__content > .v-toolbar__title > img {
    width: 108px;
    height: 32px;
    margin-top: 5px;
  }
  /* .v-toolbar > .v-btn { */

  /* } */
  .theme--light.v-btn:not(.v-btn--icon):not(.v-btn--flat) {
    background-color: #f29827;
  }
  .v-input {
    flex: 0;
  }
  .v-overflow-btn .v-label {
    margin-left: 9px;
  }
  .v-overflow-btn .v-input__append-inner {
    width: 24px;
  }

  .v-overflow-btn .v-select__slot {
    height: 24px;
  }

  .v-toolbar > .v-toolbar__content > .v-btn {
    height: 22px;
    margin: 0 5px;
    padding: 0 10px;
    min-width: 54px;
    margin-left: 270px;
  }
  .v-toolbar .v-select > .v-input__control > .v-input__slot {
    margin-top: 7px;
  }

  .v-input > .v-input__control > .v-input__slot > .v-select__slot {
    border: 1px solid #eee;
    border-radius: 5px;
  }
</style>


