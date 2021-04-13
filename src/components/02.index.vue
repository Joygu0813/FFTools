<template>
    <div class="index">
        <!-- 左边栏 -->
        <div class="nuv">
            
            <el-row class="tac">
                <el-col :span="24">
                    <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleNuvOpen" @close="handleNuvClose">
                        <el-submenu index="1">
                            <template slot="title">
                                <i class="el-icon-video-play"></i>
                                <router-link to="/player">播放器</router-link>
                            </template>
                            <el-menu-item-group>
                                
                            <el-menu-item index="1-1">选项1</el-menu-item>
                            <el-menu-item index="1-2">选项2</el-menu-item>
                            <el-menu-item index="1-3">选项3</el-menu-item>
                            </el-menu-item-group>
                            
                            <el-submenu index="1-4" disabled>
                            <template slot="title">选项4</template>
                            <el-menu-item index="1-4-1">选项1</el-menu-item>
                            </el-submenu>
                        </el-submenu>
                            <el-menu-item index="2">
                            <i class="el-icon-s-management"></i>
                            <router-link to="/stuinfo">同学录</router-link>
                            </el-menu-item>
                            <el-menu-item index="3" >
                            <i class="el-icon-document"></i>
                            <router-link to="/compous">计算器</router-link>
                            </el-menu-item>
                            <el-menu-item index="4" disabled>
                            <i class="el-icon-setting"></i>
                            <span slot="title">敬请期待</span>
                            </el-menu-item>
                    </el-menu>
                </el-col>
            </el-row>


            
                
            
        </div>
        <!-- 主体显示 -->
        <div class="main">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
    methods:{
        handleNuvOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleNuvClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }

}
</script>

<style>
.index{
    height: 750px;
    display: flex;
}

.index .nuv{

   width:200px;
    
}
.main{
    flex: 1;
    background-color: grey;

}


.func1{
    margin: 40px 20px;

}
.func2{
    margin: 40px 20px;

}

a {
    /* 清除下划线 */
    text-decoration:none;
    /*  */
    font-size: 30px;/*设置字体大小*/
    
    
    /* margin: 40px 20px; */
    
}

 a:visited {

                color: black;

                text-decoration: none;

            }

a.router-link-exact-active{
    /* color: aqua; */
}
</style>
