### 函数式接口@FunctionalInterface 

---

##### 作用:
>该接口标记了引用的接口是一个
>函数式接口(**SAM:Single Abstract Interface**)
>
>即接口内只能有一个抽象方法、可以有一个默认方法、多个静态方法
>
>方法可以使用lambda表达式来传入方法进行调用。


##### 示例:

```
@FunctionalInterface
public interface TestFunctionalInterface {


    int accept(int t);

    default int defaultAccept(int t) {
        return t + 1;
    }

    static void staticMethod1() {
        System.out.println("test============");
    }

    static void staticMethod2() {
        System.out.println("test1===========");
    }
}
```

```
class Test {
    public static void main(String[] args) {
        int result = getResult(10, a -> a + 2);
        System.out.println(result);
        result = getDefaultResult(10, a -> a);
        System.out.println(result);
        TestFunctionalInterface.test();
    }


    private static int getResult(int i, TestFunctionalInterface functionalInterface) {
        return functionalInterface.accept(i);
    }

    private static int getDefaultResult(int i, TestFunctionalInterface functionalInterface) {
        return functionalInterface.defaultAccept(i);
    }
}
```

##### 总结:
@FunctionalInterface接口充当标记作用，显式的声明了一个接口只允许一个抽象方法




#### Consumer接口
(java.util.function.Consumer)
> 定义了一个accept方法，1个入参无出参。
>
> 引申的Consumer接口也是没有出参的。


|接口|入参类型|
|===|======|
|Consumer<T\>|T|
|IntConsumer|int|
|LongConsumer|long|
|DoubleConsumer|double|
|ObjDoubleConsumer<T\>|T,double|
|ObjIntConsumer<T\>|T,int|
|ObjLongConsumer<T\>|T,long|
|BiConsumer<T,U>|T,U|

##### Consumer的使用
Consumer意味着消费，java这里定义的方法是没有返回值的，只有一个入参。
所以在实际使用的过程中，consumer接口可以用来提交一个无需结果的一个方法。

1. 首先定义一个方法，无返回值，一个对象参数，一个Consumer接口参数。
```
    private static void testConsumer(int a , Consumer<Integer> action){
        action.accept(a);
    }
```
2. 在main方法里调用这个方法，传一个int参数，即lambda表达式作为入参 。
```
    public static void main(String[] args) {
        testConsumer(30 , p->{
            System.out.println(p);
        });
    }
```
其中 p->{}，这一块代码为Consumer接口的里accept方法的具体实现，这里将方法作为参数传入到
testConsumer(int a , Consumer<Integer> action)方法内。
当然，传入的方法只是做了一个简单的打印。



#### Function接口
(java.util.function.Function)
> 定义了一个apply方法，1个入参1个出参。
>
> 引申的Function接口也是有出参的。


|接口|入参类型|出参类型|
|===|=======|=======|
|Function<T,R>|T|R|
|DoubleFunction<R\>|double|R|
|IntFunction<R\>|int|R|
|LongFunction<R\>|long|R|
|ToDoubleFunction<T\>|T|double|
|ToIntFunction<T\>|T|int|
|ToLongFunction<T\>|T|long|
|DoubleToIntFunction|double|int|
|DoubleToLongFunction|double|long|
|IntToDoubleFunction|int|double|
|IntToLongFunction|int|long|
|LongToDoubleFunction|long|double|
|LongToIntFunction|long|int|
|BiFunction<T,U,R>|T,U|R|
|ToDoubleBiFunction<T,U>|T,U|double|
|ToIntBiFunction<T,U>|T,U|int|
|ToLongBiFunction<T,U>|T,U|long|



#### Predicate接口
(java.util.function.Predicate)
> 定义了一个test方法，1个入参,一个boolean出参
>
> 引申的Predicate接口也是boolean出参


|接口|入参类型|出参类型|
|===|=======|======|
|Predicate<T\>|T|boolean|
|DoublePredicate|double|boolean|
|IntPredicate|int|boolean|
|LongPredicate|long|boolean|
|BiPredicate<T,U>|T,U|boolean|



#### Supplier接口
(java.util.function.Supplier)
> 定义了一个get方法，无入参1个出参。
>
> 引申的Supplier接口也是有出参的。

|接口 |出参类型 |
|====|========|
|Supplier<T\>|T|
|BooleanSupplier|boolean|
|DoubleSupplier|double|
|IntSupplier|int|
|LongSupplier|long|
                                        |