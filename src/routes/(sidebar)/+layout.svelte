<script lang="ts">
  import '../../app.css';
  import { beforeNavigate, afterNavigate } from '$app/navigation';
  import NProgress from 'nprogress';
  import 'nprogress/nprogress.css';
  // import AppSidebar from '$lib/components/app-sidebar.svelte';
  // import { ModeWatcher } from 'mode-watcher';
  import { Toaster } from 'svelte-5-french-toast';
  import ActionBar from '$lib/custom/ActionBar.svelte';
  let { children } = $props();

  // 라우팅 시작 시 실행
  beforeNavigate(({ to }) => {
    if (to) NProgress.start();
  });

  // 라우팅 완료 시 실행
  afterNavigate(() => {
    NProgress.done();
  });
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
