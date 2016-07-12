

<template>

<spinner id="spinner-box" :size="spinnerSize" :fixed="spinnerFixed" text="正在删除...">
</spinner>

<div class="row">
    <div class="col-md-12">
        <div class="btn-group pull-left">
            <button @click="modalShow('add')" type="button" class="btn btn-default">新增品牌</button>
            <button type="button" class="btn btn-default">导出Excel</button>
        </div>
        <div class="pull-right">
            <form class="form-inline">
                <div class="form-group">
                    <input type="email" class="form-control" placeholder="品牌名称">
                </div>
                <div class="form-group">
                    <input type="text" class="form-control" placeholder="所属国家">
                </div>

                <button type="submit" class="btn btn-primary">搜索</button>
            </form>
        </div>
    </div>
</div>

<table class="table order-list table-thead-center table-tbody-center">
    <thead>
        <tr>
            <th>品牌名称</th>
            <th>LOGO</th>
            <th>所属国家</th>
            <th>商品数量</th>
            <th>商品总销量</th>
            <th>喜欢</th>
            <th>排序</th>
            <th>操作</th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="item in list">
            <td>
                <a href="#">Richard Brendon</a>
            </td>
            <td>
                <img src="../../assets/img/logo__1.jpg" style="width:50px;" alt="" />
            </td>
            <td>
                英国
            </td>
            <td>
                126
            </td>
            <td>
                57
            </td>
            <td>
                219
            </td>
            <td>
                90
            </td>
            <td>
                <a @click="modalShow($index)" href="javascript:void(0);">编辑</a>
                <vs-popover position="top">
                    <a @click="popoverHide" href="javascript:void(0);">删除</a>
                    <div slot="content" class="text-center">
                        <div class="btn-group">
                            <button type="button" class="btn btn-sm btn-warning" @click='deleteData($index)'>确认</button>
                            <button @click="popoverHide" type="button" class="btn btn-sm btn-default">取消</button>
                        </div>
                    </div>
                </vs-popover>
            </td>
        </tr>
    </tbody>
</table>

<modal :show.sync="showmodal">
    <h4 slot="header" class="modal-title">{{modaltitle}}</h4>
    <button slot="close" type="button" class="close" @click="showmodal=false">&times;</button>
    <div slot="body">
        <form class="form-horizontal" role="form">
            <div class="form-group">
                <label for="firstname" class="col-sm-2 control-label"><span class="text-danger">*</span>品牌名称</label>
                <div class="col-sm-6">
                    <input v-model="branddata.name" type="text" class="form-control" placeholder="数字、英文和汉字，1-20个字">
                </div>
                <span class="col-sm-4 control-label">
                    <div class="text-left text-muted">数字、英文和汉字，1-20个字</div>
                </span>
            </div>
            <div class="form-group">
                <label for="lastname" class="col-sm-2 control-label"><span class="text-danger">*</span>LOGO</label>
                <div class="col-sm-6">
                    <div id="brand-pic-button">
                        <a style="margin-bottom:5px" class="btn btn-success" id="pickfiles" href="#">
                            <span>选择图片</span>
                        </a>
                    </div>
                    <div>
                        <img style="max-width:150px; border: 1px solid #e0e0e0; padding:5px;" v-show="brandpic!=null" v-bind:src="brandpic" alt="" />
                    </div>
                </div>
            </div>
            <div class="form-group">
                <label for="lastname" class="col-sm-2 control-label"><span class="text-danger">*</span>所属国家</label>
                <div class="col-sm-6">
                    <v-select :placeholder="'请选择'" :value.sync="brandcountry.arr" :options="fruitOptions" :search="true" :close-on-select="true">
                    </v-select>
                </div>
            </div>
            <div class="form-group">
                <label for="lastname" class="col-sm-2 control-label">网址</label>
                <div class="col-sm-6">
                    <div class="input-group">
                        <span class="input-group-addon">http://</span>
                        <input type="text" class="form-control" placeholder="品牌网址">
                  </div>
                </div>
            </div>
            <div class="form-group">
                <label for="lastname" class="col-sm-2 control-label">品牌描述</label>
                <div class="col-sm-8">
                    <textarea class="form-control" rows="3" placeholder="品牌描述"></textarea>
                </div>
                <span class="col-sm-2 control-label">
                    <div class="text-left text-muted">1/1000字</div>
                </span>
            </div>
            <div class="form-group">
                <label for="lastname" class="col-sm-2 control-label">排序</label>
                <div class="col-sm-2">
                    <input type="text" class="form-control text-center" placeholder="0">
                </div>
                <span class="col-sm-4 control-label">
                    <div class="text-left text-muted">数字越大越靠前</div>
                </span>
            </div>
            <div class="form-group">
                <label for="lastname" class="col-sm-2 control-label">是否显示</label>
                <div class="col-sm-3">
                    <label class="checkbox-inline">
                        <input type="radio" name="optionsRadiosinline" value="option1" checked> 显示
                    </label>
                    <label class="checkbox-inline">
                        <input type="radio" name="optionsRadiosinline" value="option2"> 隐藏
                    </label>
                </div>
                <span class="col-sm-4 control-label">
                    <div class="text-left text-muted">有商品关联时不能隐藏品牌</div>
                </span>
            </div>
        </form>
    </div>
    <div slot="footer">
        <button @click="brandsave" type="button" class="btn btn-primary expressButton">保存</button>
    </div>
