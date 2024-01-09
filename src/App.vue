<template>
  <div class="app-box">
    <div class="resume-box">
      <div class="header-box">
        <h1>程昌虎</h1>
        <img class="resume-image" src="https://resourcemanager.netlify.app/api/storage/view?id=659c066195180e1767bf" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { default as projects } from './mds/projects.md';

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
  background-color: #fff;
  border-radius: 8px;
  box-sizing: border-box;
}

.header-box {
  display: flex;
  flex-flow: row nowrap;
  column-gap: 8px;

  .resume-image {
    margin-left: auto;
    width: 100px;
    height: 100px;
    border-radius: 4px;
    object-fit: contain;
  }
}

</style>
