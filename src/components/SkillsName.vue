<template>
  <v-app>
      <v-form
     ref="form"
     v-model="valid"
     lazy-validation
   >

     <v-text-field
       v-model="name"
       :rules="nameRules"
       label="Name"
       required
     ></v-text-field>


     <v-text-field
       v-model="email"
       :rules="emailRules"
       label="E-mail"
       required
     ></v-text-field>



     <h3>Gender</h3>
     <v-radio-group
     v-model="radio"
     row
     >
             <v-radio
               label="male"
               value="primary"
             ></v-radio>
             <v-radio
               label="female"
               value="secondary"
             ></v-radio>
       </v-radio-group>


   <h2>Hobbies</h2>
   <v-checkbox
   v-model="selected"
   label="Cricket"
   value="Cricket"
   ></v-checkbox>
   <v-checkbox
     v-model="selected"
     label="Football"
     value="Football"
   ></v-checkbox>
   <v-checkbox
     v-model="selected"
     label="Basketball"
     value="Basketball"
   ></v-checkbox>
   <v-checkbox
     v-model="selected"
     label="Others"
     value="Others"
   ></v-checkbox>
   <v-select
       v-model="select"
       :items="location"
       :rules="[v => !!v || 'Location is required']"
       label="location"
       required
     ></v-select>
      <v-btn
       :disabled="!valid"
       color="success"
       class="mr-4"
       @click="validate"
     >
       Submit
     </v-btn>
   </v-form>    </v-app>
</template>
<script>
export default {
     data: () => ({
       valid: true,
       name: '',
       nameRules: [
         name=>!!name||'Name is required',
       ],
       email: '',
       emailRules: [
         email => !!email || 'E-mail is required',
         v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
       ],
       select: null,
       location: [
         'Tamil Nadu',
         'Kerala',
         'Maharastra', 
         'Gujrart'
       ],
       radioGroup: 1,
     }),
     methods: {
       validate () {
        const arr = {
          name: this.name, 
          email: this.email, 
          gender: this.gender, 
          select: this.select, 
          checkbox: this.selected,
        }
        console.log(JSON.stringify(arr))
        
       },
     },
   }
</script>