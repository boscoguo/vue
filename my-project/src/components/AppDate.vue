<template>
  <v-layout row wrap id="date">
    <v-flex xs12 sm6 md3>
        <v-card class="card-title">
            <v-card-text class="title">find car in</v-card-text>
        </v-card>
        <v-form v-model="valid">
          <v-text-field
            v-model="name"
            :rules="nameRules"
            
            label="location"
            required
          ></v-text-field>
          
        </v-form>
    </v-flex>
    <v-spacer></v-spacer>
    <v-flex xs12 sm6 md3>
        <v-card class="card-title">
            <v-card-text class="title">pick up</v-card-text>
        </v-card>
      <v-dialog
        ref="dialog2"
        v-model="modal2"
        :return-value.sync="date2"
        persistent
        lazy
        full-width
        width="290px"
      >
        <v-text-field
          slot="activator"
          v-model="date2"
          append-icon="event"
          readonly
        ></v-text-field>
        <v-date-picker v-model="date2" scrollable>
          <v-spacer></v-spacer>
          <v-btn flat color="primary" @click="modal2 = false">Cancel</v-btn>
          <v-btn flat color="primary" @click="$refs.dialog2.save(date2)">OK</v-btn>
        </v-date-picker>
      </v-dialog>
    </v-flex>
    <v-flex xs12 sm6 md3>
      <v-card class="card-title">
         <v-card-text class="title">drop off</v-card-text>
      </v-card>
      <v-dialog
        ref="dialog3"
        v-model="modal3"
        :return-value.sync="date3"
        persistent
        lazy
        full-width
        width="290px"
      >
        <v-text-field
          slot="activator"
          v-model="date3"
          append-icon="event"
          readonly
        ></v-text-field>
        <v-date-picker v-model="date3" scrollable>
          <v-spacer></v-spacer>
          <v-btn flat color="primary" @click="modal3 = false">Cancel</v-btn>
          <v-btn flat color="primary" @click="$refs.dialog3.save(date3)">OK</v-btn>
        </v-date-picker>
      </v-dialog>
    </v-flex>
    <v-flex xs12 sm3>
        <a href="#">
            <img class="arrow" src="../assets/arrow.jpg" alt="">
        </a>
    </v-flex>
    <v-spacer></v-spacer>
  </v-layout>
</template>
<style>
#date .card-title > .title {
    font-weight: bold;
    font-size:12px!important;
}
#date .v-card {
    box-shadow:none;
}
#date .v-card__text {
    padding-top:25px;
}
#date .arrow {
    padding-top:54px;
    padding-left:16px;
}
/* #date {
    margin-top: 50px;
}
  #date .card-title {
      box-shadow: none;
  }
  #date .title {
      padding:0px;
  }
  #date .arrow {
      padding-top:42px;
      padding-left:16px; */
      /* width: 28px;
      height: 28px; */
      /* width: 46px;
  } */
 
</style>

<script>
const app = document.createElement('div');
app.setAttribute('data-app', true);
document.body.append(app);
export default {
    data: () => ({
      date: null,
      date2:null,
      date3:null,
      modal1: false,
      modal2: false,
      modal3: false,
      valid: false,
      name: '',
      nameRules: [
        // v => !!v || 'enter location',
        v => v.length <= 10 || 'Name must be less than 10 characters'
      ]
    })
//   data () {
//     return {
//       editDialog: false,
//       editableDate: null
//     };
//   },
//   methods: {
//     onSaveChanges() {
//       const newDate = new Date(this.meetup.date);
//       const newDay = new Date(this.editableDate).getUTCDate();
//       const newMonth = new Date(this.editableDate).getUTCMonth();
//       const newYear = new Date(this.editableDate).getUTCFullYear();
//       newDate.setUTCDate(newDay);
//       newDate.setUTCMonth(newMonth);
//       newDate.setUTCFullYear(newYear);
//       this.$store.dispatch("updateMeetupData", {
//         id: this.meetup.id,
//         date: newDate
//       });
//     }
//   },
//   created() {
//     this.editableDate = new Date(this.meetup.date);
//   },
}
</script>
