<style media="screen">
    .breadcrumbs ul {
        padding: 8px 15px;
        margin-bottom: 20px;
        list-style: none;
        background-color: #fff;
        border-radius: 4px;
    }
    .breadcrumbs > ul > li {
        display: inline-block;
    }
    .breadcrumbs > ul > li + li:before {
        padding: 0 5px;
        color: #cccccc;
        content: "/\00a0";
    }
    .breadcrumbs > .active {
        color: #999999;
    }
</style>

<template>
    <div class="row">
        <div class="col-md-12">
            <breadcrumbs></breadcrumbs>
        </div>
    </div>
</template>
<style media="screen">
    .breadcrumb{border-radius: 0px; background: #fff;}
    .col-md-8{padding-right: 0px;}
    .col-md-4{padding-left: 0px;}
</style>
