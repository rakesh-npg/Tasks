<template>
    <v-app>

        <SearchBox :flag="Searchlink"  @searchEmitPop="SearchFunc"/>
        <div>

        <v-dialog
        v-model="empFormDialog"
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
            
            <!-- EmployeeForm -->
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
                    v-model="formData.empName"
                    label="name">
                    Employee Name
                    </v-text-field>
            
                    <v-text-field
                    v-model="formData.empPhone"
                    label="phone">
                    Employee Phone
                    </v-text-field>
        

                    <v-text-field
                    v-model="formData.empRollno"
                    label="rollno">
                    Employee rollno
                    </v-text-field>

                    <v-text-field
                    v-model="salary"
                    label="salary"
                    v-salary>
                    Employee Salary 
                    </v-text-field>

                    <v-btn @click="validateForm">
                    Submit
                    </v-btn>
                    
                </v-form>

            </v-card>

        </v-dialog>

        <!-- Employee Table -->
        <v-simple-table>
            <template v-slot:default>
                <thead>
                    <tr>

                        <th class="text-left">
                        ID
                        <v-icon small @click="sortTable(tableHeaderName[0])">{{sortIconFlagDisplay(0)}}</v-icon>
                        </th>
                        <th class="text-left">
                        Name
                        <v-icon small @click="sortTable(tableHeaderName[1])">{{sortIconFlagDisplay(1)}}</v-icon>
                        </th>
                        <th class="text-left">
                        Phone
                        <v-icon small @click="sortTable(tableHeaderName[2])">{{sortIconFlagDisplay(2)}}</v-icon>
                        </th>
                        <th class="text-left">
                        Roll_no
                        <v-icon small @click="sortTable(tableHeaderName[3])">{{sortIconFlagDisplay(3)}}</v-icon>
                        </th>

                    </tr>
                </thead>
                <tbody>

                    <tr
                    v-for="item in tableData" 
                    :key="item.id"
                    >
                        <td v-for="(columnData) in tableHeaderName"
                        :key="columnData">{{item[columnData]}}

                        <template v-if="columnData !='delete'">
                            <v-icon small @click="editData(item, columnData)" v-if="columnData !='table_id'">mdi-pencil
                            </v-icon>
                        </template>
                        <template v-else>
                            <v-icon small @click="deleteData(item)">mdi-delete</v-icon>
                        </template>
                        </td>
                    </tr>

                </tbody>
            </template>
        </v-simple-table>
     
        <!-- Employee Edit Form -->

        <v-dialog
          v-model="empEditFormDialog"
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

                    <v-text-field 
                    v-model="editFormVal">
                    Edit
                    </v-text-field>


                    <v-btn @click="editRequest()">
                    Submit
                    </v-btn>

                </v-form>

            </v-card>
      </v-dialog>
    </div>
</v-app>
</template>

<script>
import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import {api} from '/src/components/service/api.js'
Vue.use(VueAxios, axios)
export default {

    data: () => ({
        baseURL:"http://127.0.0.1:3333",
        sortFlagArray : [true, true, true, true], 
        Searchlink:"http://127.0.0.1:3333/search",
        name:"emp",
        editFormVal:"", 
        empFormDialog:false, 
        empEditFormDialog:false, 
        tableData:[], 
        tableHeaderName: ["table_id", "employee_name", "employee_phone", "employee_rollno", "delete"],
        formData:{
            empName: "", 
            empRollno: "", 
            empPhone: "", 
            empTableID:"", 
        }, 
        editFormData: {
            columnName:"", 
            newData:"", 
            tableID:"", 
        }
        
        
    }), 
    async mounted() {
        console.log(process.env.VUE_APP_URL)
        this.readData() 
    },
    methods:{
            async validateForm() {
                this.$refs.form.validate();
                let result = await api.post("emp/create", this.formData)   
                this.tableData.unshift(result) 
                this.empFormDialog = false;
                this.$refs.form.reset();
                this.readData() 
            },


            async readData() {
                
                this.tableData = (await api.read("/emp/read")).data
            },

            
            async editRequest() {
                console.log("calling edit_request");
                this.editFormData.newData = this.editFormVal
                this.tableData = (await api.put("/emp/update", this.editFormData)).data
                this.empEditFormDialog = false;
                this.$refs.form.reset();
            },
            
            async deleteData(item) {
                
                this.editFormData.tableID = item.table_id;
                console.log(this.editFormData)
                this.tableData = (await api.put("/emp/delete", this.editFormData)).data
                
            },

            async sortTable(header) {

                let sort_type =  this.sortFlagArray[this.tableHeaderName.indexOf(header)] ? 'desc' : 'asc'
                let tempData = {
                "sort": sort_type, 
                "col" : header
            }
                this.tableData = (await api.post('/emp/sort', tempData)).data
                this.sortFlagArray[this.tableHeaderName.indexOf(header)] = !this.sortFlagArray[this.tableHeaderName.indexOf(header)]
                
            },
        
            editData(item, columnData) {
                console.log('calling edit data')
                this.editFormData.tableID = item["table_id"];
                this.editFormData.columnName = columnData
                this.empEditFormDialog = true;
            },

            sortIconFlagDisplay(flag) {
                if(this.sortFlagArray[flag])
                    return 'mdi-arrow-down'
                else 
                    return 'mdi-arrow-up'
            },

            SearchFunc(val) {
                console.log(val)
                this.tableData = val.data
                this.searchFieldFlag= true
            }, 
        }
}
</script>