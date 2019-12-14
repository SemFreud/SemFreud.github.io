## 复合分区示例


> 本次复合分区使用Range+hash做分区
>
> 1.按照时间做range分区，本次模拟通过一个小时做间隔。
>
> 2.对省份编码做hash分区，分了三个。
>
> 3.此次分区没有对分区做磁盘上对划分。


---
#### SQL代码

```


SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for test_yd_table_range
-- ----------------------------
DROP TABLE IF EXISTS `test_yd_table`;
CREATE TABLE `test_yd_table` (
  `mail_no` char(13) COLLATE utf8_bin NOT NULL,
  `send_province_code` int(6) NOT NULL,
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `receive_province_code` int(6) NOT NULL,
  PRIMARY KEY (`mail_no`,`send_province_code`,`create_time`,`receive_province_code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin


/*!50500  PARTITION BY RANGE ( UNIX_TIMESTAMP(create_time))
subpartition by HASH(`send_province_code`)
SUBPARTITIONS 3 (
partition p2019120500 VALUES LESS THAN (1575475200),
partition p2019120501 VALUES LESS THAN (1575478800),
partition p2019120502 VALUES LESS THAN (1575482400),
partition p2019120503 VALUES LESS THAN (1575486000),
partition p2019120504 VALUES LESS THAN (1575489600),
partition p2019120505 VALUES LESS THAN (1575493200),
partition p2019120506 VALUES LESS THAN (1575496800),
partition p2019120507 VALUES LESS THAN (1575500400),
partition p2019120508 VALUES LESS THAN (1575504000),
partition p2019120509 VALUES LESS THAN (1575507600),
partition p2019120510 VALUES LESS THAN (1575511200),
partition p2019120511 VALUES LESS THAN (1575514800),
partition p2019120512 VALUES LESS THAN (1575518400),
partition p2019120513 VALUES LESS THAN (1575522000),
partition p2019120514 VALUES LESS THAN (1575525600),
partition p2019120515 VALUES LESS THAN (1575529200),
partition p2019120516 VALUES LESS THAN (1575532800),
partition p2019120517 VALUES LESS THAN (1575536400),
partition p2019120518 VALUES LESS THAN (1575540000),
partition p2019120519 VALUES LESS THAN (1575543600),
partition p2019120520 VALUES LESS THAN (1575547200),
partition p2019120521 VALUES LESS THAN (1575550800),
partition p2019120522 VALUES LESS THAN (1575554400),
partition p2019120523 VALUES LESS THAN (1575558000)
)*/;
```


#### 创表之后，打开数据库底层文件
```

