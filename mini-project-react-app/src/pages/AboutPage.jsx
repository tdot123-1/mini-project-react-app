const AboutPage = () => {
    return (
        <div className="about-page">
            <h1>About</h1>
            <section className="about-project">
                <article className="about-content">
                    <h2>What is this project?</h2>
                    <span>ToMiD</span> is a platform for the renting of apartments, both for individuals
                    looking for a place to stay and those who are looking to rent out their place.
                    The main platform for finding affordable housing options in Spain, Germany and France!<br />
                    <ul className="about-ul">
                        <li><span>Find</span> your perfect apartment to rent on the dashboard.</li>
                        <li><span>Click</span> on any of the available rentals to display more information.</li>
                        <li>Specifically <span>affordable</span> and very <span>high rated</span> rentals are easy to find by looking out for the labels.</li>
                        <li>Add your <span>favorite</span> rentals to your personal 'favorites' tab.</li>
                        <li><span>Edit</span> any apartment you see by going into the details and using the 'Edit' button.</li>
                        <li>If you are looking to rent out your space, easily <span>add</span> an advertisement to the list on the dashboard.</li>
                    </ul>
                    Try it out and find the perfect stay!
                </article>
            </section>
            <section className="about-team">
                <h2>Meet the team</h2>
                <div className="team-members-div">
                    <article>
                        <h3>Omid</h3>
                        <p>Helllo! I am Omid, a 31 years old Ironhacker to become a full stack developer soon. I was born in Iran and currently I live and work in Germany. It is my first project after getting to learn React and theough this journey I have learned very useful materials to develop a web app. I'll be back soon with more professional apps.</p>
                    </article>
                    <article>
                        <h3>Thomas</h3>
                        <p>Hi there! I'm Thomas, I'm 28 years old, born in the Netherlands and currently living in France.
                            I'm on my way to becoming a full stack web developer, with the help of Ironhack bootcamp.
                            This is the first React app I've worked on, it was a lot of fun. I've learned much from it, and I hope to be making many more apps in the future.
                            <br />I hope you enjoy our app!
                        </p>
                    </article>
                </div>
            </section>
            
        </div>
    )
}

export default AboutPage;