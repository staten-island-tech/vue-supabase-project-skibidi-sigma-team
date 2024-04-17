<script setup>


import { supabase } from '../lib/supabaseClient'




async function signUpNewUser(x,y) {
  const { data, error } = await supabase.auth.signUp({
    email: x,
    password: y,
    
  })
}

 


</script>

<template>
 <!--  <form>

<label for="Email">Enter your email</label><br>
<input type="text" id="Email" name="Email" ><br>
<label for="Email">Make a password</label><br>
<input type="text" id="PASSWORD" name="Email" ><br>
<input  type="submit" value="Submit" @click=" console.log('OMG')"><br> 
</form> 


I think i cant do it with fomrs.....-->

  <button  @click="console.log('test1232') , console.log('bozo lost his data')">SUMBIT DATA</button>

</template>