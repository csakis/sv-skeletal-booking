<script lang="ts">
  import { Switch } from "@skeletonlabs/skeleton-svelte";
  import MoonIcon from "@lucide/svelte/icons/moon";
  import SunIcon from "@lucide/svelte/icons/sun";
  import { store } from "$lib/store.svelte";
  let checked = $state(true);

  $effect(() => {
    const mode = localStorage.getItem("mode") || "light";
    checked = mode === "dark";
  });

  function onCheckedChange(event: { checked: boolean }) {
    const mode = event.checked ? "dark" : "light";
    localStorage.setItem("mode", mode);
    store.themeMode = mode;
    document.documentElement.setAttribute("data-mode", localStorage.getItem("mode") || "dark");
    document.documentElement.setAttribute("data-theme", localStorage.getItem("theme") || "cattppuccin");
    checked = event.checked;
  }
</script>

<div class="flex gap-1">
  <SunIcon class="text-yellow-500" />
  <Switch {checked} {onCheckedChange}>
    <Switch.Control>
      <Switch.Thumb />
    </Switch.Control>
    <Switch.HiddenInput />
  </Switch>
  <MoonIcon />
</div>
