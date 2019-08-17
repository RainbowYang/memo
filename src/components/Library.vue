<template>
  <div>
    <el-card>
      <el-button type="primary" icon="el-icon-plus" size="small" circle/>
      <el-button type="success" icon="el-icon-check" size="small" circle/>
    </el-card>
    <el-tabs v-model="this.GLOBAL.active_name" type="border-card">
      <el-tab-pane v-for="(trans, status) in status_trans" :label="trans" :name="status" :key="status">
        <Bookcase :status="status"/>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
    import Bookcase from "@/components/Bookcase"

    export default {
        name: "Library",
        data() {
            return {
                status_trans: this.GLOBAL.status_trans
            }
        },
        components: {
            Bookcase
        }
    }
</script>

<style scoped>

</style>