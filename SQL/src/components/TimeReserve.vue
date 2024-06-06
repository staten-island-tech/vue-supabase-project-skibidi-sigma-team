<script setup>
import { ref } from 'vue'
import { supabase } from '../lib/supabaseClient'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const test1 = ref('')
const ttest2 = ref('')


async function UPDATEVALUES(y, z) {
  const { error } = await supabase.from('items').update({ nonsolid: y }).eq('id', z)
}

async function UPDATEVALUES2(y, z) {
  const { error } = await supabase.from('items').update({ amount: y }).eq('id', z)
}

async function UPDATEVALUES3(y, z) {
  const { error } = await supabase.from('items').update({ reserveAM: y }).eq('id', z)
}




// items needs to be changfes to time as thats the table im going to be using

function RESERVEREROUTE(){
  router.push('/home')
}
//name of the row needs to be hardcoded| y is the row value you want to change | z is the value of the ID

async function TOGETHER() {
 

}
</script>

<template>
  <form class="testthisthat" @submit.prevent="TOGETHER">
    <div class="somethingtest">
      <h1>RESERVE?</h1>

      <div>
        <input
          class="inputfield"
          required
          type="number"
          placeholder="amounut to reserve"
          v-model="test1"
        /><br />
        <label for="itemSelect">Select an item:</label>
        <select id="itemSelect" v-model="ttest2" required>
          <option disabled value="">Please select one</option>
          <option v-for="(value, item) in itemValues" :key="item" :value="item">{{ item }}</option>
        </select>
      </div>
      <div>
        <input type="submit" class="button block" />
      </div>
    </div>
  </form>
</template>

<!-- Need to change form inputs so that you choose the day, the period and then send in that request and if there are seat numbers left it works if no seats left then you cant reserve a day to use maker space-->
 <!-- add logic handling for if there are seats avabile or not  -->