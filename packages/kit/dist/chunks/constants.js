const SVELTE_KIT = '.svelte-kit';

// in `svelte-kit dev` and `svelte-kit preview`, we use a fake
// asset path so that we can serve local assets while still
// verifying that requests are correctly prefixed
const SVELTE_KIT_ASSETS = '/_svelte_kit_assets';

export { SVELTE_KIT as S, SVELTE_KIT_ASSETS as a };
