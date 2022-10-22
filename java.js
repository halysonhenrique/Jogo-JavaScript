const motoca = document.querySelector('.motoca');
const pm = document.querySelector('.pm');


const puxoraspo = () => {
    motoca.classList.add('puxoraspo');
    setTimeout(() => {
        motoca.classList.remove('puxoraspo')
    }, 800);
}

const grauinfinito = setInterval(() => {                                        // criar duas const para a posição dos elementos //  
    const pmposition = pm.offsetLeft;
    const motocaposition = +getComputedStyle(motoca).bottom.replace('px', '');


        if (pmposition >= 1230 && motocaposition <= 20) {
        
            pm.style.animation = 'none';
            pm.style.left = `${pmposition}px`;

            motoca.style.animation = 'none';
            motoca.style.bottom = `${motocaposition}px`;
            
            pm.src = './imagens/preso.gif'
            pm.style.width = '175px';
            pm.style.bottom = '50px';  
            
            clearInterval(grauinfinito);
    }
}, 10);


 
document.addEventListener('keydown', puxoraspo);