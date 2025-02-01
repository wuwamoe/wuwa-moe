<script lang="ts">
  import '../../app.css';
  import * as Sidebar from '$lib/components/ui/sidebar';
  import AppSidebar from '$lib/components/app-sidebar.svelte';
  import { Toaster } from 'svelte-5-french-toast';
  let { children } = $props();
</script>

<Sidebar.Provider>
  <Toaster />
  <aside>
    <AppSidebar />
  </aside>
  <Sidebar.Inset>
    {@render children?.()}
  </Sidebar.Inset>
</Sidebar.Provider>
