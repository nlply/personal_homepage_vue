<template>
  <div ref="slot" class="visitor-map"></div>
</template>

<script>

import {defineComponent, ref, onMounted} from 'vue'

// MapMyVisitors 访客地图：map.js 会找到 id 为 mapmyvisitors 的 script，把地图插在它后面；w=a 时宽度取父元素宽度
// 参数照抄 MapMyVisitors 后台生成的代码：d 是站点 ID，w 宽度，co/cl/ct/cmn/cmo 是各处颜色；
// t=m 显示访问量和日期范围，t=n 两个都隐藏，其他值只显示访问量
const MAP_SRC = 'https://mapmyvisitors.com/map.js?cl=ffffff&w=300&t=m&d=iXTVGDXwO4lWwD3mv7sYeQoCEIb8JYsT1GsKbLXU8IQ&co=8ccfff&cmn=ff7a04&cmo=82dd8a&ct=ffffff'

// 脚本每运行一次就记一次访问，所以整个页面只创建一次；
// 切路由回到主页时组件会重新挂载，这时把已经渲染好的地图整个挪进新位置
let holder = null

export default defineComponent({
  setup() {
    const slot = ref(null)

    onMounted(() => {
      if (!holder) {
        holder = document.createElement('div')
        const script = document.createElement('script')
        script.id = 'mapmyvisitors'
        script.src = MAP_SRC
        holder.appendChild(script)
      }
      slot.value.appendChild(holder)
    })

    return {slot}
  }
})
</script>

<style scoped>
/* 地图宽度由 w 参数固定；用 flex 居中，窄屏上比内容区宽时也能两边均匀溢出 */
.visitor-map {
  display: flex;
  justify-content: center;
  min-height: 180px;
  margin-top: 48px;
}
</style>
