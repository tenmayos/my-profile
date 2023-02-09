import "../../styles/About.css";
import OuterLink from "../OuterLink";

export default function MainSkillsSection() {
    return (
        <section className="about-section black-bg">
            <h1 className="section-header">Main Tech Skills</h1>
            <div className="about-desc">
                <p>Hmm, where should I begin…</p>
                <p>I'm proficient in <strong style={{ "color": "#96e2f0" }}>C#</strong> and the{' '}

                <OuterLink
                content=".Net Framework"
                destination="https://dotnet.microsoft.com/en-us/learn/dotnet/what-is-dotnet-framework" />

                {' '}(Obviously) but what would I be if it was all I know, <i>eh?</i></p>
                <p>Well, here is a list of the other technologies I know how to use:</p>
                <ul>
                    <li><OuterLink content="Node JS" destination="https://nodejs.org/en/about" /></li>
                    <li><OuterLink content="Express JS" destination="https://expressjs.com/" /></li>
                    <li><OuterLink content="React JS" destination="https://reactjs.org/" /></li>
                    <li><OuterLink content="Python" destination="https://www.python.org/about/" /></li>
                    <li><OuterLink content="MongoDB" destination="https://www.mongodb.com/" /></li>
                    <li><OuterLink content="MySQL" destination="https://www.mysql.com/" /></li>
                    <li><OuterLink content="Unity Game Engine" destination="https://unity.com/" /></li>
                </ul>
                <p>Here is my favorite, Unusual but effective stack for Client-sided web development.</p>
                <ul>
                    <li>
                        React JS
                    </li>
                    <li>
                        MongoDB
                    </li>
                    <li>
                        .Net Core web API
                    </li>
                </ul>

                <p><i>I know i know...</i> People prefer Node JS with Express.</p>
                <p>But The reason you see .NET Core web API in there is because currently it is the fastest out there in terms of performance, and obviously C# though!</p>
                <p>But if we were to talk in terms of popular stacks, I'd say I'm proficient in using the <strong>MERN</strong> stack.</p>
                <p>If I were to develop Server-side Web Apps, I'd most likely go with this bad boy right here: </p>
                <div className="img-container">
                    <OuterLink content={<img className="nextjs-logo" src="/images/next.png" alt="Next JS logo" />} destination="https://nextjs.org/" />
                </div>
            </div>
        </section>
    );
}