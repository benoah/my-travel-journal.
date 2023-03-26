import React from "react"

export default function Joke(props) {
    const [isShown, setIsShown] = React.useState(false)
    /**  const [messages, setMessages] = React.useState(["a", "b"])
     * Challenge:
     * - Only display the punchline paragraph if `isShown` is true
     */
    const [messages, setMessages] = React.useState(["a", "b"])
    function toggleShown(){
        setIsShown(prevShown => !prevShown)
    }


     /**
     * Challenge:
     * - If there are no unread messages, display "You're all caught up!"
     * - If there are > 0 unread messages, display "You have <n> unread
     *   message(s)"
     *      - If there's exactly 1 unread message, it should read "message"
     *        (singular)
     */
  




    return (
        <div>
            {
                messages.length === 0 ? 
                <h1>you dont have any message </h1> :
                <h1>you have {messages.length} </h1>


            }
                <h1>You have  {messages.length} unread messages!</h1>
            {props.setup && <h3>{props.setup}</h3>}
            {isShown && <p>{props.punchline}</p>}
            <button onClick={toggleShown}>Show Punchline</button>
            <hr />
        </div>
    )
}

