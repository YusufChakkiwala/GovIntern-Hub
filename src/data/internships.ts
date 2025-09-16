export interface Internship {
  id: string;
  title: string;
  ministry: string;
  department: string;
  duration: string;
  stipend: string;
  eligibility: string;
  skills: string[];
  location: string;
  mode: 'Remote' | 'Onsite' | 'Hybrid';
  level: 'Central' | 'State';
  deadline: string;
  description: string;
  objectives: string[];
  benefits: string[];
  applicationProcess: string[];
  applicationLink: string;
  posted: string;
}

export const internships: Internship[] = [
  {
    id: '1',
    title: 'Digital India Technology Internship',
    ministry: 'Ministry of Electronics & IT',
    department: 'Digital India Corporation',
    duration: '6 months',
    stipend: '₹25,000/month',
    eligibility: 'BTech/MCA final year students',
    skills: ['React', 'Node.js', 'Python', 'Cloud Computing'],
    location: 'New Delhi',
    mode: 'Hybrid',
    level: 'Central',
    deadline: '2024-12-15',
    description: 'Work on cutting-edge digital transformation projects for government services.',
    objectives: [
      'Develop digital solutions for citizen services',
      'Learn about government technology infrastructure',
      'Contribute to Digital India initiatives'
    ],
    benefits: [
      'Certificate from Ministry of Electronics & IT',
      'Exposure to large-scale government projects',
      'Networking with senior government officials',
      'Potential for full-time employment'
    ],
    applicationProcess: [
      'Fill online application form',
      'Submit academic transcripts',
      'Technical assessment round',
      'Interview with department officials'
    ],
    applicationLink: 'https://digitalindia.gov.in/apply',
    posted: '2024-10-01'
  },
  {
    id: '2',
    title: 'Health Analytics Research Intern',
    ministry: 'Ministry of Health & Family Welfare',
    department: 'National Health Mission',
    duration: '4 months',
    stipend: '₹20,000/month',
    eligibility: 'BTech/MSc in Data Science, Statistics',
    skills: ['Python', 'R', 'SQL', 'Data Analysis', 'Machine Learning'],
    location: 'Mumbai',
    mode: 'Onsite',
    level: 'Central',
    deadline: '2024-11-30',
    description: 'Analyze health data to improve public health outcomes and policy decisions.',
    objectives: [
      'Analyze national health survey data',
      'Create predictive models for disease outbreaks',
      'Support evidence-based health policy making'
    ],
    benefits: [
      'Work with real healthcare data',
      'Impact on public health policies',
      'Research publication opportunities',
      'Mentorship from health experts'
    ],
    applicationProcess: [
      'Online application with portfolio',
      'Data analysis assignment',
      'Presentation to health officials',
      'Background verification'
    ],
    applicationLink: 'https://nhm.gov.in/careers',
    posted: '2024-09-28'
  },
  {
    id: '3',
    title: 'Smart City Development Intern',
    ministry: 'Ministry of Housing & Urban Affairs',
    department: 'Smart Cities Mission',
    duration: '5 months',
    stipend: '₹22,000/month',
    eligibility: 'Civil Engineering, Urban Planning students',
    skills: ['Urban Planning', 'GIS', 'AutoCAD', 'Project Management'],
    location: 'Bangalore',
    mode: 'Onsite',
    level: 'Central',
    deadline: '2024-12-01',
    description: 'Support smart city development projects across India.',
    objectives: [
      'Assist in smart city project planning',
      'Conduct urban infrastructure assessments',
      'Support citizen engagement initiatives'
    ],
    benefits: [
      'Exposure to urban development projects',
      'Site visits to smart cities',
      'Professional development workshops',
      'Government employment preference'
    ],
    applicationProcess: [
      'Submit detailed project portfolio',
      'Technical interview',
      'Field assessment test',
      'Final approval from ministry'
    ],
    applicationLink: 'https://smartcities.gov.in/apply',
    posted: '2024-10-05'
  },
  {
    id: '4',
    title: 'Agricultural Technology Innovation Intern',
    ministry: 'Ministry of Agriculture & Farmers Welfare',
    department: 'Indian Council of Agricultural Research',
    duration: '6 months',
    stipend: '₹18,000/month',
    eligibility: 'BSc Agriculture, BTech Agricultural Engineering',
    skills: ['IoT', 'Drone Technology', 'Data Analytics', 'Agricultural Sciences'],
    location: 'Hyderabad',
    mode: 'Onsite',
    level: 'Central',
    deadline: '2024-11-20',
    description: 'Develop technology solutions for modern farming and agricultural practices.',
    objectives: [
      'Work on precision agriculture projects',
      'Develop IoT solutions for farmers',
      'Research sustainable farming technologies'
    ],
    benefits: [
      'Field exposure in agricultural technology',
      'Research collaboration opportunities',
      'Patent filing support',
      'Rural development experience'
    ],
    applicationProcess: [
      'Online application with research interest',
      'Technical presentation',
      'Field work assessment',
      'Interview with ICAR scientists'
    ],
    applicationLink: 'https://icar.gov.in/internships',
    posted: '2024-09-30'
  },
  {
    id: '5',
    title: 'Renewable Energy Policy Intern',
    ministry: 'Ministry of New & Renewable Energy',
    department: 'Solar Energy Corporation of India',
    duration: '4 months',
    stipend: '₹24,000/month',
    eligibility: 'BTech Electrical, Mechanical, Energy Engineering',
    skills: ['Solar Energy', 'Wind Energy', 'Policy Analysis', 'Project Management'],
    location: 'New Delhi',
    mode: 'Hybrid',
    level: 'Central',
    deadline: '2024-12-10',
    description: 'Support renewable energy policy development and implementation.',
    objectives: [
      'Analyze renewable energy market trends',
      'Support policy formulation',
      'Assist in project evaluation'
    ],
    benefits: [
      'Exposure to energy sector policies',
      'Site visits to renewable energy projects',
      'Industry networking opportunities',
      'Clean energy career pathway'
    ],
    applicationProcess: [
      'Submit academic credentials',
      'Energy sector knowledge test',
      'Group discussion',
      'Personal interview'
    ],
    applicationLink: 'https://seci.co.in/careers',
    posted: '2024-10-03'
  },
  {
    id: '6',
    title: 'Education Technology Innovation Intern',
    ministry: 'Ministry of Education',
    department: 'National Educational Technology Forum',
    duration: '5 months',
    stipend: '₹21,000/month',
    eligibility: 'BTech, BEd, Educational Technology students',
    skills: ['EdTech', 'Mobile App Development', 'UI/UX Design', 'Learning Analytics'],
    location: 'Pune',
    mode: 'Remote',
    level: 'Central',
    deadline: '2024-11-25',
    description: 'Develop educational technology solutions for government schools.',
    objectives: [
      'Create digital learning content',
      'Develop educational mobile applications',
      'Support teacher training programs'
    ],
    benefits: [
      'Impact on education at scale',
      'Technology skills development',
      'Collaboration with educators',
      'Portfolio development opportunities'
    ],
    applicationProcess: [
      'Online portfolio submission',
      'EdTech project demonstration',
      'Teaching aptitude assessment',
      'Final ministry approval'
    ],
    applicationLink: 'https://education.gov.in/apply',
    posted: '2024-10-07'
  }
];

export default internships;