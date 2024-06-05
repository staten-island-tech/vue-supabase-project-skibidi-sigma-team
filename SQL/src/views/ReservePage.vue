<script setup>
import { ref } from 'vue'
import { supabase } from '../lib/supabaseClient'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const test1 = ref('')
const ttest2 = ref('')

const tableName = 'items'
const itemValues = {
  'Hot Glue Gun': 2,
  '3d Printer time': 9,
  'Printer Paper': 8,
  'Blue Paint': 5,
  'Wood Glue': 14,
  'String(FT)': 20,
  'Glue stick': 3,
  'Yellow Paint': 6,
  'Brown Paint': 12,
  'Popsicle Sticks': 1,
  'Paint brushes': 15,
  'Felt Sheets': 18,
  'clay packs': 7,
  'Soldering Irons': 21,
  'Red Paint': 11,
  scissors: 17,
  "Elmer's Glue": 19,
  'White Paint': 13,
  'carboard boxes': 4,
  'Cardbaord scraps': 16,
  'Green Paint': 10
}

async function UPDATEVALUES(y, z) {
  const { error } = await supabase.from('items').update({ nonsolid: y }).eq('id', z)
}

async function UPDATEVALUES2(y, z) {
  const { error } = await supabase.from('items').update({ amount: y }).eq('id', z)
}

async function UPDATEVALUES3(y, z) {
  const { error } = await supabase.from('items').update({ reserveAM: y }).eq('id', z)
}

//name of the row needs to be hardcoded| y is the row value you want to change | z is the value of the ID

async function TOGETHER() {
  const ML_values = [6, 10, 13, 19, 11, 12, 14, 5]
  const SIGMA_OHIO = itemValues[ttest2.value] // checks the user input and matchs it to the dicotnary key value pair
  if (ML_values.includes(SIGMA_OHIO)) {
    const { data, error } = await supabase.from(tableName).select('*')
    let returnvaluetosupabase = ref(0)
    let poopthang = ref(0)
    data.forEach((row) => {
      if (row.id === SIGMA_OHIO) {
        returnvaluetosupabase = row.nonsolid
      }
    })
    if (test1.value > returnvaluetosupabase) {
      alert('You cant reserve more then the stock amount')
    } else {
      const computed = returnvaluetosupabase - test1.value
      UPDATEVALUES(computed, SIGMA_OHIO)
      data.forEach((row) => {
        if (row.id === SIGMA_OHIO) {
          poopthang = row.reserveAM
        }
      })
      const othertruevalue = poopthang + test1.value
      UPDATEVALUES3(othertruevalue, SIGMA_OHIO)
    }
    // can add a router push here in order to bring them back to another page or home page once request is sumbbited
  } else {
    const { data, error } = await supabase.from(tableName).select('*')
    let thisvar = ref(0)
    let reservecurrent = ref(0)
    data.forEach((row) => {
      if (row.id === SIGMA_OHIO) {
        thisvar = row.amount
      }
    })
    if (test1.value > thisvar) {
      alert('You cant reserve more then the stock amount')
    } else {
      const calcutlate = thisvar - test1.value
      UPDATEVALUES2(calcutlate, SIGMA_OHIO)
      data.forEach((row) => {
        if (row.id === SIGMA_OHIO) {
          reservecurrent = row.reserveAM
        }
      })
      const TrueValue = reservecurrent + test1.value
      UPDATEVALUES3(TrueValue, SIGMA_OHIO)
    }
  }
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
