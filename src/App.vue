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
            <div>
              2014.09-2018.06 华北电力大学 计算机科学与技术（学士学位）
            </div>
            <div>
              2014.09-2018.06 东南大学 计算机技术（硕士学位）
            </div>
          </div>
        </template>
      </CollapsibleBox>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { CollapsibleBox } from '@/components/index';
import { default as projects } from '@/mds/projects.md';

console.log(projects);
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
</style>
