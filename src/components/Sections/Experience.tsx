import { Box, useTheme } from '@mui/material'
import { StyledTypography as Typography } from '../Styled/StyledComponents'
import BoxSection from '../common/BoxSection'
import { useTranslation } from 'react-i18next'

const Experience = ({ className }: { className?: string }) => {
    const theme = useTheme()
    const { t } = useTranslation()

    const tasks = [
        {
            title: t('sections.experience.tasks.systemRefactoring.title'),
            description: t('sections.experience.tasks.systemRefactoring.description')
        },
        {
            title: t('sections.experience.tasks.challengeResolution.title'),
            description: t('sections.experience.tasks.challengeResolution.description')
        },
        {
            title: t('sections.experience.tasks.componentDevelopment.title'),
            description: t('sections.experience.tasks.componentDevelopment.description')
        },
        {
            title: t('sections.experience.tasks.typescript.title'),
            description: t('sections.experience.tasks.typescript.description')
        },
        {
            title: t('sections.experience.tasks.bugFixing.title'),
            description: t('sections.experience.tasks.bugFixing.description')
        },
        {
            title: t('sections.experience.tasks.libraryImplementation.title'),
            description: t('sections.experience.tasks.libraryImplementation.description')
        },
        {
            title: t('sections.experience.tasks.stateManagement.title'),
            description: t('sections.experience.tasks.stateManagement.description')
        }
    ]

    return (
        <BoxSection title={t('sections.experience.title')} className={className}>
            <Typography indicate variant="h1" sx={{ mb: 2 }}>{t('sections.experience.title')}</Typography>
            <Box
                sx={{
                    borderLeft: `3px solid ${theme.palette.primary.main}`,
                    p: '0 1rem',
                }}
            >
                <Typography variant="h2">{t('sections.experience.position')}</Typography>
                <Typography variant="caption" sx={{ mb: 2 }}>{t('sections.experience.company')}</Typography>
                <Typography variant="h3">{t('sections.experience.responsibilities')}</Typography>

                <ul style={{ margin: '0', gap: 2 }}>
                    {tasks.map((task, index) => (
                        <li key={index}>
                            <Typography><strong style={{ color: theme.palette.primary.main }}>{task.title}:</strong> {task.description}</Typography>
                        </li>
                    ))}
                </ul>
            </Box>
        </BoxSection>
    )
}

export default Experience
