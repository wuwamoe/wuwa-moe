<script lang="ts">
  import toast from 'svelte-5-french-toast';

  function launchToast() {
    toast.success('Hello, world!');
  }
</script>

<h1>Welcome to SvelteKit</h1>
<p>
  Visit <a href={'#'} on:click={launchToast}>svelte.dev/docs/kit</a> to read the
  documentation
</p>
