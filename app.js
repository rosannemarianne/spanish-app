// Dutch ➔ Spanish Mastery Engine: With Natural Sentence Context
const verbData = {
    tenses: {
        present: "Presente",
        preterite: "Pretérito Indefinido",
        imperfect: "Pretérito Imperfecto",
        future: "Futuro",
        conditional: "Condicional"
    },
    vocab: [
        { nl: "Budget", es: "Presupuesto" },
        { nl: "Ontwikkeling", es: "Desarrollo" },
        { nl: "Duurzaamheid", es: "Sostenibilidad" },
        { nl: "Bedankt", es: "Gracias" }
    ],
    verbs: [
        { 
            inf: "Ser", meaning: "Zijn (Perm)",
            forms: {
                present: ["soy", "eres", "es", "somos", "sois", "son"],
                preterite: ["fui", "fuiste", "fue", "fuimos", "fuisteis", "fueron"],
                imperfect: ["era", "eras", "era", "éramos", "erais", "eran"],
                future: ["seré", "serás", "será", "seremos", "seréis", "serán"],
                conditional: ["sería", "serías", "sería", "seríamos", "seríais", "serían"]
            },
            nl: {
                present: ["Ik ben", "Jij bent", "Hij / Zij is", "Wij zijn", "Jullie zijn", "Zij (mv) zijn"],
                preterite: ["Ik was", "Jij was", "Hij / Zij was", "Wij waren", "Jullie waren", "Zij (mv) waren"],
                imperfect: ["Ik was (vroeger)", "Jij was (vroeger)", "Hij / Zij was (vroeger)", "Wij waren (vroeger)", "Jullie waren (vroeger)", "Zij (mv) waren (vroeger)"],
                future: ["Ik zal zijn", "Jij zult zijn", "Hij / Zij zal zijn", "Wij zullen zijn", "Jullie zullen zijn", "Zij (mv) zullen zijn"],
                conditional: ["Ik zou zijn", "Jij zou zijn", "Hij / Zij zou zijn", "Wij zouden zijn", "Jullie zouden zijn", "Zij (mv) zouden zijn"]
            },
            examples: {
                present: ["Ik ben trots op je", "Jij bent een goede vriend", "Hij is een dokter", "Wij zijn in Spanje", "Jullie zijn erg aardig", "Zij zijn studenten"],
                preterite: ["Ik was gisteren thuis", "Jij was bij het feest", "Hij was heel blij", "Wij waren vorig jaar in Madrid", "Jullie waren op tijd", "Zij waren getuigen"],
                imperfect: ["Ik was vroeger klein", "Jij was altijd vrolijk", "Hij was een rustig kind", "Wij waren vaak buiten", "Jullie waren goede spelers", "Zij waren altijd bezig"],
                future: ["Ik zal er over tien minuten zijn", "Jij zult succesvol zijn", "Hij zal de beste zijn", "Wij zullen samen zijn", "Jullie zullen verbaasd zijn", "Zij zullen er klaar voor zijn"],
                conditional: ["Ik zou dankbaar zijn", "Jij zou gelukkiger zijn", "Hij zou een goede vader zijn", "Wij zouden daar zijn als het kon", "Jullie zouden sneller zijn", "Zij zouden tevreden zijn"]
            }
        },
        { 
            inf: "Estar", meaning: "Zijn (Temp)",
            forms: {
                present: ["estoy", "estás", "está", "estamos", "estáis", "están"],
                preterite: ["estuve", "estuviste", "estuvo", "estuvimos", "estuvisteis", "estuvieron"],
                imperfect: ["estaba", "estabas", "estaba", "estábamos", "estabais", "estaban"],
                future: ["estaré", "estarás", "estará", "estaremos", "estaréis", "estarán"],
                conditional: ["estaría", "estarías", "estaría", "estaríamos", "estaríais", "estarían"]
            },
            nl: {
                present: ["Ik ben (nu)", "Jij bent (nu)", "Hij / Zij is (nu)", "Wij zijn (nu)", "Jullie zijn (nu)", "Zij (mv) zijn (nu)"],
                preterite: ["Ik was (daar)", "Jij was (daar)", "Hij / Zij was (daar)", "Wij waren (daar)", "Jullie waren (daar)", "Zij (mv) waren (daar)"],
                imperfect: ["Ik was (bezig)", "Jij was (bezig)", "Hij / Zij was (bezig)", "Wij waren (bezig)", "Jullie waren (bezig)", "Zij (mv) waren (bezig)"],
                future: ["Ik zal zijn", "Jij zult zijn", "Hij / Zij zal zijn", "Wij zullen zijn", "Jullie zullen zijn", "Zij (mv) zullen zijn"],
                conditional: ["Ik zou zijn", "Jij zou zijn", "Hij / Zij zou zijn", "Wij zouden zijn", "Jullie zouden zijn", "Zij (mv) zouden zijn"]
            },
            examples: {
                present: ["Ik ben nu op kantoor", "Jij bent erg moe", "Hij is in Madrid", "Wij zijn aan het eten", "Jullie zijn erg druk", "Zij zijn in de tuin"],
                preterite: ["Ik was gisteren de hele dag daar", "Jij was bij de vergadering", "Zij was in de supermarkt", "Wij waren samen in het park", "Jullie waren op het juiste adres", "Zij waren erg tevreden"],
                imperfect: ["Ik was gisteren de hele middag aan het werken", "Jij was thuis toen ik belde", "Hij was aan het lezen in de bus", "Wij waren aan het wandelen toen het begon te regenen", "Jullie waren de garage aan het opruimen", "Zij waren tv aan het kijken"],
                future: ["Ik zal morgen op tijd zijn", "Jij zult daar zijn om te helpen", "Zij zal blij zijn met de resultaten", "Wij zullen in Barcelona zijn", "Jullie zullen verrast zijn", "Zij zullen klaar zijn over een uur"],
                conditional: ["Ik zou daar nu graag zijn", "Jij zou voorzichtiger moeten zijn", "Zij zou erg dankbaar zijn", "Wij zouden daar om 8 uur kunnen zijn", "Jullie zouden met ons mee moeten zijn", "Zij zouden tevreden zijn met de voortgang"]
            }
        },
        { 
            inf: "Poder", meaning: "Kunnen",
            forms: {
                present: ["puedo", "puedes", "puede", "podemos", "podéis", "pueden"],
                preterite: ["pude", "pudiste", "pudo", "pudimos", "pudisteis", "pudieron"],
                imperfect: ["podía", "podías", "podía", "podíamos", "podíais", "podían"],
                future: ["podré", "podrás", "podrá", "podremos", "podréis", "podrán"],
                conditional: ["podría", "podrías", "podría", "podríamos", "podríais", "podrían"]
            },
            nl: {
                present: ["Ik kan", "Jij kunt", "Hij / Zij kan", "Wij kunnen", "Jullie kunnen", "Zij (mv) kunnen"],
                preterite: ["Ik kon", "Jij kon", "Hij / Zij kon", "Wij konden", "Jullie konden", "Zij (mv) konden"],
                imperfect: ["Ik kon (vroeger)", "Jij kon (vroeger)", "Hij / Zij kon (vroeger)", "Wij konden (vroeger)", "Jullie konden (vroeger)", "Zij (mv) konden (vroeger)"],
                future: ["Ik zal kunnen", "Jij zult kunnen", "Hij / Zij zal kunnen", "Wij zullen kunnen", "Jullie zullen kunnen", "Zij (mv) zullen kunnen"],
                conditional: ["Ik zou kunnen", "Jij zou kunnen", "Hij / Zij zou kunnen", "Wij zouden kunnen", "Jullie zouden kunnen", "Zij (mv) zouden kunnen"]
            },
            examples: {
                present: ["Ik kan dit probleem oplossen", "Jij kunt me helpen", "Hij kan heel goed zwemmen", "Wij kunnen morgen gaan", "Jullie kunnen hier blijven", "Zij kunnen de koffers dragen"],
                preterite: ["Ik kon mijn sleutels gisteren niet vinden", "Jij kon op tijd komen", "Hij kon alles herstellen", "Wij konden de berg beklimmen", "Jullie konden het gisteren doen", "Zij konden het doel bereiken"],
                imperfect: ["Ik kon vroeger sneller rennen", "Jij kon toen nog geen piano spelen", "Hij kon alles begrijpen", "Wij konden altijd rekenen op hem", "Jullie konden goed vliegen", "Zij konden de weg altijd vinden"],
                future: ["Ik zal het beter kunnen doen", "Jij zult het begrijpen", "Hij zal het halen", "Wij zullen het samen kunnen oplossen", "Jullie zullen het snel kunnen", "Zij zullen het afmaken"],
                conditional: ["Ik zou het kunnen proberen", "Jij zou het kunnen vragen", "Hij zou het kunnen doen voor ons", "Wij zouden het kunnen overwegen", "Jullie zouden het kunnen waarderen", "Zij zouden het kunnen accepteren"]
            }
        }
    ],
    pronouns: ["Ik", "Jij", "Hij / Zij", "Wij", "Jullie", "Zij (mv)"]
};

