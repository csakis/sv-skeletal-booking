<script>
  import FlightSearch from "$lib/components/FlightSearch/FlightSearch.svelte";
  import Navbar from "$lib/components/Navbar.svelte";
  import { store } from "$lib/store.svelte";
  

  $effect.pre(() => {
    const themeMode = localStorage.getItem("mode") || "light";
    store.themeMode = themeMode;
    document.documentElement.setAttribute("data-mode", store.themeMode);
  });
</script>
<div class="flex gap-3 w-full">

  <FlightSearch destination="Departure"/>
  <FlightSearch destination="Arrival"/>
</div>
