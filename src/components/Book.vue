<template>
  <el-card>
    <div>
      <el-tag>作者</el-tag>
      <el-tag type="info">{{book.author ? book.author : 'Unknown'}}</el-tag>
    </div>
    <div>
      <el-tag>进度</el-tag>
      <el-progress style="width:350px; display:inline-block"
                   :percentage="book.progress?book.progress:book.status==='Read'? 100 : 0"/>
    </div>
    <div>
      <el-tag>链接</el-tag>
      <el-link :href="book.URL" type="primary">{{book.URL?book.URL:"Unknown"}}</el-link>
    </div>
    <div>
      <el-tag>操作</el-tag>
      <el-button @click="edit()" type="primary" size="mini" icon="el-icon-edit" circle/>
      <el-button @click="remove()" type="danger" size="mini" icon="el-icon-delete" circle/>
    </div>
  </el-card>
</template>

<script>
    export default {
        name: "Book",
        props: {
            book: Object
        },
        methods: {
            edit() {
                window.console.log(this.book.title)
            },
            remove() {
                this.$delete(this.GLOBAL.book_info, this.book.title)
            },
        },
    }
</script>

<style scoped>
  span {
    margin-right: 10px;
  }
</style>
