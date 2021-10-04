<template>
<div class="mai">
    <div class="ss1">
        <ul><button class="bt">首页</button></ul>
        <ul><button class="bt">产品管理</button>
            <li><router-link :to="{ path: '/neaw'}" ><button class="bb">产品信息处理</button></router-link></li>
        </ul>
    </div>
    <div class="ss2">
        <div class="ss21">
            <div class="wel">欢迎来到数科金云管理员页面</div>
            <div class="weg"><router-link :to="{ path: '/neaw'}" ><button class="gd">返回</button></router-link></div>
        </div>
        <div class="ss22">
            <div class="ss221">添加产品信息</div>
            <div class="ss222">
            <div style="margin-left:680px;width:300px;">
            首图：
            <el-upload
            class="upload-demo"
            drag
            action="http://172.16.9.137:8082/house/addHousePhotosInfo?pictureType=1"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :before-remove="beforeRemove"
            :before-upload="handleBeforeUpload"
            :show-file-list="true"
            :file-list="fileList"
            multiple
            :on-success="handleSuccess"
            :limit="limitNum">
            <i class="el-icon-upload"></i>
            <div class="el-upload__text"><el-button >将图片拖到此处，或<em>点击上传图片</em></el-button></div>
            </el-upload>
            <table :data="tableData">
                <tr>
                    <td><center><input id="imgId" v-model="imgId" readonly style="display:none;background:rgba(255, 192, 203, 0);"></center></td>
                    <td><center><input id="name" v-model="name" readonly style="margin-left=-62px;background:rgba(255, 192, 203, 0);border:solid 1px rgba(255, 192, 203, 0);"></center></td>
                </tr>
            </table>
            </div>
            <div style="margin-top:230px;width:300px;margin-right:-980px;margin-left:-300px;">
            缩略图:
            <el-upload
            ref="upload"
            class="upload-demo"
            drag
            action="http://172.16.9.137:8082/house/addHousePhotosInfo?pictureType=2"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :before-remove="beforeRemove"
            :before-upload="handleBeforeUpload"
            multiple
            :on-success="handleSs"
            :limit="limitNumb"
            :on-exceed="handleExceed"
            :file-list="imageList">
            <i class="el-icon-upload"></i>
            <div class="el-upload__text"><el-button>将图片拖到此处，或<em>点击上传图片</em></el-button></div>
            </el-upload>
            <table :data="tableData">
                <tr v-for="item in fst" :key="item.name">
                    <!-- <td><center><input id="imgId" v-model="item.imgId" type="text" readonly style="display:none;background:rgba(255, 192, 203, 0);"></center></td> -->
                    <td><center><input id="name" v-model="item.name" type="text" readonly style="background:rgba(255, 192, 203, 0);border:solid 1px rgba(255, 192, 203, 0);"></center></td>
                </tr>
            </table>
            </div>
            <div class="width:700px;">
            <el-form :model="addForm">
            <table style="text-align:left;">
            <tr><td style="text-align:right;">小区名：</td><td><input name="communityName" v-model="communityName" type="text" placeholder="  小区名" onfocus="this.placeholder=''" style="border-radius: 6px;width:450px;height:30px;"></td></tr>
            <tr><td style="text-align:right;">起拍价：</td><td><input name="price" v-model="price" type="text" placeholder="  起拍价" onfocus="this.placeholder=''" style="border-radius: 6px;width:450px;height:30px;"></td></tr>
            <tr><td style="text-align:right;">区、县：</td><td><input name="county" v-model="county" type="text" placeholder="  区、县" onfocus="this.placeholder=''" style="border-radius: 6px;width:450px;height:30px;"></td></tr>
            <tr><td style="text-align:right;">类型：</td><td><input name="houseType" v-model="houseType" type="text" placeholder="  类型" onfocus="this.placeholder=''" style="border-radius: 6px;width:450px;height:30px;"></td></tr>
            <tr><td style="text-align:right;">商圈、板块：</td><td><input name="cdb" v-model="cdb" type="text" placeholder="  商圈、板块" onfocus="this.placeholder=''" style="border-radius: 6px;width:450px;height:30px;"></td></tr>
            <tr><td style="text-align:right;">面积：</td><td><input name="area" v-model="area" type="text" placeholder="  面积" onfocus="this.placeholder=''" style="border-radius: 6px;width:450px;height:30px;"></td></tr>
            <tr><td style="text-align:right;">总楼层：</td><td><input name="totalFloor" v-model="totalFloor" type="text" placeholder="  总楼层" onfocus="this.placeholder=''" style="border-radius: 6px;width:450px;height:30px;"></td></tr>
            <tr><td style="text-align:right;">所在楼层：</td><td><input name="floor" v-model="floor" type="text" placeholder="  所在楼层" onfocus="this.placeholder=''" style="border-radius: 6px;width:450px;height:30px;"></td></tr>
            <tr><td style="text-align:right;">单价：</td><td><input name="unitPrice" v-model="unitPrice" type="text" placeholder="  单价" onfocus="this.placeholder=''" style="border-radius: 6px;width:450px;height:30px;"></td></tr>
            <tr><td style="text-align:right;">地址：</td><td><input name="address" v-model="address" type="text" placeholder="  地址" onfocus="this.placeholder=''" style="border-radius: 6px;width:450px;height:30px;"></td></tr>
            <tr><td style="text-align:right;">拍卖时间：</td><td><input name="saleTime" v-model="saleTime" type="text" placeholder="  拍卖时间" onfocus="this.placeholder=''" style="border-radius: 6px;width:450px;height:30px;"></td></tr>
            <tr><td style="text-align:right;">拍卖结束时间：</td><td><input name="saleEndTime" v-model="saleEndTime" type="text" placeholder="  拍卖结束时间" onfocus="this.placeholder=''" style="border-radius: 6px;width:450px;height:30px;"></td></tr>
            <tr><td style="text-align:right;">竣工时间：</td><td><input name="finishTime" v-model="finishTime" type="text" placeholder="  竣工时间" onfocus="this.placeholder=''" style="border-radius: 6px;width:450px;height:30px;"></td></tr>
            <tr><td style="text-align:right;">拍卖状态：</td><td><input name="auctionStatus" v-model="auctionStatus" type="text" placeholder="  拍卖状态" onfocus="this.placeholder=''" style="border-radius: 6px;width:450px;height:30px;"></td></tr>
            <tr><td style="text-align:right;">创建人：</td><td><input name="createBy" v-model="createBy" type="text" placeholder="  创建人" onfocus="this.placeholder=''" style="border-radius: 6px;width:450px;height:30px;"></td></tr>
            <tr><td style="text-align:right;">修改人：</td><td><input name="updateBy" v-model="updateBy" type="text" placeholder="  修改人" onfocus="this.placeholder=''" style="border-radius: 6px;width:450px;height:30px;"></td></tr>
            <tr><td style="text-align:right;">房屋描述:</td><td>
                <el-upload
                class="avatar-uploader"
                action="http://172.16.9.137:8082/house/addHousePhotosInfo?pictureType=1"
                :show-file-list="false"
                :on-success="uploadSuccess"
                :on-error="uploadError"
                :before-upload="beforeUpload">
        </el-upload>
        <!--富文本编辑器组件-->
       <el-row v-loading="uillUpdateImg">
                <quill-editor class="editor" name="houseDesc" style="height:500px;width:900px;"
                    ref="myTextEditor"
                    v-model="houseDesc"
                    :options="editorOption"
                    @blur="onEditorBlur($event)"
                    @focus="onEditorFocus($event)"
                    @ready="onEditorReady($event)"
                    @change="onEditorChange($event)">
                </quill-editor>
       </el-row></td></tr>
            </table>
                <el-button type="primary" @click="handleAdd" style="margin-left:500px;margin-top:90px;cursor:pointer;">添加</el-button>
            </el-form>
            </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import mainst from '@/components/mainst.vue'
