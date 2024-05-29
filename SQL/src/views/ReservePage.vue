<script setup>
import { ref } from 'vue'
import { supabase } from '../lib/supabaseClient'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const test1 = ref('')
const ttest2 = ref('')
let CURRENTVALUE = 0
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
  'scissors': 17,
  "Elmer's Glue": 19,
  'White Paint' :13,
  'carboard boxes': 4,
  'Cardbaord scraps': 16,
  'Green Paint': 10
};



async function getCurrentValue(x,y) {
  try{
  const { data, error } = await supabase
    .from('items')
    .select(y)
    .eq('id', x)
    
  /* x is row id froom input */
  if (error) {
      throw new Error(`Error fetching data: ${error.message}`);
    }

  CURRENTVALUE = data ? data.amount : null; // store the current value in the variable
  return CURRENTVALUE;

  
} catch (error) {
    console.error('An error occurred in getCurrentValue:', error.message);
    // You can handle the error further if needed, e.g., by returning a default value
    return null;
  }}

async function RESERVEDATA(T,y) {

    const { data, error } = await supabase
    .from('items')
    .update({ 
      amount: T
    })
    .eq('id',y); 
}

async function RESERVEDATA1(T,y) {

const { data, error } = await supabase
.from('items')
.update({ 
  LiquidAmountsinml: T
})
.eq('id',y); 
}

async function RESERVEUPDATE(E,y){
    const { data, error } = await supabase
    .from('items')
    .update({ 
        reserveAM: E
    })
    .eq('id',y);

}


async function TOGETHER(){
    const SIGMA_OHIO = itemValues[ttest2.value]; // checks the user input and matchs it to the dicotnary key value pair
    const ML_values = [6,10,13,19,11,12,14,5]
    console.log(SIGMA_OHIO)
    if (ML_values.includes(SIGMA_OHIO)){
      await getCurrentValue(SIGMA_OHIO, 'nonsolid')
      console.log(CURRENTVALUE)
const amounut_true = CURRENTVALUE - test1.value
console.log(amounut_true)
await RESERVEDATA(amounut_true,SIGMA_OHIO)
await RESERVEUPDATE(test1.value,SIGMA_OHIO)

    }

//
    else{
      console.log(CURRENTVALUE)
      console.log('test1')
      await getCurrentValue(SIGMA_OHIO, 'amount')
      console.log(CURRENTVALUE) // IT WONT GET THE CURRENT VALUE EVNE THOUGH THE OTHER ONE WORKS FINE LIKE HUH?!?!?! WTF<
      const amounut_true1 = CURRENTVALUE - test1.value
      console.log(amounut_true1)
      await RESERVEDATA1(amounut_true1,SIGMA_OHIO)
      console.log('test3')
      await RESERVEUPDATE(test1.value,SIGMA_OHIO)
}

//THE ONLY COLOUM FOR SOME REASON THAT CVAN BE READ IS THE AMOUNT COLOUM HOW TF THIS IS POSSIBLE I DONT KNOW ITS GIVING ME A MENTAL NREAK DOWN WHY IS THAT THE ONLY READABLE COLOUM!!!!! 
// IF THE OTHER ONESA ARE THE EXAXTR SAME THING HOW TF DOES THAT EVEN OWQRK
}
</script>

<template>
  <form class="testthisthat" @submit.prevent="TOGETHER">
    <div class="somethingtest">
      <h1>RESERVE?</h1>

      
      <div>
        <input class="inputfield" required type="number" placeholder="amounut to reserve" v-model="test1" /><br>
        <label for="itemSelect">Select an item:</label>
        <select id="itemSelect" v-model="ttest2" required>
          <option disabled value="">Please select one</option>
          <option v-for="(value, item) in itemValues" :key="item" :value="item">{{ item }}</option>
        </select>
      </div>
      <div>
        <input
          type="submit"
          class="button block"
          
        />
      </div>
    </div>
  </form>
</template>

<!-- 
we need to do the liqud ML ones( they need their own function bceause you take from diffrent coloum)if there is no amount checks oir liquad amount colum this needs to be put in every fgunction here so that i doesnt break
add in checks so that you cant reserve if there is 0 amount avaible 

tell richard to make the cards how amount avubale and amount reserved so that it doenst look stupid

the reserve amounts need to be added together as well
 -->