// Application State
let currentDeck = [];
let wrongAnswers = [];
let currentIndex = 0;
let masteredCount = 0;
let activeTense = "all";
let isReviewingMistakes = false;

// UI
const ui = {
    views: { start: document.getElementById('start-screen'), practice: document.getElementById('practice-screen'), result: document.getElementById('result-screen') },
    flashcard: document.getElementById('flashcard'),
    wordFront: document.getElementById('word-front'),
    wordBack: document.getElementById('word-back'),
    count: document.getElementById('card-count'),
    sessionStatus: document.getElementById('session-status'),
    progressBar: document.getElementById('progress-bar'),
    score: document.getElementById('score-display'),
    quizInput: document.getElementById('quiz-input'),
    feedback: document.getElementById('feedback'),
    sidebar: document.getElementById('conjugation-sidebar'),
    sidebarTense: document.getElementById('sidebar-tense'),
    sidebarMeaning: document.getElementById('sidebar-meaning'),
    conjTable: document.getElementById('conjugation-table'),
    tenseBtns: document.querySelectorAll('.tense-btn'),
    btnStart: document.getElementById('btn-start')
};

// Listeners
ui.btnStart.onclick = startSession;
document.getElementById('btn-skip').onclick = () => handleIncorrect();
document.getElementById('btn-restart').onclick = () => showView('start');
document.getElementById('btn-home').onclick = () => showView('start');
document.getElementById('btn-show-hint').onclick = () => ui.flashcard.classList.toggle('flipped');
ui.flashcard.onclick = () => ui.flashcard.classList.toggle('flipped');

