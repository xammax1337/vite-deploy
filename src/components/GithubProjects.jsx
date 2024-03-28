import React, { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card';

function Projects() {
    const [repos, setRepos] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const url = "https://api.github.com/users/xammax1337/repos"

    useEffect(() => {
        fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const filteredRepos = data.filter(repo => {
                return repo.language !== null
            })
            setRepos(filteredRepos)
            setIsLoading(false)
        })
        .catch((error) => {
            console.error("Error fetching data:", error)
            setIsLoading(false)
        })
    }, [])

    return (
        <section className="projectview">
            {isLoading ? (<p>Loading...</p>) :
                repos.map(repo => {
                    return (
                        <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>
                                <h2>{repo.name}</h2>
                            </Card.Title>
                            <Card.Subtitle className="mb-2 text-muted"><p>{repo.owner.login}</p></Card.Subtitle>
                            <Card.Text>
                                <p>Language: {repo.language}</p>
                                <p>{repo.created_at}</p>
                            </Card.Text>

                            <Card.Link href={repo.html_url} target="_blank"><p id="projectLink">Repository</p></Card.Link>
                        </Card.Body>
                    </Card>
                    )
                })
            }
        </section>
    )
}


export default Projects