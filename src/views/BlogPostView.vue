<template>
  <div class="blog-post">
    <BlogPost :slug="slug"/>
  </div>
</template>

<script>
import BlogPost from '@/components/BlogPost.vue'

export default {
  name: 'BlogPostView',
  components: {
    BlogPost
  },
  props: {
    slug: String
  }
}
</script>
