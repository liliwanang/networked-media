

window.onload = () => {
    const doorSound = document.getElementById("door");
    const trainSound = document.getElementById("train");
    const noise = document.getElementById("noise");
    const title = document.getElementById("main-title");
    const formContainer = document.getElementById('observation-form-container');
    const obsForm = document.getElementById('obs-form');
    const obsInput = document.getElementById('obs-input');
    let activePerson = null;

    // audio
window.addEventListener('scroll', () => {
    let scrollPos = window.pageXOffset || document.documentElement.scrollLeft;
    
    // 1. bg noise 
    if (noise.paused) noise.play().catch(() => {});

    // 2. closing door
    const doorSceneStart = window.innerWidth * 3; 
    const doorSceneEnd = window.innerWidth * 6;

    if (scrollPos > doorSceneStart && scrollPos < doorSceneEnd) {
        let progress = (scrollPos - doorSceneStart) / (window.innerWidth * 3);
        
        const doorL = document.getElementById('doorLeft');
        const doorR = document.getElementById('doorRight');
        
        // door move
        doorL.style.transform = `translateX(${-100 + (progress * 100)}%)`;
        doorR.style.transform = `translateX(${100 - (progress * 100)}%)`;

        if (progress > 0.1 && doorSound.paused) {
            doorSound.play();
        }
    }

    // 3. Train 
    if (scrollPos > doorSceneEnd && trainSound.paused) {
        trainSound.play();
    }
});




    // People 
    document.querySelectorAll('.person').forEach((person, index) => {
        person.id = `person-${index}`;
        person.addEventListener('click', (e) => {
            activePerson = person;
            formContainer.style.display = 'block';
            obsInput.focus();
        });
    });

    obsForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const entry = obsInput.value;
        if (activePerson && entry) {
            createTooltip(activePerson, entry);

            // Save to DB
            fetch('/save-observation', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ personId: activePerson.id, text: entry })
            });
            formContainer.style.display = 'none';
            obsInput.value = '';
        }
    });
};


// aura
function createTooltip(person, text) {
    let existing = person.parentNode.querySelector(`[data-for="${person.id}"]`);
    if (existing) existing.remove();

    const tooltip = document.createElement('div');
    tooltip.className = 'person-tooltip';
    tooltip.setAttribute('data-for', person.id);
    tooltip.innerText = text;
    
    tooltip.style.left = person.style.left || getComputedStyle(person).left;
    tooltip.style.top = person.style.top || getComputedStyle(person).top;
    
    person.after(tooltip);
}