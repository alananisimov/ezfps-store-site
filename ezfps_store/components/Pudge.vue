<script setup lang="ts">
import { OrbitControls, GLTFModel } from '@tresjs/cientos'
const isVisible = ref(false)
const modelRef = shallowRef<THREE.Object3D>()

watch(modelRef, model => {
  // Do something with the model
  if (model) isVisible.value = model.visible
})
</script>
<template>
<div class="w-[48rem] max-w-none rounded-xl ring-gray-400/10 hidden lg:block h-[48rem] mt-16">
  <img v-if="isVisible == false" class="m-2 mt-8 w-[47rem] h-[40rem] absolute z-[10] select-none" src="/pudge_screenshot.png"/>
    <TresCanvas shadows alpha preset="realistic">
      <TresPerspectiveCamera :position="[4, 4, 4]" minZoom="1" :args="[45, 1, 0.1, 1000]" />
      <OrbitControls :auto-rotate="true" :enable-zoom="false" :enable-damping="true" :enable-pan="false"/>
      <Suspense>
        <GLTFModel path="/scene.gltf" ref="modelRef"/>
         
        
      </Suspense>
      <TresDirectionalLight :position="[4, 4, 4]" :intensity="2" cast-shadow color="bisque"/>
      <TresDirectionalLight :position="[-4, 4, -4]" :intensity="2" cast-shadow color="bisque"/>
      <TresDirectionalLight :position="[4, 4, -4]" :intensity="2" cast-shadow color="bisque"/>
      <TresDirectionalLight :position="[-4, 4, 4]" :intensity="2" cast-shadow color="bisque"/>
      <TresDirectionalLight :position="[0, -4, 0]" :intensity="2" cast-shadow color="bisque"/>
    </TresCanvas>
</div>
</template>