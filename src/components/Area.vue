<template>
<b-row class="row-area">
    <b-col class="col-md-12 mt-5 mb-4">
        <h1 class="area-title">The Meals Country</h1>
    </b-col>
    <b-col class="col-md-1" v-for="(data, index) in dataarea" :key="index">
        <p class="area-text">{{ data.strArea }}</p>
    </b-col>
</b-row>
</template>
<script>
import axios from 'axios'
export default {
    data() {
        return {
            dataarea: []
        }
    },
    async created() {
        const BASEURI = 'https://www.themealdb.com/api/json/v1/1/list.php?a=list'
        axios.get(BASEURI).then((result) => {
            this.dataarea = result.data.meals
        })
    },
}
</script>
<style>
.row-area {
    margin: 50px;
}
.col-title {
    margin-bottom: 30px;
}
.area-title {
    font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
    display: block;
    font-weight: 400;
    font-size: 50px;
    color: #35495e;
    letter-spacing: 1px;
}
.area-text {
    text-align: center;
}
</style>