import neaw from '@/components/neaw.vue'
export default {
    data(){
        return{

        }
    },
    components:{
        mainst,
        neaw
    }
}
</script>

// <script>
// export default {
//     props:[house_desc],
//         data () {
//           return {
//             content: null,
//             editorOption: {
//               modules: {
//                 toolbar: [
//                   ["bold", "italic", "underline", "strike"], // 加粗 斜体 下划线 删除线
//                   ["blockquote", "code-block"], // 引用  代码块
//                   [{ header: 1 }, { header: 2 }], // 1、2 级标题
//                   [{ list: "ordered" }, { list: "bullet" }], // 有序、无序列表
//                   [{ script: "sub" }, { script: "super" }], // 上标/下标
//                   [{ indent: "-1" }, { indent: "+1" }], // 缩进
//                   // [{'direction': 'rtl'}],                         // 文本方向
//                   [{ size: ["small", false, "large", "huge"] }], // 字体大小
//                   [{ header: [1, 2, 3, 4, 5, 6, false] }], // 标题
//                   [{ color: [] }, { background: [] }], // 字体颜色、字体背景颜色
//                   [{ font: [] }], // 字体种类
//                   [{ align: [] }], // 对齐方式
//                   ["clean"], // 清除文本格式
//                   ["link", "image", "video"] // 链接、图片、视频
//                 ], //工具菜单栏配置
//               },
//             //   placeholder:'<%=house_desc%>',
//               readyOnly: true, //是否只读
//               theme: 'snow', //主题 snow/bubble
//               syntax: true, //语法检测
//             }
//           }
//         },
//         methods: {
//           // 失去焦点
//           onEditorBlur(editor) {
//           },
//           // 获得焦点
//           onEditorFocus(event) {
//               event.enable(false);
//           },
//           // 开始
//           onEditorReady(editor) {},
//         //   值发生变化
//           onEditorChange(editor) {
//             this.house_desc = editor.html;
//             console.log(editor);
//           },
//         },
//         computed: {
//           editor() {
//             return this.$refs.myTextEditor.quillEditor;
//           }
//         },
//         mounted() {
//           // console.log('this is my editor',this.editor);
//         } 
//       }
// </script>

