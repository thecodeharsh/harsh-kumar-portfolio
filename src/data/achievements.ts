export type Achievement = {
  id: string
  title: string
  event: string
  hostedAt: string
  project: string
}

export const achievements: Achievement[] = [
  {
    id: 'icanct-2026',
    title: '1st Prize — ICANCT-2026',
    event:
      '6th International Conference on Advancement in Nano Electronics & Communication Technologies',
    hostedAt: 'SKIT, Jaipur',
    project: 'SNIPS',
  },
]

export type CertificateCategory = 'Training' | 'Competitions' | 'Workshops' | 'Participation'

export type Certificate = {
  id: string
  title: string
  organization: string
  date: string
  category: CertificateCategory
  description: string
  image: string // thumbnail/preview shown in the gallery, under /public/certificates/
  fileUrl: string // downloadable original, under /public/certificates/
}

export const certificates: Certificate[] = [
  {
    id: 'cert-skit-training',
    title: 'Certificate of Training — 15 Day Programme',
    organization: 'SKIT, Jaipur — Dept. of Electronics & Communication Engineering',
    date: 'July 15–31, 2024',
    category: 'Training',
    description: 'Completed a 15-day training programme for 3rd semester in partial fulfillment of the undergraduate degree.',
    image: '/certificates/cert-skit-training.jpg',
    fileUrl: '/certificates/cert-skit-training.jpg',
  },
  {
    id: 'cert-ceeri-iiot',
    title: 'Skill Development Training — Advanced Industrial IoT (IIoT)',
    organization: 'CSIR – Central Electronics Engineering Research Institute (CEERI), Jaipur',
    date: 'July 13 – August 12, 2026',
    category: 'Training',
    description:
      'Completed a CSIR Integrated Skill Initiative training programme on Advanced Industrial Internet of Things (IIoT), covering embedded systems, sensor/ADC interfacing, IoT concepts and PCB design.',
    image: '/certificates/cert-ceeri-iiot.jpg',
    fileUrl: '/certificates/cert-ceeri-iiot-full.png',
  },
  {
    id: 'cert-railway-internship',
    title: 'Summer Internship — Signal & Telecom Department',
    organization: 'North Western Railway, Jaipur Division',
    date: 'May 16 – June 30, 2026',
    category: 'Training',
    description:
      'Completed a 45-day summer internship studying signal and telecom systems including RailNet, IPIS, UTN, Section Control and EI Tower operations.',
    image: '/certificates/cert-railway.jpg',
    fileUrl: '/certificates/cert-railway.pdf',
  },
  {
    id: 'cert-sphinx-webathon',
    title: "Certificate of Participation — Web-A-Thon, Sphinx '24",
    organization: 'ED Cell & Computer Science Club, MNIT Jaipur',
    date: '2024',
    category: 'Participation',
    description: "Participated in Web-A-Thon Round 1, organised online by ED Cell and CS Club, MNIT Jaipur.",
    image: '/certificates/cert-sphinx-webathon.jpg',
    fileUrl: '/certificates/cert-sphinx-webathon.jpg',
  },
  {
    id: 'cert-technoxian-linefollower',
    title: 'Certificate of Participation — Fastest Line Follower',
    organization: 'TechnoXian World Robotics Championship',
    date: 'August 24–27, 2024',
    category: 'Competitions',
    description: 'Participated in the Fastest Line Follower Challenge at TechnoXian World Cup 2024, Noida Stadium Complex.',
    image: '/certificates/cert-technoxian-linefollower.jpg',
    fileUrl: '/certificates/cert-technoxian-linefollower.pdf',
  },
]
