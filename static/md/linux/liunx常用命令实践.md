
隔离级别 | 脏读可能性 | 不可重复读可能性 | 幻读可能性 | 加锁读
:-: | :-: | :-: | :-: | :-: 
Read Uncommitted | yes | yes | yes | no| 
Read Committed|no|yes|yes|no|
Repeatable Read |no|no|yes|no
Serializable|no|no|no|yes