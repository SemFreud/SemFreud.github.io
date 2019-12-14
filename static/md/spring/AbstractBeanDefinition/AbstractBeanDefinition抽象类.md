### AbstractBeanDefinition抽象类


#### 1.AbstractBeanDefinition结构
![](/Users/amber/IdeaProjects/blog/spring/AbstractBeanDefinition/AbstractBeanDefinition.png)
###### AttributeAccessor接口
	
	//获取所有属性名
	attributeNames(): String[]
	//获取单个属性
	getAttribute(String): Object
	//判断是否有某个属性
	hasAttribute(String): boolean
	//移除某个属性
	removeAttribute(String): Object
	//给属性赋值
	setAttribute(String,Object): void



###### BeanMetadataElement接口

	//返回此元数据元素的配置源
	getSource(): Object


#### 2.AbstractBeanDefinition抽象类 常量

	//作用域，在Spring容器中为单例
	SCOPE_SINGLETON
	//作用域，每次获得bean都生成一个新的
	SCOPE_PROTOTYPE
	//bean角色，应用程序
	ROLE_APPLICATION
	//bean角色，提供者
	ROLE_SUPPORT
	//bean角色，基础
	ROLE_INFRASTRUCTURE




#### 3.AbstractBeanDefinition抽象类 配置方法



	//bean的父类名bean
	parentName: String
	//指定bean名
	beanClassName: String
	//作用域
	scope: String
	//延迟初始化
	lazyInit: boolean
	//此bean依赖的bean名
	dependsOn: String...
	dependsOn: String[]
	//是否自动连接到其他bean,会影响基于类型的自动装配。
	autowireCandidate: boolean
	//设置此bean是否为主要的自动装配候选对象
	primary: boolean
	//指定要使用的工厂bean
	factoryBeanName: String
	//指定工厂方法，实现构造方法
	factoryMethodName: String
	//这个bean的构造方法参数值
	constructorArgumentValues: ConstructorArgumentValues
	//是否为此bean定义了构造函数参数值
	propertyValues: MutablePropertyValues
	//初始化方法名
	initMethodName: String
	//销毁的方法名
	destroyMethodName: String
	//角色
	role: int
	//bean定义的可读描述
	description: String
	//此bean定义的可解析类型
	resolvableType: ResolvableType
	//返回是否单例
	singleton: boolean
	//是否原始
	prototype: boolean
	//是否抽象
	abstract: boolean
	//资源描述
	resourceDescription: String
	//返回原始BeanDefinition
	originatingBeanDefinition: BeanDefinition
	//BeanMetadataElement接口的配置源
	source: Object



#### 4.AbstractBeanDefinition抽象类 实现方法

	//覆盖bean定义
	void overrideFrom(BeanDefinition)
	//使用默认值
	void applyDefaults(BeanDefinitionDefaults
	//返回此定义是否指定bean类
	boolean hasBeanClass()
	//返回包装好的bean的类
	Class<?> resolveBeanClass(@Nullable ClassLoader classLoader) 
	//限定词
	void addQualifier(AutowireCandidateQualifier qualifier)
	//返回此bean是否具有指定的限定符
	boolean hasQualifier(String typeName)
	//返回此bean指定的限定符
	AutowireCandidateQualifier getQualifier(String typeName)
	//将提供的AbstractBeanDefinition的限定符复制到此bean定义
	void copyQualifiersFrom(AbstractBeanDefinition source)
	//返回是否为此bean定义了构造函数参数值
	boolean hasConstructorArgumentValues()
	//返回是否为此bean定义了属性值
	boolean hasPropertyValues()
	//返回重写的方法
	boolean hasMethodOverrides()
	//验证这个bean
	void validate()
	//验证并准备为此bean定义的方法替代
	void prepareMethodOverrides()
	//克隆一个bean
	AbstractBeanDefinition cloneBeanDefinition()


