<template>
<v-app>
<h2>Table</h2>
  <div>
    <v-simple-table>
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
              Phone
            </th>
            <th class="text-left">
              Roll_no
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in table_data" 
            :key="item.id"
          >
          <td v-for="(column) in table_headers_name"
            :key="column">{{item[column]}}
            <template v-if="column !='delete'">
            <v-icon small @click="edit_data(item, column)" v-if="column !='table_id'">mdi-pencil
              </v-icon>
            </template>
            <template v-else>
              <v-icon small @click="delete_data(item)">mdi-delete</v-icon>
            </template>
          </td>

          </tr>
        </tbody>

                    
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
                New Entry
              </v-btn>
            </template>

              <v-card>
              <v-card-title class="text-h5 grey lighten-2">
                New Entry 
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
            </v-dialog>



      <v-dialog
        v-model="edit_dialog"
        width="500"
      >
  
          <v-card>
          <v-card-title class="text-h5 grey lighten-2">
            Edit
          </v-card-title>
  
          <v-form
          ref="form"
          v-model="edit_form"
          lazy-validation
          >
            <v-text-field v-model="new_data">
              Edit
            </v-text-field>


            <v-btn @click="edit_reqest()">
              Submit
            </v-btn>
          </v-form>
  
          <v-divider></v-divider>
        </v-card>
      </v-dialog>

      
      </template>
    </v-simple-table>
  </div>
</v-app>
</template>

<script>
import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
Vue.use(VueAxios, axios)
export default{
  data: () => ({
    cur_item_id:null,
    new_data:'', 
    old_data:'', 
    edit_dialog:false, 
  table_headers: [['ID','table_id'], ['Name','employee_phone'], ['Phone','employee_name'], ['Rollno','employee_rollno']],
    table_headers_name: ['table_id', 'employee_name','employee_phone', 'employee_rollno', 'delete'], 
    emp_name: '',
    phone: '', 
    rollno: null, 
    dialog:false, 
    table_data: [], 
    // new_data: {}, 
    click_item:null, 
    click_tname:null, 
  }),
  mounted() {
    Vue.axios.get('http://127.0.0.1:3333/emp/read')
    .then((result) => {
      console.log(result)
      this.table_data = result.data
    })
  }, 
  
  methods:{

    
    validate() {
      this.$refs.form.validate()
      console.log(this.emp_name)
      let tempdata = this.getData()
      console.log(tempdata)
      axios.post('http://127.0.0.1:3333/emp/create',
      tempdata
      , {
          headers: {
            
          }
        }).then((response) => {
          console.log(response.data)
          this.table_data.unshift(response.data)
        })
        this.dialog = false 
        this.$refs.form.reset()
        
      },
      readData() {
    Vue.axios.get('http://127.0.0.1:3333/emp/read')
    .then((result) => {
      console.log(result)
      this.table_data = result.data
    })
  },
      getData() {
        return {
          
            "employee_phone": `${this.phone}`,
            "employee_name": `${this.emp_name}`,
            "employee_rollno": `${this.rollno}`,   
      }
    }, 
    edit_data(item, column) {
      this.cur_item_id = item['table_id']
      this.click_item = item 
      this.click_tname = column 
      this.edit_dialog= true 

    },

    edit_reqest() { 
      console.log('calling edit_request')
      console.log(this.new_data)
      let tempData = this.getUpdate()
       Vue.axios.put('http://127.0.0.1:3333/emp/update', tempData,{
          headers: {
            
          }
        }).then(() => {
          
          this.readData() 
        })
      this.edit_dialog = false 
      this.$refs.form.reset()
    
      

    }, 

    getUpdate() {
      return {
        "col": `${this.click_tname}`, 
        "new_data":`${this.new_data}`,
        "table_id":`${this.cur_item_id}`
      }
    },
    delete_data(item){
      let id = item.table_id
      console.log('calling delete_data')
      console.log(id)
      let tempData = this.getDelData(id) 
      Vue.axios.put('http://127.0.0.1:3333/emp/delete', tempData, {
          headers: {
            
          }
        }).then(() => {
          this.readData() 
        })
    },

    getDelData(id) {
      return {
        "id": `${id}`, 
      }
    }

    
  }
}
</script>