<script lang="ts">
    import Card from "$lib/Card.svelte";
    import Answer from "$lib/types/Answer.svelte";
    //import { questions } from "../../assets/questions.json";
    import { onMount } from "svelte";
    import type IQuestion from "../interfaces/IQuestion";

    let front = true;
    let questions = [] as IQuestion[];
    let questionsLoaded = false;
    let showReloadBtn = false;
    let randQuestion = {} as IQuestion;

    onMount(() => {
        getQuestions().then(data => {
            data.forEach(question => {
                questions.push({
                    id: question.id,
                    category: question.category,
                    question: question.question,
                    answer: question.answer,
                    explanation: question.explanation,
                    score: question.score,
                    type: question.type
                });
            });
            randQuestion = randomizeQuestion(questions);
            questionsLoaded = true;
        }).catch(error => {
            console.error("Error fetching questions:", error);
            showReloadBtn = true;
        });
    });

    async function getQuestions() : Promise<IQuestion[]> {
        try {
            const response = await fetch("https://cpacc-cards-api.azurewebsites.net/questions");

            if (!response.ok) {
                throw new Error(`HTTP Error: Status ${response.status}`);
            }

            const data: IQuestion[] = await response.json(); 
            return data;

        } catch (error) {
            console.error("Error fetching questions:", error);
            showReloadBtn = true;
            return [];
        }
    }

    function nextQuestion() {
        randQuestion = randomizeQuestion(questions);
        front = true;
        document.getElementById("question")?.focus();
    }

    function randomizeQuestion(questions : IQuestion[]) {
        return questions[Math.floor(Math.random() * questions.length)];
    }
</script>

<Card front={front}>
    <div slot="front">
        {#if questionsLoaded}
            <h2 class="font-bold text-xl mb-2">{randQuestion.question}</h2>
        {/if}

        {#if showReloadBtn}
            <p class="text-red-500">The website is sleeping. Please reload the page.</p>
            <button class="rounded-full bg-sky-300 py-2 px-4 text-sm font-semibold text-slate-900 hover:bg-sky-200 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300/50 active:bg-sky-500" on:click={() => window.location.reload()}>Reload</button>
        {/if}
    </div>

    <Answer slot="back" answer={{answer: randQuestion.answer, explanation:randQuestion.explanation}}/>


    <svelte:fragment slot="actions">
        <button on:click={() => front = !front} class="rounded-full bg-sky-300 py-2 px-4 text-sm font-semibold text-slate-900 hover:bg-sky-200 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300/50 active:bg-sky-500">Flip card</button>
        <button on:click={nextQuestion} class="rounded-full bg-sky-300 py-2 px-4 text-sm font-semibold text-slate-900 hover:bg-sky-200 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300/50 active:bg-sky-500">Next</button>
    </svelte:fragment>
</Card>