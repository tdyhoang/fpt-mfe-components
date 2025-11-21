<script setup lang="ts">
import { onMounted, computed } from "vue";
import { useRoute, RouterView } from "vue-router";

const loadMFEScript = (id: string, src: string) => {
  if (document.getElementById(id)) return;
  const script = document.createElement("script");
  script.id = id;
  script.src = src;
  script.async = true;
  document.body.appendChild(script);
};

onMounted(() => {
  loadMFEScript("fpt-header", "http://localhost:5001/fpt-header.js");
  loadMFEScript("fpt-footer", "http://localhost:5002/fpt-footer.js");
});

const route = useRoute();

const footerVariant = computed(() => {
  return route.path.includes("khach-hang-doanh-nghiep")
    ? "enterprise"
    : "consumer";
});
</script>

<template>
  <fpt-header />

  <main class="main">
    <RouterView />
  </main>

  <fpt-footer :variant="footerVariant" />
</template>

<style>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
