<script>
  import DatePicker from "$lib/components/DatePicker.svelte";
  import FlightSearch from "$lib/components/FlightSearch/FlightSearch.svelte";
  import Navbar from "$lib/components/Navbar.svelte";
  import { store } from "$lib/store.svelte";

  $effect.pre(() => {
    store.themeMode = localStorage.getItem("mode") || "light";
    store.theme = localStorage.getItem("data-mode") || "modern";
  });
</script>

<div class="flex w-full">
  <div class="flex w-full gap-2">
    <FlightSearch destination="Departure" />
    <DatePicker destination="Departure" />
  </div>
  <div class="flex w-full gap-2">
    <FlightSearch destination="Arrival" />
    <DatePicker destination="Arrival" />
  </div>
</div>
<p>Departure: {store.departureAirport}</p>
<p>Arrival: {store.arrivalAirport}</p>
