<script lang="ts">
  import { AppBar } from "@skeletonlabs/skeleton-svelte";
  import ThemeSwitch from "./ThemeSwitch.svelte";
    import UserMenu from "./UserMenu.svelte";
</script>

<AppBar>
  <AppBar.Toolbar class="flex items-center">
    <AppBar.Lead></AppBar.Lead>
    <AppBar.Headline class="flex justify-center">
      <span class="text-2xl">Svelte Flight Booking Application</span>
    </AppBar.Headline>
    <AppBar.Trail class="flex items-center justify-end gap-3">
      <ThemeSwitch />
			<UserMenu/>
    </AppBar.Trail>
  </AppBar.Toolbar>
</AppBar>
