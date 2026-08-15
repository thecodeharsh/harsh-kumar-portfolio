// ---------------------------------------------------------------------------
// CENTRAL PROFILE CONFIG
// Edit this file to update personal information across the whole site.
// ---------------------------------------------------------------------------

export const profile = {
  name: 'Harsh Kumar',
  firstName: 'HARSH',
  lastName: 'KUMAR',
  monogram: 'HK',
  badge: 'ECE ENGINEER · BUILDER · EXPLORER',
  title: 'Electronics & Communication Engineer',
  tagline: 'Building across hardware, embedded systems and software.',
  summary:
    "I'm an Electronics & Communication Engineering student interested in embedded systems, IoT, wireless communication, UAV technologies and software development.",
  about:
    'I am an Electronics & Communication Engineering student with an interest in embedded systems, IoT, wireless communication, UAV technologies and software development. I enjoy working on practical projects that combine hardware and software.',
  aboutExtended:
    "My work usually starts at the schematic — designing a circuit, laying out a PCB in KiCad or DipTrace, then writing the firmware that brings it to life on an ESP32, STM32 or Arduino. SNIPS, my final-year LoRa mesh network, grew out of that habit: it took me from a blank sketch to a 5-node field-tested system with custom TDMA scheduling and GPS-free positioning, and it went on to win 1st Prize at ICANCT-2026. Internships at CSIR-CEERI and Indian Railways rounded out that hands-on experience with real-world debugging and systems thinking, and outside of engineering coursework I've coordinated technical events for the OPTICA Student Chapter at SKIT — organising workshops, managing speakers and keeping things running on the day.",
  footerNote: '© 2026 Harsh Kumar. Built with curiosity and code.',

  // Portrait shown in the hero visual and about section.
  photo: '/profile/harsh-kumar.jpg' as string | null,

  education: {
    degree: 'B.Tech — Electronics & Communication Engineering',
    college:
      'Swami Keshvanand Institute of Technology, Management & Gramothan (SKIT), Jaipur',
    status: 'B.Tech 4th Year ECE Student',
  },

  location: 'Jaipur, Rajasthan, India',

  // Quick stats shown in the hero / stats strip. Keep these accurate & easy to edit.
  stats: [
    { value: '01', label: 'Major Award' },
    { value: '04+', label: 'Project Areas' },
    { value: '03+', label: 'Training / Internship Experiences' },
    { value: 'ECE', label: 'Engineering' },
  ],

  resumePath: '/resume/Harsh-Kumar-Resume.pdf',
  portfolioPdfPath: '/resume/Harsh-Kumar-Portfolio.pdf', // [ADD PORTFOLIO PDF] if/when generated

  social: {
    github: 'https://github.com/thecodeharsh',
    linkedin: 'https://linkedin.com/in/harsh-kumar-9186b9370',
    email: 'kum.harshofficial@gmail.com',
  },

  seo: {
    title: 'Harsh Kumar | ECE Engineer | Embedded Systems & IoT',
    description:
      'Portfolio of Harsh Kumar, Electronics & Communication Engineering student exploring embedded systems, IoT, wireless communication, UAV technologies and software development.',
    canonicalUrl: '[ADD CANONICAL URL]', // e.g. https://harshkumar.dev
    themeColor: '#080B12',
  },
}

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Certificates', href: '#certificates' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' },
]

// Small floating chips shown on the hero portrait frame.
export const heroTags = ['ESP32', 'LoRa', 'IoT', 'Embedded', 'UAV']

// Hero node visual — technical labels connected in the animated graphic.
export const heroNodes = [
  { id: 'esp32', label: 'ESP32', x: 18, y: 22 },
  { id: 'lora', label: 'LoRa', x: 68, y: 14 },
  { id: 'iot', label: 'IoT', x: 46, y: 42 },
  { id: 'sensor', label: 'SENSOR', x: 12, y: 62 },
  { id: 'uav', label: 'UAV', x: 78, y: 56 },
  { id: 'software', label: 'SOFTWARE', x: 52, y: 80 },
  { id: 'pcb', label: 'PCB', x: 24, y: 88 },
]

export const heroConnections: [string, string][] = [
  ['esp32', 'iot'],
  ['iot', 'lora'],
  ['iot', 'sensor'],
  ['iot', 'uav'],
  ['uav', 'software'],
  ['software', 'pcb'],
  ['esp32', 'sensor'],
]
