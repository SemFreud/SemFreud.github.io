
## 了解旧版复制命令SLAVEOF

> 从机使用命令SLAVEOF 可以复制另一台服务器的数据

> 如: 172.18.0.100:6379 172.18.0.101:6379

`redis-cli -h 172.18.0.100 -p 6379` 

```
172.18.0.100:6379:> SLAVEOF 172.18.0.101 6379
```

> 执行完毕后，`172.18.0.100:6379`与`172.18.0.101:6379`一致
> 172.18.0.100:6379`成为`172.18.0.101:6379`从机，并保持数据一致。
> 从机使用SYNC命令复制数据
## 1.redis旧版的sync命令复制(同步功能)

```
    1.从服务器向主服务器发送SYNC命令 
    2.主服务器收到 命令后，执行BGSAVE命令。在后台生成一个RDB，并使用缓冲区记录从现在开始执行的所有写命令 。
    3.主服务器的BGSAVE执行完毕后，将生成的RDB文件发送给从服务器，从服务器接收并载入RDB文件，将自己的 数据库状态更新至服务器执行BGSAVR命令时的状态。
    4.主服务器将记录在缓冲区里面的所有写命令发送给从服务器，从服务器执行这些写命令，将从服务器的状态更新至主服务器当前所处的状态 。
```

图示
![](/Users/amber/IdeaProjects/blog/redis/redis旧版复制功能/redis-SYNC过程.png)

## 2.redis命令传播
>    对同步命令SYNC执行完毕后，主从数据库状态一致。
>
>    每当主服务器执行客户端的写命令后，主数据库修改，导致主从不一致。
>
>    为了让同步后的主从数据库一致，主服务器对从服务器进行命令传播操作。     
     
```
    主从命令传播的操作步骤
    1.主服务器将自己执行的写命令发送给从服务器。
    2.从服务器接收到主服务器发送的写命令后，自己也执行一下。
    3.执行完成，回归一致。
    PS: DEL 命令也是属于写命令
```

## 3.旧版复制功能的缺点

> 1.初次复制时,进行完整的同步和命令传播

> 2.断线后复制，同样进行完整的同步和命令传播，但是效率很低。


```
    断线后复制的步骤
    1.主从服务器断开
    2.从机尝试重连 (N次)
    3.从机连接
    4.从机使用SYNC命令复制数据(查看同步功能图示)
```

![](/Users/amber/IdeaProjects/blog/redis/redis旧版复制功能/redis-旧版复制功能过程.png)

```
    问题所在
    1.再次使用SYNC命令后消耗主服务器大量的资源(CPU,Memory,磁盘IO,网络带宽)
      会影响客户端命令的响应时间。
    2.接收到RDB文件载入后，从机会阻塞而没有办法处理命令请求。
    3.断线的时间越短，期间需要传播的写命令就越少。对较少的写命令来对从机进行一个完整的复制是没有必要的
```










