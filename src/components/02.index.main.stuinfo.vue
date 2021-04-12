<template>
    <div>
        <div id="app">
             <h1>通讯录</h1>
            <div class="head">
                 <!--输入框-->
                <el-row :gutter="20">
                    <el-col :span="6">
                    <el-input v-model="info.name" placeholder="姓名"></el-input>
                    </el-col>
                    <el-col :span="6">
                    <el-input v-model="info.gender" placeholder="性别"></el-input>
                    </el-col>
                    <el-col :span="6">
                    <el-input v-model="info.phone" placeholder="联系方式"></el-input>
                    </el-col>
                    <el-col :span="6">
                    <el-date-picker v-model="info.birth" type="date" placeholder="选择日期" format="yyyy 年 MM 月 dd 日" value-format="yyyy-MM-dd">
                    </el-date-picker>
                    </el-col>
                    </el-row>
                    <!--添加按钮-->
                    <el-row style="margin-top:20px">
                        <el-col :span="12"><el-button type="primary" class="add-btn" @click="addUser">添加</el-button></el-col>
                        <el-col :span="12"><el-button type="success" class="find-btn" @click="findDialogDisplay">查询</el-button></el-col>

                    

                </el-row>
                </div>
            <div class="body">
                <template>
                <!--element-ui中table获取数据可以用slot-scope="scope"或者直接在列名里写type="index"-->
                <el-table :data="tableData" style="width: 100%" height="500px">

                <el-table-column label="序号" width="50">
                <template slot-scope="scope">
                {{ scope.$index + 1 }}

                </template>
                </el-table-column>
                <el-table-column prop="name" label="姓名" width="180">
                </el-table-column>
                <el-table-column prop="gender" label="性别" width="180">
                </el-table-column>
                <el-table-column prop="phone" label="联系方式" width="180">
                </el-table-column>
                <el-table-column prop="birth" label="出生日期">
                </el-table-column>
                <el-table-column label="操作">
                <template slot-scope="scope">        
                <!--row是取一行的数据，index是序号-->
                <el-button type="primary" icon="el-icon-edit" circle @click="editUser(scope.row,scope.$index)"></el-button>
                <el-button type="danger" icon="el-icon-delete" circle @click="delUser(scope.$index)"></el-button>
                </template>


                </el-table-column>

                </el-table>
                </template>

                </div>
            <div class="dialog">
                <el-dialog title="编辑信息" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
                <div>
                <el-form ref="form" :model="editInfo" label-width="150px">
                <el-form-item label="修改姓名：">
                <el-input v-model="editInfo.name"></el-input>
                </el-form-item>
                <el-form-item label="修改性别：">
                <el-input v-model="editInfo.gender"></el-input>
                </el-form-item>
                <el-form-item label="修改联系方式：">
                <el-input v-model="editInfo.phone"></el-input>
                </el-form-item>
                <el-form-item label="修改出生日期：">
                <el-date-picker v-model="editInfo.birth" type="date" placeholder="选择日期" format="yyyy 年 MM 月 dd 日" value-format="yyyy-MM-dd">
                </el-date-picker>
                </el-form-item>

                </el-form>
                </div>
                <span slot="footer" class="dialog-footer">
                <el-button @click="cancelModify">取 消</el-button>
                <el-button type="primary" @click="confirmInfo">确 定</el-button>
                </span>
                </el-dialog>

                <!--dialog对话框，查询信息-->
                <el-dialog title="查找信息" :visible.sync="dialogFind" width="80%" :before-close="handleFindClose">
                <div>
                <el-input v-model="findInfoName" placeholder="请输入要查找的姓名"></el-input>

                <template>

                <el-table
                :data="findInfo"
                style="width: 100%">
                <el-table-column
                type="index"
                width="50">
                </el-table-column>


                <el-table-column
                prop="name"
                label="姓名"
                width="180">
                </el-table-column>
                <el-table-column
                prop="gender"
                label="性别"
                width="180">
                </el-table-column>
                <el-table-column
                prop="phone"
                label="联系方式">
                </el-table-column>
                <el-table-column
                prop="birth"
                label="出生日期">
                </el-table-column>
                <el-table-column label="操作">
                <template slot-scope="scope">        
                <!--row是取一行的数据，index是序号-->
                <el-button type="primary" icon="el-icon-edit" circle @click="editFindUser(scope.row,scope.$index)"></el-button>
                <el-button type="danger" icon="el-icon-delete" circle @click="delFindUser(scope.$index)"></el-button>
                </template>


                </el-table-column>
                </el-table>
                </template>


                </div>
                <span slot="footer" class="dialog-footer">
                <el-button @click="dialogFind = false">取 消</el-button>
                <el-button type="primary" @click="findInfoOut">查 找</el-button>
                </span>
                </el-dialog>



                <!--dialog对话框，编辑信息-->
                <!-- <el-dialog title="编辑信息" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
                <div>
                <el-form ref="form" :model="editInfo" label-width="150px">
                <el-form-item label="修改姓名：">
                <el-input v-model="editInfo.name"></el-input>
                </el-form-item>
                <el-form-item label="修改性别：">
                <el-input v-model="editInfo.gender"></el-input>
                </el-form-item>
                <el-form-item label="修改联系方式：">
                <el-input v-model="editInfo.phone"></el-input>
                </el-form-item>
                <el-form-item label="修改出生日期：">
                <el-date-picker v-model="editInfo.birth" type="date" placeholder="选择日期" format="yyyy 年 MM 月 dd 日" value-format="yyyy-MM-dd">
                </el-date-picker>
                </el-form-item>

                </el-form>
                </div>
                <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="confirmFindInfo">确 定</el-button>
                </span>
                </el-dialog> -->


                <!-- 一个负责查询后编辑对应信息的dialog -->
                <el-dialog title="编辑信息" :visible.sync="dialogFindUpdate" width="30%" :before-close="closeFialogFindUpdate">
                <div>
                <el-form ref="form" :model="editInfo" label-width="150px">
                <el-form-item label="修改姓名：">
                <el-input v-model="editInfo.name"></el-input>
                </el-form-item>
                <el-form-item label="修改性别：">
                <el-input v-model="editInfo.gender"></el-input>
                </el-form-item>
                <el-form-item label="修改联系方式：">
                <el-input v-model="editInfo.phone"></el-input>
                </el-form-item>
                <el-form-item label="修改出生日期：">
                <el-date-picker v-model="editInfo.birth" type="date" placeholder="选择日期" format="yyyy 年 MM 月 dd 日" value-format="yyyy-MM-dd">
                </el-date-picker>
                </el-form-item>

                </el-form>
                </div>
                <span slot="footer" class="dialog-footer">
                <el-button @click="dialogFindUpdate = false">取 消</el-button>
                <el-button type="primary" @click="confirmFindInfo">确 定</el-button>
                </span>
                </el-dialog>








            </div>
           
        </div>
    </div>
        
    
