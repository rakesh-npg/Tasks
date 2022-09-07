<template>
    <v-app>
    <h2>test</h2>
        <v-data-table
      :headers="headers"
      :items="desserts"
      :items-per-page="5"
      class="elevation-1"
    ></v-data-table>
    </v-app>
</template>


<script>
export default {
    data: () => ({
        headers: [
            {
                text:"name", 
                align:"start", 
                value:"name", 
            },
            {
                text:"email", 
                value:"email"
            },
            {
                text:"gender", 
                value:"gender"
            },
            {
                text:"choice", 
                value:"choice"
            },
            {
                text:"city", 
                value:"city"
            },
        ], 
        desserts: [
            {
                name:"test", 
                email:"test@test.com", 
                gender:"male",
                choice: "football",
                city:"india"
            },
        ]

    })
}
</script>