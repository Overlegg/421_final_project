new Vue({
    el: '#app',
    data() {
        return {
            goals: '',
            assits: '',
            blocks: '',
            drops: '',
            user_profile_photo: ''
        }
    },

    mounted() { 
        this.getPlayerStats() 
        this.getProfile()      
    },
    methods: {
        PostTeamStats () {            
            axios
                .getPlayer('http://localhost:5500/api/contact')
                .then(response => (
                    this. = response.data.data
                    // console.log(this.contact)                                    
                    )
                )             
                .catch(function (error) {
                    console.log(error)
                })            
        },
        /*getProfile() { //demo of getting an image path from db.
            axios
                .post('http://localhost:8080/api/profile', { email: this.email})
                .then(response => (
                    photos = response.data.profile,
                    // console.log(photos[0].photo),
                    this.user_profile_photo = 'http://127.0.0.1:5500/frontend/images/' + photos[0].photo
                )
                )
                .catch(function (error) {
                    console.log(error);
                })

        }*/
    }
})