ui.tenseBtns.forEach(btn => {
    btn.onclick = (e) => {
        ui.tenseBtns.forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        activeTense = e.target.dataset.tense;
    };
});

function normalize(str) {
    if (!str) return "";
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();
}

function matches(input, target) {
    const list = target.split('/').map(t => t.trim());
    return list.some(m => normalize(input) === normalize(m));
}

ui.quizInput.addEventListener('input', () => {
    if (currentDeck[currentIndex] && matches(ui.quizInput.value, currentDeck[currentIndex].es)) {
        handleCorrect();
    }
});

ui.quizInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        if (!matches(ui.quizInput.value, currentDeck[currentIndex].es)) {
            handleIncorrect();
        }
    }
});

function startSession() {
    let pool = [];
    if (activeTense === 'vocab') {
        pool = verbData.vocab.map(item => ({ nl: item.nl, es: item.es, tense: "Vocabulary" }));
    } else {
        const tenses = activeTense === 'all' ? ['present', 'preterite', 'imperfect', 'future', 'conditional'] : [activeTense];
        verbData.verbs.forEach(verb => {
            tenses.forEach(tKey => {
                for (let i = 0; i < 6; i++) {
                    pool.push({
                        nl: verb.nl[tKey][i],
                        example: verb.examples?.[tKey]?.[i] || "",
                        es: verb.forms[tKey][i],
                        tense: verbData.tenses[tKey],
                        meaning: verb.inf + ": " + verb.meaning,
                        conj: [
                            { p: "Yo", v: verb.forms[tKey][0] }, { p: "Tú", v: verb.forms[tKey][1] },
                            { p: "Él", v: verb.forms[tKey][2] }, { p: "Nos.", v: verb.forms[tKey][3] },
                            { p: "Vos.", v: verb.forms[tKey][4] }, { p: "Ellos", v: verb.forms[tKey][5] }
                        ]
                    });
                }
            });
        });
    }

    currentDeck = pool.sort(() => Math.random() - 0.5).slice(0, 10);
    wrongAnswers = [];
    currentIndex = 0;
    masteredCount = 0;
    showView('practice');
    updateCard();
}

