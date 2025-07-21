import type { FC, ReactNode } from 'react';
import { IconType } from 'react-icons';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';

interface ExperienceElementProps {
    title: string
    date: string
    location: string
    children?: ReactNode
    Icon: IconType

}

const ExperienceElement: FC<ExperienceElementProps> = ({ Icon, title, location, children,date }) => {
    return (
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#006393', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #006393' }}
            date={date}
            iconStyle={{ background: '#006393', color: '#fff' }}
            icon={<Icon/>}
        >
            <h3 className="vertical-timeline-element-title">{title}</h3>
            <h4 className="vertical-timeline-element-subtitle">{location}</h4>
            <p>
                {children}
            </p>
        </VerticalTimelineElement>
    );
}

export default ExperienceElement;
