var person = "<Enter Full Or Part of UserName or Number displayed in chat boxes>"
var observer;

(function(person, observer) {
    const chatbox =  document.querySelector(".pane-chat-msgs pane-chat-body lastTabIndex".split(" ").join("."));
    const config = { childList: true, subtree: true }


    const callback = (mutationList) => {
        for(mut of mutationList) {
            if(mutation.type === 'subtree') {
                Array.from(document.querySelectorAll(".emoji-text-clickable"))
                    .filter(e => e.innerText.match( new RegExp(person.split(" ").join("|")) ))
                    .each(e => e.parentElement.parentElement.remove())
            }
        }
    }

    observer = new MutationObserver(callback);
    observer.observe(chatbox, config);
})(person, observer)

// un comment this code to stop
// if(observer && observer.disconnect) { observer.disconnect(); }
