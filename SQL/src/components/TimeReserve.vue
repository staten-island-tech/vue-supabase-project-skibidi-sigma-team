<script setup>
import { ref } from 'vue'
import { supabase } from '../lib/supabaseClient'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const test1 = ref('')
const ttest2 = ref('')
const ttest3 = ref('')
import { StealData } from '../stores/USER_DATA'
const somethingtest1 = StealData()



async function UPDATEVALUES3(y, z) {
  const { error } = await supabase.from('time').update({ SeatNumber: y }).eq('id', z)
}


async function CreatUserTbale(x,y,z,t){
  await supabase
    .from('ReserveTime')
    .insert({'Name': x, 'Day': y , 'Period': z, 'EMAIL' : t});}



function RESERVEREROUTE(){
  router.push('/reserve')
}


async function TOGETHER() {
 console.log(ttest2.value)
 console.log(ttest3.value)
 let CurrentSeat = 0
 let updateseat = 0

 const { data, error } = await supabase.from('time').select('*')
 console.log(data)
 data.forEach((row) => {
      if (row.Day == ttest2.value) {
       if (row.Period == ttest3.value){
        if(row.SeatNumber == 0){alert('You cant reserve this day/period ') }else{CurrentSeat = row.SeatNumber ,CreatUserTbale(test1.value,ttest2.value,ttest3.value,somethingtest1.email), updateseat = CurrentSeat - 1,UPDATEVALUES3(updateseat , row.id), RESERVEREROUTE() }
        }
      }
    })
   

}
</script>

<template>
  <form class="testthisthat" @submit.prevent="TOGETHER">
    <div class="somethingtest">
      <h1>Reserve a spot in the schedule</h1>

      <div>
        <input
          class="inputfield"
          required
          type="string"
          placeholder="Name"
          v-model="test1"
        /> <br />
        <label for="itemSelect">Select an day:</label>
        <select id="itemSelect" v-model="ttest2" required>
          <option disabled value="">Please select a day</option>
          <option> Monday</option>
          <option> Tuesday</option>
          <option> Wednesday</option>
          <option> Thursday</option>
          <option> Friday</option>
        </select>
        <br>
          <label for="PeriodSelect">Select an period:</label>
        <select id="PeriodSelect" v-model="ttest3" required>
          <option disabled value="">Please select a period:</option>
          <option> 1</option>
          <option> 2</option>
          <option> 3</option>
          <option>4 </option>
          <option> 5</option>
          <option> 6</option>
          <option> 7</option>
          <option> 8</option>
          <option> 9</option>
          <option> 10</option>
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