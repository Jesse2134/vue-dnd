<template>
  <div class="app-container">
    <el-row :gutter="20">
      <el-col :span="4" :offset="0">
        <el-card shadow="always" :body-style="{ padding: '10px' }">
          <div slot="header">
            <span>component</span>
          </div>
          <div class="list-left">
            <drag v-for="(n, index) in items1" mode="copy" :data="n" class="item" :key="index">{{n.name}}</drag>
          </div>
        </el-card>
      </el-col>
      <el-col :span="16" :offset="0">
        <el-card shadow="always">
          <div slot="header">
            <span>Content</span>
          </div>
          <!-- <drop-list :items="items" class="list" @insert="onInsert" @reorder="onReorder">
            <template v-slot:item="{item}">
              <drag class="item" :key="item">
                {{item}}
                <template v-slot:drag-image>
                  <div class="drag-image">ItemInner</div>
                </template>
              </drag>
            </template>
            <template v-slot:drag-image>
              <div class="drag-image">ItemOuter</div>
            </template>
            <template v-slot:feedback="{data}">
              <div class="feedback" :key="data" />
            </template>
            <template v-slot:reordering-feedback="{}">
              <div class="reordering-feedback" key="feedback" />
            </template>
          </drop-list> -->
          <el-row>
            <DragItem :items="items" :column="true" />
          </el-row>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import { Drag, DropList } from "vue-easy-dnd";
import DragItem from '@/components/DragItem.vue';
export default {
  name: "App",
  components: {
    Drag,
    DropList,
    DragItem
  },
  data() {
      return {
        items1 : [{
            name: 'row',
            type: 'row',
            span: 12,
            id: 1,
          },{
            name: '第二',
            span: 12,
            type: 'col',
            id: 2,
          },
          {
            name: '第三',
            span: 12,
            type: 'col',
            id: 3,
          }],
          items : [
          //   {
          //   name: '第一',
          //   id: 1,
          //   children: []
          // },{
          //   name: '第二',
          //   id: 2,
          // },
          // {
          //   name: '第三',
          //   id: 3,
          //   children: []
          // }
          ]
      }
  },
  methods: {
    // onInsert(event) {
    //   debugger
    //   console.log('event', event);
    //   this.items.splice(event.index, 0, {
    //     name: '第' + new Date().getTime(),
    //     id: this.items.length + 1
    //   }); // 插入
    // },
    // onReorder(event) {
    //   event.apply(this.items);
    // },
    // remove(item) {
    //   let index = this.items.indexOf(item);
    //   this.items.splice(index, 1);
    // }
  },
}
</script>

<style lang="scss">
.app-container {
    padding: 10px;
    width: 100%;
    .list-left {
      border: 1px solid black;
      // margin: 100px auto;
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