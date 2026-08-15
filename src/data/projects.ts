export type ProjectCategory = 'embedded' | 'iot' | 'robotics' | 'software' | 'communication'

export type Project = {
  id: string
  number: string
  title: string
  fullName?: string
  description: string
  technologies: string[]
  category: ProjectCategory
  award?: string
  conference?: string
  projectUrl?: string
  githubUrl?: string
  featured?: boolean
  size?: 'lg' | 'md' | 'sm'
  posterImage?: string
  posterImageFull?: string
}

export const filters: { label: string; value: 'all' | ProjectCategory }[] = [
  { label: 'All', value: 'all' },
  { label: 'Embedded', value: 'embedded' },
  { label: 'IoT', value: 'iot' },
  { label: 'Robotics', value: 'robotics' },
  { label: 'Software', value: 'software' },
  { label: 'Communication', value: 'communication' },
]

export const featuredProject: Project = {
  id: 'snips',
  number: '01',
  title: 'SNIPS',
  fullName: 'Scalable Node Interfacing and Processing System',
  description:
    'An off-grid LoRa mesh communication and GPS-free positioning system designed for disaster response and remote deployment scenarios.',
  technologies: ['LoRa', 'ESP32', 'IoT', 'Wireless Communication', 'GPS-Free Positioning'],
  category: 'communication',
  award: '1st Prize — ICANCT-2026',
  conference:
    '6th International Conference on Advancement in Nano Electronics & Communication Technologies',
  projectUrl: '[ADD PROJECT URL]',
  githubUrl: '[ADD GITHUB PROJECT URL]',
  featured: true,
  posterImage: '/projects/snips-poster.jpg',
  posterImageFull: '/projects/snips-poster-full.png',
}

export const projects: Project[] = [
  {
    id: 'line-follower',
    number: '02',
    title: 'Line Following Robot',
    description:
      'A sensor-based line-following robot using multiple front-mounted IR sensors and PID-based control for accurate movement.',
    technologies: ['Arduino', 'IR Sensors', 'PID Control', 'Motor Driver'],
    category: 'robotics',
    githubUrl: '[ADD GITHUB PROJECT URL]',
    size: 'md',
  },
  {
    id: 'esp32-adc',
    number: '03',
    title: 'ESP32 + ADS1120 ADC Interface',
    description:
      'ESP32-based ADC interfacing project involving the ADS1120, voltage measurement and sensor/analog signal acquisition.',
    technologies: ['ESP32', 'ADS1120', 'ADC', 'SPI', 'Embedded C'],
    category: 'embedded',
    githubUrl: '[ADD GITHUB PROJECT URL]',
    size: 'sm',
  },
  {
    id: 'keypad-motor',
    number: '04',
    title: 'Keypad Controlled Motor System',
    description:
      'A keypad-controlled motor system with speed selection, forward/reverse direction and stop, with LCD feedback.',
    technologies: ['Arduino UNO', '4x4 Keypad', '20x4 LCD', 'L298N', 'PWM'],
    category: 'embedded',
    githubUrl: '[ADD GITHUB PROJECT URL]',
    size: 'md',
  },
  {
    id: 'esp32-pwm',
    number: '05',
    title: 'ESP32 PWM / Motor Control',
    description: 'ESP32-based PWM experiments involving GPIO control, motor/LED driving and ADC input.',
    technologies: ['ESP32', 'GPIO', 'PWM', 'ADC'],
    category: 'embedded',
    githubUrl: '[ADD GITHUB PROJECT URL]',
    size: 'sm',
  },
  {
    id: 'fullstack-web',
    number: '06',
    title: 'Full Stack Web Application',
    description: 'A full-stack web application demonstrating frontend, backend and database integration.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
    category: 'software',
    githubUrl: '[ADD GITHUB PROJECT URL]',
    size: 'md',
  },
  {
    id: 'iot-experiments',
    number: '07',
    title: 'IoT / Embedded Experiments',
    description:
      'Smaller sensor interfacing, ADC and IoT prototypes built while learning — [ADD DESCRIPTION].',
    technologies: ['ESP32', 'Arduino', 'Sensors', 'IoT'],
    category: 'iot',
    githubUrl: '[ADD GITHUB PROJECT URL]',
    size: 'sm',
  },
]
