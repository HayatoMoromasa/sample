const button = document.querySelector('button');
button.style.position = 'absolute';
button.style.top = '60%';
button.style.left = '50%';
button.style.transform = 'translate(-60%, -50%)';

document.addEventListener('DOMContentLoaded', function() {
    const el = document.querySelector('.animate-title');
    const str = el.innerHTML.trim();
    let concatStr = '';

    for(let c of str) {
        c = c.replace(' ', '&nbsp;');
        concatStr += `<span class="char">${c}</span>`;
    }
    el.innerHTML = concatStr;
})
