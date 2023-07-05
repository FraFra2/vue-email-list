const { createApp } = Vue;

createApp({
  data() {
    return {
      mails: []
    };
  },
  methods: {
    returnEmail() {
      for (let index = 0; index < 10; index++) {
        axios
          .get('https://flynn.boolean.careers/exercises/api/random/mail')
          .then((resp) => {
            const mail = resp.data.response;
            this.mails.push(mail);
          })
      }
    }
  },
  mounted() {
    this.returnEmail();
  }
}).mount('#app');
