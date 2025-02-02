<script lang="ts">
  import { Toaster } from 'svelte-5-french-toast';
  import '../app.css';
  let { children } = $props();
  // import { ModeWatcher } from "mode-watcher";
</script>

<!-- <ModeWatcher /> -->
<Toaster />
{@render children?.()}
