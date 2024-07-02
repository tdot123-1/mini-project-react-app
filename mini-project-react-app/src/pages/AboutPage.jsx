const AboutPage = () => {
    return (
        <div className="about-page">
            <h1>About</h1>
            <section className="about-project">
                <h2>What is this project?</h2>
                <p>
                    This is a platform for the renting of apartments, both for individuals
                    looking for a place to stay and those who are looking to rent out their place.
                    
                </p>
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