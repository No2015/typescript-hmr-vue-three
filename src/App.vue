<template>
	<div id="app">
		<div class="base-map">
			<canvas width="1920" height="969" ref="Canvas"></canvas>
		</div>
	</div>
</template>

<script>
export default {
	data () {
		return {
		}
	},
	created() {
		console.log('>>>> process.env', process.env)
	},
	mounted () {
		console.log('>>>> this.$work', this.$work)
		const config = [
			{
				name: 'test',
				path: '/test/a.glb'
			}
		]
		const canvas = this.$refs.Canvas
		this.$work.initWork(config, canvas)
	},
	methods: {
	}
}
</script>

<style lang="scss" scoped>
#app {
  height: 100%;
  width: 100%;
  position: relative;
  background: #000;
  color: #fff;
  .base-map {
	position: absolute;
	width: 100%;
	height: 100%;
	left: 0;
	top: 0;
	z-index: 0;
  }
}
</style>
