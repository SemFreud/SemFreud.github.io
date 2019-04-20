var nav= new Vue({
    el: '#nav',
    data: {
        nav_list:''
    },
    methods:{

    },
    created: function () {
        this.$http.get("static/data/index_bar.json").then(function (res) {
            this.nav_list = res.body.name_list
        })
    }
})