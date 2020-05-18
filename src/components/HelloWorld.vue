<template>
  <div class="hello">
    <p>
      Check this link
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <button @click="show_kb = !show_kb">Toggle Keyboard</button>
    <SimpleKeyboard/>
  </div>
</template>

<script>
import SimpleKeyboard from "@/components/SimpleKeyboard"

export default {
  name: 'HelloWorld',
  components: {
    SimpleKeyboard,
  },
  data: () => {
    return {
      show_kb: false,
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
