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
            <div class="ss221">查看产品信息</div>
            <div class="ss222">
            <table align="left">
            <tr><td style="text-align:right;">房屋序号：</td><td><input id="id" v-bind:value="id" type="text" readonly style="border-radius: 6px;width:450px;height:30px;background:rgba(255, 192, 203, 0);"></td></tr>
            <tr><td style="text-align:right;">小区名：</td><td><input id="communityName" v-bind:value="communityName" type="text" readonly style="border-radius: 6px;width:450px;height:30px;background:rgba(255, 192, 203, 0);"></td></tr>
            <tr><td style="text-align:right;">起拍价：</td><td><input id="price" v-bind:value="price" type="text" readonly style="border-radius: 6px;width:450px;height:30px;background:rgba(255, 192, 203, 0);"></td></tr>
            <tr><td style="text-align:right;">区、县：</td><td><input id="county" v-bind:value="county" type="text" readonly style="border-radius: 6px;width:450px;height:30px;background:rgba(255, 192, 203, 0);"></td></tr>
            <tr><td style="text-align:right;">类型：</td><td><input id="houseType" v-bind:value="houseType" type="text" readonly style="border-radius: 6px;width:450px;height:30px;background:rgba(255, 192, 203, 0);"></td></tr>
            <tr><td style="text-align:right;">商圈、板块：</td><td><input id="cdb" v-bind:value="cdb" type="text" readonly style="border-radius: 6px;width:450px;height:30px;background:rgba(255, 192, 203, 0);"></td></tr>
            <tr><td style="text-align:right;">面积：</td><td><input id="area" v-bind:value="area" type="text" readonly style="border-radius: 6px;width:450px;height:30px;background:rgba(255, 192, 203, 0);"></td></tr>
            <tr><td style="text-align:right;">总楼层：</td><td><input id="totalFloor" v-bind:value="totalFloor" type="text" readonly style="border-radius: 6px;width:450px;height:30px;background:rgba(255, 192, 203, 0);"></td></tr>
            <tr><td style="text-align:right;">所在楼层：</td><td><input id="floor" v-bind:value="floor" type="text" readonly style="border-radius: 6px;width:450px;height:30px;background:rgba(255, 192, 203, 0);"></td></tr>
            <tr><td style="text-align:right;">单价：</td><td><input id="unitPrice" v-bind:value="unitPrice" type="text" readonly style="border-radius: 6px;width:450px;height:30px;background:rgba(255, 192, 203, 0);"></td></tr>
            <tr><td style="text-align:right;">地址：</td><td><input id="address" type="text" v-bind:value="address" readonly style="border-radius: 6px;width:450px;height:30px;background:rgba(255, 192, 203, 0);"></td></tr>
            <tr><td style="text-align:right;">拍卖时间：</td><td><input id="saleTime" type="text" v-bind:value="saleTime" readonly style="border-radius: 6px;width:450px;height:30px;background:rgba(255, 192, 203, 0);"></td></tr>
            <tr><td style="text-align:right;">拍卖结束时间：</td><td><input id="saleEndTime" v-bind:value="saleEndTime" type="text" readonly style="border-radius: 6px;width:450px;height:30px;background:rgba(255, 192, 203, 0);"></td></tr>
            <tr><td style="text-align:right;">竣工时间：</td><td><input id="finishTime" v-bind:value="finishTime" type="text" readonly style="border-radius: 6px;width:450px;height:30px;background:rgba(255, 192, 203, 0);"></td></tr>
            <tr><td style="text-align:right;">拍卖状态：</td><td><input id="auctionStatus" v-bind:value="auctionStatus" type="text" readonly style="border-radius: 6px;width:450px;height:30px;background:rgba(255, 192, 203, 0);"></td></tr>
            <tr><td style="text-align:right;">创建人：</td><td><input id="createBy" v-bind:value="createBy" type="text" readonly style="border-radius: 6px;width:450px;height:30px;background:rgba(255, 192, 203, 0);"></td></tr>
            <tr><td style="text-align:right;">修改人：</td><td><input id="updateBy" v-bind:value="updateBy" type="text" readonly style="border-radius: 6px;width:450px;height:30px;background:rgba(255, 192, 203, 0);"></td></tr>
            <tr><td style="text-align:right;">房屋描述:</td><td>
                <quill-editor class="editor" id="houseDesc" style="height:500px;width:900px;background:rgba(255, 192, 203, 0);"
                    ref="myTextEditor"
                    v-model="houseDesc"
                    :options="editorOption"
                    @blur="onEditorBlur($event)"
                    @focus="onEditorFocus($event)"
                    @ready="onEditorReady($event)"
                    @change="onEditorChange($event)">
                </quill-editor></td></tr>
            </table>
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

