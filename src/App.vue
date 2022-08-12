<template>
  <div>
    {{ value }}
    <el-all-select
      v-model="value"
      select-all
      select-label="全选列表"
      multiple
      collapse-tags
      clearable
      :options="options"
      placeholder="请选择列表"
      @change="onChange"
      @handleLink="onLink"
    >
      <!-- <template #tpl="{row}">
        {{row.label}}
      </template> -->
    </el-all-select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: [],
      options: [
        { label: '全部日程', value: 1 },
        { label: '个人日程', value: 2, name: '设置' },
        { label: '代办日程', value: 3 },
        { label: '订阅日程', value: 4, name: '设置' },
        { label: '部门日程', value: 5 },
        { label: '公文日程', value: 6, name: '设置' },
        { label: '会议日程', value: 7 }
      ]
    }
  },
  methods: {
    onChange(val) {
      let res
      console.log(val)
    },
    onLink(val) {
      console.log(val)
    }
  }
}
</script>

<style>
#el-select-all {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: inline-block;
}
</style>
