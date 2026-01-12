/* ============================================
   COMPLETE COLORFUL WEBSITE - BOTH GAMES
   ============================================ */

// GAME 1 DATA: Personal Questions - Creative & Descriptive (15 total, pick random 10)
const PERSONAL_QUESTIONS = [
    {
        question: "How would you describe your relationship with food?",
        options: [
            "I cook elaborate meals and enjoy every bite - food is joy",
            "I meal prep on Sundays and stick to my plan - food is fuel",
            "Whatever's fastest - I eat at my desk most days",
            "I skip meals when I'm stressed or busy - food is optional"
        ],
        average: "Whatever's fastest - I eat at my desk most days",
        stat: "Average American eats alone 7.7 times per week",
        characterResponse: "Food tells us a lot about how we treat ourselves..."
    },
    {
        question: "What's your friendship situation like?",
        options: [
            "I have a solid crew - weekly hangouts, group chats poppin', ride or dies",
            "A few close friends I see monthly - quality over quantity vibes",
            "Mostly work friends and acquaintances - haven't made a new close friend in years",
            "I'm pretty isolated - my last real friend moved away"
        ],
        average: "Mostly work friends and acquaintances - haven't made a new close friend in years",
        stat: "Average American hasn't made a new friend in 5 years",
        characterResponse: "Connection is everything. Let's see how you're doing..."
    },
    {
        question: "How's your sleep situation?",
        options: [
            "I'm sleeping 8+ hours, wake up refreshed, living my best rested life",
            "Solid 7 hours most nights - I prioritize it and it shows",
            "6-ish hours, hit snooze 3 times, survive on coffee",
            "What's sleep? I'm running on fumes and anxiety"
        ],
        average: "6-ish hours, hit snooze 3 times, survive on coffee",
        stat: "Average American gets 6.1 hours of sleep per night",
        characterResponse: "Sleep is where we recharge. How's your battery?"
    },
    {
        question: "If your car broke down today and needed $800 in repairs, what happens?",
        options: [
            "I'd pay it without even checking my account - emergency fund stays ready",
            "I'd put it on a credit card but pay it off next month - tight but manageable",
            "I'd have to borrow from family or skip some bills this month",
            "I literally can't afford that - the car would sit there"
        ],
        average: "I'd put it on a credit card but pay it off next month - tight but manageable",
        stat: "46% of Americans have less than $500 in savings",
        characterResponse: "Financial security = peace of mind. Where are you at?"
    },
    {
        question: "How often does money stress you out?",
        options: [
            "Rarely - I'm comfortable and have cushion for surprises",
            "Sometimes I worry about the future but I'm okay month-to-month",
            "Pretty often - every unexpected expense causes panic",
            "Constantly - I go to sleep stressed and wake up stressed about money"
        ],
        average: "Pretty often - every unexpected expense causes panic",
        stat: "78% of workers live paycheck to paycheck",
        characterResponse: "Money stress affects everything. Real talk..."
    },
    {
        question: "When did you last make a genuine new friend?",
        options: [
            "This year! I'm good at meeting people and turning acquaintances into friends",
            "Within the past couple years - I'm intentional about building connection",
            "It's been 3-5 years... life got busy and I stopped trying as hard",
            "Honestly can't remember - maybe college? High school?"
        ],
        average: "It's been 3-5 years... life got busy and I stopped trying as hard",
        stat: "Average American hasn't made a new friend in 5 years",
        characterResponse: "Making friends as an adult is HARD. How's it going?"
    },
    {
        question: "Describe your work-life balance:",
        options: [
            "I clock out at 5pm, weekends are sacred, I have hobbies and a life outside work",
            "Pretty balanced - I work hard but have boundaries that mostly hold",
            "Work bleeds into everything - I answer emails at 9pm and think about it on weekends",
            "What balance? Work IS my life. I'm exhausted and resentful."
        ],
        average: "Work bleeds into everything - I answer emails at 9pm and think about it on weekends",
        stat: "Americans work 137 more hours per year than Japanese workers",
        characterResponse: "Hustle culture is toxic. How's your balance?"
    },
    {
        question: "How connected do you feel to other people?",
        options: [
            "Very connected - I have people I can call anytime, I feel seen and supported",
            "Mostly good - I have my people even if we don't talk every day",
            "Sometimes lonely - I have people but don't feel truly understood",
            "Pretty isolated - I feel alone even when I'm around people"
        ],
        average: "Sometimes lonely - I have people but don't feel truly understood",
        stat: "61% of Americans report feeling lonely",
        characterResponse: "Loneliness is an epidemic. You're not alone in feeling alone..."
    },
    {
        question: "Have you skipped meals to save money recently?",
        options: [
            "Never - I prioritize food and can always afford what I need",
            "Once or twice when money was weird, but it's not a pattern",
            "Yeah, a few times this month - gotta stretch the budget somehow",
            "Regularly - I skip lunch most days to save $10-15"
        ],
        average: "Yeah, a few times this month - gotta stretch the budget somehow",
        stat: "1 in 3 Americans skip meals regularly to save money",
        characterResponse: "Basic needs shouldn't be a luxury. Let's talk about it..."
    },
    {
        question: "If you needed to see a therapist tomorrow, what would happen?",
        options: [
            "I'd book an appointment - I have good insurance and access to care",
            "I could get in within a few weeks - not instant but manageable",
            "It would take months to find someone accepting patients with my insurance",
            "I can't afford therapy even with insurance - it's not an option"
        ],
        average: "It would take months to find someone accepting patients with my insurance",
        stat: "Average wait time to see a therapist is 48 days",
        characterResponse: "Mental health care should be accessible. Reality check..."
    },
    {
        question: "What's your relationship with your phone?",
        options: [
            "Healthy boundaries - I use it intentionally and put it away often",
            "Pretty normal - I check it regularly but don't feel controlled by it",
            "Definitely too much - it's the first thing I grab in the morning",
            "Addicted - I panic if I can't find it, I'm scrolling constantly"
        ],
        average: "Definitely too much - it's the first thing I grab in the morning",
        stat: "Americans spend 4.3 hours per day on their phones",
        characterResponse: "Our phones own us. How's your screen time?"
    },
    {
        question: "What's your living situation?",
        options: [
            "I own my place - building equity and feeling stable",
            "I rent my own spot - paying someone else's mortgage but it's mine",
            "Living with family to save money or help out - not ideal but works",
            "Can't afford to move out - stuck at home as an adult"
        ],
        average: "Living with family to save money or help out - not ideal but works",
        stat: "52% of young adults (18-29) live with their parents",
        characterResponse: "Housing is wild right now. What's your situation?"
    },
    {
        question: "How's your daily commute?",
        options: [
            "I work from home or live super close - 15 minutes max",
            "Pretty reasonable - 30-45 minutes, I listen to podcasts",
            "It's rough - an hour each way, kills my day",
            "Brutal - 90+ minutes in traffic, I hate my life twice a day"
        ],
        average: "Pretty reasonable - 30-45 minutes, I listen to podcasts",
        stat: "Average commute time is 54 minutes per day (both ways)",
        characterResponse: "Time in transit is time stolen from life. How much are you losing?"
    },
    {
        question: "When you think about your financial future, you feel:",
        options: [
            "Optimistic - I'm saving, investing, planning ahead confidently",
            "Cautiously hopeful - not perfect but trending in the right direction",
            "Uncertain - I have no idea if I'll ever retire or buy a house",
            "Terrified - drowning now, can't imagine it getting better"
        ],
        average: "Uncertain - I have no idea if I'll ever retire or buy a house",
        stat: "40% of Americans can't afford a $400 emergency",
        characterResponse: "The future feels scary for a lot of us. Real talk..."
    },
    {
        question: "How do you feel physically day-to-day?",
        options: [
            "Strong and energized - I take care of my body and it shows",
            "Pretty good - some aches but generally healthy and capable",
            "Tired and sore - my body is trying to tell me something",
            "Exhausted and in pain - I'm running on empty physically"
        ],
        average: "Tired and sore - my body is trying to tell me something",
        stat: "Life expectancy in the US dropped 2.7 years (2019-2021)",
        characterResponse: "Your body keeps the score. How's yours doing?"
    }
];

