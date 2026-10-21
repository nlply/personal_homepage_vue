<template>
  <div ref="slot" class="visitor-map"></div>
</template>

<script>

import {defineComponent, ref, onMounted} from 'vue'

// MapMyVisitors 访客地图：map.js 会找到 id 为 mapmyvisitors 的 script，把地图插在它后面；w=a 时宽度取父元素宽度
// 参数：cl 文字颜色，co 背景色，t=n 不显示访问数，d 是站点 ID
const MAP_SRC = 'https://mapmyvisitors.com/map.js?cl=ffffff&w=a&t=n&d=iXTVGDXwO4lWwD3mv7sYeQoCEIb8JYsT1GsKbLXU8IQ&co=187fc9'

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
.visitor-map {
  width: 300px;
  max-width: 100%;
  min-height: 150px;
  margin: 48px auto 0;
}
</style>
