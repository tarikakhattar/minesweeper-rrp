<script>import { createEventDispatcher } from 'svelte';
import { Button } from '@w2k/ui';
const dispatch = createEventDispatcher();
export let presets$;
export let preset;
const calculateMaxMines = (preset) => {
    return preset.width * preset.height - 1;
};
function enforceValidPreset(preset) {
    if (preset.height > 50) {
        preset.height = 50;
    }
    if (preset.height < 1) {
        preset.height = 1;
    }
    if (preset.width > 50) {
        preset.width = 50;
    }
    if (preset.width < 1) {
        preset.width = 1;
    }
    const maxMines = calculateMaxMines(preset);
    if (preset.mineCount > maxMines) {
        preset.mineCount = maxMines;
    }
    if (preset.mineCount < 1) {
        preset.mineCount = 1;
    }
}
function submit() {
    enforceValidPreset(preset);
    dispatch('submit', preset);
}
function cancel() {
    dispatch('cancel');
}
$: {
    enforceValidPreset(preset);
}
</script>

<div class="custom-settings">
	<form on:submit|preventDefault="{submit}">
		<div class="inputs">
			<div class="field-row">
				<label for="height">Height:</label>
				<input
					name="height"
					type="number"
					inputmode="numeric"
					bind:value="{preset.height}"
					max="50"
					min="1"
				/>
			</div>

			<div class="field-row">
				<label for="width">Width:</label>
				<input
					name="width"
					type="number"
					inputmode="numeric"
					bind:value="{preset.width}"
					max="50"
					min="1"
				/>
			</div>

			<div class="field-row">
				<label for="mineCount">Mines:</label>
				<input
					name="mineCount"
					type="number"
					inputmode="numeric"
					bind:value="{preset.mineCount}"
					max="{calculateMaxMines(preset)}"
					min="1"
				/>
			</div>
		</div>
		<div class="actions">
			<Button type="submit">OK</Button>
			<Button on:click="{cancel}">Cancel</Button>
		</div>
	</form>

	<div class="presets">
		{#each Object.entries($presets$) as [key, data]}
			<Button on:click="{() => (preset = data)}">Set to {key}</Button>
		{/each}
	</div>
</div>

<style>.custom-settings {
  display: flex;
  gap: 16px;
  flex-direction: column;
  align-items: center;
  padding: 4px;
}
.custom-settings form {
  display: flex;
  gap: 16px;
  flex-direction: row;
}
.custom-settings form .inputs {
  display: flex;
  flex-direction: column;
}
.custom-settings form .inputs .field-row {
  justify-content: space-between;
}
.custom-settings form .inputs .field-row input {
  width: 60px;
}
.custom-settings form .actions {
  display: flex;
  gap: 16px;
  flex-direction: column;
  justify-content: center;
}
.custom-settings .presets {
  display: flex;
  flex-direction: column;
  gap: 3px;
}</style>
