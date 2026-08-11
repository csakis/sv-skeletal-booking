<script>
  import Navbar from "$lib/components/Navbar.svelte";
  import { store } from "$lib/store.svelte";

  $effect.pre(() => {
    const mode = localStorage.getItem("mode") || "light";
    store.themeMode = mode;
    document.documentElement.setAttribute("data-mode", mode);
  });
</script>

<Navbar />
