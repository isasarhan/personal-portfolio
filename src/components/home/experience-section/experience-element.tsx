import Button from '@/components/common/button';
import type { FC, ReactNode } from 'react';
import { IconType } from 'react-icons';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';

interface ExperienceElementProps {
    id:string
    title: string
    date: string
    technologies?: string[]
    location: string
    details?: string
    Icon: IconType
    iconColor?: string
    border?: boolean
}

const ExperienceElement: FC<ExperienceElementProps> = ({ id, Icon, title, location, details, technologies = [], date, border = false, iconColor = '#006393' }) => {
    //#006293
    const bgColor = border ? '#368FBF' : '#006293'
    return (
        <VerticalTimelineElement
            className="vertical-timeline-element--work "
            contentStyle={{ background: bgColor, color: '#fff', border: '2px solid #fff', borderRadius: '20px' }}
            contentArrowStyle={{ borderRight: '9px solid  #fff' }}
            date={date}
            iconStyle={{ background: iconColor, color: '#fff' }}
            icon={<Icon />}
        >

            <h3 className="vertical-timeline-element-title text-2xl">{title}</h3>
            <h4 className="vertical-timeline-element-subtitle">{location}</h4>
            <div className="flex flex-col gap-3 pt-5">
                <div className='flex text-xs gap-3 flex-wrap items-center '>
                    {
                        technologies.map((technology) => (
                            <div className='rounded-full px-2 py-1 border border-white bg-white  text-black'>{technology}</div>
                        ))
                    }
                </div>
                <p className='m-0! p-0'>
                    {details}
                </p>
                <Button className='py-2 px-5 border-2 border-white  rounded-full' url={`/experiences/${id}`}>Show More</Button>
            </div>

        </VerticalTimelineElement>
    );
}

export default ExperienceElement;
