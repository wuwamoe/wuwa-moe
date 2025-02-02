<script lang="ts">
  import '../../app.css';
  import * as Sidebar from '$lib/components/ui/sidebar';
  // import AppSidebar from '$lib/components/app-sidebar.svelte';
  // import { ModeWatcher } from 'mode-watcher';
  import { Toaster } from 'svelte-5-french-toast';
  import ActionBar from '$lib/custom/ActionBar.svelte';
  let { children } = $props();
</script>

<Toaster />
<!-- <ModeWatcher defaultMode="light" /> -->
<!-- <aside>
    <AppSidebar />
  </aside> -->
<nav>
  <ActionBar />
</nav>
{@render children?.()}
