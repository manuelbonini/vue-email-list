var app = new Vue(
    {
        el: '#root',
        data: {
            mail: []
        },
        methods: {
            arrayPush() {

            }
        },
        mounted() {
            axios
                .get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((response) => {
                    const result = response.data;
                    console.log(result);

                    this.mail.push(result.response);
                    console.log(this.mail);
                });
            axios
                .get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((response) => {
                    const result = response.data;
                    console.log(result);

                    this.mail.push(result.response);
                    console.log(this.mail);
                });
        }
    }
);