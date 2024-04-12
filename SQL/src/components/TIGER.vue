<script setup>


import { supabase } from '../lib/supabaseClient'




async function signUpNewUser() {
  const { data, error } = await supabase.auth.signUp({
    email: 'conplay55@gmail.com',
    password: 'testtest',
    
  })
}

 


</script>

<template>
  
<label for="Email">Enter your email</label><br>
<input type="text" id="Email" name="Email" ><br>

<label for="Email">Make a password</label><br>
<input type="text" id="PASSWORD" name="Email" ><br>
<input type="submit" @click="console.log(test)"><br> <!-- collect the form data nad use it in sumbi funtion -->


  <button  @click="signUpNewUser() , console.log('bozo lost his data')">SUMBIT DATA</button>
</template>