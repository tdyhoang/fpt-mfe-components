<script setup lang="ts">
import { onMounted, computed } from "vue";
import { useRoute, RouterView } from "vue-router";

const loadScript = (src: string) => {
  return new Promise((resolve, reject) => {
    if (document.querySelector(`script[src="${src}"]`)) {
      resolve(true);
      return;
    }
    const script = document.createElement("script");
    script.src = src;
    script.async = true;
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });
};

onMounted(async () => {
  await loadScript("http://localhost:5005/libs/vendor.js");

  await Promise.all([
    loadScript("http://localhost:5005/latest/fpt-header.js"),
    loadScript("http://localhost:5005/latest/fpt-footer.js"),
  ]);
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
