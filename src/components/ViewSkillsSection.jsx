import { skills } from "../js/arrays"

export default function ViewSkillsSection() {
    return (
        <section id="skills" className="mx-auto max-w-[1600px] border-t border-rule px-5 pt-24 md:px-10 md:pt-32">
            <h2 className="display mb-10 text-[clamp(3rem,8vw,7rem)]">Навички</h2>
            <ul className="grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
                {skills.map((skill) => (
                    <li key={skill} className="border-t border-hair py-3 text-base">
                        {skill}
                    </li>
                ))}
            </ul>
        </section>
    )
}
