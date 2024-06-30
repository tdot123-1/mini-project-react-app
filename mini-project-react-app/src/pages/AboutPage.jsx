const AboutPage = () => {
    return (
        <div className="about-page">
            <h1>About</h1>
            <section className="about-project">
                <h2>What is this project?</h2>
                <p>What is this project, who will be using it, what are its functionallities?</p>
            </section>
            <section className="about-team">
                <h2>Meet the team</h2>
                <div className="team-members-div">
                    <article>
                        <h3>Team member #1</h3>
                        <p>Some info about the teammember, background, hobbies etc.</p>
                    </article>
                    <article>
                        <h3>Team member #2</h3>
                        <p>Some info about the teammember, background, hobbies etc.</p>
                    </article>
                </div>
            </section>
            
        </div>
    )
}

export default AboutPage;