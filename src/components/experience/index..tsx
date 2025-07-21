'use client'
import { FC } from "react";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { SchoolIcon, StarIcon, WorkIcon } from "@/assets/icons";
import ExperienceElement from "./experience-element";
import { data } from "./data";

interface ExperienceSectionProps { }

const ExperienceSection: FC<ExperienceSectionProps> = () => {

    return (
        <section className='relative ' id="experiences">
            <h2 className='text-6xl text-center font-bold mb-5'>Experiences</h2>
            <VerticalTimeline>
                {data.map(({ id, Icon, date, details, location, title, iconColor, technologies }, index) => (
                    <ExperienceElement
                        id={id}
                        Icon={Icon}
                        title={title}
                        location={location}
                        date={date}
                        iconColor={iconColor}
                        technologies={technologies}
                        border={index % 2 !== 0}
                        details={details}
                    >
                    </ExperienceElement>
                ))}
            </VerticalTimeline>

        </section>
    );
}

export default ExperienceSection;
