
<template>
  <div>
    <!-- <img class="logo-image" :src="logo" alt="Precious Memories logo"> -->
    <img class="logo-image" :src="cardBack" alt="The reverse side of a Precious Memories Card which contains the Precious Memories logo.">
    <p>{{ $t('message.welcome') }}</p>
    <p>{{ $t('message.intro0') }}</p>
    <p>{{ $t('message.intro1') }}</p>
    <p>{{ $t('message.intro2') }}</p>
    <p>{{ $t('message.intro3') }}</p>
  </div>
</template>

<script>
import pMemoriesCardBack from '@/assets/card-back.png';
export default {
  name: 'Home',
  data () {
    return {
    }
  },
  components: {
  },
  computed: {
    // logo() { return pMemoriesLogo },
    cardBack() { return pMemoriesCardBack }
  },
  methods: {
  }
}

</script>


<style>
.logo-image {
  width: 15vw;
}
</style>
