window.onload = () => {
    button = () => {
        let who = ['The dog', 'My granma', 'His turtle', 'My bird'];
        let what = ['eat', 'pissed', 'crushed', 'broked'];
        let when = ['before the class', 'right in time', 'when I finished', 'during my lunch', 'while I was praying'];
        let randomWho = Math.floor(Math.random() * who.length);
        let randomWhat = Math.floor(Math.random() * what.length);
        let randomWhen = Math.floor(Math.random() * when.length);
        let message = who[randomWho] + ' ' + what[randomWhat] + ' ' + when[randomWhen];
        
        return document.querySelector('#excuses').innerHTML = message;
    }

}
