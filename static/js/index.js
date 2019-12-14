var nav = new Vue({
    el: '#global',
    data: {
        nav_list: '',
        md_content: ''
    },
    methods: {
        getFile: function (md_file_url) {
            // console.log(md_file_url)
            this.$http.get(md_file_url).then(function (res) {
                // console.log(res.body)
                // this.md_content = res.body
                var converter = new showdown.Converter({extensions: ['table']})
                var html = converter.makeHtml(res.body);
                console.log(html)
                document.getElementById("md_content").innerHTML = html;
            })
        },
    },
    created: function () {
        this.$http.get("static/data/index_bar.json").then(function (res) {
            this.nav_list = res.body.name_list
        })
    }
})