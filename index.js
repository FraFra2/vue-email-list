const { createApp } = Vue;

createApp({
    data() {
        return {
            msg: "snaso"
        };
    },
    methods: {
        returnEmail(){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then(function(resp){
                const mail = resp.data;
                console.log("QUESTA MAIL", mail.response);
            });
        }
        
    }
}).mount('#app');