<script lang="ts">
  let { children } = $props();
</script>

<div class="p-8 max-w-6xl w-full mx-auto">
  {@render children?.()}
</div>