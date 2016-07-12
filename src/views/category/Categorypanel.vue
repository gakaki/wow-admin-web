<template>
    <div class="category-main-box">
        <ul class="category-list category-list-one">
            <li>
                <div class="category-box-head">
                    <p class="category-box-name" @click="toggleIsOpen()">
                        <span v-bind:class="{ 'glyphicon-chevron-up text-primary': isopen==true, 'glyphicon-chevron-down text-muted': isopen==false }" class="glyphicon"></span>
                        <img class="category-img" v-bind:src=list.icon alt="" />
                        {{list.name}}
                    </p>
                    <a href="javascript:;">新增子分类+</a>
                </div>
            </li>
            <li>{{list.number}} </li>
            <li>{{list.totalSales}}</li>
            <li>{{list.like}}</li>
            <li class="linst-link-group">
                <a v-bind:class="{'btn disabled':$index==0}" href="javascript:;" @click="listUp([list.sort])">
                    上移
                </a>
                <a v-bind:class="{'btn disabled':$index==list.length-1}" href="javascript:;" @click="listDown([list.sort])">
                    下移
                </a>
                <a @click="modalShow(list.id)" href="javascript:;">
                    编辑
                </a>
                <a class="link-delete" href="javascript:;">
                    删除
                </a>
            </li>
        </ul>
        <div v-show="isopen" class="category-main-box-son" v-for="items in list.son | orderBy 'sort' 1">
            <ul class="category-list">
                <li>
                    <div class="category-box-head" style="margin-left:30px;">
                        <p class="category-box-name">
                            <span class="glyphicon glyphicon-chevron-down"></span>
                            {{items.name}}
                        </p>
                        <a href="javascript:;">新增子分类+</a>
                    </div>
                </li>
                <li>{{items.number}}</li>
                <li>{{items.totalSales}}</li>
                <li>{{items.like}}</li>
                <li class="linst-link-group">
                    <a v-bind:class="{'btn disabled':$index==0}" href="javascript:;" @click="listUp([items.sort])">
                        <span class="glyphicon glyphicon-chevron-up"></span>上移
                    </a>
                    <a v-bind:class="{'btn disabled':$index==list.son.length-1}" href="javascript:;" @click="listDown([items.sort])">
                        <span class="glyphicon glyphicon-chevron-down"></span>下移
                    </a>
                    <a @click="modalShow(items.id)" href="javascript:;">
                        <span class="glyphicon glyphicon-edit"></span>编辑
                    </a>
                    <a class="link-delete" href="javascript:;">
                        <span class="glyphicon glyphicon-minus"></span>删除
                    </a>
                </li>
            </ul>
            <ul class="category-list" v-for="itemss in items.son | orderBy 'sort' 1">
                <li v-bind:class="{ 'text-danger': itemss.clone == true}">{{itemss.sort}}{{itemss.name}}</li>
                <li v-bind:class="{ 'text-danger': itemss.clone == true}">{{itemss.number}}</li>
                <li v-bind:class="{ 'text-danger': itemss.clone == true}">{{itemss.totalSales}}</li>
                <li v-bind:class="{ 'text-danger': itemss.clone == true}">{{itemss.like}}</li>
                <li class="linst-link-group">
                    <span v-if="itemss.clone==false">
                        <a v-bind:class="{'btn disabled':$index==0}" href="javascript:;" @click="listUp([items.sort])">
                            <span class="glyphicon glyphicon-chevron-up"></span>上移
                        </a>
                        <a v-bind:class="{'btn disabled':$index==items.son.length-1}" href="javascript:;" @click="listDown([items.sort])">
                            <span class="glyphicon glyphicon-chevron-down"></span>下移
                        </a>
                        <a @click="modalShow(items.id)" href="javascript:;">
                            <span class="glyphicon glyphicon-edit"></span>编辑
                        </a>
                        <a class="link-delete" href="javascript:;">
                            <span class="glyphicon glyphicon-minus"></span>删除
                        </a>
                    </span>
                </li>
            </ul>
        </div>
    </div>
    <Categorymodal :categoryid="categoryid" :categorymodalshow.sync="showmodal" :modaltitle="modaltitle"></Categorymodal>
</template>
<script type="text/javascript">
    import Categorymodal        from    './Categorymodal'
    export default{
        props:['list','isopen','categorymodalshow'],
        data(){
            return{
                categoryFather          :   null,
                categoryCloneArr        :   [],
                showmodal               :   false,
                CategorytreecloneNum    :   1,
                categoryid              :   null,
                modaltitle              :   '编辑分类'
            }
        },
        components:{
            Categorymodal
        },
        methods:{
            toggleIsOpen:function(){
                if(this.isopen==true){
                    this.$set('isopen',false);
                }else{
                    this.$set('isopen',true);
                }
            },
            listUp:function(data){
                console.log('上移');
                console.log(data);
            },
            listDown:function(data){
                console.log('下移');
                console.log(data);
            },
            modalShow:function(data){
                this.$set('categoryid',data);
                this.$set('showmodal',true);
            }
        }
    }
</script>