<script>
const toolbarOptions = [
  ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
  ['blockquote', 'code-block'],
 
  [{'header': 1}, {'header': 2}],               // custom button values
  [{'list': 'ordered'}, {'list': 'bullet'}],
  [{'script': 'sub'}, {'script': 'super'}],      // superscript/subscript
  [{'indent': '-1'}, {'indent': '+1'}],          // outdent/indent
  [{'direction': 'rtl'}],                         // text direction
 
  [{'size': ['small', false, 'large', 'huge']}],  // custom dropdown
  [{'header': [1, 2, 3, 4, 5, 6, false]}],
 
  [{'color': []}, {'background': []}],          // dropdown with defaults from theme
  [{'font': []}],
  [{'align': []}],
  ['link', 'image', 'video'],
  ['clean']                                         // remove formatting button
]
export default {
    // props:[house_desc],
        data(){
            return{
          editorOption: {
          placeholder: '',
          theme: 'snow',  // or 'bubble'
          modules: {
            toolbar: {
              container: toolbarOptions,  // 工具栏
              handlers: {
                'image': function (value) {
                  if (value) {
                    document.querySelector('.avatar-uploader input').click()
                  } else {
                    this.quill.format('image', false);
                  }
                }
              }
            }
          },
          readyOnly: true, //是否只读
          theme: 'snow', //主题 snow/bubble
          syntax: true, //语法检测
        },
            addForm:{
            id:'',
            communityName:'',
            price:'',
            county:'',
            houseType:'',
            cdb:'',
            area:'',
            totalFloor:'',
            floor:'',
            unitPrice:'',
            address:'',
            saleTime:'',
            saleEndTime:'',
            finishTime:'',
            auctionStatus:'',
            createBy:'',
            updateBy:'',
            houseDesc:'',
            },
            limitNum:1,
            dataBasePath:'',
            limitNumb:5,
            // imgIds:[{
            //     imgId12:'283',
            //     }],
            imgIds:[],
            imgId:'',
            name:'',
            fst:[],
            // list:[{
            // }],
            pictureType:'',
            // fileList: [{
            //     name: '', 
            //     url: ''
            //     }]
            // fst:[{
            //     imgId:'item.imgId1',
            //     name:'item.name1',
            // }],
            fileList:[
                // {
                //     imgId:'',
                //     name:'',
                // }
                // {
                // name:'',
                // url:'',
                // }
            // {
            //     name:'file.name',
            //     url:'file.url',
            // }
            ],
            // imageList:[{
            //     imgId:'',
            //     name:'',
            // }],
            pictureType:1,
            file:'',
            }
        },
        // computed:{
        //     uploadUrl:function(){
        //     return "http://127.0.0.1:8081/uploadFile";
        //     },
        //     myData(){
        //         return {
        //             Type:"1",
        //             Id:this.form.fileId,
        //             }
        //         }
        // },
        created(){
            // this.postList()
            this.getList()
        },
        methods:{
            beforeUpload() {
                // 显示loading动画
                this.quillUpdateImg = true
            },
            
            uploadSuccess(res, file) {debugger
                // res为图片服务器返回的数据
                // 获取富文本组件实例
                let quill = this.$refs.myTextEditor.quill
                // 如果上传成功
                if (res.code === 20000 && res.data.url !== null) {
                    // 获取光标所在位置
                    let length = quill.getSelection().index;
                    // 插入图片  res.info为服务器返回的图片地址
                    quill.insertEmbed(length, 'image', res.data.url)
                    // 调整光标到最后
                    quill.setSelection(length + 1)
                } else {
                    this.$message.error('图片插入失败')
                }
                // loading动画消失
                this.quillUpdateImg = false
            },
       
            // 富文本图片上传失败
            uploadError() {
                // loading动画消失
                this.quillUpdateImg = false
                this.$message.error('图片插入失败')
            },
    //         handleOpen(key, keyPath) {
    //     console.log(key, keyPath);
    //   },
    //   handleClose(key, keyPath) {
    //     console.log(key, keyPath);
    //   },
            // submitUpload() {
            //     this.$refs.upload.submit();
            // },
            handleSs(res){debugger
            let data={
                imgId:this.imgId,
                // dataBasePath:this.dataBasePath,
                pictureType:this.pictureType
            }
                    console.log(res)
                    console.log(res.data.imgId)
                    // this.fst=res.data,
                    // this.imgId1=res.data.imgId
                    // console.log(res.data.url)
                    // this.url=res.data.url
                    console.log(res.data.pictureType)
                    this.pictureType=res.data.pictureType
                    // this.fst.imgId=res.data.imgId
                    this.fst.push({
                        name:res.data.name,
                        fileUrl:res.data.fileUrl
                    })
                // (item => {
                //   return {
                //     name: item.name,
                //     // EnName: require(`./img/${item.EnName}.jpg`)  // 利用require 引入图片，获得图片路径
                //   }
                // })
                    // this.fst.name=res.data.name
                    // this.fst.imgId=res.data.imgId
                    // this.imageList.url=res.data.url
                    this.imgIds.push(res.data.imgId)
			this.$message.success('图片上传成功')
            },


            handleSuccess(res,file,fileList){debugger
            let data={
                imgId:this.imgId,
                pictureType:this.pictureType
            }
                    console.log(res)
                    console.log(res.data.imgId)
                    // this.imgId=res.data.imgId
                    this.imgId=res.data.imgId
                    console.log(res.data.pictureType)
                    this.pictureType=res.data.pictureType
                    console.log(res.data)
                    this.name=res.data.name
                    // this.fileList.url=res.data.url
                    this.imgIds.push(res.data.imgId)
                    this.$message.success('图片上传成功')
            },
            // changeFile(file, fileList) {
            //     this.fileList.pop()
            //     this.fileList.push(file)
            // },
            // handleSuccess(res,file,fileList){
            //     this.fileList.push(res)
            // },
            // handleAvatarSuccess() {debugger
            //     let data={
            //         pictureType:this.pictureType,
            //         file:this.file,
            //     }
            //     this.$http.post(this.$api.esdgdh, data).then(res=>{ 
            //         console.log(eval("("+res.data+")"));
            //         console.log(data);
            //         console.log(res.data);
            //     })
            // },
            // getList(){debugger
            //     let data={
            //         pictureType:this.pictureType,
            //         file:this.file,
            //     }
            //     this.$http.post(this.$api.rsfggd, data).then(res=>{
            //         console.log(res);
            //         console.log(res.data);
            //         this.file=res.data.file
            //     })
            // },
            handleBeforeUpload(file){
                console.log('before')
                if(!(file.type === 'image/png' || file.type === 'image/gif' || file.type === 'image/jpg' || file.type === 'image/jpeg')) {
                this.$notify.warning({
                    title: '警告',
                    message: '请上传格式为image/png, image/gif, image/jpg, image/jpeg的图片'
                    })
                }
                    let size = file.size / 1024 / 1024 / 10
                    if(size > 10) {
                        this.$notify.warning({
                            title: '警告',
                            message: '图片大小必须小于10M'
                            })
                        }
            },
            handleRemove(file, fileList) {
            console.log(file, fileList);
            },
            handlePreview(file) {
            console.log(file);
            },
            // handleExceed(files, fileList) {
            // this.$message.warning(`当前限制选择 ${this.limitNum} 个图片，本次选择了 ${files.length} 个图片，共选择了 ${files.length + fileList.length} 个图片`);
            // },
            beforeRemove(file, fileList) {
            return this.$confirm(`确定移除 ${ file.name }？`);
            },
            handleAdd (){debugger
            // this.addForm={
            // communityName:'',
            // price:'',
            // county:'',
            // houseType:'',
            // cdb:'',
            // area:'',
            // totalFloor:'',
            // floor:'',
            // unitPrice:'',
            // address:'',
            // saleTime:'',
            // saleEndTime:'',
            // finishTime:'',
            // auctionStatus:'',
            // createBy:'',
            // updateBy:'',
            // // houseDesc:'',
            // };
            // communityName:this.communityName
            // debugger
            // console.log(this.communityName)
            let data={
            // data.append('communityName', this.communityName);
            // data.append('price', this.price);
            // data.append('county', this.county);
            // data.append('houseType', this.houseType);
            // data.append('cdb', this.cdb);
            // data.append('area', this.area);
            // data.append('totalFloor', this.totalFloor);
            // data.append('floor', this.floor);
            // data.append('unitPrice', this.unitPrice);
            // data.append('address', this.address);
            // data.append('saleTime', this.saleTime);
            // data.append('saleEndTime', this.saleEndTime);
            // data.append('finishTime', this.finishTime);
            // data.append('auctionStatus', this.auctionStatus);
            // data.append('createBy', this.createBy);
            // data.append('updateBy', this.updateBy);
            // id:this.id,
            // imgId1:this.imgId1,
            imgIds:this.imgIds,
            communityName:this.communityName,
            price:this.price,
            county:this.county,
            houseType:this.houseType,
            cdb:this.cdb,
            area:this.area,
            totalFloor:this.totalFloor,
            floor:this.floor,
            unitPrice:this.unitPrice,
            address:this.address,
            saleTime:this.saleTime,
            saleEndTime:this.saleEndTime,
            finishTime:this.finishTime,
            auctionStatus:this.auctionStatus,
            createBy:this.createBy,
            updateBy:this.updateBy,
            houseDesc:this.houseDesc,
            // file:this.file,
            }
            // this.$http.post(this.$api.trthfd, datas).then(res=>{ 
            //     console.log(eval("("+res.data+")"));
            //     console.log(data.id);
            //     console.log(res.data);
            // })
            // data.append('houseDesc', this.houseDesc);
            this.$http.post(this.$api.rsfggd, data).then(res=>{ 
                console.log(eval("("+res.data+")"));
                console.log(data);
                console.log(data.communityName);
                console.log(res.data);
                this.$message({
                  type: 'success',
                  message: '添加成功!'
                });
                this.$router.go(0);
            // this.postList()
        // }
            // postList() {debugger
            // let data= new data();
            // data.append('communityName', this.communityName);
            // data.append('price', this.price);
            // data.append('county', this.county);
            // data.append('houseType', this.houseType);
            // data.append('cdb', this.cdb);
            // data.append('area', this.area);
            // data.append('totalFloor', this.totalFloor);
            // data.append('floor', this.floor);
            // data.append('unitPrice', this.unitPrice);
            // data.append('address', this.address);
            // data.append('saleTime', this.saleTime);
            // data.append('saleEndTime', this.saleEndTime);
            // data.append('finishTime', this.finishTime);
            // data.append('auctionStatus', this.auctionStatus);
            // data.append('createBy', this.createBy);
            // data.append('updateBy', this.updateBy);
            // // data.append('houseDesc', this.houseDesc);
            // this.$http.post(this.$api.paset, data).then(res=>{ 
            //     console.log(eval("("+res.data+")"));
            //     console.log(data);
            //     console.log(data.communityName);
            //     console.log(res.data);
            //     // this.$message({
            //     //   type: 'success',
            //     //   message: '提交成功!'
            //     // });
            //     // this.community_name=res.data.community_name
            //     // this.price=res.data.price
            //     // this.county=res.data.county
            //     // this.house_type=res.data.house_type
            //     // this.cdb=res.data.cdb
            //     // this.area=res.data.area
            //     // this.total_floor=res.data.total_floor
            //     // this.floor=res.data.floor
            //     // this.unit_price=res.data.unit_price
            //     // this.address=res.data.address
            //     // this.sale_time=res.data.sale_time
            //     // this.sale_end_time=res.data.sale_end_time
            //     // this.finish_time=res.data.finish_time
            //     // this.auction_statu=res.data.auction_statu
            //     // this.create_by=res.data.create_by
            //     // this.update_by=res.data.update_by
            //     // this.house_desc=res.data.house_desc
              })
            // let datas={
            //     houseDesc:this.houseDesc,
            //   }
            //   this.$http.post(this.$api.trthfd, datas).then(res=>{ 
            //     console.log(eval("("+res.data+")"));
            //     console.log(data.houseDesc);
            //     console.log(res.data);
            // })
            }
        }
}
</script>