文件大小             文件名
98304	test_yd_table#P#p2019120500#SP#p2019120500sp0.ibd
98304	test_yd_table#P#p2019120500#SP#p2019120500sp1.ibd
98304	test_yd_table#P#p2019120500#SP#p2019120500sp2.ibd
98304	test_yd_table#P#p2019120501#SP#p2019120501sp0.ibd
98304	test_yd_table#P#p2019120501#SP#p2019120501sp1.ibd
98304	test_yd_table#P#p2019120501#SP#p2019120501sp2.ibd
98304	test_yd_table#P#p2019120502#SP#p2019120502sp0.ibd
98304	test_yd_table#P#p2019120502#SP#p2019120502sp1.ibd
98304	test_yd_table#P#p2019120502#SP#p2019120502sp2.ibd
98304	test_yd_table#P#p2019120503#SP#p2019120503sp0.ibd
98304	test_yd_table#P#p2019120503#SP#p2019120503sp1.ibd
98304	test_yd_table#P#p2019120503#SP#p2019120503sp2.ibd
98304	test_yd_table#P#p2019120504#SP#p2019120504sp0.ibd
98304	test_yd_table#P#p2019120504#SP#p2019120504sp1.ibd
98304	test_yd_table#P#p2019120504#SP#p2019120504sp2.ibd
98304	test_yd_table#P#p2019120505#SP#p2019120505sp0.ibd
98304	test_yd_table#P#p2019120505#SP#p2019120505sp1.ibd
98304	test_yd_table#P#p2019120505#SP#p2019120505sp2.ibd
98304	test_yd_table#P#p2019120506#SP#p2019120506sp0.ibd
98304	test_yd_table#P#p2019120506#SP#p2019120506sp1.ibd
98304	test_yd_table#P#p2019120506#SP#p2019120506sp2.ibd
98304	test_yd_table#P#p2019120507#SP#p2019120507sp0.ibd
98304	test_yd_table#P#p2019120507#SP#p2019120507sp1.ibd
98304	test_yd_table#P#p2019120507#SP#p2019120507sp2.ibd
98304	test_yd_table#P#p2019120508#SP#p2019120508sp0.ibd
98304	test_yd_table#P#p2019120508#SP#p2019120508sp1.ibd
98304	test_yd_table#P#p2019120508#SP#p2019120508sp2.ibd
98304	test_yd_table#P#p2019120509#SP#p2019120509sp0.ibd
98304	test_yd_table#P#p2019120509#SP#p2019120509sp1.ibd
98304	test_yd_table#P#p2019120509#SP#p2019120509sp2.ibd
98304	test_yd_table#P#p2019120510#SP#p2019120510sp0.ibd
98304	test_yd_table#P#p2019120510#SP#p2019120510sp1.ibd
98304	test_yd_table#P#p2019120510#SP#p2019120510sp2.ibd
98304	test_yd_table#P#p2019120511#SP#p2019120511sp0.ibd
98304	test_yd_table#P#p2019120511#SP#p2019120511sp1.ibd
98304	test_yd_table#P#p2019120511#SP#p2019120511sp2.ibd
98304	test_yd_table#P#p2019120512#SP#p2019120512sp0.ibd
98304	test_yd_table#P#p2019120512#SP#p2019120512sp1.ibd
98304	test_yd_table#P#p2019120512#SP#p2019120512sp2.ibd
98304	test_yd_table#P#p2019120513#SP#p2019120513sp0.ibd
98304	test_yd_table#P#p2019120513#SP#p2019120513sp1.ibd
98304	test_yd_table#P#p2019120513#SP#p2019120513sp2.ibd
98304	test_yd_table#P#p2019120514#SP#p2019120514sp0.ibd
98304	test_yd_table#P#p2019120514#SP#p2019120514sp1.ibd
98304	test_yd_table#P#p2019120514#SP#p2019120514sp2.ibd
98304	test_yd_table#P#p2019120515#SP#p2019120515sp0.ibd
98304	test_yd_table#P#p2019120515#SP#p2019120515sp1.ibd
98304	test_yd_table#P#p2019120515#SP#p2019120515sp2.ibd
98304	test_yd_table#P#p2019120516#SP#p2019120516sp0.ibd
98304	test_yd_table#P#p2019120516#SP#p2019120516sp1.ibd
98304	test_yd_table#P#p2019120516#SP#p2019120516sp2.ibd
98304	test_yd_table#P#p2019120517#SP#p2019120517sp0.ibd
98304	test_yd_table#P#p2019120517#SP#p2019120517sp1.ibd
98304	test_yd_table#P#p2019120517#SP#p2019120517sp2.ibd
98304	test_yd_table#P#p2019120518#SP#p2019120518sp0.ibd
98304	test_yd_table#P#p2019120518#SP#p2019120518sp1.ibd
98304	test_yd_table#P#p2019120518#SP#p2019120518sp2.ibd
98304	test_yd_table#P#p2019120519#SP#p2019120519sp0.ibd
98304	test_yd_table#P#p2019120519#SP#p2019120519sp1.ibd
98304	test_yd_table#P#p2019120519#SP#p2019120519sp2.ibd
98304	test_yd_table#P#p2019120520#SP#p2019120520sp0.ibd
98304	test_yd_table#P#p2019120520#SP#p2019120520sp1.ibd
98304	test_yd_table#P#p2019120520#SP#p2019120520sp2.ibd
98304	test_yd_table#P#p2019120521#SP#p2019120521sp0.ibd
98304	test_yd_table#P#p2019120521#SP#p2019120521sp1.ibd
98304	test_yd_table#P#p2019120521#SP#p2019120521sp2.ibd
98304	test_yd_table#P#p2019120522#SP#p2019120522sp0.ibd
98304	test_yd_table#P#p2019120522#SP#p2019120522sp1.ibd
98304	test_yd_table#P#p2019120522#SP#p2019120522sp2.ibd
98304	test_yd_table#P#p2019120523#SP#p2019120523sp0.ibd
98304	test_yd_table#P#p2019120523#SP#p2019120523sp1.ibd
98304	test_yd_table#P#p2019120523#SP#p2019120523sp2.ibd
8732	test_yd_table.frm

