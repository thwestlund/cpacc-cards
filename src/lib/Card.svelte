<script>
    import { questions } from "../assets/questions.json";
    let front = true;

    let question = questions[Math.floor(Math.random() * questions.length)];
</script>

<div class="card-container">
    <div class="card">
        <div class="card-content">
            {#if front}
            <div class="front">
                <h2>{question.question}</h2>
            </div>
            {:else}
            <div class="back">
                <h3>Answer</h3>
                <p>{question.answer}</p>

                <h3>Explanation</h3>
                <p>{question.explanation}</p>
            </div>
            {/if}
        </div>
    </div>
    <div class="actions">
        <button on:click={() => front = !front}>Flip card</button>
        <button on:click={() => {question = questions[Math.floor(Math.random() * questions.length)]; front = true;}}>Next</button>
    </div>
</div>

<style lang="scss">

$cardMeasurement: 10rem;

.card-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .card {
        max-width: $cardMeasurement * 2.5;
        max-height: $cardMeasurement * 3.5;
        min-width: 20rem;
        min-height: 32rem;
        background-color: #fcceb5;
        border-radius: 0.5rem;
        border: 1px solid rgb(132, 100, 100);
        display: flex;
        flex-direction: column;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
        color: #000;
        overflow: overlay;
        

    .card-content {
        flex-grow: 1;
        display: flex;
        padding: 0.5rem;

        .front {
            text-align: center;
            display: flex;
            //justify-content: center;
            align-items: center;
        }
    }
}

.actions {
        display: flex;
        gap: 1rem;
    
        button {
            flex: 1;
            height: 3rem;
            border: none;
            background-color: #8fb3f0;
            color: #000;
            border-radius: 0.5rem;

            &:hover {
                background-color: #a8c8f0;
            }
        }
    }
}

</style>