- **2016年**，随行校园安卓端地图应用（Android，软著）
- **2017年**，视频弹幕播放网站原型系统（JS、JavaEE、MySQL）
- **2018年**
  - 音乐推荐网站原型系统（JS、Django、MySQL）
  - 羊肉溯源系统安卓端应用（Android）
  - 公益义卖网站（JS、NodeJS，获“江苏省研究生公益创业科研创新实践大赛”二等奖）
- **2019年**，东大智库网站（Webplus可视化网站建设）
- **2020年**
  - [ALLX学习笔记（原生JS）](https://chengchanghu.github.io/studynote/#linkContainer)
  - [黄橙笔记（vuepress）](https://chengchanghu.github.io/allx-javascript/)
- **2021年**
  - **虾皮开发者开放平台**
|平台|截图|功能|
|:--|:-:|:--|
|(=3)[Open Platform](https://open.shopee.com/)|![Open Platform](https://resourcemanager.netlify.app/api/storage/view?id=65b5ef675cef8ce0598d)|为开发者提供虾皮对外接口的文档和测试工具，便于卖家维护自己的ERP系统或第三方服务平台（店小秘等）集成虾皮平台|
|![API Reference](https://resourcemanager.netlify.app/api/storage/view?id=65b616eee28bde6ed578)|虾皮对外接口文档|
|![API Test](https://resourcemanager.netlify.app/api/storage/view?id=65b61bcf79f12d361ce1)|虾皮对外接口测试工具|
|[Admin](https://open.admin.shopee.io/)|![API list](https://resourcemanager.netlify.app/api/storage/view?id=65b640a6aa17b83fbcc8)![API detail](https://resourcemanager.netlify.app/api/storage/view?id=65b618bc9690e5a985e8)|虾皮内部人员管理开发者账号、虾皮对外接口文档、测试APP以及API授权|
    - 2021年-2023年陆续参与内容分发模块、APP模块、开发者模块、授权管理模块、API文档管理模块、权限控制模块等工作
- **2022年**
  - **卖家增值服务**
|平台|截图|功能|
|:--|:-:|:--|
|SVS in Shopee App|-|卖家在APP上购买、查看增值服务的订单|
|[Seller Value-add Service](https://seller.staging.shopee.sg/admin/payment/value-added/item/coins/list)|![SVS voucher list](https://resourcemanager.netlify.app/api/storage/view?id=65b64fb6f1986a6394ba)![SVS voucher detail](https://resourcemanager.netlify.app/api/storage/view?id=65b653ebce1fb5346f88)![SVS item approve](https://resourcemanager.netlify.app/api/storage/view?id=65b65650d2a41219bb8b)|虾皮内部人员配置虾皮币、虾皮广告、折扣券等卖家增值服务和发票管理，并审核卖家增值服务的创建与修改|
    - 2022年陆续参与折扣券模块、审核模块、大陆地区发票模块、移动端RN状态库迁移（`redux-saga`迁移到`@reduxjs/toolkit`）等工作
      > `redux-saga`使用生成器函数实现异步，原代码在管理状态的同时进行业务逻辑处理，导致难以维护
      > `@reduxjs/toolkit`支持将状态分离为单独的slice（原子化），可以减少状态与业务之间的耦合
  - 图片/PDF查看器组件：Vue组件，实现了放大、缩小、PDF滚动换页的功能
  - 页面编辑状态锁：TS，单例模式，使用`promise`拦截`vue-router`和浏览器的跳转
  - 前端接口类型及代码生成器：NodeJS，使用puppeteer代理浏览器获取yapi的接口响应，生成api的请求、响应参数ts接口定义与接口请求代码
- **2023年**
  - **卖家入驻服务**
|平台|截图|功能|
|:--|:-:|:--|
|(=3)[CN Cross-Origin Seller Onboarding](https://shopee.cn/)|![CN BD](https://resourcemanager.netlify.app/api/storage/view?id=65b6634039635b8dbcbe)|大陆地区招商与跨境卖家入驻|
|![CN onboarding intro](https://resourcemanager.netlify.app/api/storage/view?id=65b664655de377ed8e6d)|移动端入驻介绍|
|![CN onboarding form](https://resourcemanager.netlify.app/api/storage/view?id=65b66540b5eb33bc73fe)|移动端入驻表单|
|Local Seller Center Onboarding|-|当地卖家入驻|
|Local Shopee APP Onboarding|-|当地卖家入驻|
      - 2023年陆续参与低代码平台、当地卖家入驻（TH）、当地卖家KYC（SG、MY）、CN跨境卖家入驻适配移动端等工作
        > 低代码平台用于解决各地区字段输入组件相似，但语言、含义不同以及输入字段经常变动，进而导致开发缓慢的问题。低代码平台目前仍在完善中，但渲染引擎已在生产环境中使用，各地区、业务分别维护一份JSON配置
        > 卖家入驻是指卖家提交资料经审核后成为Shopee卖家的过程
  - **移动端组件库**：Vue，实现页面框架组件（IntersectObserver）、抽屉组件（异步Animate动画、可扩展）、垂直滚轮组件（scroll-snap）、日期组件（IntersectObserver）、地址组件（CSS动画）、单/多选组件、列表组件（上滑加载、IntersectObserver、MutationObserver）、验证码组件（代理隐藏输入框）、步骤条组件（CSS变量、`:has`、`:where`、`:not`）、滑块组件（scroll-snap、IntersectObserver负margin、setTimeout、padding隐藏滚动条）
    > 适配移动端注意事项：JS兼容性（`scrollend`、`Blob`）、CSS兼容性（`100vh`、`gap`）
  - 低代码平台：Vue2，实现嵌套CSS和Style节点、布局组件（flex、grid）、修复domProps问题、应用
  - [**Resource Manager**](https://resourcemanager.netlify.app/)：React、Netlify、Appwrite，使用需要登录，实现了登录注册模块、MD文档模块（`@golden-tiger/markdown`）、文件存储模块（大文件分块分批上传）、思维导图模块，使用webpack分chunk优化性能
  - [**Best Tools**](https://best-tools.netlify.app/)：React、Netlify、iframe多模块，使用无需登录，实现了二维码生成功能、JS代码运行功能
- **2024年**
  - [**Resume (gitee)**](https://tigercheng.gitee.io/resume/), [Resume (github)](https://chengchanghu.github.io/resume/)：Vue3，个人简历项目，使用自定义的`CleanWebpackPlugin`、`@golden-tiger/markdown`
- 开源包
|时间|包名|功能|
|:-:|:--|:--|
|(=4)2022|[@golden-tiger/difference](https://www.npmjs.com/package/@golden-tiger/difference)|JS npm包，使用广度优先递归遍历两个比较的值（或对象），可通过参数控制数组值的比较顺序、修改比较策略，输出差异项（键的数组、前值、后值），使用尾递归进行优化|
|[@golden-tiger/regexp-gene](https://www.npmjs.com/package/@golden-tiger/regexp-gene)|TS npm包，从传入的正则表达式参数逆向生成满足该正则表达式的随机字符串|
|[@golden-tiger/markdown](https://www.npmjs.com/package/@golden-tiger/markdown)|TS npm包，使用正则将markdown文本解析成html文本，支持了基本的md语法（标题、段落、列表、代码块、行内代码、超链接、图片、引用、表格等），并实现了跨行跨列的表格语法（`(-m)`跨m列，`(=n)`跨n行）|
|[@golden-tiger/dom](https://www.npmjs.com/package/@golden-tiger/dom)|TS npm包，递归创建HTML元素（`createElement`、`createElementNS`）或生成HTML文本，支持传入元素的标签、文本、HTML文本、子元素、属性、事件|
|(=7)2023|[@golden-tiger/serializer](https://www.npmjs.com/package/@golden-tiger/serializer)|JS npm包，实现JS对象的序列化和反序列化，支持大整型和浮点数，序列化时可以生成HTML文本，反序列化时使用正则匹配对应的文本|
|[@golden-tiger/clone](https://www.npmjs.com/package/@golden-tiger/clone)|TS npm包，使用尾递归实现深拷贝，支持Undefined、Null、NaN、String、Number、BigInt、Boolean、Map、Set、Date、RegExp|
|[@golden-tiger/tree](https://www.npmjs.com/package/@golden-tiger/tree)|TS npm包，支持从数组生成树型结构数据（`key`、`parentKey`、`childrenKey`），支持对树型结构数据的顺序遍历（先序、逆先序、后序、逆后序、终止遍历），并操作当前节点、遍历状态和父节点|
|[@golden-tiger/fstree](https://www.npmjs.com/package/@golden-tiger/fstree)|NodeJS npm包，支持以树型结构输出文件下的所有文件的文件名、文件类型（文件夹、文件、软链接）、文件大小（`B`、`KB`、`MB`、`GB`等）信息，并可以排除传入的路径|
|[@golden-tiger/watchable](https://www.npmjs.com/package/@golden-tiger/watchable)|TS npm包，使用Proxy、Reflect、Symbol实现数据响应式，能够设置或取消对象数据（对象、数组）变动时的响应函数|
|[@golden-tiger/outer-box](https://www.npmjs.com/package/@golden-tiger/outer-box)|TS npm包，基于单例模式设计使用`clip-path`和`polygon`实现DOM元素的外框，不影响DOM结构，不修改DOM元素，并能够设置外框的宽度、样式、颜色|
|[@golden-tiger/vue-renderer](https://www.npmjs.com/package/@golden-tiger/vue-renderer)|Vue3 TS npm包，实现了渲染JSON格式Schema的Vue3渲染器，支持对`slot`的递归渲染和渲染组件的注册|
|(=3)2024|[@golden-tiger/pipeline](https://www.npmjs.com/package/@golden-tiger/pipeline)|TS npm包，使用Promise实现的任务管道，可以在每个管道处理函数里取得上次处理结果，并决定是否终止|
|[@golden-tiger/js-runner](https://www.npmjs.com/package/@golden-tiger/js-runner)|TS npm包，前端JS运行沙箱，可以设置被执行JS文本的词法变量和执行上下文，并输出执行结果和执行时间|
|[@golden-tiger/group-request](https://www.npmjs.com/package/@golden-tiger/group-request)|TS npm包，能够批量并行多个异步操作，并且能够设置在一步操作失败后的重试次数和重试间隔时间|
