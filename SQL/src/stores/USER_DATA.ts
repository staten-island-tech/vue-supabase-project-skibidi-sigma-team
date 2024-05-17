
import { defineStore } from 'pinia';

export const StealData = defineStore('user', {
  state: () => ({
    email: '',
    
  }),
  actions: {
    STEALTHIS(email) {
      this.email = email;
    },
    clearUser() {
      this.email = '';
    },
  },
});
