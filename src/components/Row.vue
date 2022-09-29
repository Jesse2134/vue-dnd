<template>
    <flex :items="children" direction="row"></flex>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from "vue-property-decorator";
    import Flex from "@/components/Flex.vue";

    @Component({
        name: 'Row',
        components: {Flex}
    })
    export default class Row extends Vue {

        @Prop()
        children: any[];

    }
</script>

<style scoped lang="scss">

</style>