new Vue({
    el: '#app',
    data() {
        return {
            uname: '',
            password: '',
            status: false,
            msg: ''
        }
    },

    mounted() {        
    },
    methods: {
        login () {            
            axios
                .post('http://localhost:5500/api/login', {uname: this.uname, password: this.password})
                .then(response => (
                    this.status = response.data.status,
                    (this.status == true) ? window.location = "AddStat.html" : this.msg = 'Login failed!'                                     
                    )                    
                )             
                .catch(function (error) {
                    console.log(error);
                })
            
        }
    }
})