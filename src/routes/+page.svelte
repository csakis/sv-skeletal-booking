<script>
  import FlightSearch from "$lib/components/FlightSearch/FlightSearch.svelte";
  import Navbar from "$lib/components/Navbar.svelte";
  import { store } from "$lib/store.svelte";

  $effect.pre(() => {
    store.themeMode = localStorage.getItem("mode") || "light";
    store.theme = localStorage.getItem("data-mode") || "modern";
  });
</script>

<div class="flex w-full gap-3">
  <FlightSearch destination="Departure" />
  <FlightSearch destination="Arrival" />
</div>
