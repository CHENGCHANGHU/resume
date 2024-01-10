<template>
  <div class="app-box">
    <div class="resume-box">
      <div class="header-box">
        <img class="resume-image" src="https://resourcemanager.netlify.app/api/storage/view?id=659c066195180e1767bf" />
        <div>
          <h1>程昌虎</h1>
          <div>前端开发工程师</div>
        </div>
      </div>
      <dl class="detail-box">
        <dt>籍贯</dt>
        <dd>安徽桐城</dd>
        <dt>出生年月</dt>
        <dd>1997年1月</dd>
        <dt>联系方式</dt>
        <dd>13912970637</dd>
        <dt>邮箱</dt>
        <dd>1669675499@qq.com</dd>
        <dt>毕业院校</dt>
        <dd>东南大学</dd>
        <dt>学历</dt>
        <dd>硕士研究生</dd>
        <dt>英语水平</dt>
        <dd>六级</dd>
        <dt>政治面貌</dt>
        <dd>中共党员</dd>
      </dl>
      <CollapsibleBox title="教育背景">
        <template #content>
          <div class="education-container">
            <span>2014.09-2018.06</span>
            <span>华北电力大学</span>
            <span>计算机科学与技术（学士学位）</span>
            <span>主修课程：算法设计与分析、模式识别、软件项目管理与实践、人工智能、机器学习、数据挖掘与数据隐私。研究方向：自然语言处理</span>
            <span>2018.09-2021.06</span>
            <span>东南大学</span>
            <span>计算机技术（硕士学位）</span>
            <span>主修课程：C++高级语言程序设计、JAVA面向对象程序语言设计、数据库原理、J2EE开发平台及程序设计、算法与数据结构、计算机组成原理、计算机系统结构、计算机网络、操作系统</span>
          </div>
        </template>
      </CollapsibleBox>
      <CollapsibleBox title="工作经历">
        <template #content>
          <div class="work-container">
            <span>2020.07</span>
            <span>北京美团</span>
            <span>前端技术中心（前端实习）</span>
            <span>就职于架构产品开发组，参与故障演练平台和服务治理平台的建设，主要使用Vue2进行开发</span>
            <span>2021.07-至今</span>
            <span>深圳虾皮信息科技有限公司</span>
            <span>卖家部门（前端开发）</span>
            <span>先后就职于Seller Open Platform、Seller Onboarding团队，参与开放平台、卖家增值服务、卖家入驻服务、卖家入驻低代码平台的建设，主要使用Vue2、Vue3、React Native进行开发</span>
          </div>
        </template>
      </CollapsibleBox>
      <CollapsibleBox title="项目经历">
        <template #content>
          <div class="project-container" v-html="projectsHTML"></div>
        </template>
      </CollapsibleBox>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { transform } from '@golden-tiger/markdown';
import { createHTMLString } from '@golden-tiger/dom';
import { CollapsibleBox } from '@/components/index';
import { default as projects } from '@/mds/projects.md';

console.log(projects);

const projectsHTML = createHTMLString(transform(projects, { output: 'options' }), {
  indentationToken: '',
  beautify: false,
});
</script>

<style lang="scss" scoped>
.app-box {
  width: 100%;
  height: 100%;
  padding: 16px;
  display: flex;
  flex-flow: row nowrap;
  align-items: stretch;
  justify-content: center;
  background-color: #eee;
  box-sizing: border-box;
}

.resume-box {
  width: 864px;
  height: max-content;
  padding: 8px;
  display: flex;
  flex-flow: column nowrap;
  row-gap: 16px;
  background-color: #fff;
  border-radius: 8px;
  box-sizing: border-box;
}

.header-box {
  display: flex;
  flex-flow: row nowrap;
  column-gap: 16px;

  .resume-image {
    width: 100px;
    height: 100px;
    border-radius: 4px;
    object-fit: contain;
  }
}

.detail-box {
  display: grid;
  gap: 8px;
  grid-template: auto/120px 1fr 120px 1fr;
}

.detail-box > :nth-child(2n+1) {
  font-weight: bolder;
}

.education-container, .work-container {
  padding-top: 8px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas:
    "a b c"
    "d d d"
    "e f g"
    "h h h";
  row-gap: 4px;
  
  > span:nth-child(1) { grid-area: a; }
  > span:nth-child(2) { grid-area: b; }
  > span:nth-child(3) { grid-area: c; }
  > span:nth-child(4) { grid-area: d; }
  > span:nth-child(5) { grid-area: e; }
  > span:nth-child(6) { grid-area: f; }
  > span:nth-child(7) { grid-area: g; }
  > span:nth-child(8) { grid-area: h; }

  > span:nth-child(2), > span:nth-child(6) {
    justify-self: center;
  }

  > span:nth-child(3), > span:nth-child(7) {
    justify-self: end;
  }

  > span:nth-child(4), > span:nth-child(8) {
    color: #999;
    font-size: 14px;
  }

  > span:nth-child(4) {
    margin-bottom: 8px;
  }
}

.project-container {
  padding-left: 8px;
  box-sizing: border-box;
}

@media screen and (max-width: 864px) {
  .resume-box {
    width: 100%;

    .detail-box {
      grid-template: auto/120px 1fr;
    }
  }
}
</style>
