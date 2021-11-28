import Message from "../layout/Message"
import { useLocation } from 'react-router-dom'

// useLocation para acessar o history

function Project() {

    const location = useLocation()
    let message = ''
    if(location.state){
        message = location.state.message
    }

    return(
        <div>
            <h1>Meus projetos</h1>
            {message && <Message msg={message} type="success"/>}
        </div>
    )
}

export default Project