<script lang="ts">
  import { Debounced } from "runed";
  import { json } from "@sveltejs/kit";
  import {
    Combobox,
    Portal,
    type ComboboxRootProps,
    useListCollection
  } from "@skeletonlabs/skeleton-svelte";
  let { destination } = $props();
  import { store } from "$lib/store.svelte";
  import { createQuery } from "@tanstack/svelte-query";

  let comboValue = $state("");
  const placeQuery = new Debounced(() => comboValue, 500);

  const data = [];

  let items = $state(data);

  $effect(async () => {
    if (placeQuery.current && placeQuery.current.length >= 3) {
      const data = await fetch(`/api/places?query=${placeQuery.current}`);
      const dataJson = await data.json();
      items = dataJson.data
        .filter(({ city_name, icao_code }) => city_name && icao_code)
        .slice(0, 10)
        .map(({ city_name, icao_code }) => ({ label: city_name, value: icao_code }));
    }
  });

  const collection = $derived(
    useListCollection({
      items: items,
      itemToString: (item) => item.label,
      itemToValue: (item) => item.value
    })
  );

  const onOpenChange = () => {
    items = data;
  };

  const onInputValueChange: ComboboxRootProps["onInputValueChange"] = (event) => {
    comboValue = event.inputValue;
    const filtered = data.filter((item) =>
      item.value.toLowerCase().includes(event.inputValue.toLowerCase())
    );
    if (filtered.length > 0) {
      items = filtered;
    } else {
      items = data;
    }
  };

  function onSelect(e) {
    comboValue = e.itemValue;
    console.log("🚀 ~ onSelect ~ comboValue:", comboValue)
  }
</script>

<div class="w-full card preset-outlined p-4">
  <header class="text-2xl">{destination}</header>
  <article class="mt-2">
    <Combobox
      class="max-w-md "
      placeholder="Select {destination}"
      {collection}
      {onOpenChange}
      {onInputValueChange}
      {onSelect}

    >
      <Combobox.Label>{destination}</Combobox.Label>
      <Combobox.Control>
        <Combobox.Input />
        <Combobox.Trigger />
      </Combobox.Control>
      <Combobox.ClearTrigger>Clear All</Combobox.ClearTrigger>
      <Portal>
        <Combobox.Positioner>
          <Combobox.Content>
            {#each items as item (item.value)}
              <Combobox.Item {item}>
                <Combobox.ItemText>{item.label}</Combobox.ItemText>
                <Combobox.ItemIndicator />
              </Combobox.Item>
            {/each}
          </Combobox.Content>
        </Combobox.Positioner>
      </Portal>
    </Combobox>
  </article>
</div>
