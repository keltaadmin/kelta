/**
 * ============================================================
 * KELTA Enterprise Platform
 * Module      : Public Website
 * Feature     : About Page
 * File        : about.data.ts
 * Purpose     : Central data source for About Page
 * ============================================================
 */

import { AboutContent } from '@/types/public/about.types';

export const ABOUT_DATA: AboutContent = {
  organisationName:
    'Kerala Local Body Technical Assistants Association (KELTA)',

  foundedYear: 2012,

  hero: {
    title: 'Empowering Technical Assistants Across Kerala',

    subtitle:
      'A unified professional association committed to strengthening Local Self Government Institutions through technical excellence, collaboration, digital transformation, professional development and member welfare.',

    buttons: [
      {
        label: 'Become a Member',
        href: '/membership',
        variant: 'primary',
      },
      {
        label: 'View Committees',
        href: '/committees',
        variant: 'secondary',
      },
    ],
  },

  about: {
    title: 'About KELTA',

    description:
      'KELTA is the official association of Technical Assistants serving Local Self Government Institutions throughout Kerala. The organisation promotes professional excellence, technical knowledge sharing, transparency, welfare activities and collaborative development among members while supporting the Government in delivering better public services.',
  },

  visionMission: {
    title: 'Vision & Mission',

    subtitle:
      'Our guiding principles and long-term direction.',

    vision:
      'To become the leading professional association that empowers every Technical Assistant in Kerala through knowledge, innovation, transparency and collective leadership.',

    mission:
      'To protect member interests, improve professional competency, encourage digital governance, strengthen technical services in Local Self Government Institutions and promote ethical public service.',
  },

  objectives: {
    title: 'Our Objectives',

    subtitle:
      'The core objectives that guide the activities and growth of KELTA.',

    items: [
    {
      id: 'OBJ-001',
      title: 'Professional Development',
      description:
        'Conduct workshops, seminars, certification programmes and technical training for members.',
    },
    {
      id: 'OBJ-002',
      title: 'Member Welfare',
      description:
        'Provide welfare initiatives, emergency assistance and support programmes for members and their families.',
    },
    {
      id: 'OBJ-003',
      title: 'Knowledge Sharing',
      description:
        'Promote continuous learning through publications, digital resources and collaborative forums.',
    },
    {
      id: 'OBJ-004',
      title: 'Digital Governance',
      description:
        'Support e-Governance initiatives including KSMART, Sulekha and emerging digital platforms.',
    },
    {
      id: 'OBJ-005',
      title: 'Representation',
      description:
        'Represent the interests of Technical Assistants before Government departments and other authorities.',
    },
    {
      id: 'OBJ-006',
      title: 'Unity',
      description:
        'Strengthen unity and cooperation among members across all districts of Kerala.',
    },
    
   ],
},

  statistics: {
    title: 'KELTA at a Glance',

    subtitle:
      'A snapshot of our organisation and its impact.',

    items: [
    {
      id: 'STAT-001',
      label: 'District Units',
      value: 14,
      suffix: '',
      iconKey: 'map',
    },
    {
      id: 'STAT-002',
      label: 'Active Members',
      value: 1100,
      suffix: '+',
      iconKey: 'users',
    },
    {
      id: 'STAT-003',
      label: 'Years of Service',
      value: 25,
      suffix: '+',
      iconKey: 'award',
    },
    {
      id: 'STAT-004',
      label: 'Training Programs',
      value: 300,
      suffix: '+',
      iconKey: 'graduationCap',
    },
    ],
},

  timeline: {
    title: 'Our Journey',

    subtitle:
      'Key milestones in the evolution of KELTA.',

    items: [
    {
      year: '2012',
      title: 'Association Founded',
      description:
        'KELTA was established to unite Technical Assistants serving Local Self Government Institutions across Kerala.',
    },
    {
      year: '2013',
      title: 'District Committees Formed',
      description:
        'District committees were constituted across Kerala, strengthening coordination and member representation.',
    },
    {
      year: '2015',
      title: 'Professional Development Initiatives',
      description:
        'Regular technical training programmes, seminars and workshops were introduced for members.',
    },
    {
      year: '2021',
      title: 'Digital Transformation',
      description:
        'KELTA expanded its digital initiatives to support e-Governance platforms and online member services.',
    },
    {
      year: '2026',
      title: 'Towards a Digital Enterprise',
      description:
        'Development of the KELTA Enterprise Platform to provide integrated digital services for members and the association.',
    },
    ],
},

  leadership: {
    title: 'Leadership',

    subtitle:
      'Current office bearers of the association.',

    members: [
    {
      id: 'L001',
      name: 'Jibin Jose',
      designation: 'President',
      phone: '9747321151',
    },
    {
      id: 'L002',
      name: 'Shajeer Hassan',
      designation: 'General Secretary',
      phone: '9809429409',
    },
    {
      id: 'L003',
      name: 'Najeeb N M',
      designation: 'Treasurer',
      phone: '9605294824',
    },
    {
      id: 'L004',
      name: 'Vishnu V Gopal',
      designation: 'Vice President',
      phone: '8089264337',
    },
    {
      id: 'L005',
      name: 'Abdul Rashid K',
      designation: 'Vice President',
      phone: '7736786199',
    },
    {
      id: 'L006',
      name: 'Mohammed Azad C',
      designation: 'Vice President',
      phone: '9037004900',
    },
    {
      id: 'L007',
      name: 'Thasleem C H',
      designation: 'Joint Secretary',
      phone: '7907924710',
    },
    {
      id: 'L008',
      name: 'Shankar Raveendran',
      designation: 'Joint Secretary',
      phone: '9633257940',
    },
    {
      id: 'L009',
      name: 'Akhila Soman',
      designation: 'Joint Secretary',
      phone: '7593031957',
    },
    ],
},

  cta: {
    title: 'Join KELTA',

    subtitle:
      'Become part of Kerala’s professional community of Technical Assistants.',

    buttons: [
      {
        label: 'Become a Member',
        href: '/membership',
        variant: 'primary',
      },
      {
        label: 'Contact Us',
        href: '/contact',
        variant: 'secondary',
      },
    ],
  },
};