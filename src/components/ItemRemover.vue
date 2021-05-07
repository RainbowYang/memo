<template>
  <el-popconfirm :title="$t('Ask For Delete')" @confirm="$emit('remove')">
    <template #reference>
      <el-button plain type="danger" size="mini" icon="el-icon-delete">{{ $t('Delete') }}</el-button>
    </template>
  </el-popconfirm>
</template>

<script>
export default {
  name: 'ItemRemover',
  emits: ['remove'],
}
</script>

<style scoped>

</style>
