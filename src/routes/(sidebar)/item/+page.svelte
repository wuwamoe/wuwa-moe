<script lang="ts">
  import * as Breadcrumb from '$lib/components/ui/breadcrumb/index.js';
  import BodyWrapper from '$lib/custom/BodyWrapper.svelte';
  import { _ } from 'svelte-i18n';
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

    <h1 class="text-4xl font-bold">{$_('page.items')}</h1>
  </header>
</BodyWrapper>
