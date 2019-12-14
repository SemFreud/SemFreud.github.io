# BaseStream

### BaseStream接口的方法



---
##### 类

> @Param T  : the type of the stream elements 流中的元素类型
>
> @Param S  : the type of of the stream implementing  流中的实现类型
>
>`BaseStream<T, S extends BaseStream<T, S>>`


##### 方法
> 通过流返回一个迭代器
>
>`Iterator<T> iterator();`

> 通过流返回一个分隔迭代 器
>
>`Spliterator<T> spliterator();`


> 返回这个流是否会被并发执行
>
>`boolean isParallel();`

> 返回一个顺序流
>
>`S sequential();`

> 返回一个并发流
>
>`S parallel();`

> 返回一个无序的流
>
>`S unordered();`


> 返回带有附加关闭处理程序的等效流
>
>`S onClose(Runable  closeHandler);`

> 关闭流 继承了AutoCloseable接口里的方法
>
>`void close();`


---

### BaseStream接口的子接口




```
流
Stream (java.util.stream)

数值流
IntStream (java.util.stream)
LongStream (java.util.stream)
DoubleStream (java.util.stream)

管道
AbstractPipeline (java.util.stream)
```


Stream和数值流的主要差异:
> 1.数值流内包含数值的常用计算方法(sum )
> 
> 2.数值流内部方法引用的函数接口是其确切的数值函数接口
>