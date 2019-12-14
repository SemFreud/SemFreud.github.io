var nav = new Vue({
    el: '#global',
    data: {
        nav_list: '',
        md_content: '',
        curr_file_info: {
            name: '',
            date: ''
        }
    },
    methods: {
        getFile: function (item) {
            this.$http.get(item.url).then(function (res) {
                var converter = new showdown.Converter({extensions: ['table']})
                var html = converter.makeHtml(res.body);
                document.getElementById("md_content").innerHTML = html;
                this.curr_file_info.date = item.date
                this.curr_file_info.name = item.name
            })
        }
    },
    created: function () {
        this.$http.get("static/data/index_bar.json").then(function (res) {
            this.nav_list = res.body
        })
    }
});