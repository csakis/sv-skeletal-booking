<script lang="ts">
  import { DatePicker, parseDate, Portal } from "@skeletonlabs/skeleton-svelte";
  // Import the internal DateValue type to strictly fix your event handler types
  import type { DateValue } from "@skeletonlabs/skeleton-svelte";
  import { store } from "$lib/store.svelte";

  const { destination } = $props();
  const currentDate = new Date();

  const minDate = $derived(destination === "Arrival" && store.departureDate ? store.departureDate: currentDate);
  const maxDate = $derived(destination === "Departure" && store.arrivalDate ? store.arrivalDate : "");

</script>

{#if destination === "Departure" }
<label >Departure

  <input type="date" name="departureDate" bind:value={store.departureDate} min={parseDate(minDate).toString()} max={maxDate.toString()}>
</label>
{/if}
{#if destination === "Arrival" }
<label> Arrival
  <input type="date" name="arrivalDate" bind:value={store.arrivalDate} min={parseDate(minDate).toString()} max={maxDate.toString()}>
</label>
{/if}
