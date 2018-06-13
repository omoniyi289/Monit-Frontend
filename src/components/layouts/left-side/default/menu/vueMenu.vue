<template>
    <div class="vuemenu navigation">
        <slot></slot>
        <a target="_blank" href="https://www.e360stationanalytics.com"> >>><b>GO TO Station Analytics</b></a>
    </div>
</template>
<script>
export default {
    computed: {
        $collapseItems() {
            return this.$children.filter(child => child._isCollapseItem)
        }
    },
    methods: {
        openByIndex(index) {
            this.$collapseItems.forEach((item, i) => {
                if (i !== index) {
                    item.isActived = false
                }
            })
        }
    },
    mounted() {
        this.$on("closeall", (index) => {
            this.openByIndex(index);
        })
    }
}
</script>
