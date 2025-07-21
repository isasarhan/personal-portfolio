import ExperienceDetails from '@/components/home/experience-section/details';
import type { FC } from 'react';

interface ExperienceDetailsPageProps {
    params: Promise<{ id: string }>
}

const ExperienceDetailsPage: FC<ExperienceDetailsPageProps> = async ({ params }) => {
    const { id } = await params
    return (
        <ExperienceDetails id={id} />
    );
}

export default ExperienceDetailsPage;
