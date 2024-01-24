<template>
  <div>
    <button @click="pdf">
      pdf
    </button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      pdf_url: '../../resume.pdf'
    }
  },
  methods: {
    pdf(){
      window.open( `/pdf/web/viewer.html?file=${encodeURIComponent(this.pdf_url)}`);
    }
  }
}
</script>