<style>
* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
  outline: none;
}
*:not(input,textarea) {
  -webkit-touch-callout: none;
  user-select: none;
}
/* body{
    background: linear-gradient(to right, black 30%, rgba(255, 192, 203, 0.418) 70%);
} */
.ql-editor{
    border: 0px;
    background: white;
}
/* table{
    width: 1090px;
} */
.ss221{
    /* width: 1090px; */
    height: 100px;
}
.ss222{
    /* width: 1090px; */
    /* height: 491px; */
    margin-top: -60px;
    display:flex;
}
.wel{
    margin-right: 320px;
    font-size: 20px;
    width: 900px;
    height: 50px;
    font-weight: bolder;
}
.weg{
    width:190px;
    height: 50px;
}
.gd{
    background-color: rgba(255, 192, 203, 0);
    font-size: 16px;
    margin-right:20px ;
}
.ss21{
    display: -webkit-flex;
    display:flex;
    /* width: 1090px; */
    height: 50px;
    text-align: right;
}
.ss22{
    /* width: 1090px; */
    height: 591px;
    text-align: left;
}
.ss2{
    /* width: 1090px;
    height: 641px; */
    /* background-color: rgba(255, 192, 203, 0.418); */
    width: 1089px;
    height: 2500px;
}
.mai{
    display: -webkit-flex;
    display:flex;
    margin-top: -55px;
}
.ss1{
    /* width: 260px;
    height: 641px; */
    background-color: black;
    text-align: left;
    width: 260px;
    height: 2500px;
}
ul{
    color: white;
    cursor:pointer;
    margin-right: 150px;
    font-size: 15px;
    margin-top: 30px;
}
ul li{
    color: yellow;
    font-size: 13px;
    /* width: 100px; */
    margin-top: 25px;
    line-height: 30px;
    list-style:none;
}
li{
    display: none;
    margin-left: 10px;
}
ul:hover li{
    display: block;
}
button{
  border: 0 none;
  font-weight: bold;
  cursor:pointer;
  outline: none;
}
.bt{
    background-color: black;
    font-size: 15px;
    color: white;
    width: 100px;
    text-align: left;
}
.bb{
    background-color: black;
    font-size: 13px;
    color: yellow;
    text-align: left;
    width: 200px;
}
</style>