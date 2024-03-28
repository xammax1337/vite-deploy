import ExperienceData from "../assets/experiences.json"

export default function Experiences(){
    return (
        <section>
            <h2>Erfarenheter: </h2>{
                ExperienceData.experiences.map(exp => {
                return(
                    <article>
                        <h3>{exp.workplace}:</h3>
                        <p>- {exp.role}</p>
                    </article>
                )
                })
            }
        </section>
    )
}