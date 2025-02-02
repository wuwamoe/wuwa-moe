<script lang="ts">
  let { children } = $props();
</script>

<div class="px-8 pt-4 pb-8 max-w-[1536px] w-full mx-auto mac-scrollbar">
  {@render children?.()}
</div>