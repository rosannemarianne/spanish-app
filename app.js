// Dutch ➔ Spanish Mastery Engine: With Multi-Tense Conjugated Prompts & Voice Mode
const verbData = {
    tenses: {
        present: "Presente",
        preterite: "Pretérito Indefinido",
        imperfect: "Pretérito Imperfecto",
        future: "Futuro",
        conditional: "Condicional"
    },
    // Tense explanations shown at the start of each session
    tenseExplanations: {
        present: {
            title: "El Presente",
            subtitle: "The Present Tense",
            explanation: "Used for actions happening right now, habits, and general truths.",
            useCases: [
                "Habitual actions — <em>Siempre como a las dos.</em> (I always eat at two.)",
                "Right now — <em>Estoy en casa.</em> (I am at home.)",
                "General truths — <em>El sol sale por el este.</em> (The sun rises in the east.)",
                "Near future plans — <em>Mañana trabajo.</em> (Tomorrow I work.)"
            ],
            tip: "Think of it as the 'default' tense — when in doubt, the present is your safe bet!"
        },
        preterite: {
            title: "El Pretérito Indefinido",
            subtitle: "The Simple Past",
            explanation: "Used for completed actions at a specific point in the past.",
            useCases: [
                "Completed events — <em>Ayer fui al mercado.</em> (Yesterday I went to the market.)",
                "Series of finished actions — <em>Me levanté, me duché y salí.</em> (I got up, showered and left.)",
                "Actions with clear start/end — <em>Viví en Madrid tres años.</em> (I lived in Madrid for three years.)"
            ],
            tip: "Key clue words: <strong>ayer</strong> (yesterday), <strong>el lunes</strong>, <strong>una vez</strong> (once), <strong>de repente</strong> (suddenly)."
        },
        imperfect: {
            title: "El Pretérito Imperfecto",
            subtitle: "The Imperfect Past",
            explanation: "Used for ongoing past states, habits, and background descriptions.",
            useCases: [
                "Past habits — <em>De niña, siempre jugaba fuera.</em> (As a child, I always played outside.)",
                "Ongoing states — <em>Hacía sol cuando llegué.</em> (It was sunny when I arrived.)",
                "Background / setting — <em>Era tarde y llovía.</em> (It was late and it was raining.)",
                "Polite requests — <em>Quería un café, por favor.</em> (I would like a coffee, please.)"
            ],
            tip: "Key clue words: <strong>siempre</strong> (always), <strong>todos los días</strong> (every day), <strong>de niño/a</strong> (as a child), <strong>mientras</strong> (while)."
        },
        future: {
            title: "El Futuro",
            subtitle: "The Future Tense",
            explanation: "Used for actions that will happen, predictions, and polite speculation.",
            useCases: [
                "Future plans — <em>El año que viene viviré en España.</em> (Next year I will live in Spain.)",
                "Predictions — <em>Creo que lloverá mañana.</em> (I think it will rain tomorrow.)",
                "Speculation about now — <em>¿Dónde estará Juan?</em> (Where could Juan be?)"
            ],
            tip: "Most verbs use the infinitive + endings: -é, -ás, -á, -emos, -éis, -án. Watch out for irregulars like <strong>tener → tendré</strong> and <strong>poder → podré</strong>."
        },
        conditional: {
            title: "El Condicional",
            subtitle: "The Conditional Tense",
            explanation: "Used for hypothetical situations, polite requests, and reported speech.",
            useCases: [
                "Hypotheticals — <em>Con más dinero, viajaría más.</em> (With more money, I would travel more.)",
                "Polite requests — <em>¿Podrías ayudarme?</em> (Could you help me?)",
                "Reported future — <em>Dijo que vendría.</em> (He said he would come.)",
                "Advice — <em>Yo en tu lugar, estudiaría más.</em> (In your place, I would study more.)"
            ],
            tip: "Same irregulars as the future! The endings are: -ía, -ías, -ía, -íamos, -íais, -ían."
        },
        vocab: {
            title: "Vocabulario General",
            subtitle: "General Vocabulary",
            explanation: "Core Dutch–Spanish vocabulary for everyday and professional use.",
            useCases: [
                "Business terms — words used in professional settings",
                "Everyday essentials — greetings, courtesy, common objects",
                "Building blocks for sentences in all tenses"
            ],
            tip: "Vocabulary is the foundation of fluency. The more words you know, the easier grammar feels!"
        }
    },
    vocab: [
        { nl: "Budget", es: "Presupuesto" },
        { nl: "Ontwikkeling", es: "Desarrollo" },
        { nl: "Duurzaamheid", es: "Sostenibilidad" },
        { nl: "Bedankt", es: "Gracias" },
        { nl: "Alstublieft", es: "Por favor" }
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
                preterite: ["Ik kon mijn sleutels gisteren niet finden", "Jij kon op tijd komen", "Hij kon alles herstellen", "Wij konden de berg beklimmen", "Jullie konden het gisteren doen", "Zij konden het doel bereiken"],
                imperfect: ["Ik kon vroeger sneller rennen", "Jij kon toen nog geen piano spelen", "Hij kon alles begrijpen", "Wij konden altijd rekenen op hem", "Jullie konden goed vliegen", "Zij konden de weg altijd finden"],
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
let sessionTense = null;
let isReviewingMistakes = false;
let waitingForEnterAfterWrong = false;
let isVoiceMode = false;
let isListening = false;
let recognition = null;

// UI Selectors
const ui = {
    views: {
        start: document.getElementById('start-screen'),
        intro: document.getElementById('intro-screen'),
        practice: document.getElementById('practice-screen'),
        result: document.getElementById('result-screen')
    },
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
    btnStart: document.getElementById('btn-start'),
    btnBeginPractice: document.getElementById('btn-begin-practice'),
    btnVoiceToggle: document.getElementById('btn-voice-toggle'),
    voiceStatus: document.getElementById('voice-status'),
    btnMic: document.getElementById('btn-mic'),
    // Intro screen elements
    introTenseTitle: document.getElementById('intro-tense-title'),
    introTenseSubtitle: document.getElementById('intro-tense-subtitle'),
    introExplanation: document.getElementById('intro-explanation'),
    introUseCases: document.getElementById('intro-use-cases'),
    introTip: document.getElementById('intro-tip')
};

// Speech Recognition Setup
if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    recognition = new SpeechRecognition();
    recognition.lang = 'es-ES';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        ui.quizInput.value = transcript;
        isListening = false;
        updateVoiceModeUI();

        if (matches(transcript, currentDeck[currentIndex].es)) {
            handleCorrect();
        } else {
            handleIncorrect();
        }
    };

    recognition.onerror = (event) => {
        console.error('Speech recognition error', event.error);
        isListening = false;
        updateVoiceModeUI();
        // If network/no-speech error in voice mode, retry after a moment
        if (isVoiceMode && (event.error === 'no-speech' || event.error === 'network')) {
            setTimeout(startListening, 1500);
        }
    };

    recognition.onend = () => {
        isListening = false;
        updateVoiceModeUI();
    };
}

