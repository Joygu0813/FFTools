<template>
    <div id="player">
        <h1>MusicPlayer</h1>
        <div class="head">
            <el-row type="flex" class="row-bg" justify="center">
                <el-col :span="12"><el-input v-model="searchKeywords" placeholder="请输入内容"></el-input></el-col>
                <el-button type="primary">搜索</el-button>
                
            </el-row>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            searchKeywords:'',

        }
        
    },
    methods:{

        }

}
</script>

<style>
#player{
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

</style>
