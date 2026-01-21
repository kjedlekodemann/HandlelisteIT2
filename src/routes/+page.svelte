<script lang="ts">
    import type { Vare } from '$lib/lokalStore'
    import {handleliste, leggTilVare} from '$lib/lokalStore';
    import { onMount } from 'svelte';
    
    let vareNavn: string = "";
    let varePris: number = NaN; // Prisen er ikke enda definert men jeg ønsker å ikke redefinere verdier gjentatt
    let vareId: number = NaN
    let vareFunn: boolean = false;

    onMount(() => {
        const lagretInfo = localStorage.getItem('handleliste');
        if (lagretInfo) { JSON.parse(lagretInfo) as Vare[]; }
    });

</script>



<h1></h1>
