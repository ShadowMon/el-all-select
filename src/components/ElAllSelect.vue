<template>
  <div class="app-container">
    <el-select v-model="selected" v-bind="{ ...$attrs }" v-on="{ ...$listeners }" @change="handleSelect"
      :class="['selected', { 'iscolor': color }]" :popper-append-to-body="false">
      <div class="selected-all" v-if="selectAll">
        <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">{{ selectLabel
        }}</el-checkbox>
      </div>
      <el-checkbox-group v-model="selected">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
          <el-checkbox class="bindCheckbox" :label="item.value">
            <slot name="tpl" :row="item">
              <div class="label-tags">
                <span>{{ item.label }}</span>
                <span class="label-set" v-if="item.name" @click.stop="$emit('handleLink', item)">{{ item.name }}</span>
              </div>
            </slot>
          </el-checkbox>
        </el-option>
      </el-checkbox-group>
    </el-select>
  </div>
</template>

<script>
export default {
  name: 'ElAllSelect',
  props: {
    value: {
      type: Array,
      default: () => {
        return []
      }
    },
    selectAll: {
      type: Boolean,
      default: () => true
    },
    color: {
      type: Boolean,
      default: () => true
    },
    selectLabel: {
      type: String,
      default: () => '全选'
    },
    options: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data () {
    const selected = this.value || []
    return {
      selected,
      checkAll: false,
      isIndeterminate: false
    }
  },
  methods: {
    handleSelect (value) {
      const checkedCount = value.length
      this.checkAll = checkedCount === this.options.length
      this.isIndeterminate = checkedCount > 0 && checkedCount < this.options.length
    },
    handleCheckAllChange (val) {
      const data = this.options.map(item => item.value)
      this.selected = val ? data : []
      this.isIndeterminate = false
      this.$emit('input', this.selected)
    }
  }
}
</script>

<style lang="scss" scoped>
.selected ::v-deep .el-select-dropdown.is-multiple .el-select-dropdown__item.selected::after {
  display: none;
}

.selected ::v-deep .el-checkbox .el-checkbox__label {
  width: inherit;
}

.selected-all {
  padding: 0 20px;
  line-height: 34px
}

.bindCheckbox {
  pointer-events: none;
  width: 100%;
}

.label-tags {
  width: inherit;
  display: flex;
  justify-content: space-between;

  .label-set {
    color: #8492a6;
    font-size: 13px;
    pointer-events: auto;
  }
}

$colors: #0A70F5, #00B365, #FFC300, #F5483B, #F03096,
  #8E3DEB, #00B8B1, #FF8800, #0FA4FA, #FF5E1A;

.iscolor ::v-deep .el-checkbox-group li {
  @each $c in $colors {
    $i: index($colors, $c);

    &:nth-child(#{$i}) {

      .el-checkbox__input.is-checked .el-checkbox__inner,
      .el-checkbox__input.is-indeterminate .el-checkbox__inner {
        background-color: $c;
        border-color: $c;
      }
    }
  }
}
</style>