```

#### 创建完毕后，模拟数据插入，启动Springboot。

```
    @RequestMapping("testYDListSave")
    public String testYDListSave() {
        long start = System.currentTimeMillis();
        for (int i = 0; i < 10000; i++) {
            testYdListService.save();
            System.out.println(i);
        }
        long end = System.currentTimeMillis();
        return end - start + "ms\r\n";
    }
```

#### 调用脚本(request_api.sh)
```
#!/usr/bin/env bash

for (( VAR = 0; VAR < 20 ; ++VAR )); do
    curl http://localhost:8080/testYDListSave >> result.txt &
done

```
#### 调用结果
```
136332ms
136564ms
136623ms
136627ms
136653ms
136742ms
136788ms
136801ms
136801ms
136814ms
136889ms
136893ms
136941ms
136958ms
136966ms
137028ms
137048ms
137106ms
137156ms
137212ms

这里因为是并发插入的，所以插入20w数据在137秒 ， 两分多钟。
```

#### 然后是查询数据,我需要查询一个小时内的从北京发货的数据。
` EXPLAIN  SELECT * FROM test_yd_table WHERE create_time >= '2019-12-05 12:00:00' and create_time < '2019-12-05 13:00:00' AND send_province_code =  '110000'`


```
1	SIMPLE	test_yd_table	p2019120513_p2019120513sp2	index		PRIMARY	51		67994	1.11	Using where; Using index
```


![](/Users/amber/IdeaProjects/blog/redis/redis旧版复制功能/redis-旧版复制功能过程.png)

只使用了一个分区，节省了查询时间。
不过这种方式太过理想。
所以在执行Dao方法时 ，多存了一份 110000的数据

```
    public void save() {
        testYDListDao.save(CreateMailNo.getMailNo(), CreateProvince.getProvince(), CreateProvince.getProvince());
        testYDListDao.save110000(CreateMailNo.getMailNo(), CreateProvince.getProvince(), CreateProvince.getProvince());
    }
```

再执行一次脚本(request_api.sh)。


```

261260ms
261582ms
261609ms
261619ms
261996ms
262123ms
262247ms
262254ms
262332ms
262376ms
262416ms
262493ms
262553ms
262588ms
262594ms
262618ms
262620ms
262660ms
262661ms
262697ms

同样的 ，此次也是并发插入，时间差不多在4分多钟。
```

查看数据库底层文件，发现`test_yd_table#P#p2019120513#SP#p2019120513sp2.ibd`
比其他两个同时间分区的数据量多了一倍多。

```
26214400	test_yd_table#P#p2019120513#SP#p2019120513sp0.ibd
26214400	test_yd_table#P#p2019120513#SP#p2019120513sp1.ibd
58720256	test_yd_table#P#p2019120513#SP#p2019120513sp2.ibd
```

#### 比较几次常规查询
###### 1.不使用where
不使用where属于全表查询了，所以explain查找了全部的分区。

查看数据，发现code列的都是mod%3==0的数值，time列不是按顺序来展示，
所以是先返回了第一个分区(`test_yd_table#P#p2019120513#SP#p2019120513sp0.ibd`)的数据。

###### 2.使用where create_time

使用where+ create_time来查询，在explain里是查找了小时段的分区。


查看数据，发现code列的都是mod%3==0的数值，time列不是按顺序来展示，
所以是先返回了第一个分区(`test_yd_table#P#p2019120513#SP#p2019120513sp0.ibd`)的数据。


###### 3.使用where code

使用where+ code来查询，在explain里是查找了每个小时段sp2分区的数据，
`110000%3 = 2`
目前 只插入了 一个小时的数据。

查看数据,code都是110000 ，时间是顺序展示。

###### 4.使用where create_time code


使用where+ create_time code来查询，在explain里是查找了1个小时段sp2分区的数据，
只查了分区`test_yd_table#P#p2019120513#SP#p2019120513sp2.ibd`

查看数据,code都是110000 ，时间是顺序展示。
