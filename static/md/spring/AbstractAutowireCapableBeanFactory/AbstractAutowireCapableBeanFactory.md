## AbstractAutowireCapableBeanFactory抽象类


### 1.AbstractAutowireCapableBeanFactory结构
![](/Users/amber/IdeaProjects/blog/spring/AbstractAutowireCapableBeanFactory/AbstractAutowireCapableBeanFactory.png)

### 2.父接口
#### 2.1  AutowireCapableBeanFactory接口
>对BeanFactory接口的扩展，能够自动装配，为现有的bean实例公开功能。


###### AutowireCapableBeanFactory接口 常数
    //表示没有外部定义的自动装配的常数
    int AUTOWIRE_NO = 0;
    //通过name自动装配的常数
    int AUTOWIRE_BY_NAME = 1;
    //通过class自动装配的常数
    int AUTOWIRE_BY_TYPE = 2;
    //通过构造器自动注入的常数
    int AUTOWIRE_CONSTRUCTOR = 3;
    //被弃用
    int AUTOWIRE_AUTODETECT = 4;
    //实例后缀 
    String ORIGINAL_INSTANCE_SUFFIX = ".ORIGINAL";

###### AutowireCapableBeanFactory 接口方法


    //返回的bean实例可能是原始对象的包装器
    Object applyBeanPostProcessorsAfterInitialization(Object existingBean, String beanName)
    //将{@link BeanPostProcessor BeanPostProcessors}应用于给定的现有bean实例，调用其{@code postProcessBeforeInitialization}方法
    applyBeanPostProcessorsBeforeInitialization

    //beanName的属性值应用于给定的bean实例
    (Bean定义既可以定义完整的自包含Bean，重用其属性值，也可以仅定义要用于现有Bean实例的属性值。)
    void applyBeanPropertyValues(Object existingBean, String beanName)

    //通过依赖注入的方式，实例化一个bean
    Object autowire(Class<?> beanClass, int autowireMode, boolean dependencyCheck)

    //实例化后回调和处理bean属性来填充给定的bean实例
    autowireBean
    autowireBeanProperties
    configureBean
    createBean
    createBean
    destroyBean
    initializeBean
    resolveBeanByName
    resolveDependency
    resolveDependency
    resolveNamedBean

#### 2.2 AliasRegistry接口
>用于管理别名的通用接口。充当超级接口


#### 2.3 SingletonBeanRegistry接口
>单例bean注册接口，以便于以统一的方式公开单例的管理工具

### 3. AbstractAutowireCapableBeanFactory抽象类的方法

