<template>
  <v-app>
    <h1>SkillName</h1>
  <!-- <v-form
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
  </v-form> -->
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
<!-- 
39 -->
<!-- 
<v-dialog
v-model="dialog"
width="500"
>
<template v-slot:activator="{ on, attrs }">
  <v-btn
    color="red lighten-2"
    dark
    v-bind="attrs"
    v-on="on"
  >
    Click Me
  </v-btn>
</template>

  <v-card>
  <v-card-title class="text-h5 grey lighten-2">
    Privacy Policy
  </v-card-title>

  <v-form
  ref="form"
  v-model="valid"
  lazy-validation
  >
    <v-text-field
    v-model="emp_name"
    label="name">
    Employee Name
    </v-text-field>

    <v-text-field
    v-model="phone"
    label="phone">
    Employee Phone
    </v-text-field>


    <v-text-field
    v-model="rollno"
    label="rollno">
    Employee rollno
    </v-text-field>


    <v-btn @click="validate">
      Submit
    </v-btn>
  </v-form>

  <v-divider></v-divider>
</v-card>
</v-dialog> -->
