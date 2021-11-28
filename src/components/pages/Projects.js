import { useLocation } from 'react-router-dom'

import Message from "../layout/Message"
import Container from '../layout/Container'

import styles from './Projects.module.css'
import LinkButton from '../layout/LinkButton'

// useLocation para acessar o history

function Project() {

    const location = useLocation()
    let message = ''
    if(location.state){
        message = location.state.message
    }

    return(
        <div className={styles.project_container}>
            <div className={styles.title_container}>
                <h1>Meus projetos</h1>
                <LinkButton text="Criar projeto" to="/newproject" />
            </div>
            {message && <Message msg={message} type="success"/>}
            <Container customClass="start">
                <p>Projetos...</p>
            </Container>
        </div>
    )
}

export default Project