// Event Hooks
ui.btnStart.onclick = startSession;
ui.btnBeginPractice.onclick = beginPractice;
document.getElementById('btn-skip').onclick = () => handleIncorrect();
document.getElementById('btn-restart').onclick = () => showView('start');
document.getElementById('btn-home').onclick = () => showView('start');
document.getElementById('btn-show-hint').onclick = () => ui.flashcard.classList.toggle('flipped');
ui.flashcard.onclick = () => ui.flashcard.classList.toggle('flipped');
ui.btnVoiceToggle.onclick = toggleVoiceMode;

ui.btnMic.onclick = () => {
    if (recognition && !isListening) startListening();
};

// Logic Helper
function normalize(str) {
    if (!str) return "";
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();
}

function matches(input, target) {
    const list = target.split('/').map(t => t.trim());
    return list.some(m => normalize(input) === normalize(m));
}

// Input Handlers
ui.quizInput.addEventListener('input', () => {
    // Only auto-advance on correct — not when waiting after a wrong answer
    if (!waitingForEnterAfterWrong && currentDeck[currentIndex] && matches(ui.quizInput.value, currentDeck[currentIndex].es)) {
        handleCorrect();
    }
});

ui.quizInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        if (waitingForEnterAfterWrong) {
            // Feature 1: user pressed Enter after seeing wrong answer — advance
            waitingForEnterAfterWrong = false;
            nextCard();
            return;
        }
        if (currentDeck[currentIndex] && !matches(ui.quizInput.value, currentDeck[currentIndex].es)) {
            handleIncorrect();
        }
    }
});

