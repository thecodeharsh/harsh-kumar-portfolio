export type BuildArea = {
  id: string
  number: string
  title: string
  description: string
  tags: string[]
}

export const buildAreas: BuildArea[] = [
  {
    id: 'embedded',
    number: '01',
    title: 'Embedded Systems',
    description: 'Microcontroller firmware and analog/digital interfacing for real hardware.',
    tags: ['ESP32', 'Arduino', 'Sensors', 'ADC', 'PWM'],
  },
  {
    id: 'connected',
    number: '02',
    title: 'Connected Systems',
    description: 'Off-grid and networked communication between distributed devices.',
    tags: ['LoRa', 'IoT', 'Wireless Communication'],
  },
  {
    id: 'robotics',
    number: '03',
    title: 'Robotics & UAV',
    description: 'Motor control, sensing and navigation logic for moving systems.',
    tags: ['Motor Control', 'Sensors', 'UAV Concepts'],
  },
  {
    id: 'software',
    number: '04',
    title: 'Software',
    description: 'Full-stack web applications that connect hardware work to real interfaces.',
    tags: ['React', 'Node.js', 'MongoDB', 'Web Applications'],
  },
]

// Horizontal technology strip shown just under the hero.
export const tickerItems = [
  'EMBEDDED SYSTEMS',
  'IOT',
  'WIRELESS',
  'ESP32',
  'LORA',
  'PCB',
  'UAV',
  'SOFTWARE',
]
