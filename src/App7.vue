<template>
  <v-app>
    <v-main>
      <v-container fluid class="wrapper" style="margin-top: 0px; display: flex">
        <generic :model="data" class="root"></generic>
        <generic :model="data1" class="root"></generic>
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import Drag from "../lib/src/components/Drag.vue";
import DropList from "../lib/src/components/DropList.vue";
import "../lib/src/ts/DragImagesManager.ts";
import Drop from "../lib/src/components/Drop.vue";

@Component({
    name: 'App7',
    components: {Drop, Drag, DropList}
})
export default class App7 extends Vue {

    key = 0;

    data = null;
    data1 = null;

    created() {
        this.data = {
            key: this.genNum(),
            type: 'col',
            children: [
                this.genNum(),
                this.genNum(),
                {
                    key: this.genNum(),
                    type: 'row',
                    children: [
                        this.genNum(),
                        this.genNum(),
                        this.genNum(),
                        {
                            key: this.genNum(),
                            type: 'col',
                            children: [
                                this.genNum(),
                                this.genNum(),
                                this.genNum()
                            ]
                        }
                    ]
                },
                this.genNum(),
                this.genNum()
            ]
        };

        this.data1 = {
            key: this.genNum(),
            type: 'col',
            children: [
                this.genNum(),
                this.genNum(),
                {
                    key: this.genNum(),
                    type: 'row',
                    children: [
                        this.genNum(),
                        this.genNum(),
                        this.genNum(),
                        {
                            key: this.genNum(),
                            type: 'col',
                            children: [
                                this.genNum(),
                                this.genNum(),
                                this.genNum()
                            ]
                        }
                    ]
                },
                this.genNum(),
                this.genNum()
            ]
        };
    }

    genNum() {
        this.key++;
        return this.key;
    }

}
</script>

<style lang="scss">
html, body, #app, .v-application--wrap, .v-content, .v-content__wrap {
  height: 100%;
}

</style>

<style scoped lang="scss">
.root {
  width: 800px;
  padding: 50px;
}
</style>
