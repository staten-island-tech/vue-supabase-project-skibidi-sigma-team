<script setup>
import TimeReserve from '@/components/TimeReserve.vue';
import { ref } from 'vue'
import { supabase } from '../lib/supabaseClient'
import { useRoute, useRouter } from 'vue-router'
import { StealData } from '../stores/USER_DATA'
const somethingtest1 = StealData()

function RESERVEREROUTE(){
  router.push('/reserve')}

async function check(){
    const { data, error } = await supabase.from('ReserveTime').select('*')
    data.forEach((row) => {
        if(row.EMAIL == somethingtest1.email){RESERVEREROUTE()}
        else{null} } )
      
    }
check()
</script>

<template>
<TimeReserve/>

</template>
