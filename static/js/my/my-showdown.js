
function compile(){
    //获取要转换的文字
    var text = document.getElementById("content").value;
    //创建实例
    var converter = new showdown.Converter();
    //进行转换
    var html = converter.makeHtml(text);
    //展示到对应的地方  result便是id名称
    document.getElementById("result").innerHTML = html;
}