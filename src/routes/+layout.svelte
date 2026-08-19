<script lang="ts">
  import "./layout.css";
  import favicon from "#lib/assets/favicon.svg";
  import Navbar from "#lib/components/Navbar.svelte";
  import { browser } from "$app/env";
  import { QueryClient, QueryClientProvider } from "@tanstack/svelte-query";

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        enabled: browser
      }
    }
  });

  let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
<QueryClientProvider client={queryClient}>
  <Navbar />
  {@render children()}
</QueryClientProvider>
