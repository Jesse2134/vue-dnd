<template>
  <div class="app-container">
    <el-row :gutter="20">
      <el-col :span="4" :offset="0">
        <el-card shadow="always" :body-style="{ padding: '10px' }">
          <div slot="header">
            <span>component</span>
          </div>
          <div class="list">
            <drag v-for="n in [1,2,3,4,5]" mode="cut" :data="n" class="item" :key="n">{{n}}</drag>
          </div>
        </el-card>
      </el-col>
      <el-col :span="16" :offset="0">
        <el-card shadow="always" :body-style="{ padding: '20px' }">
          <div slot="header">
            <span>Content</span>
          </div>
          <drop-list :items="items" class="list" @insert="onInsert" @reorder="$event.apply(items)">
            <template v-slot:item="{item}">
              <drag class="item" :key="item">
                {{item}}
                <template v-slot:drag-image="{item}">
                  <div class="drag-image">DRAG2</div>
                </template>
              </drag>
            </template>
            <template v-slot:drag-image="{item}">
              <div class="drag-image">DRAG1</div>
            </template>
            <template v-slot:feedback="{data}">
              <div class="feedback" :key="data" />
            </template>
            <template v-slot:reordering-feedback="{item}">
              <div class="reordering-feedback" key="feedback" />
            </template>
          </drop-list>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import { Drag, DropList } from "vue-easy-dnd";
export default {
  name: "App",
  components: {
    Drag,
    DropList,
  },
  data() {
      return {
          key : 0,
          items : ['a', 'b', 'c']
      }
  },
  methods: {
    onInsert(event) {
      console.log('event', event);
      this.items.splice(event.index, 0, event.data + new Date()); // 插入
    },
    onReorder(event) {
      event.apply(this.items);
    },
    remove(item) {
      let index = this.items.indexOf(item);
      this.items.splice(index, 1);
    }
  },
  mounted() {
  }
}
</script>

<style lang="scss">
.app-container {
    padding: 10px;
    width: 100%;
    .list {
      border: 1px solid black;
      margin: 100px auto;
      // width: 200px;
      .item {
        padding: 20px;
        margin: 10px;
        background-color: rgb(220, 220, 255);
        display: flex;
        align-items: center;
        justify-content: center;
      }
      
    .drag-image {
      background-color: orangered;
      width: 75px;
      height: 75px;
      transform: translate(-50%, -50%);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .reordering-feedback,
    .feedback {
      flex: 0 0 0;
      outline: 1px solid orangered;
      align-self: stretch;
    }

    .drag-source {
      outline: 2px dashed black;
    }
 }
}
</style>