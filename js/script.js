var app = new Vue(
    {
        el: '#root',
        data: {
            arrayLength: 10,
            mail: []
        },
        methods: {
            
        },
        mounted() {
            for( let i=0 ; i < this.arrayLength ; i++) {
                axios
                    .get('https://flynn.boolean.careers/exercises/api/random/mail')
                    .then((response) => {
                        const result = response.data;
                        console.log(result);

                        this.mail.push(result.response);
                    });
            }
        }
    }
);