<template>
  <div>
    <d-header></d-header>
    <div>
      <div>
        <router-view></router-view>
      </div>
    </div>
    <d-footer></d-footer>
  </div>
</template>

<script>
import DHeader from './DHeader'
import DFooter from './DFooter'
export default {
  components: {
    DFooter,
    DHeader
  }
}
</script>

<style>

</style>