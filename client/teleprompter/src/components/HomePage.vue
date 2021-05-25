<template>
  <div class="container">
    <div class="form">
      <input type="title" />
      <textarea
        cols="30"
        rows="10"
        v-model="text"
        placeholder="Text der Rede"
      ></textarea>

      <button @click.prevent="submitSpeech"></button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
      title: '',
      text: '',
    }
  },
  methods: {
    submitSpeech() {
      console.log('Submit')
      console.log(this.title)
    },
  },
}
</script>

<style scoped></style>
