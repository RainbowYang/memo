<template>
  <div>
    <el-button @click="dialogVisible=true" type="success" size="mini" icon="el-icon-edit" plain>
      {{ $t('Edit') }}
    </el-button>
    <el-dialog :title="$t('Edit')" v-model="dialogVisible">
      <el-form ref="form" :model="item" label-width="80px">
        <el-form-item :label="$t('Title')">
          <el-input v-model="item.title"></el-input>
        </el-form-item>
        <el-form-item :label="$t('Author')">
          <el-input v-model="item.author"></el-input>
        </el-form-item>
        <el-form-item :label="$t('State')">
          <el-select v-model="item.state" placeholder="请选择">
            <el-option v-for="(stateLabel,index) in currentStates"
                       :label="$t(stateLabel)" :value="index+''" :key="stateLabel"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item :label="$t('Progress')">
          <el-slider v-model="item.progress"></el-slider>
        </el-form-item>
        <el-form-item :label="$t('Link')">
          <el-input v-model="item.URL"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="save()">{{ $t('Save') }}</el-button>
          <el-button @click="hide()">{{ $t('Cancel') }}</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>
<script>
export default {
  name: 'ItemEditor',
  props: ['originItem'],
  inject: ['currentStates', 'editItem'],
  emits: ['hide'],
  data () {
    return {
      item: { ...this.originItem },
      dialogVisible: false,
    }
  },
  watch: {
    item () {
      console.log(...arguments)
    },
  },
  methods: {
    save () {
      this.editItem(this.originItem, this.item)
      this.hide()
    },
    hide () {
      this.dialogVisible = false
    },
  },
}
</script>

<style scoped>

</style>
