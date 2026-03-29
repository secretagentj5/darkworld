const totalFiles = 500; 

const narrativeText = `I woke up at 03:14 AM. The monitor was already glowing. I didn't turn it on. 
They are listening to the frequencies. I don't have much time before the sweep connects to my IP. 
I've fragmented the evidence. The truth is scattered in these nodes. 
Don't trust the surface. Dig deeper. Find the sequence before they wipe it all...`;

const typewriterElement = document.getElementById('typewriter');
const gridContainer = document.getElementById('grid');
const systemStatus = document.getElementById('system-status');

let i = 0;
const typingSpeed = 40; 

function typeWriter() {
    if (i < narrativeText.length) {
        typewriterElement.innerHTML += narrativeText.charAt(i);
        i++;
        let jitter = Math.random() * 30;
        setTimeout(typeWriter, typingSpeed + jitter);
    } else {
        setTimeout(revealGrid, 1000);
    }
}

function revealGrid() {
    systemStatus.classList.remove('hidden');
    
    setTimeout(() => {
        gridContainer.classList.remove('hidden');
        buildGrid();
    }, 1500);
}

function buildGrid() {
    for (let j = 1; j <= totalFiles; j++) {
        const link = document.createElement('a');
        link.href = `${j}.html`;
        link.className = 'fragment-link';
        
        const formattedNumber = j.toString().padStart(3, '0');
        
        const textSpan = document.createElement('span');
        textSpan.className = 'real-text';
        textSpan.innerText = `NODE_${formattedNumber}`;
        
        link.appendChild(textSpan);
        gridContainer.appendChild(link);
    }
}

window.onload = () => {
    setTimeout(typeWriter, 1000);
};
