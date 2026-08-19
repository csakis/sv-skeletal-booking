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
  <div class="w-1/2 card preset-outlined p-4 ">
    <div class="flex w-full items-end gap-3">
      <FlightSearch destination="Departure" />
      <DatePicker destination="Departure" />
    </div>
  </div>

  <div class="w-1/2 card preset-outlined p-4">
    <div class="flex w-full items-end gap-3">
      <FlightSearch destination="Arrival" />
      <DatePicker destination="Arrival" />
    </div>
  </div>
</div>
<p>Departure: {store.departureAirport}</p>
<p>Arrival: {store.arrivalAirport}</p>
<p>Departure date: {store.departureDate}</p>
<p>ArrivalDate: {store.arrivalDate}</p>
