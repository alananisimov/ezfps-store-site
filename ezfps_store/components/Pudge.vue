<script setup lang="ts">
import { OrbitControls, GLTFModel } from '@tresjs/cientos'
</script>
<template>
<div class="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 hidden lg:block h-[48rem] mt-40">
    <TresCanvas shadows alpha>
      <TresPerspectiveCamera :position="[4, 4, 4]" minZoom="1" :args="[45, 1, 0.1, 1000]"/>
      <OrbitControls auto-rotate :enable-zoom="false" :enable-damping="true" :enable-pan="false"/>
      <Suspense>
        <GLTFModel path="/scene.gltf" ref="modelRef" />
        
      </Suspense>
      <TresDirectionalLight :position="[4, 4, 4]" :intensity="5" cast-shadow />
      <TresDirectionalLight :position="[-4, 4, -4]" :intensity="5" cast-shadow />
    </TresCanvas>
</div>
</template>