</template>

<script>
export default {
    data() {
        return {
            //录入的信息
            info: {
                name: '',
                gender: '',
                phone: '',
                birth: ''
            },
            //表单数据
            tableData: [{
                    name: 'Joy',
                    gender: '男',
                    phone: '13861870398',
                    birth: '1998-08-13'
                }, {
                    name: 'Sam',
                    gender: '男',
                    phone: '17892001341',
                    birth: '1979-12-16'
                }, {
                    name: 'Lucy',
                    gender: '女',
                    phone: '13123145123',
                    birth: '2000-03-10'
                },
                {
                    name: 'Joy',
                    gender: '女',
                    phone: '13123145123',
                    birth: '1979-12-16'
                },
            ],
            dialogVisible: false,
            dialogFind: false,
            dialogFindUpdate: false,
            beforeindex: 0,
            editInfo: {
                name: '',
                gender: '',
                phone: '',
                birth: '',

            },
            findInfoName: '',
            findInfo: [],
            findUpdateIndex:0,
            findDataTableIndex:0,


        }
    
    },
    methods:{
        /*-----------------------------------------------------------------*/
        //增
        addUser() {
            //数据校验
            if (!this.info.name) {
                this.$message({
                    message: '请输入姓名',
                    type: 'warning'
                });
                return;
            }

            if (this.info.gender != "男" && this.info.gender != "女") {
                this.$message({
                    message: '请输入正确的性别',
                    type: 'warning'
                });
                return;
            }


            //正则校验
            if (!/^1[3456789]\d{9}$/.test(this.info.phone)) {
                this.$message({
                    message: '请输入正确的电话号码',
                    type: 'warning'
                });
                return;
            }

            if (!this.info.birth) {
                this.$message({
                    message: '请输入出生日期',
                    type: 'warning'
                });
                return;
            }

            this.tableData.push(this.info);
            //清空
            this.info = {
                name: '',
                gender: '',
                phone: '',
                birth: ''
            };
        },

        //删
        delUser(index) {
            //console.log(index);
            //弹框提示用户是否删除

            this.$confirm('此操作将永久删除该信息, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.tableData.splice(index, 1);
                this.$message({

                    type: 'success',
                    message: '删除成功!'
                });
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消删除'
                });
            });
            //从index往后删一位
            //this.tableData.splice(index, 1);
        },

        /*-----------------------------------------------------------------*/
        //改
        //这部分主要是将要修改的信息存入一个对象
        cancelModify(){
            this.dialogVisible = false;
            this.$message({
          message: '已取消修改',
          type: 'warning'
        });

        },

        editUser(item, index) {

            //this.dialogVisible = ture;
            //console.log(item);
            /*beforinfo = {
                    name: item.name,
                    gender: item.gender,
                    phone: item.phone,
                    birth: item.birth,
                }*/
            //console.log(beforinfo);
            this.beforeindex = index;
            this.editInfo = {
                name: item.name,
                gender: item.gender,
                phone: item.phone,
                birth: item.birth,
            }
            this.dialogVisible = true;
            //console.log(this.editinfo.name);
        },

        //真正起到修改作用的部分
        confirmInfo() {
            //this.dialogVisible = false;
            //数据修改了，但不会响应
            //this.tableData[this.beforeindex] = this.editinfo;
            //Vue.set(改变的对象数组, 序列号, 改变后的数据);
            //this.tableData.splice(序列号 , 1 , 改变后的数据)也是同样的效果
            //对修改的数据进行校验
            if (!this.editInfo.name) {
                this.$message({
                    message: '请输入姓名',
                    type: 'warning'
                });
                return;
            } else if (this.editInfo.gender != "男" && this.editInfo.gender != "女") {
                this.$message({
                    message: '请输入正确的性别',
                    type: 'warning'
                });
                return;
            }


            //正则校验
            else if (!/^1[3456789]\d{9}$/.test(this.editInfo.phone)) {
                this.$message({
                    message: '请输入正确的电话号码',
                    type: 'warning'
                });
                return;
            } else if (!this.editInfo.birth) {
                this.$message({
                    message: '请输入出生日期',
                    type: 'warning'
                });
                return;
            } else {
                this.dialogVisible = false;
                this.tableData.splice(this.beforeindex , 1 , this.editInfo)
                //Vue.set(this.tableData, this.beforeindex, this.editInfo);
                this.$message({
                     message: '修改成功',
                    type: 'success'
                });
            }



        },


        /*-----------------------------------------------------------------*/
        //dialog对话框的关闭函数
        handleClose(done) {
            this.$confirm('确定放弃编辑吗？')
                .then(_ => {
                    this.dialogVisible = false;
                    //done();
                })
                .catch(_ => {});
        },
        handleFindClose(done) {
            this.$confirm('确定放弃查找信息吗？')
                .then(_ => {
                    this.dialogFind = false;
                    //done();
                })
                .catch(_ => {});
        },


        closeFialogFindUpdate(done){
             this.$confirm('确定放弃编辑吗？')
                .then(_ => {
                    this.dialogFindUpdate = false;
                    //done();
                })
                .catch(_ => {});
        },
        /*-----------------------------------------------------------------*/

        //查
        findInfoOut() {
            //console.log(this.findInfoName);
            //清空
            this.findInfo = [];
            var name = this.findInfoName;
            this.findInfoName = '';
            if (name) {
                for (var i = 0; i < this.tableData.length; i++) {
                    if (this.tableData[i].name === name) {
                        //this.findInfo.splice(0, 1, this.tableData[i])
                        this.findInfo.push(this.tableData[i]);
                    }

                }
            } else {
                this.$message({
                    showClose: true,
                    message: '请输入查找信息的姓名',
                    type: 'warning'
                });

            }




            //console.log(this.findInfo);

        },

        findDialogDisplay() {
            this.dialogFind = true;
            //初始化
            this.findInfoName = '';
            this.findInfo = [];

        },

        delFindUser(index) {
            


            this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
                }).then(() => {

                    /* 删除查询列表中的和总表中的对应信息 */
                    for(var i = 0;i<this.tableData.length;i++){
                        if(this.tableData[i].name == this.findInfo[index].name
                        &&this.tableData[i].gender == this.findInfo[index].gender
                        &&this.tableData[i].phone == this.findInfo[index].phone
                        &&this.tableData[i].birth == this.findInfo[index].birth){
                            this.tableData.splice(i,1);
                            //this.findInfo.splice(index,1);
                        }
                    }
                    this.findInfo.splice(index,1);


                    this.$message({
                    type: 'success',
                    message: '删除成功!'
                    });
                    }).catch(() => {
                        this.$message({
                        type: 'info',
                        message: '已取消删除'
                        });          
                    });
        },

        editFindUser(item, index) {


            this.dialogFindUpdate = true;
            /* this.editInfo = this.findInfo[index]; */
            /* 传数据给dialogFindUpdate */
            this.editInfo={
                name: item.name,
                birth:item.birth,
                gender:item.gender,
                phone: item.phone,
            }
            this.findUpdateIndex = index;

            /* 查找原table中对应的数据的Index */
            for(var i =0;i<this.tableData.length;i++){
                if(this.tableData[i].name == this.editInfo.name&&
                this.tableData[i].gender == this.editInfo.gender&&
                this.tableData[i].birth == this.editInfo.birth&&
                this.tableData[i].phone == this.editInfo.phone){
                    this.findDataTableIndex = i;
                }
            }
            console.log(this.findDataTableIndex);


            /* console.log(this.editInfo); */
            /* console.log(item);
            this.beforeindex = index;
            this.editInfo = {
                name: item.name,
                gender: item.gender,
                phone: item.phone,
                birth: item.birth,
            }
            this.dialogVisible = true; */

        },

        confirmFindInfo() {
            if (!this.editInfo.name) {
                this.$message({
                    message: '请输入姓名',
                    type: 'warning'
                });
                return;
            } else if (this.editInfo.gender != "男" && this.editInfo.gender != "女") {
                this.$message({
                    message: '请输入正确的性别',
                    type: 'warning'
                });
                return;
            }


            //正则校验
            else if (!/^1[3456789]\d{9}$/.test(this.editInfo.phone)) {
                this.$message({
                    message: '请输入正确的电话号码',
                    type: 'warning'
                });
                return;
            } else if (!this.editInfo.birth) {
                this.$message({
                    message: '请输入出生日期',
                    type: 'warning'
                });
                return;
            } else {
                this.dialogFindUpdate = false;
                /* 通过数据校验之后，修改查询dialog中对应的数据和原表单DataTable中对应的数据 */
                this.findInfo.splice(this.findUpdateIndex,1,this.editInfo);
                this.tableData.splice(this.findDataTableIndex,1,this.editInfo);



                /* this.dialogVisible = false;
                this.findInfo.splice(this.beforeindex , 1 , this.editInfo);
                //Vue.set(this.findInfo, this.beforeindex, this.editInfo);
                for (var i = 0; i < this.tableData.length; i++) {
                    if (this.tableData[i].name === this.editInfo.name &&
                        this.tableData[i].gender === this.editInfo.gender &&
                        this.tableData[i].phone === this.editInfo.phone &&
                        this.tableData[i].birth === this.editInfo.birth) {
                        this.findInfo.splice(i , 1 , this.editInfo)
                        //Vue.set(this.tableData, i, this.editInfo);
                    }
                } */

            }




        }



    }
}
</script>

<style>
#app {
    width: 1024px;
    margin: 0 auto;
    height: 720px;

/*     position: absolute;
    top: 5; bottom: 0;
    left: 0; right: 0;
 */
/* 这里实现了毛玻璃效果 */
    line-height: 2;

    border-radius: 5px;
    background: rgba(255, 255, 255, .3);
    box-shadow: 3px 3px 6px 3px rgba(0, 0, 0, .3);
}

.add-btn {
    margin-top: 20px;
    width: 100%;
}

.find-btn {
    margin-top: 20px;
    width: 100%;
}

.body {
    margin-top: 20px;
}




</style>
