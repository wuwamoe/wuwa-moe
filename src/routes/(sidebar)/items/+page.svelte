<script lang="ts">
  import * as Breadcrumb from '$lib/components/ui/breadcrumb/index.js';
  import BodyWrapper from '$lib/custom/BodyWrapper.svelte';
  import { _ } from 'svelte-i18n';

  import type { PageProps } from './$types';
  import { qualityInfo } from '$lib/constants/general';

  let { data }: PageProps = $props();
</script>

<BodyWrapper>
  <header>
    <Breadcrumb.Root class="mb-4">
      <Breadcrumb.List>
        <Breadcrumb.Item>
          <Breadcrumb.Link href="/">{$_('page.home')}</Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Separator />
        <Breadcrumb.Item>
          <Breadcrumb.Page>{$_('page.items')}</Breadcrumb.Page>
        </Breadcrumb.Item>
      </Breadcrumb.List>
    </Breadcrumb.Root>

    <h1 class="mb-4 text-4xl font-bold">{$_('page.items')}</h1>
  </header>
  <main>
    <div class="flex flex-wrap gap-x-2 gap-y-4">
      {#each data.data.list as it, index (it.id)}
        <a
          role="button"
          tabindex="0"
          href={`/items/${it.id}`}
          class="w-36 select-none rounded-md border border-border bg-background shadow-sm hover:bg-accent hover:text-accent-foreground"
        >
          <img
            class="h-36 w-36 p-4"
            src={`${it.icon.substring(12)}.webp`}
            style={`background-color: ${qualityInfo[it.qualityId].dropColor ?? '#efece1'}20`}
            alt={`${it.id} ${it.name} image`}
          />
          <div
            style={`background-color: ${qualityInfo[it.qualityId].dropColor ?? '#efece1'}`}
            class="h-1 w-full"
          ></div>
          <div class="line-clamp-2 min-h-12 break-keep p-1 text-center">
            {it.name}
          </div>
        </a>
      {/each}
    </div>
  </main>
</BodyWrapper>