// GAME 2 DATA: Truth Ladder (15 total, pick random 10)
const TRUTH_POOL = [
    {
        truth: "Average American has $62,410 in debt (mortgages, student loans, credit cards combined)",
        lies: ["Average American has $18,000 in debt", "Average American has $142,000 in debt", "Average American has $7,500 in debt"]
    },
    {
        truth: "Americans spend 4.3 hours per day on their phones",
        lies: ["Americans spend 2.1 hours per day on their phones", "Americans spend 7.2 hours per day on their phones", "Americans spend 6.8 hours per day on their phones"]
    },
    {
        truth: "The average American hasn't made a new friend in 5 years",
        lies: ["The average American makes 3 new friends per year", "The average American hasn't made a new friend in 2 years", "The average American makes 1 new friend per year"]
    },
    {
        truth: "1 in 3 Americans skip meals regularly to save money",
        lies: ["1 in 10 Americans skip meals regularly to save money", "1 in 2 Americans skip meals regularly to save money", "1 in 8 Americans skip meals regularly to save money"]
    },
    {
        truth: "78% of workers live paycheck to paycheck",
        lies: ["52% of workers live paycheck to paycheck", "89% of workers live paycheck to paycheck", "43% of workers live paycheck to paycheck"]
    },
    {
        truth: "Average wait time to see a therapist is 48 days",
        lies: ["Average wait time to see a therapist is 12 days", "Average wait time to see a therapist is 87 days", "Average wait time to see a therapist is 21 days"]
    },
    {
        truth: "Americans work 137 more hours per year than Japanese workers",
        lies: ["Japanese workers work 215 more hours per year than Americans", "Americans work 47 more hours per year than Japanese workers", "Americans and Japanese workers work the same amount"]
    },
    {
        truth: "61% of Americans report feeling lonely",
        lies: ["34% of Americans report feeling lonely", "81% of Americans report feeling lonely", "19% of Americans report feeling lonely"]
    },
    {
        truth: "Life expectancy in the US dropped 2.7 years (2019-2021)",
        lies: ["Life expectancy in the US increased 1.2 years (2019-2021)", "Life expectancy in the US dropped 0.8 years (2019-2021)", "Life expectancy in the US stayed the same (2019-2021)"]
    },
    {
        truth: "52% of young adults (18-29) live with their parents",
        lies: ["28% of young adults (18-29) live with their parents", "71% of young adults (18-29) live with their parents", "15% of young adults (18-29) live with their parents"]
    },
    {
        truth: "Average American gets 6.1 hours of sleep per night",
        lies: ["Average American gets 7.5 hours per night", "Average American gets 5.2 hours per night", "Average American gets 8.0 hours per night"]
    },
    {
        truth: "40% of Americans can't afford a $400 emergency",
        lies: ["18% of Americans can't afford a $400 emergency", "63% of Americans can't afford a $400 emergency", "9% of Americans can't afford a $400 emergency"]
    },
    {
        truth: "Average American eats alone 7.7 times per week",
        lies: ["Average American eats alone 3.2 times per week", "Average American eats alone 12.4 times per week", "Average American eats alone 5.1 times per week"]
    },
    {
        truth: "46% of Americans have less than $500 in savings",
        lies: ["22% of Americans have less than $500 in savings", "68% of Americans have less than $500 in savings", "12% of Americans have less than $500 in savings"]
    },
    {
        truth: "Average commute time is 54 minutes per day (both ways)",
        lies: ["Average commute time is 28 minutes per day (both ways)", "Average commute time is 82 minutes per day (both ways)", "Average commute time is 38 minutes per day (both ways)"]
    }
];

