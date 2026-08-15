export type ExperienceItem = {
  id: string
  organization: string
  role: string
  period: string
  technologies: string[]
  description: string
}

export const experience: ExperienceItem[] = [
  {
    id: 'ceeri',
    organization: 'CSIR–CEERI, Jaipur Campus',
    role: 'Skill Development Training in Advanced Industrial Internet of Things (IIoT)',
    period: '13 July 2026 – 12 August 2026',
    technologies: ['ESP32', 'Arduino', 'Embedded Systems', 'IoT', 'Flutter', 'PCB Design'],
    description:
      'Hands-on training involving embedded systems, sensor and ADC interfacing, motor control, IoT concepts, Flutter and PCB design.',
  },
  {
    id: 'nwr',
    organization: 'North Western Railway, Jaipur Division',
    role: 'Summer Internship',
    period: 'May 2026 – June 2026',
    technologies: [], // [ADD TECHNOLOGIES]
    description: '[ADD INTERNSHIP DESCRIPTION]',
  },
  {
    id: 'gayatri',
    organization: 'Gayatri Software Services Pvt. Ltd.',
    role: 'Full Stack Web Development Internship',
    period: '15 June 2025 – 30 July 2025',
    technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Express.js', 'MongoDB'],
    description:
      'Worked on full-stack web development concepts and practical software development.',
  },
]
