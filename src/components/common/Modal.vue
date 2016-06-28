<style>

.modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    display: table;
    transition: opacity .3s ease;
}

.modal-dialog{
    display: table-cell;
    vertical-align:middle;
}

.modal-content{
    width: 700px;
    margin: 0 auto !important;
    text-align: left;
}

.modal-enter,
.modal-leave {
    opacity: 0;
}

</style>

<template>

<div class="modal modal-mask" v-show="show" transition="modal">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <slot name="close"></slot>
                <slot name="header">default header</slot>
            </div>
            <div class="modal-body">
                <slot name="body">default body</slot>
            </div>
            <div class="modal-footer">
                <slot name="footer">
                    <div class="btn-group">
                        <button @click="show = false" type="button" class="btn btn-danger">取消</button>
                        <button @click="show = false" type="button" class="btn btn-success">确认</button>
                    </div>
                </slot>
            </div>
        </div>
        <!-- /.modal-content -->
    </div>
    <!-- /.modal -->
</div>

</template>

<script type="text/javascript">

export default {
    props: {
        show: {
            type: Boolean,
            required: true,
            twoWay: true
        }
    }
}

</script>