// STATE
let personalQuestions = [];
let personalAnswers = [];
let currentPersonalQ = 0;

let truthGameRows = [];
let truthGameQuestions = [];
let currentTruthRow = 0;
let tries = 1;
let startTime = null;
let gameActive = false;

/* ============================================
   SCREEN TRANSITIONS
   ============================================ */

function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
}

/* ============================================
   START - PERSONAL QUESTIONS GAME
   ============================================ */

document.getElementById('startBtn').addEventListener('click', () => {
    showScreen('personalGameScreen');
    startPersonalGame();
    showCharacter("Let's see how your life is going!", 'happy', 3000);
});

function startPersonalGame() {
    // Shuffle and pick 10 random personal questions
    const shuffled = [...PERSONAL_QUESTIONS].sort(() => 0.5 - Math.random());
    personalQuestions = shuffled.slice(0, 10);
    personalAnswers = [];
    currentPersonalQ = 0;
    
    renderPersonalQuestion();
}

function renderPersonalQuestion() {
    const q = personalQuestions[currentPersonalQ];
    
    document.getElementById('personalQuestion').textContent = `${currentPersonalQ + 1}/10`;
    document.getElementById('questionText').textContent = q.question;
    
    const optionsContainer = document.getElementById('personalOptions');
    optionsContainer.innerHTML = q.options.map(opt => 
        `<button class="personalOption">${opt}</button>`
    ).join('');
    
    // Add click handlers
    optionsContainer.querySelectorAll('.personalOption').forEach((btn, idx) => {
        btn.addEventListener('click', () => {
            handlePersonalAnswer(btn, q.options[idx]);
        });
    });
}

