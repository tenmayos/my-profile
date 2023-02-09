import OuterLink from "../OuterLink";

export default function OtherSkillsSection() {
    return (
        <section className="about-section dark-blue-bg">
            <h1 className="about-header">Other Skills</h1>
            <div className="about-desc">
                <p>Getting right to the point, here is yet another list of the things I can do</p>
                <ul>
                    <li>
                        Assemble computer hardware
                    </li>
                    <li>
                        <OuterLink content="Git and version control" destination="https://git-scm.com/" />
                    </li>
                    <li>
                        <OuterLink content="Docker" destination="https://www.docker.com/" />
                    </li>
                    <li>
                        <OuterLink content="Bash" destination="https://en.wikipedia.org/wiki/Bash_(Unix_shell)" /> & {" "}
                        <OuterLink content="PowerShell" destination="https://learn.microsoft.com/en-us/powershell/scripting/overview?view=powershell-7.3" />
                    </li>
                    <li>
                        <OuterLink content="Ubuntu OS" destination="https://ubuntu.com/desktop" />
                    </li>
                </ul>
                <p>During my path it was rather natural for me to pick up the more modern skills that go with software development,
                    in order to both make my life easier and speed up my development pace.</p>
                <p>As for the Assembly of computer hardware, this was just me and my curiosity.</p>
            </div>
        </section>
    );
}