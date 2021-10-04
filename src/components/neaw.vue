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
            <div class="weg"><router-link :to="{ path: '/'}" ><button class="gd" @click="handletc">退出后台</button></router-link></div>
        </div>
        <div class="ss22">
            <div class="ss221">产品信息处理</div>
            <div class="ss2221">
            <input id="ss" type="text" v-model="searchLike" placeholder="请输入小区名称" onfocus="this.placeholder=''"/>
            <input @click="handlesu(searchLike)" id="su" type="submit" value="搜索"/>
            </div>
            <div class="ss2222">
            <router-link :to="{ path: 'mainst'}" ><button class="ga">添加产品信息</button></router-link>
            </div>
            <div class="ss223">
                <!-- <el-table :data="tableData" style="width: 100%"> -->
            <!-- <el-table :data="tableData" style="width:1050px;">
                <el-table-column prop="id" label="房屋序号" width="180">
                </el-table-column>
                <el-table-column prop="communityName" label="小区名" width="180">
                </el-table-column>
                <el-table-column prop="unitPrice" label="单价">
                </el-table-column>
                <el-table-column prop="address" label="地址">
                </el-table-column>
                <el-table-column prop="operate" label="操作">
                </el-table-column> -->
            <table :data="tableData" align="center" style="border-right: #D3D3D3 1px dashed; border-top: #D3D3D3 1px dashed; border-left: #D3D3D3 1px dashed; border-bottom: #D3D3D3 1px dashed; border-collapse: collapse;width:1050px;background:white;" bordercolor=#000000 height=100 cellPadding=1 width=250 border=1 >
                <td><center>房屋序号</center></td><td><center>小区名</center></td><td><center>单价</center></td><td><center>地址</center></td><td><center>操作</center></td>
                <tr v-for="item in list" :key="item.id" style="height:65px;border-right: #D3D3D3 1px dashed; border-top: #D3D3D3 1px dashed; border-left: #D3D3D3 1px dashed; border-bottom: #D3D3D3 1px dashed;">
                    <td><center><input id="id" v-model="item.id" type="text" readonly style="background:rgba(255, 192, 203, 0);border:2px solid rgba(255, 192, 203, 0);"></center></td>
                    <td><center><input id="communityName" v-model="item.communityName" type="text" readonly style="background:rgba(255, 192, 203, 0);border:2px solid rgba(255, 192, 203, 0);"></center></td>
                    <td><center><input id="unitPrice" v-model="item.unitPrice" type="text" readonly style="background:rgba(255, 192, 203, 0);border:2px solid rgba(255, 192, 203, 0);"></center></td>
                    <td><center><input id="address" v-model="item.address" type="text" readonly style="background:rgba(255, 192, 203, 0);border:2px solid rgba(255, 192, 203, 0);"></center></td>
                    <td style="width:150px;"><center><router-link :to="{ name: 'look', params:{id:item.id}}" ><button class="bc">查看</button></router-link><router-link :to="{ name: 'fix', params:{id:item.id}}" ><button class="bc">修改</button></router-link><button type="primary" @click="handleRemove(item.id)" class="bc">删除</button></center></td>
                </tr>
            <!-- </el-table> -->
            </table>
            </div>
            <div class="block">
                <el-pagination
                class="blok"
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="pageNum"
                :page-sizes="[10, 20, 50, 100, 500]"
                :page-size="pageSize"
                layout="total, sizes, prev, pager, next, jumper"
                :total="totalSize">
                </el-pagination>
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
    data(){
        return{
            // inject: ['reload'],
            totalSize:'{{totalSize}}',
            // tableData:[
            // {id:'{{item.id}}',
            // communityName:'{{item.communityName}}',
            // unitPrice:'{{item.unitPrice}}',
            // address:'{{item.address}}',}
            // ],
            tableData:[],
            pageNum:1,
            pageSize:20,
            searchLike:'',
            sort:'0',
            content: [],
            // loading: false,
            // isRouterAlive: true,
            page_num:1,
            page_size:18,
            list:[
            {id:'{{item.id}}',
            communityName:'{{item.communityName}}',
            unitPrice:'{{item.unitPrice}}',
            address:'{{item.address}}',}
            ],
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
    // provide(){
    //     return {
    //         reload:this.reload
    //     }
    // },
    created(){
        this.getList()
        this.postList()
    },
    methods:{
        handletc(){
            window.localStorage.clear()
        },
        // Mouseover() {
        //     console.log("进入 悬停区域");
        //     this.avtivecolor = "color:#fede0e"; // 进入 悬停区域,更改文字颜色
        //     },
        //     // 鼠标"离开"触发此方法
        // categoryMouseleave(index) {
        //     console.log("离开 悬停区域");
        //     this.avtivecolor = "color:#b8b8b8"; // 离开 悬停区域,文字颜色复原
        // },
        handlesu(searchLike){
            let data={
                searchLike:searchLike
            }
            this.$http.post(this.$api.asdaaf,data).then(res=>{
            // console.log(res);
            // console.log(eval("("+res.data+")"));
            console.log(data);
            })
            this.$message({
              message: '搜索成功',
              type: 'success'
            });
            this.postList()
        },
        postList(){debugger
        let data={
            // totalSize:this.totalSize,
            pageNum:this.pageNum,
            pageSize:this.pageSize,
            searchLike:this.searchLike,
            sort:this.sort,
            content:this.content,
        }
        this.$http.post(this.$api.asdaaf,data).then(res=>{
            console.log(data);
            console.log(res);
            console.log(res.data.totalSize);
            this.totalSize=res.data.totalSize
            this.pageNum=res.data.pageNum
            this.pageSize=res.data.pageSize
            this.searchLike=res.data.searchLike
            this.sort=res.data.sort
            this.content=res.data.content
            }).catch((e) => {});
        },
        handleSizeChange(newSize) {debugger
        this.pageSize=newSize,
        this.postList()
        },
        handleCurrentChange (newPage) {debugger
            this.pageNum=newPage,
            this.postList()
        },
        // handleSizeChange(val) {debugger
        //     var pageSize = '${val}';
        //     this.pageNum=1;
        //     this.pageSize= parseInt(pageSize);
        //     this.$http.post(this.$api.asdaaf,data).then(res=>{
        //     console.log(data);
        //     console.log(res)
        //     console.log(res.data.totalSize)
        //     })
        // },
        // handleCurrentChange(val){
        //     var pageSize=this.pageSize;
        //     // this.pageNo=pageNo;
        //     console.log('pageSize:'+this.pageSize)
        //     this.getAndDraw(parseInt(pageNo),parseInt(pageSize));
        //     },
        handleRemove(id){debugger
        this.$confirm('确定删除该记录吗？ ', '提示', {
          type: 'warning'
        }).then(() => {
        let data={
          id:id,
        }
        this.$http.delete(this.$api.etrh+id,data).then(res=>{
            // console.log(res);
            console.log(data);
            // console.log(data.id);
            // console.log(data.communityName);
            // console.log(res.data);
          this.$message({
              message: '删除成功',
              type: 'success'
            });
            this.getList(id);
          });
        })
        .catch(() => {
          console.log('删除失败');
        })
        },
        getList(){debugger
            // let data={
            //     page_num:this.page_num,
            //     page_size:this.page_size,
            //     id:this.id,
            //     communityName:this.communityName,
            //     unitPrice:this.unitPrice,
            //     // county:this.county,
            //     // house_type:this.house_type,
            //     // cdb:this.cdb,
            //     // area:this.area,
            //     // total_floor:this.total_floor,
            //     // floor:this.floor,
            //     // unit_price:this.unit_price,
            //     address:this.address,
            //     // sale_time:this.sale_time,
            //     // sale_end_time:this.sale_end_time,
            //     // finish_time:this.finish_time,
            //     // auction_status:this.auction_status,
            //     // create_by:this.create_by,
            //     // update_by:this.update_by,
            //     // house_desc:this.house_desc
            //     }
            this.$http.get(this.$api.asfaxs).then(res=>{
                console.log(res);
                // console.log(res.data.id);
                this.list=res.data
                // this.id=res.data.id
                // console.log(res.data.communityName);
                // this.communityName=res.data.communityName
                // console.log(res.data.unitPrice);
                // this.unitPrice=res.data.unitPrice
                // this.county=res.data.county
                // this.house_type=res.data.house_type
                // this.cdb=res.data.cdb
                // this.area=res.data.area
                // this.total_floor=res.data.total_floor
                // this.floor=res.data.floor
                // this.unit_price=res.data.unit_price
                // console.log(res.data.address);
                this.address=res.data.address
                // this.sale_time=res.data.sale_time
                // this.sale_end_time=res.data.sale_end_time
                // this.finish_time=res.data.finish_time
                // this.auction_statu=res.data.auction_statu
                // this.create_by=res.data.create_by
                // this.update_by=res.data.update_by
                // this.house_desc=res.data.house_desc
            }).catch((e) => {});
        },
        // select_user(){
        //     this.loading = true;
        //     this.searUser.currentPage = this.currentPage; 
        //     this.searUser.pageSize = this.pageSize;
        //     this.$http.get(this.$api.detailsHoues,data).then(res=>{
        //             this.loading = false;
        //             window.console.log(JSON.stringify(res));
        //             this.tableData = res.data.records;
        //             this.total = res.data.total;
        //         }).catch(err => {
        //             this.loading = false;
        //             this.$message.error(err);
        //         });
        // },
        // handleCurrentChange(val){
        //     this.currentPage = val;
        //     this.select_user();
        // },
        // handleSizeChange(val){
        //     this.pageSize = val;
        // }
    },
    // mounted() {
    //   this.getList();
    // }
}
</script>

<style>
/* table {
            border-right: 1px solid black;
            border-bottom: 1px solid black;
        }
table tr {
            box-sizing: border-box;
            border-top: 1px solid black;
            border-left: 1px solid black;
        } */
/* body{
    background: blue;
} */
/* table body tr:hover>td { 
    background-color: #cccccc;
} */
.el-pagination pager{
    width: 800px;
}
.block{
    margin-left: 40px;
}
.ga{
    font-size: 14px;
    background: rgba(255, 192, 203, 0);
    margin-top: -5px;
}
.ss2221{
    margin-top: -70px;
    height: 70px;
    margin-left: -35px;
}
.ss2222{
    margin-top: -60px;
    margin-left: 970px;
}
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
}
/* table{
    width: 1090px;
} */
.ss221{
    /* width: 1090px; */
    height: 100px;
}
.ss223{
    /* width: 1090px; */
    /* height: 491px; */
    margin-top: 20px;
    /* border: 1px solid yellow; */
	background: white;
	background-clip: padding-box;
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
    background-size: cover;
    background: #C0C0C0;
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
    background: #F5F5F5;
    background-size: cover;
    margin: 0px;
    width: 1089px;
    height: 2500px;
    margin-top: -5px;
    margin-right: 50px;
}
.mai{
    display: -webkit-flex;
    display:flex;
    /* margin-top: -55px; */
    margin: 0px;
    /* background: #F5F5F5; */
    background-size:cover;
    /* position: fixed; */
    background-attachment:fixed;
    /* margin-top: -100px; */
    /* margin-top:-60px ; */
}
.ss1{
    /* width: 260px;
    height: 641px; */
    background-color: black;
    text-align: left;
    width: 260px;
    height: 2500px;
    margin: 0px;
    margin-top: -5px;
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
.bc{
    background-color: rgba(255, 192, 203, 0);
    font-size: 13px;
    color: black;
    text-align: left;
    width: 40px;
    cursor:pointer;
}
#su{
    background-color: #E86300;
    margin:0px 0px 0px -1px;
    border: 0px;
    height: 40px;
    width: 83px;
    border-radius: 0px 10px 10px 0px;
    color: white;
    border: 0px solid red;
    cursor:pointer;
}
#ss{
    margin: 0px 0px 0px 35px;
    width:385px;
    height: 36px;
    border: 1px solid grey;
    border-radius: 4px 0px 0px 4px;
}
</style>
