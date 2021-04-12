<template>
    <div class="index">
        <!-- 左边栏 -->
        <div class="nuv">
            <div class="func1"><router-link to="/stuinfo">同学录</router-link></div>
                

                <div class="func2"><router-link to="/player">播放器</router-link></div>
                
            
        </div>
        <!-- 主体显示 -->
        <div class="main">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {

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
    
    
    margin: 40px 20px;
    
}

 a:visited {

                color: black;

                text-decoration: none;

            }

a.router-link-exact-active{
    color: aqua;
}
</style>
