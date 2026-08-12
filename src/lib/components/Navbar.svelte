<script lang="ts">
  import { AppBar } from "@skeletonlabs/skeleton-svelte";
  import { page } from "$app/stores";
  import ThemeSwitch from "./ThemeSwitch.svelte";
  import UserMenu from "./UserMenu.svelte";
  import HomeIcon from "@lucide/svelte/icons/home";
</script>

<AppBar>
  <AppBar.Toolbar class="flex items-center">
    <AppBar.Lead>
      {#if $page.url.pathname !== "/"}
        <a href="/"><HomeIcon /></a>
      {/if}
    </AppBar.Lead>
    <AppBar.Headline class="flex justify-center">
      <span class="text-2xl">Svelte Flight Booking Application</span>
    </AppBar.Headline>
    <AppBar.Trail class="flex items-center justify-end gap-3">
      <ThemeSwitch />
      <UserMenu />
    </AppBar.Trail>
  </AppBar.Toolbar>
</AppBar>
