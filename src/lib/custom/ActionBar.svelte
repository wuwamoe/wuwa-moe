<script lang="ts">
  import LightLogo from '$lib/assets/logo-light.png';
  import DarkLogo from '$lib/assets/logo-dark.png';
  import { _ } from 'svelte-i18n';
  import Button from '$lib/components/ui/button/button.svelte';

  const menu = [
    {
      endpoint: '/',
      label: $_('common.nav_home'),
    },
    {
      endpoint: '/items',
      label: $_('common.nav_items'),
    },
  ];
</script>

<div class="mx-auto w-full max-w-[1536px] px-8 py-4 sticky">
  <div class="flex flex-row items-stretch justify-between bg-background/90">
    <div class="flex flex-row items-center">
      <div class="me-8 h-10 w-10">
        <img
          src={LightLogo}
          alt={$_('common.alt_logo')}
          class="block h-10 w-10 dark:hidden"
        />
        <img
          src={DarkLogo}
          alt={$_('common.alt_logo')}
          class="hidden h-10 w-10 dark:block"
        />
      </div>
      <div>
        {#each menu as it}
          <a href={it.endpoint} class="text-md h-full px-8 text-foreground">
            {it.label}
          </a>
        {/each}
      </div>
    </div>
    <div class="flex flex-row items-center">
      <Button href="https://maps.wuwa.moe/">{$_("common.to-maps")}</Button>
    </div>
  </div>
</div>
