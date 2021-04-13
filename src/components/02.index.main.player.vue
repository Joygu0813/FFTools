<template>

    <div id="player">
        <h1>MusicPlayer</h1>
        <div class="search">
            <el-row type="flex" class="row1" justify="center">
                <el-col :span="12"><el-input v-model="searchKeywords" placeholder="请输入内容"></el-input></el-col>
                <el-button type="primary" @click="searchMusic">搜索</el-button>
                
            </el-row>
            
            <el-row type="flex" class="row2" justify="center" >
                <div class="searchlist">
                <el-table
                :data="resultData"
                style="width: 100%" height="500px" display=false>
                <el-table-column
                prop="date"
                label="序号"
                width="50" type="index">
                </el-table-column>
                <el-table-column
                prop="name"
                label="歌名"
                width="180">
                </el-table-column>
                <el-table-column
                prop="artists.0.name"
                label="歌手">
                </el-table-column>
                <el-table-column
                
                label="">
                <el-button type="danger" icon="el-icon-caret-right" circle></el-button>
                </el-table-column>
                </el-table>
                </div>

                
                


                
                
                
            </el-row>
        </div>
        
        <div class="searchlist">

        </div>
    
    
    </div>
</template>

<script>
export default {
    data(){
        return{
            searchKeywords:'',
            resultData:[],
            

        }
        
    },
    computed: {
      
    },
    methods:{
        searchMusic(){
            
            if(!this.searchKeywords){
                this.$message({
                     message: '请输入要搜索的歌曲名',
                    type: 'warning'
                });
            }
            else{
                /* this.axios.get("http://localhost:3000/cloudsearch?keywords='海阔天空'").then(res=>{
                    console.log(res)
                }) */
                this.axios({
                    methods:"get",
                    url:"http://localhost:3000/search",
                    
                    params: {
                        keywords: this.searchKeywords,
                     }
                }).then(res=>{
                    this.resultData = res.data.result.songs;
                    console.log(this.resultData);
                })

            }
        },
        load () {
           /*  this.loading = true
            setTimeout(() => {
            this.count += 2
            this.loading = false
            }, 2000) */
         }

        }

}
</script>

<style>
#player{
    width: 1024px;
    margin: 0 auto;
    height: 720px;
    /* display: flex; */

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

.search ol{
    display: block;
    line-height: 2;

    border-radius: 5px;
    background: rgba(255, 255, 255, .3);
    box-shadow: 3px 3px 6px 3px rgba(0, 0, 0, .3);
}



</style>
