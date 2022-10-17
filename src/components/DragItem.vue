<template>
  <div>
    <drop-list :items="items" class="list" @insert="onInsert" @reorder="onReorder">
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
    </drop-list>
  </div>
</template>
<script>
import { Drag, DropList } from "vue-easy-dnd";

export default {
  name: "DragItem",
  components: {
    Drag,
    DropList
  },
//   props: {
//     items: {
//         type: Array,
//         default: () => ['a', 'b', 'c']
//     }
//   },
  data() {
    return {
        items: ['a', 'b', 'c']
    };
  },
  methods: {
    onInsert(event) {
      console.log("event", event);
      this.items.splice(event.index, 0, event.data + new Date()); // 插入
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
