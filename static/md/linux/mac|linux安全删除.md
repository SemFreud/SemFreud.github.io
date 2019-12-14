
## mac|linux 防范rm -rf数据丢失 

---

>此处标题党
>
>之前见有同事误删了一个大目录(rm -rf)，内部数据都丢了，特写此文章。


---

分析了一下，为了防止误删方便找回，可以使用`mv`命令代替删除(逻辑删除)，
但是`rm` 命令是`/bin/`目录下的，为只读文件。

故想到使用 `alisa` 命令做 `rm`命令的别名。


#### 1.准备脚本
首先，写了一个脚本，`rm.sh`，逻辑大概是把文件移动到垃圾桶目录(``)。

可以通过`curl https://semfreud.github.io/static/file/rm.sh`下载。

```
#!/usr/bin/env bash

#垃圾桶目录
TRASH=/Users/`whoami`/.Trash

mv_single_file(){
    if test ! -z ${1}; then
        var1_top_1=`echo ${1:0:1}`
        curr_path=${1}
        if test ${var1_top_1} != "/" ; then
            curr_path=`pwd`/${1}
        fi
        full_path=${curr_path}
        if test -f ${curr_path}; then
            full_path=`echo ${curr_path%/*}`
            trash_path=${TRASH}${full_path}

        elif test -d ${curr_path}; then
            trash_path=${TRASH}${full_path}/..
        fi
        mkdir -p ${trash_path}
        mv ${curr_path} ${trash_path}/
    fi
}

var1=${1}
echo ${var1}
for i in ${var1};
do
    mv_single_file ${i}
done
```


#### 2.移动脚本并赋权限
根据自身情况来修改脚本垃圾桶地址或部分逻辑，
然后复制将脚本文件移动到`/usr/local/bin/`下.

`chmod 777 rm.sh && mv rm.sh /usr/local/bin/rm.sh`


#### 3.编译bash_profile文件
再打开`~/.bash_profile` 设置`rm`别名 (mac可以在该文件设置，linux请在`~/.bash_rc`)


`echo  "alisa rm='rm.sh'" >> ~/.bash_profile && source  ~/.bash_profile `


`source`之后，可以试试使用rm命令(建议使用测试文件)。


#### 4.增加定时任务

看个人需求 使用 `crontab`增加定时任务

#每天零点清空一次
`0 0 * * * /bin/rm -rf /tmp/Trash/*` (垃圾桶地址记得更改)


#### 5.问题说明

经过测试，

    操作文件正常
    操作目录正常， 
    批量操作使用通配符'*'的话需要加 '\*'

例如:

    删除 某个目录`*log`文件
    rm \*log
    



### (如有问题请留言)。

