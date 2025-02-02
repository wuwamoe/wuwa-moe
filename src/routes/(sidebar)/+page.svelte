<script lang="ts">
  import * as Breadcrumb from '$lib/components/ui/breadcrumb/index.js';
  import BodyWrapper from '$lib/custom/BodyWrapper.svelte';
  import { _ } from 'svelte-i18n';
  import toast from 'svelte-5-french-toast';
  import MaterialSymbolsMoneyBag from '~icons/material-symbols/money-bag';
  import { goto } from '$app/navigation';
</script>

<BodyWrapper>
  <header>
    <!-- <Breadcrumb.Root class="mb-4">
      <Breadcrumb.List>
        <Breadcrumb.Item>
          <Breadcrumb.Page>{$_('page.home')}</Breadcrumb.Page>
        </Breadcrumb.Item>
      </Breadcrumb.List>
    </Breadcrumb.Root> -->

    <h1 class="mb-4 text-4xl font-bold">{$_('page.home')}</h1>
  </header>
  <main>
    <h2 class="mb-2 text-2xl">{$_('home.game-info')}</h2>
    <div class="flex flex-row gap-2">
      <a
        role="button"
        tabindex="0"
        href={`/items`}
        class="flex h-64 w-64 select-none flex-col items-center justify-center rounded-md border border-border bg-background shadow-sm hover:bg-accent hover:text-accent-foreground"
      >
        <MaterialSymbolsMoneyBag class="mb-2 h-12 w-12" />
        <div class="text-xl">{$_('page.items')}</div>
      </a>
    </div>
  </main>
</BodyWrapper>
