<script lang="ts">
    export let front = true;
</script>

<div class="flex flex-col gap-4 w-96">
    <div class="">
        <div class="min-h-96 p-6 text-white bg-slate-800/25 overflow-hidden shadow-lg hover:shadow-xl rounded-lg border-solid border border-slate-500/25 hover:border-slate-500/50">
            {#if front}
                <slot name="front" />
            {:else}
                <slot name="back" class="back gap-8 flex flex-col" />
            {/if}
        </div>
    </div>
    {#if $$slots['actions']}
        <div class="justify-end flex gap-2">
            <slot name="actions" />
        </div>
    {/if}
</div>

<style lang="scss">

</style>