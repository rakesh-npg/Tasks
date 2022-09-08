<template> 
    <v-app>
        <h1>
            hello world
        </h1>

    <v-simple-table height="300px">
      <template v-slot:default>
        <thead>
          <tr>

            <th class="text-left">
              ID
            </th>
            <th class="text-left">
              Name
            </th>
            <th class="text-left">
              Email
            </th>
            <th class="text-left">
              Gender
            </th>
            <th class="text-left">
              Hobbies
            </th>
            <th class="text-left">
              location
            </th>
            <th class="text-left">
        
            </th>
            <th class="text-left">
        
      </th>
      
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in desserts"
            :key="item.name"
          >
          <td >{{ item.id }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.email }}</td>
            <td>{{ item.gender }}</td>
            <td>{{ item.hobbies }}</td>
            <td>{{ item.location }}</td>
            <td>
                <v-btn @click="edit(item)">
                    Edit
                </v-btn>
            </td>
            <td>
              <v-btn @click="deleteData(item)">
                Delete
              </v-btn>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
    

    <div class="text-center">
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
            Enter details 
          </v-card-title>
  
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
      v-if="!edit_flag"
    >
      Validate
    </v-btn>
    <v-btn
      v-model = 'button1'
      :disabled="!valid"
      color="success"
      class="mr-4"
      @click="updateItem"
      v-if="edit_flag"
    >
      Edit
    </v-btn>
 
  </v-form>
  
          <v-divider></v-divider>
  
        </v-card>
      </v-dialog>
      </div>

    </v-app>
</template>
<script>
//import { validate } from 'json-schema';


  export default {
    data() {
        return {
          tempObj: {}, 
          edit_flag: false, 
            valid: true,
      tablelistCounter: 0,
      id: null, 
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
      subject:[],
        dialog: false,
            desserts: [
               
            ],
      
        }
    },
    components: {
    }, 
    methods: {
      validate () { 
        this.tablelistCounter++;
        this.$refs.form.validate()

        const arr = {
          name : this.name,
          email : this.email,
          gender :this.gender,
          hobbies :this.subject,
          location:this.select,
          id: this.tablelistCounter,
        }
        this.desserts.push(arr)
        this.$refs.form.reset()
        this.dialog=false 
      },
      returner() {
        
      },
      edit(item) {

        console.log(item)
        let id = item.id
        let obj= this.desserts.find(o => o.id == id)
        this.name = item.name
        this.email = item.email
        this.gender = item.gender
        this.subject = item.hobbies
        this.select = item.location
        this.dialog = true
        console.log(obj)
        this.edit_flag=true 
        this.tempObj = item 
      }, 
      updateItem() {
        console.log(this.tempObj)
        this.$refs.form.validate()
        //let tempObj = this.desserts.findIndex(temp => temp.id == this.id)
        let test = this.desserts.findIndex(temp => temp.id == this.tempObj.id)
        this.desserts[test].name = this.name
        this.desserts[test].email = this.email
        this.desserts[test].gender = this.gender
        this.desserts[test].hobbies = this.subject
        this.desserts[test].location = this.select

        this.edit_flag=false
        this.dialog = false
        this.$refs.form.reset()
      }, 
      deleteData(item) {
        this.desserts = this.desserts.filter(data => data.id != item.id)
      }, 
    },
  }
  
</script>
