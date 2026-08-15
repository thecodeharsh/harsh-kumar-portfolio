export type SkillCategory = {
  id: string
  title: string
  eyebrow: string
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'embedded',
    title: 'Embedded & Electronics',
    eyebrow: 'HARDWARE',
    skills: [
      'ESP32',
      'Arduino',
      'Embedded C',
      'Sensors',
      'ADC',
      'PWM',
      'Motor Control',
      'PCB Design',
    ],
  },
  {
    id: 'comms',
    title: 'Communication & IoT',
    eyebrow: 'CONNECTIVITY',
    skills: [
      'LoRa',
      'IoT',
      'SPI',
      'UART',
      'I2C',
      'Wireless Communication',
      'GPS-free Positioning',
    ],
  },
  {
    id: 'software',
    title: 'Software Development',
    eyebrow: 'SOFTWARE',
    skills: [
      'C',
      'C++',
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Node.js',
      'Express.js',
      'MongoDB',
    ],
  },
  {
    id: 'tools',
    title: 'Tools',
    eyebrow: 'WORKFLOW',
    skills: [
      'Arduino IDE',
      'VS Code',
      'Git',
      'GitHub',
      'AutoCAD',
      'Fusion 360',
      'Flutter',
    ],
  },
]