<script>
export default {
    props:[houseDesc],
        data () {
          return {
            content: null,
            editorOption: {
              modules: {
                toolbar: [
                  ["bold", "italic", "underline", "strike"], // 加粗 斜体 下划线 删除线
                  ["blockquote", "code-block"], // 引用  代码块
                  [{ header: 1 }, { header: 2 }], // 1、2 级标题
                  [{ list: "ordered" }, { list: "bullet" }], // 有序、无序列表
                  [{ script: "sub" }, { script: "super" }], // 上标/下标
                  [{ indent: "-1" }, { indent: "+1" }], // 缩进
                  // [{'direction': 'rtl'}],                         // 文本方向
                  [{ size: ["small", false, "large", "huge"] }], // 字体大小
                  [{ header: [1, 2, 3, 4, 5, 6, false] }], // 标题
                  [{ color: [] }, { background: [] }], // 字体颜色、字体背景颜色
                  [{ font: [] }], // 字体种类
                  [{ align: [] }], // 对齐方式
                  ["clean"], // 清除文本格式
                  ["link", "image", "video"] // 链接、图片、视频
                ], //工具菜单栏配置
              },
            //   placeholder:'<%=house_desc%>',
              readyOnly: true, //是否只读
              theme: 'snow', //主题 snow/bubble
              syntax: true, //语法检测
            }
          }
        },
        methods: {
          // 失去焦点
          onEditorBlur(editor) {
          },
          // 获得焦点
          onEditorFocus(event) {
              event.enable(false);
          },
          // 开始
          onEditorReady(editor) {},
        //   值发生变化
          onEditorChange(editor) {
            // this.houseDesc = editor.html;
            // console.log(editor);
            // console.log(houseDesc);
          },
          saveHtml:function(event){
          alert(this.houseDesc);
        }
        },
        computed: {
          editor() {
            return this.$refs.myTextEditor.quillEditor;
          }
        },
        mounted() {
        //   console.log('this is my editor',this.editor);
        } 
      }
</script>

<script>
export default {
    data(){
        return{
            page_num:1,
            page_size:18,
            id:'{{id}}',
            communityName:'{{communityName}}',
            houseDesc:'{{houseDesc}}',
    //         id:'1',
    //         community_name:'小A',
    //         price:'200万',
    //         county:'A区',
    //         house_type:'商务',
    //         cdb:'无',
    //         area:'140m²',
    //         total_floor:'20楼',
    //         floor:'18楼',
    //         unit_price:'300万',
    //         address:'A街区A花园A栋A层A室',
    //         sale_time:'2020年8月1日',
    //         sale_end_time:'2025年8月19日',
    //         finish_time:'2012年1月10日',
    //         auction_status:'代拍',
    //         create_by:'B某',
    //         update_by:'C某',
    //         house_desc:'无'
        }
    },
    created(){
        this.id = this.$route.params.id;
        this.postList()
        this.getList()
    },
    methods:{
        postList(){debugger
            let data={
            houseId:this.id,
            houseDesc:this.houseDesc,
            createBy:this.createBy,
            updateBy:this.updateBy,
            }
            this.$http.get(this.$api.wqererf+this.id,data).then(res=>{
                console.log(res);
                console.log(res.data);
                this.houseDesc=res.data.houseDesc,
                this.createBy=res.data.createBy,
                this.updateBy=res.data.createBy
            })
        },
        getList(){debugger
            let data={
                page_num:this.page_num,
                page_size:this.page_size,
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
                // houseDesc:this.houseDesc
                }
            this.$http.get(this.$api.rytxc+this.id,data).then(res=>{
                console.log(res);
                console.log(res.data.id);
                this.id=res.data.id
                this.communityName=res.data.communityName
                this.price=res.data.price
                this.county=res.data.county
                this.houseType=res.data.houseType
                this.cdb=res.data.cdb
                this.area=res.data.area
                this.totalFloor=res.data.totalFloor
                this.floor=res.data.floor
                this.unitPrice=res.data.unitPrice
                this.address=res.data.address
                this.saleTime=res.data.saleTime
                this.saleEndTime=res.data.saleEndTime
                this.finishTime=res.data.finishTime
                this.auctionStatu=res.data.auctionStatu
                this.createBy=res.data.createBy
                this.updateBy=res.data.updateBy
                // this.houseDesc=res.data.houseDesc
            })
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
    height: 1400px;
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
    height: 1400px;
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
