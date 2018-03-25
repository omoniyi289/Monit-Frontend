<template >
    <aside class="right-aside" >
        <!-- Content Header (Page header) -->
        <section class="content-header" >
              <vue-alert style="margin-left: 0px;"></vue-alert>
            <h1 >{{this.$store.state.page_title?this.$store.state.page_title:this.$route.meta.title}}    
              
            </h1>
            <div class="col-lg-4 mt-3" v-show="this.$store.state.show_modal_alert">
                <b-card class="bg-primary-card">
                    <b-btn v-b-modal.modal4 variant="outline-secondary">Launch small modal</b-btn>
                    <!-- Modal Component -->
                    <b-modal id="modal4" title="Small Modal" size="sm">
                        <h1>modal</h1>
                    </b-modal>
                </b-card>
            </div>
        </section>
        <!-- Main content -->
        <section class="content">
            <slot></slot>
        </section>
        <!-- /.content -->
    </aside>
</template>
<script>
export default {
    name: "right-side",
    data() {
        return {
            formstate: {},
        }
    },
    methods: {

    },
    mounted: function(){
       
    }
}
</script>
<style lang="scss" scoped>
.right-aside {
    padding: 0 20px 10px 20px;
    width: 100%;
    max-width: 100%;
    min-height: 100vh;
    .content-header > h1 {
        margin: 2px;
        padding-left: 13px;
        padding-top: 12px;
        font-size: 20px;
        line-height: 1.5;
    }
    .content-header {
        margin: -2px -20px 25px -20px;
        height: 55px;
        background: #f9fafb ;
        box-shadow: 3px 1px 5px #ccc;
    }
.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
}
</style>