// Voice Utils
function speakDutch(text, onEnd) {
    if (!window.speechSynthesis) { if (onEnd) onEnd(); return; }
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    const voices = window.speechSynthesis.getVoices();
    const dutchVoice = voices.find(v => v.lang.startsWith('nl'));
    if (dutchVoice) utterance.voice = dutchVoice;
    utterance.lang = 'nl-NL';
    utterance.rate = 0.85;
    if (onEnd) utterance.onend = onEnd;
    window.speechSynthesis.speak(utterance);
}

function speakSpanish(text, onEnd) {
    if (!window.speechSynthesis) { if (onEnd) onEnd(); return; }
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    const voices = window.speechSynthesis.getVoices();
    const esVoice = voices.find(v => v.lang.startsWith('es'));
    if (esVoice) utterance.voice = esVoice;
    utterance.lang = 'es-ES';
    utterance.rate = 0.85;
    if (onEnd) utterance.onend = onEnd;
    window.speechSynthesis.speak(utterance);
}

function startListening() {
    if (!recognition || isListening) return;
    try {
        recognition.start();
        isListening = true;
        updateVoiceModeUI();
    } catch(e) { /* already started */ }
}

function toggleVoiceMode() {
    isVoiceMode = !isVoiceMode;
    updateVoiceModeUI();
    if (isVoiceMode) {
        // Start the hands-free flow: read the current card then listen
        if (currentDeck[currentIndex]) {
            speakDutch(currentDeck[currentIndex].nl, () => setTimeout(startListening, 600));
        }
    } else {
        // Stop any active listening
        if (isListening) { try { recognition.stop(); } catch(e) {} }
        if (window.speechSynthesis) window.speechSynthesis.cancel();
    }
}

function updateVoiceModeUI() {
    if (isVoiceMode) {
        ui.btnVoiceToggle.classList.add('voice-active');
        ui.btnVoiceToggle.title = 'Voice mode ON — click to turn off';
        if (isListening) {
            ui.voiceStatus.textContent = '🎤 Listening...';
            ui.voiceStatus.classList.add('listening');
        } else {
            ui.voiceStatus.textContent = '🔊 Voice mode ON';
            ui.voiceStatus.classList.remove('listening');
        }
    } else {
        ui.btnVoiceToggle.classList.remove('voice-active');
        ui.btnVoiceToggle.title = 'Click to enable hands-free voice mode';
        ui.voiceStatus.textContent = '';
        ui.voiceStatus.classList.remove('listening');
    }
}

// Session Flow
function startSession() {
    // Pick one random tense for the session
    const tenseKeys = ['present', 'preterite', 'imperfect', 'future', 'conditional', 'vocab'];
    sessionTense = tenseKeys[Math.floor(Math.random() * tenseKeys.length)];

    // Populate and show the intro screen
    const info = verbData.tenseExplanations[sessionTense];
    ui.introTenseTitle.textContent = info.title;
    ui.introTenseSubtitle.textContent = info.subtitle;
    ui.introExplanation.textContent = info.explanation;
    ui.introUseCases.innerHTML = info.useCases.map(u => `<li>${u}</li>`).join('');
    ui.introTip.innerHTML = `💡 ${info.tip}`;

    showView('intro');
}

// Called when user clicks "Let's go!" on the intro screen
function beginPractice() {
    let pool = [];
    if (sessionTense === 'vocab') {
        pool = verbData.vocab.map(item => ({ nl: item.nl, es: item.es, tense: "Vocabulary" }));
    } else {
        verbData.verbs.forEach(verb => {
            for (let i = 0; i < 6; i++) {
                pool.push({
                    nl: verb.nl[sessionTense][i],
                    example: verb.examples?.[sessionTense]?.[i] || "",
                    es: verb.forms[sessionTense][i],
                    tense: verbData.tenses[sessionTense],
                    meaning: verb.inf + ": " + verb.meaning,
                    conj: [
                        { p: "Yo", v: verb.forms[sessionTense][0] }, { p: "Tú", v: verb.forms[sessionTense][1] },
                        { p: "Él", v: verb.forms[sessionTense][2] }, { p: "Nos.", v: verb.forms[sessionTense][3] },
                        { p: "Vos.", v: verb.forms[sessionTense][4] }, { p: "Ellos", v: verb.forms[sessionTense][5] }
                    ]
                });
            }
        });
    }

    currentDeck = pool.sort(() => Math.random() - 0.5).slice(0, 10);
    wrongAnswers = [];
    currentIndex = 0;
    masteredCount = 0;
    isReviewingMistakes = false;
    waitingForEnterAfterWrong = false;
    isVoiceMode = false;       // always start keyboard mode; user enables voice via the mic button
    isListening = false;
    updateVoiceModeUI();

    showView('practice');
    updateCard();
}