function updateCard() {
    const item = currentDeck[currentIndex];
    ui.flashcard.classList.remove('flipped');
    ui.quizInput.value = '';
    ui.quizInput.disabled = false;
    ui.feedback.classList.add('hidden');
    ui.quizInput.focus();

    ui.wordFront.innerHTML = `
        <span class="tense-label">${item.tense}</span>
        <div class="word-display" style="font-size: 1.8rem; margin-top: 1rem;">${item.nl}</div>
        ${item.example ? `<div style="font-style: italic; font-size: 0.85rem; opacity: 0.6; margin-top: 0.5rem;">${item.example}</div>` : ""}
    `;
    ui.wordBack.textContent = item.es;

    if (item.conj) {
        ui.sidebar.classList.remove('hidden');
        ui.sidebarTense.textContent = item.tense;
        ui.sidebarMeaning.textContent = item.meaning;
        ui.conjTable.innerHTML = item.conj.map(c => `
            <div class="conj-item">
                <span class="conj-pronoun">${c.p}</span>
                <span class="conj-verb">${c.v}</span>
            </div>
        `).join('');
    } else {
        ui.sidebar.classList.add('hidden');
    }

    ui.count.textContent = `Question ${currentIndex + 1} / 10`;
    ui.progressBar.style.width = `${(currentIndex / 10) * 100}%`;
}

function handleCorrect() {
    showFeedback("Correct!", "correct");
    if (!isReviewingMistakes) masteredCount++;
    ui.quizInput.disabled = true;
    setTimeout(nextCard, 850);
}

function handleIncorrect() {
    const item = currentDeck[currentIndex];
    if (!wrongAnswers.includes(item)) wrongAnswers.push(item);
    showFeedback(`Wrong! Match is: ${item.es}`, "incorrect");
    ui.quizInput.disabled = true;
    setTimeout(nextCard, 1250);
}

function nextCard() {
    currentIndex++;
    if (currentIndex < currentDeck.length) {
        updateCard();
    } else {
        if (wrongAnswers.length > 0) {
            currentDeck = [...wrongAnswers].sort(() => Math.random() - 0.5);
            wrongAnswers = [];
            currentIndex = 0;
            isReviewingMistakes = true;
            updateCard();
        } else {
            endSession();
        }
    }
}

function endSession() {
    ui.progressBar.style.width = '100%';
    ui.score.textContent = isReviewingMistakes ? "100%" : `${masteredCount * 10}%`;
    showView('result');
}

function showFeedback(text, type) {
    ui.feedback.textContent = text;
    ui.feedback.className = `feedback ${type}`;
    ui.feedback.classList.remove('hidden');
}

function showView(viewId) {
    Object.keys(ui.views).forEach(v => ui.views[v].classList.add('hidden'));
    ui.views[viewId].classList.remove('hidden');
}
