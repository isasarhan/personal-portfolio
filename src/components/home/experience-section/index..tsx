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
            <h2 className='text-6xl text-center font-bold mt-32 mb-5'>Experiences</h2>
            <VerticalTimeline>
                {data.map(({ Icon, date, details, location, title }) => (
                    <ExperienceElement Icon={Icon} title={title} location={location} date={date}>
                        {details}
                    </ExperienceElement>
                ))}
            </VerticalTimeline>

        </section>
    );
}

export default ExperienceSection;