</modal>

<Pager :cur.sync="1" :all.sync='15'></Pager>

</template>

<script type="text/javascript">

import Pager from '../../components/common/Pager'
import vsPopover from '../../components/common/popover/Popover'
import spinner from '../../components/common/spinner/Spinner';
import Modal from '../../components/common/Modal'
import vSelect from '../../components/common/selecte/Select'
export default {
    data() {
        return {
            list: 10,
            branddata:{
                name:null,
                country:null,
                website:null,
                des:null,
                sort:null,
                show:0,
            },
            showmodal:false,
            brandid:null,
            loadingimg:'data:image/gif;base64,R0lGODlhFAAUAOMIAAAAABoaGjMzM0xMTGZmZoCAgJmZmbKysv///////////////////////////////yH/C05FVFNDQVBFMi4wAwEAAAAh+QQBCgAIACwAAAAAFAAUAAAEUxDJSau9CADMteZTEEjehhzHJYqkiaLWOlZvGs8WDO6UIPAGw8TnAwWDEuKPcxQml0YnjzcYYAqFS7VqwWItWyuCQJB4s2AxmWxGg9bl6YQtl0cAACH5BAEKAA8ALAAAAAAUABQAAART8MlJq70vBMy15pMgSN72AMAliqSJotY6Vm8azxYM7tQw8IfDxOcDBYMS4o9zFCaXRiePRyBgDIZLtWrBYi1b66NQkHizYDGZbEaD1uXphC2XRwAAIfkEAQoADwAsAAAAABQAFAAABFPwyUmrvU8IzLXm0zBI3vYEwSWKpImi1jpWbxrPFgzuFEHwAMDE5wMFgxLij3MUJpdGJ49XKGAOh0u1asFiLVvrw2CQeLNgMZlsRoPW5emELZdHAAAh+QQBCgAPACwAAAAAFAAUAAAEU/DJSau9bwzMteYTQUje9gjCJYqkiaLWOlZvGs8WDO5UUfCBwMTnAwWDEuKPcxQml0Ynj2cwYACAS7VqwWItW+vjcJB4s2AxmWxGg9bl6YQtl0cAACH5BAEKAA8ALAAAAAAUABQAAART8MlJq72PEMy15lNRSN72DMMliqSJotY6Vm8azxYM7pRh8ALBxOcDBYMS4o9zFCaXRiePdzhgAoFLtWrBYi1b6wMAkHizYDGZbEaD1uXphC2XRwAAIfkEAQoADwAsAAAAABQAFAAABFPwyUmrva8UzLXmk2FI3vYQxCWKpImi1jpWbxrPFgzu1HHwg8HE5wMFgxLij3MUJpdGJ48HAGAEgku1asFiLVvrIxCQeLNgMZlsRoPW5emELZdHAAAh+QQBCgAPACwAAAAAFAAUAAAEU/DJSau9zxjMtebTcUje9hTFJYqkiaLWOlZvGs8WDO4UAPAEwsTnAwWDEuKPcxQml0YnjxcIYAaDS7VqwWItW+tDIJB4s2AxmWxGg9bl6YQtl0cAACH5BAEKAA8ALAAAAAAUABQAAART8MlJq73vHMy15hMASN72GMYliqSJotY6Vm8azxYM7lQQ8IXCxOcDBYMS4o9zFCaXRiePJxBgCIRLtWrBYi1b62MwkHizYDGZbEaD1uXphC2XRwAAOw==',
            brandpic:null,
            spinnerFixed: true,
            spinnerSize: 'lg',
            fruitOptions: [
                {value:'{"name":"中国","code":"zhongguo"}', label:'中国'},
                {value:'{"name":"德国","code":"deguo"}', label:'德国'},
                {value:'{"name":"美国","code":"meiguo"}', label:'美国'},
                {value:'{"name":"英国","code":"yingguo"}', label:'英国'},
                {value:'{"name":"意大利","code":"yidali"}', label:'意大利'},
                {value:'{"name":"加拿大","code":"jianada"}', label:'加拿大'},
                {value:'{"name":"日本","code":"riben"}', label:'日本'},
                {value:'{"name":"法国","code":"faguo"}', label:'法国'},
                {value:'{"name":"韩国","code":"hanguo"}', label:'韩国'},
                {value:'{"name":"挪威","code":"nuowei"}', label:'挪威'},
            ],
            brandcountry:{
                arr: [],
            },
            modaltitle:'新增品牌'
        }
    },
    components: {
        Pager,
        vsPopover,
        spinner,
        Modal,
        vSelect
    },
    methods: {
        deleteData: function(id) {
            this.$broadcast('show::spinner');
            setTimeout(() => {
                this.popoverHide();
                this.$broadcast('hide::spinner');
                alert('删除回调，需要删除的品牌id：' + id);
            }, 2000)
        },
        popoverHide: function() {
            this.$broadcast('hide::popover');
        },
        modalShow:function(data){
            this.showmodal=true;
            if (data=='add') {
                console.log('新增');
                this.modaltitle='新增品牌'
                this.brandid=null;
            }else {
                console.log('编辑');
                this.modaltitle='编辑品牌'
                this.brandid=data;
            }
        },
        brandsave:function(){
            if (this.brandid==null) {
                console.log('新增一条品牌数据');
            }else {
                console.log('编辑品牌数据');
            }
        }
    },
    route: {
        deactivate: function(transition) {
            this.$broadcast('hide::popover');
            transition.next();
        }
    },
    ready(){
        console.log(this.branddata);
        let _this=this;
        let brandPic = {
            runtimes: 'html5,flash,html4', //上传模式,依次退化
            browse_button: 'pickfiles', //上传选择的点选按钮，**必需**
            uptoken_url: 'http://apidev.dev.wowdsgn.com:8400/apiv1/qiniu/token', //Ajax请求upToken的Url，**强烈建议设置**（服务端提供）
            uptoken: '', //若未指定uptoken_url,则必须指定 uptoken ,uptoken由其他程序生成
            // unique_names: true, // 默认 false，key为文件名。若开启该选项，SDK为自动生成上传成功后的key（文件名）。
            // save_key: true,   // 默认 false。若在服务端生成uptoken的上传策略中指定了 `sava_key`，则开启，SDK会忽略对key的处理
            domain: 'http://o7s1lyy5h.bkt.clouddn.com', //bucket 域名，下载资源时用到，**必需**
            get_new_uptoken: false, //设置上传文件的时候是否每次都重新获取新的token
            container: 'brand-pic-button', //上传区域DOM ID，默认是browser_button的父元素，
            max_file_size: '1mb', //最大文件体积限制
            flash_swf_url: 'http://cdn.bootcss.com/plupload/2.1.8/Moxie.swf', //引入flash,相对路径
            max_retries: 3, //上传失败最大重试次数
            dragdrop: false, //开启可拖曳上传
            drop_element: 'brand-pic-button', //拖曳上传区域元素的ID，拖曳文件或文件夹后可触发上传
            chunk_size: '4mb', //分块上传时，每片的体积
            auto_start: true, //选择文件后自动上传，若关闭需要自己绑定事件触发上传
            init: {
                'FilesAdded': function(up, files) {
                    plupload.each(files, function(file) {
                        // 文件添加进队列后,处理相关的事情
                        console.log('#####################进入队列#######################');
                        _this.brandpic=_this.loadingimg;
                    });
                },
                'BeforeUpload': function(up, file) {
                    // 每个文件上传前,处理相关的事情
                    console.log('#####################上传之前#######################');
                },
                'UploadProgress': function(up, file) {
                    // 每个文件上传时,处理相关的事情
                    console.log('#####################上传进行时#######################');
                },
                'FileUploaded': function(up, file, info) {
                    // 每个文件上传成功后,处理相关的事情
                    console.log('#####################上传成功#######################');
                    let domain = up.getOption('domain');
                    let res=$.parseJSON(info);
                    let brandpicsrc=domain+'/'+encodeURI(res.key);
                    console.log(domain+'/'+encodeURI(res.key))
                    _this.brandpic=brandpicsrc;
                },
                'Error': function(up, err, errTip) {
                    console.log(up);
                    console.log(err);
                    console.log(errTip);
                    console.log('#####################上传出错#######################');
                    //上传出错时,处理相关的事情
                },
                'UploadComplete': function() {
                    console.log('#####################队列处理完毕#######################');
                    //队列文件处理完毕后,处理相关的事情
                },
                // 'Key': function(up, file) {
                //     // 若想在前端对每个文件的key进行个性化处理，可以配置该函数
                //     // 该配置必须要在 unique_names: false , save_key: false 时才生效
                //
                //     var key = "";
                //     // do something with key here
                //     return key
                // }
            }
        };
        var uploader = Qiniu.uploader(brandPic);
    }
}

</script>
