<template>
  <v-app>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <v-text-field
      v-model="name"
      :counter="10"
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
    <br>
    <h3 >Gender</h3>
    <v-radio-group
      v-model="gender"
      :rules="genderRules">
            <v-radio
              label="male"
              color="primary"
              value="male"
            ></v-radio>
            <v-radio
              label="female"
              color="secondary"
              value="femlae"
            ></v-radio>
            <v-radio
              label="not prefer to say"
              color="success"
              value="not prefer to say"
            ></v-radio>
          </v-radio-group>
          <h2>Hobbies</h2>

      <v-checkbox
      v-model="subject"
        v-for="(choice) in choices"
        :key="choice.id"
        :label="choice.name"
        :value="choice.name"
        required
      ></v-checkbox>


  <v-select
      v-model="select"
      :items="items"
      :rules="[v => !!v || 'Item is required']"
      label="location"
      required
    ></v-select>
    <v-checkbox
      v-model="checkbox"
      :rules="[v => !!v || 'You must agree to continue!']"
      label="Do you agree?"
      required
    ></v-checkbox>
    <v-btn
      v-model = 'button1'
      :disabled="!valid"
      color="success"
      class="mr-4"
      @click="validate"
    >
      Validate
    </v-btn>
  </v-form>
  </v-app>
</template>
<script>
  export default {
    data: () => ({
      valid: true,
      name: '',
      button1: '', 
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
        v => /[a-zA-z]/.test(v) || 'gjh', 
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      gender:'',
      genderRules: [
        v => !!v || 'required'],
      choices: [
       {id :1,name:'Football'},{id:2,name:'Cricket'},{id:3,name:'Basketball'}],
      items: [
        'Tamil Nadu',
        'Maharastra',
        'Karnataka',
      ],
      checkbox: false,
      radioGroup:1,
      select:null,
      subject:[]
    }),
    methods: {
      validate () {
        console.log(this.subject)
        this.$refs.form.validate()
        const arr = {
          name : this.name,
          email : this.email,
          gender :this.gender,
          choice :this.subject,
          items:this.select,
        }
        console.log(JSON.stringify(arr))
       // console.log(button1)
      },
    },
  }
</script>