import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

import Message from "../layout/Message"
import Container from '../layout/Container'
import LinkButton from '../layout/LinkButton'
import ProjectCard from '../project/ProjectCard'

import styles from './Projects.module.css'

// useLocation para acessar o history

function Project() {
    const [projects, setProjects] = useState([])

    const location = useLocation()
    let message = ''
    if (location.state) {
        message = location.state.message
    }

    useEffect(() => {

        fetch('http://localhost:5000/projects', {
            method: 'GET',
            headers: {
                'Content-type': 'application/json'
            },
        }).then(resp => resp.json())
            .then(data => {
                setProjects(data)
                console.log(data)
            }).catch(err => console.log(err))
    }, [])

    return (
        <div className={styles.project_container}>
            <div className={styles.title_container}>
                <h1>Meus projetos</h1>
                <LinkButton text="Criar projeto" to="/newproject" />
            </div>
            {message && <Message msg={message} type="success" />}
            <Container customClass="start">
                {projects.length > 0 &&
                    projects.map((project) =>
                        <ProjectCard
                            id={project.id}
                            name={project.name}
                            budget={project.budget}
                            category={project.category.name}
                            key={project.id}
                        />
                    )
                }
            </Container>
        </div>
    )
}

export default Project