function handlePersonalAnswer(btn, answer) {
    btn.classList.add('selected');
    
    const currentQ = personalQuestions[currentPersonalQ];
    
    personalAnswers.push({
        question: currentQ.question,
        yourAnswer: answer,
        average: currentQ.average,
        stat: currentQ.stat
    });
    
    // Show character response
    setTimeout(() => {
        showCharacter(currentQ.characterResponse, 'happy', 2500);
    }, 700);
    
    setTimeout(() => {
        currentPersonalQ++;
        if (currentPersonalQ < 10) {
            renderPersonalQuestion();
        } else {
            setTimeout(showGiftBox, 1000);
        }
    }, 3000);
}

/* ============================================
   GIFT BOX SCREEN
   ============================================ */

function showGiftBox() {
    showScreen('giftScreen');
    showCharacter("We made something for you...", 'excited', 4000);
}

document.getElementById('unwrapBtn').addEventListener('click', () => {
    const giftWrap = document.querySelector('.giftWrap');
    giftWrap.classList.add('unwrapping');
    
    setTimeout(() => {
        showArchetype();
    }, 1000);
});

/* ============================================
   ARCHETYPE / COMPARISON SCREEN
   ============================================ */

function showArchetype() {
    showScreen('archetypeScreen');
    
    // Render YOUR answers
    const yourAnswersDiv = document.getElementById('yourAnswers');
    yourAnswersDiv.innerHTML = personalAnswers.map(a => `
        <div class="answerItem">
            <strong>${a.question}</strong>
            ${a.yourAnswer}
        </div>
    `).join('');
    
    // Render AVERAGE answers
    const averageAnswersDiv = document.getElementById('averageAnswers');
    averageAnswersDiv.innerHTML = personalAnswers.map(a => `
        <div class="answerItem">
            <strong>${a.question}</strong>
            ${a.average}
            <div style="font-size: 0.9rem; color: #666; margin-top: 8px; font-style: italic;">${a.stat}</div>
        </div>
    `).join('');
    
    // Calculate how they compare
    let betterCount = 0;
    personalAnswers.forEach(a => {
        const yourIndex = personalQuestions.find(q => q.question === a.question).options.indexOf(a.yourAnswer);
        const avgIndex = personalQuestions.find(q => q.question === a.question).options.indexOf(a.average);
        if (yourIndex < avgIndex) betterCount++;
    });
    
    const messageDiv = document.getElementById('archetypeMessage');
    if (betterCount >= 7) {
        messageDiv.innerHTML = '<p>You\'re doing better than average on ' + betterCount + '/10 measures. You\'re one of the lucky ones.</p>';
    } else if (betterCount >= 4) {
        messageDiv.innerHTML = '<p>You\'re experiencing what most people experience. You\'re not alone.</p>';
    } else {
        messageDiv.innerHTML = '<p>You\'re struggling more than most on ' + (10 - betterCount) + '/10 measures. You\'re not alone in this.</p>';
    }
    
    setTimeout(() => {
        showCharacter("Now you know where YOU stand. But can you spot what's REAL about everyone else?", 'happy', 5000);
    }, 1000);
}

