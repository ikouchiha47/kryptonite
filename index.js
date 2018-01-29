var person = "<Enter Full Or Part of UserName or Number displayed in chat boxes, separate multiple users by comma>"

var observer = (function(person, observer) {
    let rx = new RegExp(person.split(',').join('|'))

    function makeVanish() {
        let lastMatch = "";
        let elements = document.querySelectorAll(".emoji-text-clickable");
        
        if ( elements && elements.length > 0 ) {
            Array.from( elements )
                    .filter(e => {
                        if( e.innerText.trim() == "" && lastMatch.match(rx) ) return true
                
                        let match = e.innerText.match( rx )
                        if(match) {
                            lastMatch = match[0]
                            return true
                        }
                
                        lastMatch = "";
                        return false;
                    })
                    .forEach(e => e.parentElement.parentElement.remove())
        }
    }
    
    const chatbox =  document.querySelector(".pane-chat-msgs pane-chat-body lastTabIndex".split(" ").join("."));
    const config = { childList: true, subtree: true }

    if(!chatbox) return;
    const callback = (mutationList) => {
        for(mut of mutationList) {
            if(mutation.type === 'subtree') {
                makeVanish()
            }
        }
    }

    makeVanish();
    observer = new MutationObserver(callback);
    observer.observe(chatbox, config);
    return observer;
})(person)

// un comment this code to stop
// if(observer && observer.disconnect) { observer.disconnect(); }
