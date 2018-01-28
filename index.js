var person = "<Enter Full Or Part of UserName or Number displayed in chat boxes>"

var observer = (function(person, observer) {
    function makeVanish() {
        let elements = document.querySelectorAll(".emoji-text-clickable")
        if (elements && elements.length > 0) {
            Array.from(elements)
                    .filter(e => e.innerText.match( new RegExp(person.split(" ").join("|")) ))
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
