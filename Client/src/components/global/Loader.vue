

<template>
  
    <div v-once></div>
</template>

<script>
import { pleaseWait } from 'please-wait';
import 'please-wait/build/please-wait.css';
export default {
    
      props: ['isLoading'],
  watch: {
    isLoading: {
      handler(isLoading) {
        if (isLoading) {
          this.open()
        } else {
          this.close()
        }
      },
      immediate: true,
    }
  },
  methods:{
    open() {
      // Attaching a `pleaseWaitInstance` property (no need to declare)...
      if (!this.pleaseWaitInstance) {
        this.pleaseWaitInstance = pleaseWait({
          logo: 'https://media.giphy.com/media/MjLmlz2KfgfuHJdQsy/giphy.gif',
          backgroundColor: 'white',
          loadingHtml: '<h3 class="loading-message">Getting Coffe</h3>'
        })
      }
    },
    close() {
      if (this.pleaseWaitInstance) {
        this.pleaseWaitInstance.finish()
        this.pleaseWaitInstance = null
      }
    }
  
}
}
</script>

<style scoped>
.loading-message {
  font-size: 20px;
}
</style>>
