###基础命令

`touch` 创建空白文件 

`vi/vim` 打开一个文件
    
    文件打开后,键入 小写o , 在下一行进入写入模式
            键入大写O, 在上一行进入写入模式
            键入 'dd'  删除当前行
            键入 '/' , 进入查询模式, (左下角 会显示输入的文本，按Enter进行查询，之后 按n可以查找下一个 )
            键入 'i' 进入写入模式(insert)
            结束写入模式,英文输入法下 按Esc , 键入'wq'保存退出，键入 'q!' 不保存退出。
                                            
                                            
`cat` 查看文件内容

`tail` 查看文件尾部内容

	`tail -10 text.log` //查看后十行
	
`head` 查看文件头部内容

	`head -10 text.log` //查看前十行


`cat text.log | grep mysql` //从text.log内查找mysql文字

`ipconfig` //查看网卡信息

`netstat -an  | grep port`  //查看端口

`ps -ef  | grep app` // 查看应用 | 服务

`kill`  //击杀正在运行的进程

`top` //查看机器性能

`free` //查看内存使用情况
    
    `free -g` //内存大小以G为单位输出
    `free -m` //内存大小以M为单位输出
            
`wc -l file` //查看文件列数

`wc -w` //查看长度 (mac)

`wc -L` //查看文件长度 (linux)



###高阶命令



`grep` 查看管道内过滤文本
```
	example:
		grep -v "text" //不输出带有text的行
		grep "text" -3 //查看带有text行的上下各三行 
	example:
		grep "."  //输出不是空行的行
```

`awk` 给管道内容/文本的内容，格式化及计算。

```
	example 1:
		text=a,b,c,d,e,f,g
		echo ${test} | awk -F "," '{print $1}'
		//-F 是按字符分隔 ， print进行字段输出 , $1代表第一列。 不加 '$' 全部输出
		//awk支持 for if 语句控制

	example 2:
		awk -F "," '{for(count[$1]+=1)END{for(k in count){print k  , count[k]}}}' text.csv
		//对 text.csv进行分隔 , 然后对第一列计数， 然后打印出第一列文本出现的次数。
```





`sort` 操作文本排序。默认按长度首字母 （先按长度 后按 字母）
```
	example:
		cat text.txt | sort   //排序
		cat text.txt | sort -t //对第五列排序
```


`xargs` 管道传入参数,将 上个 结果当作变量传给后续的命令。
	
```
	example: (一个文件夹内都是 .txt 文件， 批量修改为 .csv文件) 批量重命名

		ls | grep "txt" | awk -F "\." '{print $1}' | xargs -I{} mv {}.txt {}.csv
		//输出文件夹内文件 ， 通过管道过滤 \. 格式 输出文件名， xargs 对每个{}变量 做 mv  {}.txt  {}.csv操作。
		//注意，  mac环境 xargs -I{} , linux环境 xargs -i{} 
```



