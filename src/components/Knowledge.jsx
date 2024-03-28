import KnowledgeData from "../assets/knowledge.json"

export default function Knowledge(){
    return (
        <section>
            <h3>Kunskaper: </h3>{
                KnowledgeData.knowledge.map(kn => (
                    <article>
                    <p>- {kn.name}</p>
                </article>
                ))}

                <h3>Verktyg: </h3>{
                KnowledgeData.tools.map(tool => (
                    <article>
                    <p>- {tool.tool}</p>
                </article>
                ))
                }
        </section>
    )
}