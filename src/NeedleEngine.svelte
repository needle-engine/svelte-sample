<script lang="ts">
    import type { Snippet } from 'svelte';

    /**
     * The src can be a remote url to a GLB (or local file)
    */
    let { src, skyboxImage, environmentImage, children }: {
        src?: string;
        skyboxImage?: string;
        environmentImage?: string;
        children?: Snippet;
    } = $props();
</script>

<!-- find all attributes in the documentation at https://engine.needle.tools/docs/reference/needle-engine-attributes.html-->
<needle-engine {src} skybox-image={skyboxImage} environment-image={environmentImage}>
    {@render children?.()}
</needle-engine>

<style>
</style>