function updateCard() {
    const item = currentDeck[currentIndex];
    ui.flashcard.classList.remove('flipped');
    ui.quizInput.value = '';
    ui.quizInput.disabled = false;
    ui.feedback.classList.add('hidden');
    waitingForEnterAfterWrong = false;
    ui.quizInput.focus();

    ui.wordFront.innerHTML = `
        <span class="tense-label">${item.tense}</span>
        <div class="word-display" style="font-size: 1.8rem; margin-top: 1rem;">${item.nl}</div>
        ${item.example ? `<div style="font-style: italic; font-size: 0.85rem; opacity: 0.6; margin-top: 0.5rem;">${item.example}</div>` : ""}
    `;
    ui.wordBack.textContent = item.es;

    // Sidebar
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

    const total = currentDeck.length;
    ui.count.textContent = `Question ${currentIndex + 1} / ${total}`;
    ui.sessionStatus.textContent = isReviewingMistakes ? "🔁 Reviewing Mistakes" : "Dutch ➔ Spanish Recall";
    ui.progressBar.style.width = `${(currentIndex / total) * 100}%`;

    if (isVoiceMode) {
        // Read the question aloud, then automatically start listening
        speakDutch(item.nl, () => setTimeout(startListening, 600));
    }
}

function handleCorrect() {
    if (window.speechSynthesis) window.speechSynthesis.cancel();
    if (!isReviewingMistakes) masteredCount++;
    ui.quizInput.disabled = true;

    if (isVoiceMode) {
        // No feedback spoken — just move on silently
        showFeedback("✅ Correct!", "correct");
        setTimeout(nextCard, 600);
    } else {
        showFeedback("✅ Correct!", "correct");
        setTimeout(nextCard, 850);
    }
}

function handleIncorrect() {
    if (window.speechSynthesis) window.speechSynthesis.cancel();
    const item = currentDeck[currentIndex];
    if (!wrongAnswers.includes(item)) wrongAnswers.push(item);
    ui.quizInput.disabled = true;

    if (isVoiceMode) {
        // Speak the correct answer, then auto-advance — no Enter needed
        showFeedback(`❌ Answer: ${item.es}`, "incorrect");
        speakSpanish(item.es, () => setTimeout(nextCard, 800));
    } else {
        // Keyboard mode: show correct answer and wait for Enter
        showFeedback(`❌ Answer: ${item.es} — Press Enter to continue`, "incorrect");
        waitingForEnterAfterWrong = true;
        ui.quizInput.disabled = false;
        ui.quizInput.value = "";
        ui.quizInput.placeholder = "Press Enter to continue...";
        ui.quizInput.focus();
    }
}

function nextCard() {
    // Reset placeholder
    ui.quizInput.placeholder = "Type Spanish answer...";
    currentIndex++;
    if (currentIndex < currentDeck.length) {
        updateCard();
    } else {
        // Feature 2: Keep repeating wrong answers until all are correct
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
    // Score = percentage of first-round correct answers out of original 10
    const score = Math.round((masteredCount / 10) * 100);
    ui.score.textContent = `${score}%`;
    showView('result');
}

function showFeedback(text, type) {
    ui.feedback.innerHTML = text;
    ui.feedback.className = `feedback ${type}`;
    ui.feedback.classList.remove('hidden');
}

function showView(viewId) {
    Object.keys(ui.views).forEach(v => ui.views[v].classList.add('hidden'));
    ui.views[viewId].classList.remove('hidden');
}

// Pre-load voices
if (window.speechSynthesis) {
    window.speechSynthesis.getVoices();
    window.speechSynthesis.onvoiceschanged = () => window.speechSynthesis.getVoices();
}