document.getElementById('continueToTruthBtn').addEventListener('click', () => {
    showScreen('truthGameScreen');
    startTruthGame();
});

/* ============================================
   TRUTH LADDER GAME (MOVING OPTIONS)
   ============================================ */

function startTruthGame() {
    const shuffled = [...TRUTH_POOL].sort(() => 0.5 - Math.random());
    truthGameRows = shuffled.slice(0, 10);
    truthGameQuestions = truthGameRows.map(r => r.truth);
    
    currentTruthRow = 0;
    tries = 1;
    startTime = Date.now();
    gameActive = true;
    
    renderTruthRows();
    updateTruthUI();
    
    setTimeout(() => {
        showCharacter("Pick the real stat!", 'happy', 3000);
    }, 500);
}

function renderTruthRows() {
    const container = document.getElementById('rowsContainer');
    container.innerHTML = '';
    
    truthGameRows.forEach((rowData, index) => {
        const row = document.createElement('div');
        row.className = `row ${index === 0 ? 'active' : 'disabled'}`;
        row.id = `truthRow${index}`;
        
        const options = [rowData.truth, ...rowData.lies];
        const shuffled = options.sort(() => 0.5 - Math.random());
        
        // Create 3 copies of options for seamless scrolling
        const tripled = [...shuffled, ...shuffled, ...shuffled];
        
        tripled.forEach(option => {
            const btn = document.createElement('button');
            btn.className = 'option';
            btn.textContent = option;
            btn.dataset.true = (option === rowData.truth);
            
            btn.addEventListener('click', () => {
                const isTrue = btn.dataset.true === 'true';
                handleTruthClick(btn, isTrue, index);
            });
            
            row.appendChild(btn);
        });
        
        container.appendChild(row);
    });
}

function handleTruthClick(btn, isTrue, rowIndex) {
    if (!gameActive || rowIndex !== currentTruthRow) return;
    
    hideCharacter();
    
    if (isTrue) {
        btn.classList.add('correct');
        showToast('Truth! ✨');
        confetti(btn);
        
        setTimeout(() => {
            showCharacter("Yep, that's the real one", 'excited', 2000);
        }, 500);
        
        setTimeout(() => {
            const rowEl = document.getElementById(`truthRow${rowIndex}`);
            rowEl.classList.remove('active');
            rowEl.classList.add('completed');
            
            if (rowIndex < 9) {
                currentTruthRow++;
                const nextRow = document.getElementById(`truthRow${currentTruthRow}`);
                nextRow.classList.remove('disabled');
                nextRow.classList.add('active');
                nextRow.scrollIntoView({ behavior: 'smooth', block: 'center' });
                updateTruthUI();
                
                if (currentTruthRow === 4) {
                    setTimeout(() => showCharacter("Halfway there!", 'happy', 2000), 500);
                } else if (currentTruthRow === 9) {
                    setTimeout(() => showCharacter("LAST ONE!", 'excited', 2000), 500);
                }
            } else {
                setTimeout(showRecipeCard, 1000);
            }
        }, 1000);
        
    } else {
        btn.classList.add('wrong');
        showToast('Lie! Starting over... ❌');
        gameActive = false;
        
        setTimeout(() => {
            showCharacter("Nope! That's what they tell us", 'sad', 2000);
        }, 300);
        
        setTimeout(() => {
            tries++;
            currentTruthRow = 0;
            gameActive = true;
            renderTruthRows();
            updateTruthUI();
            showToast('Try again! 💪');
        }, 2500);
    }
}

