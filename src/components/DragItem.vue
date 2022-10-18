<template>
  <drop-list tag="el-row" :items="items" class="list" :column="true" @insert="onInsert" @reorder="onReorder">
    <template v-slot:item="{item}">
      <drag tag="el-col" :data="item" :span="item.span" class="item" :key="key(item)">
        <span class="col-item" v-if="item.children === undefined" :key="key(item)">{{item.name}}</span>
        <el-col v-else :offset="0">
          <drag-item class="child-list" :items="item.children" :column="true"></drag-item>
        </el-col>
        <template v-slot:drag-image>
          <div class="drag-image">DRAG</div>
        </template>
      </drag>
    </template>
    <!-- <template v-slot:drag-image>
      <div class="drag-image">DRAG</div>
    </template> -->
    <template v-slot:feedback="{data}">
      <div class="feedback" :key="key(data)" />
    </template>
    <template v-slot:reordering-feedback="{item}">
      <div class="reordering-feedback" key="feedback" />
    </template>
  </drop-list>
</template>
<script>
import { Drag, DropList } from "vue-easy-dnd";

export default {
  name: "DragItem",
  components: {
    Drag,
    DropList
  },
  props: {
    items: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
    };
  },
  methods: {
    key(item) {
      if (typeof item === "object") {
        return item.key || new Date().getTime();
      } else {
        return item;
      }
    },
    onInsert(event) {
      let data = null
      if (event.data.key) {
        data = event.data
      } else {
        data = JSON.parse(JSON.stringify(event.data))
        data['key'] = new Date().getTime()
        if (data.type === 'row') {
          data['children'] = data['children'] || []
        }
      }
      this.items.splice(event.index, 0, data); // 插入
    },
    onReorder(event) {
      event.apply(this.items);
    },
    remove(item) {
      let index = this.items.indexOf(item);
      this.items.splice(index, 1);
    },
  },
};
</script>
<style lang="scss">
.list {
    border: 1px dotted black;
    padding: 10px;
    // background-color: #fff;
    // margin: 100px auto;
    // width: 200px;
    min-height: 80px;
    .item {
      padding: 5px;
      display: -webkit-box;
      // margin: 5px;
      // border: 1px solid black;
      // background-color: rgb(215, 215, 215);
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .col-item {
      border: 1px solid;
      width: 100%;
      text-align: center;
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

  // .reordering-feedback,
  // .feedback {
  //   flex: 0 0 0;
  //   outline: 1px solid orangered;
  //   align-self: stretch;
  // }

  .drag-source {
    outline: 2px dashed black;
  }
}
</style>
