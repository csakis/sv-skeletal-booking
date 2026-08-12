<script lang="ts">
  import ChevronRightIcon from "@lucide/svelte/icons/chevron-right";
  import ChevronLeftIcon from "@lucide/svelte/icons/chevron-left";
  import ChevronDownIcon from "@lucide/svelte/icons/chevron-down";
  import UserIcon from "@lucide/svelte/icons/user";
  import PaletteIcon from "@lucide/svelte/icons/palette";
  import MailwarningIcon from "@lucide/svelte/icons/mail-warning";
  import SettingsIcon from "@lucide/svelte/icons/settings";
  import { Menu, Portal } from "@skeletonlabs/skeleton-svelte";
  import { store } from "$lib/store.svelte";

  function handleSelect(e: { value: string }) {
    const themes = ["catppuccin", "rosepine", "sahara", "crimson", "cerberus", "modern"];
    if (themes.includes(e.value)) {
      document.documentElement.setAttribute("data-theme", e.value);
      localStorage.setItem("theme", e.value);
    }
  }
</script>

<Menu onSelect={handleSelect}>
  <Menu.Trigger class="btn preset-filled"><UserIcon /></Menu.Trigger>
  <Portal>
    <Menu.Positioner>
      <Menu.Content>
        <Menu.Item value="feedback" class="flex justify-start gap-1">
          <MailwarningIcon />
          <Menu.ItemText><a href="/feedback">Feedback</a></Menu.ItemText>
        </Menu.Item>
        <Menu.Item value="settings" class="flex justify-start gap-1">
          <SettingsIcon />
          <Menu.ItemText>Settings</Menu.ItemText>
        </Menu.Item>
        <Menu.Separator />
        <Menu onSelect={handleSelect}>
          <Menu.TriggerItem value="themes" class="flex justify-start gap-1">
            <PaletteIcon />
            <Menu.ItemText>Themes</Menu.ItemText>
            <Menu.ItemIndicator class="ml-3 ">
              <ChevronDownIcon class="size-5" />
            </Menu.ItemIndicator>
          </Menu.TriggerItem>

          <Portal>
            <Menu.Positioner>
              <Menu.Content>
                <Menu.Item value="cerberus">
                  <Menu.ItemText>Cerberus</Menu.ItemText>
                </Menu.Item>
                <Menu.Item value="crimson">
                  <Menu.ItemText>Crimson</Menu.ItemText>
                </Menu.Item>
                <Menu.Item value="catppuccin">
                  <Menu.ItemText>Catppuccin</Menu.ItemText>
                </Menu.Item>
                <Menu.Item value="modern">
                  <Menu.ItemText>Modern</Menu.ItemText>
                </Menu.Item>
                <Menu.Item value="rosepine">
                  <Menu.ItemText>Rosepine</Menu.ItemText>
                </Menu.Item>
                <Menu.Item value="sahara">
                  <Menu.ItemText>Sahara</Menu.ItemText>
                </Menu.Item>
              </Menu.Content>
            </Menu.Positioner>
          </Portal>
        </Menu>
      </Menu.Content>
    </Menu.Positioner>
  </Portal>
</Menu>
