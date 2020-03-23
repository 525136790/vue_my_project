<template>
    <div class='mineWarp'>
        <div class='mine_head'>
            <div data-v-45a2c120="" class="mine-rule">
                <a data-v-45a2c120="" href="javascript:;" class="setUp"></a>
                <a data-v-45a2c120="" href="javascript:;" class="news"></a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'mine'
}
</script>

<style lang="less" scoped>
    .mineWarp{
       position: absolute;
       top:0px;
       width: 100%;
       .mine_head{
            width: 100%;
            height: 2.3rem;
            position: relative;
            background: #fff url(../assets/img/home/bg-mine.png) no-repeat;
            background-size: 100% 100%;
            .mine-rule{
                position: absolute;
                right: .15rem;
                top: .15rem;
                > a{
                    display: inline-block;
                    width: 0.23rem;
                    height: 0.23rem;
                    background-repeat: no-repeat;
                    background-size: 100% 100%;
                    background-position: 50%;
                }
                // .setUp{
                   
                // }
                // .news{
                //     margin-left: .15rem;
                // }
            }
        }
    }
</style>