<template>
    <div class="top">
        <div class="topleft">
<img src="../assets/ff14-logo.png" height="100px" width="200px" >
        </div>
        <div class="topright">
<h1 style="color:red">Welcome to FFTools</h1>
        </div>

    </div>
</template>

<script>
export default {

}
</script>

<style>
.top{
    display: flex;
    height: 120px;
}
.topleft{
    flex: 0;

    width: 200px;
    background-color: red;

}
.topright{
    flex:1;

}

.topleft img{
    margin-top: 10px;
}


</style>
