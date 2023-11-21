<script setup lang="ts" type="text/partytown">
import { OrbitControls, GLTFModel } from '@tresjs/cientos'
import { ref, shallowRef, watch } from 'vue';
const isVisible = ref(false)
const modelRef = shallowRef<THREE.Object3D>()

watch(modelRef, model => {
  if (model) isVisible.value = model.visible
})
</script>
<template>
<div class="w-[48rem] max-w-none rounded-xl ring-gray-400/10 h-[48rem] mt-32">
  
  <NuxtImg v-if="isVisible == false" class="m-2 mt-8 w-[47rem] h-[40rem] absolute z-[10] select-none" format="webp" src="/pudge_screenshot.png"/>
  
    <TresCanvas alpha>
      <TresPerspectiveCamera :position="[3.5, 3.5, 3.5]" minZoom="1" :args="[45, 1, 0.1, 1000]" />
      <OrbitControls :auto-rotate="true" :enable-zoom="false" :enable-damping="true" :enable-pan="false"/>
      <Suspense>
        
        <GLTFModel path="/pudge.stl.gltf" ref="modelRef" draco/>
        
      </Suspense>
      <TresAmbientLight color="bisque" :intensity="10"/>
    </TresCanvas>
</div>
</template>