function updateTruthUI() {
    document.getElementById('currentRow').textContent = `${currentTruthRow + 1}/10`;
    document.getElementById('triesCount').textContent = tries;
}

/* ============================================
   RECIPE CARD SCREEN
   ============================================ */

function showRecipeCard() {
    gameActive = false;
    hideCharacter();
    
    const elapsed = Math.floor((Date.now() - startTime) / 1000);
    const minutes = Math.floor(elapsed / 60);
    const seconds = elapsed % 60;
    const timeStr = `${minutes}:${seconds.toString().padStart(2, '0')}`;
    
    showScreen('recipeScreen');
    
    document.getElementById('recipeTime').textContent = timeStr;
    document.getElementById('recipeTries').textContent = tries;
    
    const questionsList = document.getElementById('recipeQuestionsList');
    questionsList.innerHTML = truthGameQuestions.map(q => 
        `<div class="recipeQuestion">• ${q}</div>`
    ).join('');
    
    setTimeout(() => {
        showCharacter("Nice work! Want to see how we know all this?", 'excited', 4000);
    }, 1000);
}

document.getElementById('continueToStoryBtn').addEventListener('click', () => {
    showScreen('storyScreen');
});

document.getElementById('shareBtn').addEventListener('click', () => {
    showToast('Share functionality coming soon! 📤');
});

document.getElementById('playAgainBtn').addEventListener('click', () => {
    showScreen('introScreen');
});

document.getElementById('finalPlayAgainBtn').addEventListener('click', () => {
    showScreen('introScreen');
});

/* ============================================
   CHARACTER POPUP
   ============================================ */

let characterTimer = null;

function showCharacter(message, emotion = 'happy', duration = 4000) {
    const popup = document.getElementById('popupCharacter');
    const bubble = document.getElementById('speechBubble');
    const body = popup.querySelector('.characterBody');
    
    if (characterTimer) clearTimeout(characterTimer);
    
    bubble.textContent = message;
    body.className = 'characterBody ' + emotion;
    popup.classList.add('show');
    
    characterTimer = setTimeout(() => {
        popup.classList.remove('show');
    }, duration);
}

function hideCharacter() {
    document.getElementById('popupCharacter').classList.remove('show');
    if (characterTimer) clearTimeout(characterTimer);
}

/* ============================================
   TOAST NOTIFICATIONS
   ============================================ */

function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2000);
}

/* ============================================
   CONFETTI ANIMATION
   ============================================ */

function confetti(element) {
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    for (let i = 0; i < 20; i++) {
        createConfettiPiece(centerX, centerY);
    }
}

function createConfettiPiece(x, y) {
    const piece = document.createElement('div');
    piece.className = 'confetti-piece';
    piece.style.left = x + 'px';
    piece.style.top = y + 'px';
    piece.style.background = ['#8b5cf6', '#ec4899', '#fbbf24', '#10b981'][Math.floor(Math.random() * 4)];
    document.body.appendChild(piece);
    
    const angle = Math.random() * Math.PI * 2;
    const velocity = 3 + Math.random() * 3;
    const vx = Math.cos(angle) * velocity;
    const vy = Math.sin(angle) * velocity;
    
    let posX = 0, posY = 0, rotation = 0;
    
    function animate() {
        posX += vx;
        posY += vy + 0.5;
        rotation += 10;
        
        piece.style.transform = `translate(${posX}px, ${posY}px) rotate(${rotation}deg)`;
        piece.style.opacity = Math.max(0, 1 - posY / 300);
        
        if (posY < 300) {
            requestAnimationFrame(animate);
        } else {
            piece.remove();
        }
    }
    
    animate();
}
