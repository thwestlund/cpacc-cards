<script lang="ts">

    export let answer = {
        answer: "",
        explanation: ""
    };


</script>

<div class="gap-8 flex flex-col">
    <div>
        <h3 class="font-bold text-xl mb-2">Answer</h3>
        <p>{answer.answer}</p>
    </div>
    <div>
        <h3 class="font-bold text-xl mb-2">Explanation</h3>
        <p>{answer.explanation}</p>
    </div>
</div>
