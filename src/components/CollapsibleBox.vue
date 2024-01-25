<template>
  <div
    class="collapsible-box"
    :style="{
      'grid-template-rows': `32px ${ collapsed ? 0 : 1 }fr`,
    }"
  >
    <div class="collapsible-header">
      <div
        v-html="arrowDownSvg"
        :class="['arrow-icon', {
          'arrow-icon-collapsed': collapsed,
        }]"
        @click="handleCollapse"
      />
      <h2>{{ props.title }}</h2>
    </div>
    <div class="collapsible-content">
      <slot name="content">content</slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import arrowDownSvg from '@/assets/svg/arrow-down.svg';

const props = withDefaults(defineProps<{
  title: string
}>(), {
  title: 'title'
});

const collapsed = ref<boolean>(false);

const handleCollapse = () => {
  collapsed.value = !collapsed.value;
  console.log(collapsed.value);
};
</script>

<style lang="scss" scoped>
.collapsible-box {
  display: grid;
  transition: all .3s ease-in-out;
}

.collapsible-header {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  column-gap: 8px;

  .arrow-icon {
    width: 20px;
    height: 20px;
    transition: all .3s ease-in-out;
    cursor: pointer;
  }

  .arrow-icon-collapsed {
    transform: rotateX(180deg);
  }

  h2 {
    font-size: 20px;
  }
}

.collapsible-content {
  min-height: 0;
  overflow: hidden;
  transition: all .3s ease-in-out;
}
</style>
