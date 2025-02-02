<script lang="ts">
  import * as Breadcrumb from '$lib/components/ui/breadcrumb/index.js';
  import BodyWrapper from '$lib/custom/BodyWrapper.svelte';
  import { _ } from 'svelte-i18n';
  import type { PageProps } from './$types';
  import { qualityInfo } from '$lib/constants/general';
  import MaterialSymbolsStar from '~icons/material-symbols/star';
  import MaterialSymbolsLocationOn from '~icons/material-symbols/location-on';

  let { data }: PageProps = $props();
  const item = data.data;
  console.log(item);
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
          <Breadcrumb.Link href="/items">{$_('page.items')}</Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Separator />
        <Breadcrumb.Item>
          <Breadcrumb.Page class="line-clamp-1 max-w-48 overflow-ellipsis"
            >{item?.name ?? $_('page.item_detail')}</Breadcrumb.Page
          >
        </Breadcrumb.Item>
      </Breadcrumb.List>
    </Breadcrumb.Root>

    <div class="mb-4 flex flex-row items-end">
      <h1 class="me-2 text-4xl font-bold">
        {item?.name ?? $_('page.item_detail')}
      </h1>
      {#each { length: item.qualityId ?? 0 }}
        <span><MaterialSymbolsStar class="text-yellow-500" /></span>
      {/each}
    </div>
  </header>
  <main>
    <div class="flex flex-col gap-4 md:flex-row mb-4">
      <img
        class="h-64 w-64 select-none rounded-md border border-border p-2"
        src={`${item.icon.substring(12)}.webp`}
        style={`background-color: ${qualityInfo[item.qualityId].dropColor ?? '#efece1'}20`}
        alt={`${item.id} ${item.name} image`}
      />
      <div>
        <h2 class="mb-2 text-2xl font-bold">{$_('itemdetail.basic')}</h2>
        <div>{item.attributesDescription}</div>
        <div>{item.bgDescription}</div>
      </div>
      
    </div>
    <div>
      <h2 class="mb-2 text-2xl font-bold">{$_('itemdetail.access')}</h2>
      {#each item.itemAccess as itemAccess}
        <div
          class="flex w-full max-w-64 flex-row rounded-md border border-input p-2 items-center mb-1"
        >
          <MaterialSymbolsLocationOn /><span class="ms-2">{itemAccess}</span>
        </div>
      {/each}
    </div>
  </main>
</BodyWrapper>
