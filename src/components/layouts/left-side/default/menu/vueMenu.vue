<template>
    <div class="vuemenu navigation">
        <slot></slot>
        <a target="_blank" :href="url_params"> >>><b>GO TO Station Analytics</b></a>
    </div>
</template>
<script>
export default {
    data(){
        return {
            url_params:'',
        }
    },
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
        });
        let user_details = JSON.parse(localStorage.getItem('user_details'));
        //this.url_params = 'https://www.e360stationanalytics.com/sm_redirect?UID='+user_details.id+'&Slug='+user_details.token_h;
         this.url_params = 'https://www.e360stationanalytics.com';


    }
}
</script>
