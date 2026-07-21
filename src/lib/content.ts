import {
  Brush,
  CalendarDays,
  ClipboardCheck,
  Footprints,
  GraduationCap,
  HeartHandshake,
  Landmark,
  Laptop,
  LockKeyhole,
  Mail,
  MapPin,
  MessageCircle,
  Mic2,
  Music2,
  Palette,
  Phone,
  ShieldCheck,
  Trophy,
  Volleyball
} from "lucide-react";

export const schoolInfo = {
  name: "Brightlight International School",
  shortName: "Brightlight International School",
  address: "56, Okiti Street, Off Giwa-Amu, Airport Road, Warri, Delta State, Nigeria.",
  tagline: "Raising Confident, Intelligent, and Morally Sound Children",
  vision: "To raise confident, intelligent, and morally sound children equipped for global relevance.",
  mission: "To provide quality education through innovative teaching, godly values, and holistic child development.",
  phone: "08139377306 and 08035486250",
  email: "brightlightschool12@gmail.com",
  whatsapp: "https://wa.me/2348139377306",
  founded: "2020"
};

export const images = {
  logo: "/images/school/d41f9e69-43fa-4e6e-acac-922d7a54a972.webp",
  hero: "/images/school/df0da8bd-8339-4ba8-96d7-228ba02ce3c7.webp",
  about: "/images/school/945567ca-14ff-40bf-aa03-f6b0a9474f2e.webp",
  welcome: "/images/school/96f3d535-8982-4637-a210-4480dd353eea.webp",
  academics: "/images/school/0cbd96b2-91ee-4bd9-9c11-ba3164e17285.webp",
  facilities: "/images/school/92533818-3460-4afc-8b2e-40effb9ffb18.webp",
  graduation: "/images/school/71fc39f0-a30a-4170-890e-d9c7935fc918.webp",
  cultural: "/images/school/e3131882-f987-460f-9468-3a6ab9926cce.webp",
  culturalTwo: "/images/school/f2e40b73-529d-4099-8be6-fb7ee613ac34.webp",
  classroom: "/images/school/0898d2ed-b6cc-4f74-bc7a-d93aaf8d7d12.webp",
  event: "/images/school/92533818-3460-4afc-8b2e-40effb9ffb18.webp",
  pupils: "/images/school/945567ca-14ff-40bf-aa03-f6b0a9474f2e.webp"
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/admissions", label: "Admissions" },
  { href: "/academics", label: "Academics" },
  { href: "/classes", label: "Classes" },
  { href: "/facilities", label: "Facilities" },
  { href: "/gallery", label: "Gallery" },
  { href: "/news-events", label: "News & Events" },
  { href: "/staff", label: "Staff" },
  { href: "/contact", label: "Contact" }
];

export const highlights = [
  {
    title: "Qualified Teachers",
    description: "Our pupils are guided by trained and dedicated teachers committed to academic excellence and child development.",
    icon: GraduationCap
  },
  {
    title: "Safe Environment",
    description: "We provide a secure, welcoming, and child-friendly environment where pupils feel safe, valued, and happy to learn.",
    icon: ShieldCheck
  },
  {
    title: "Modern Learning Facilities",
    description: "Our classrooms and learning spaces support creativity, participation, and effective teaching.",
    icon: Laptop
  },
  {
    title: "Moral Development",
    description: "We nurture children with godly values, discipline, respect, confidence, and strong character.",
    icon: HeartHandshake
  }
];

export const coreValues = [
  ["Holistic Development", "A congenial learning environment for the holistic development of each pupil."],
  ["Quality Care and Teaching", "Vital care through qualified and trained teachers applying strong educational practices."],
  ["Discipline and Ethics", "Discipline and ethical practices within the school environment while promoting pupil welfare."],
  ["Welcoming Atmosphere", "A welcoming atmosphere where children, staff, parents, and visitors feel valued."],
  ["Safety and Security", "A school environment where pupils feel safe, secure, and happy to come to school."],
  ["Academic Excellence", "Talented staff provide each pupil with rigorous standards and high-quality academics."]
];

export const admissionSteps = [
  ["Enquiry and Form Collection", "Parents or guardians contact the school or visit the premises to make enquiries and pick up the admission/application form."],
  ["Submit Required Documents", "Submit the child birth certificate, recent passport photographs, transfer letter where applicable, and other requested documents."],
  ["Payment of Application/Form Fee", "A non-refundable application/form fee is required. The exact amount is available from the school administration."],
  ["Entrance Assessment", "The child takes a handwritten and oral assessment suitable for Nursery or Primary placement."],
  ["Admission Review and Placement", "The school reviews the child performance and documents to determine the appropriate class placement."],
  ["Enrollment Confirmation", "Parents receive information on school fees, uniforms, books, resumption details, and other requirements."]
];

export const requiredDocuments = [
  "Completed admission form",
  "Child birth certificate",
  "Recent passport photographs",
  "Transfer letter, where applicable",
  "Evidence of payment for the application/form fee",
  "Any other documents requested by the school admin"
];

export const nurseryFocus = [
  "Early reading and phonics",
  "Literacy",
  "Number recognition and basic mathematics",
  "Fine and gross motor skills",
  "Physical Development",
  "Social interaction",
  "Communication skills",
  "Creativity and imagination",
  "Moral instruction",
  "Basic science and environmental awareness"
];

export const primaryFocus = [
  "English Language",
  "Mathematics",
  "Basic Science",
  "Social Studies",
  "Civic Education",
  "Christian Religious Studies / Moral Instruction",
  "Computer Studies / ICT",
  "French",
  "Phonics",
  "Creative Arts",
  "Physical and Health Education",
  "Verbal and Quantitative Reasoning"
];

export const subjects = [
  "English Language",
  "Mathematics",
  "Basic Science",
  "Social Studies",
  "Civic Education",
  "Computer Studies / ICT",
  "French",
  "Phonics",
  "Creative Arts",
  "Physical and Health Education",
  "Christian Religious Studies / Moral Instruction",
  "Verbal Reasoning",
  "Quantitative Reasoning",
  "Handwriting / Phonics"
];

export const classes = [
  {
    title: "Creche",
    description: "A safe, caring, and nurturing environment for very young children with attentive care and early social interaction.",
    image: "/images/school/creche.webp"
  },
  {
    title: "Pre-Nursery",
    description: "Structured learning through play, songs, stories, simple activities, and guided interaction.",
    image: "/images/school/a36cc9ec-01b7-4479-9d60-cdea1d46caf5.webp"
  },
  {
    title: "Primary 1-3",
    description: "Early literacy, numeracy, communication, confidence, creativity, and moral development.",
    image: "/images/school/pri 1-3.webp"
  },
  {
    title: "Primary 1-5",
    description: "Strong academic training, discipline, moral instruction, creativity, and confidence-building.",
    image: "/images/school/pri 1-5.webp"
  }
];

export const facilities = [
  {
    title: "Spacious and Conducive Classrooms",
    description: "Comfortable, organized classrooms that help teaching and learning thrive.",
    image: "/images/school/83ff1ace-f8a8-4388-a3b1-eb08a376431e.webp",
    icon: Landmark
  },
  {
    title: "Playground",
    description: "Space for pupils to play, exercise, interact, and develop physically and socially.",
    image: images.pupils,
    icon: Volleyball
  },
  {
    title: "Security System",
    description: "A structured school environment that helps pupils feel protected and cared for.",
    image: images.welcome,
    icon: LockKeyhole
  },
  {
    title: "Art Room",
    description: "A creative space for drawing, painting, crafts, imagination, and self-expression.",
    image: "/images/school/a36cc9ec-01b7-4479-9d60-cdea1d46caf5.webp",
    icon: Brush
  }
];

export const activities = [
  ["Music", "Pupils develop rhythm, confidence, creativity, and self-expression through music.", Music2],
  ["Dance", "Dance activities build confidence, coordination, creativity, and cultural expression.", Footprints],
  ["Sports", "Sports promote teamwork, discipline, physical fitness, and healthy competition.", Trophy],
  ["Debate", "Debate helps pupils build confidence, public speaking, critical thinking, and communication skills.", Mic2],
  ["Drama", "Drama develops creativity, confidence, teamwork, and self-expression.", Palette],
  ["Excursions", "Excursions expose pupils to real-world learning beyond the classroom.", MapPin]
] as const;

export const galleryCategories = [
  "Classroom Activities",
  "Graduation",
  "Sports Day",
  "Cultural Day",
  "Excursions",
  "Special Events"
];

export const galleryItems = [
  { category: "Classroom Activities", src: images.academics, alt: "Pupils seated in a learning circle" },
  { category: "Classroom Activities", src: images.classroom, alt: "Brightlight International School pupils during a school activity" },
  { category: "Classroom Activities", src: "/images/school/09cc1b17-b792-492a-a803-89c1a821ed5a.webp", alt: "Pupils taking part in a school learning moment" },
  { category: "Graduation", src: images.graduation, alt: "Brightlight International School pupil speaking during graduation" },
  { category: "Graduation", src: "/images/school/765913dd-c489-4643-8d0d-810f6eee0945.webp", alt: "Graduation event at Brightlight International School" },
  { category: "Graduation", src: "/images/school/71fc39f0-a30a-4170-890e-d9c7935fc918.webp", alt: "Graduation ceremony backdrop and pupil" },
  { category: "Sports Day", src: images.pupils, alt: "Pupils standing together outdoors" },
  { category: "Sports Day", src: "/images/school/96f3d535-8982-4637-a210-4480dd353eea.webp", alt: "Group of pupils in outdoor activity" },
  { category: "Cultural Day", src: images.cultural, alt: "Pupils in cultural attire" },
  { category: "Cultural Day", src: images.culturalTwo, alt: "Pupils performing cultural activities" },
  { category: "Cultural Day", src: "/images/school/d5148284-e7fa-457a-9abc-2cc51d32f48c.webp", alt: "Brightlight International School cultural presentation" },
  { category: "Excursions", src: "/images/school/2d820404-4691-408d-a71e-3e48a8c74c87.webp", alt: "Pupils during an outing or activity" },
  { category: "Excursions", src: "/images/school/f9c371e7-840a-4b84-bc92-120ef27463a9.webp", alt: "Pupils gathered during school activity" },
  { category: "Special Events", src: images.event, alt: "Parents and pupils at a school event" },
  { category: "Special Events", src: "/images/school/b02b94e1-5b00-4ca3-b572-d7ca7de6e3aa.webp", alt: "Brightlight International School special event" }
];

export const events = [
  ["Resumption Dates", "Updates on school resumption dates for each term.", "Date to be announced"],
  ["Inter-House Sports", "Information about upcoming inter-house sports activities and dates.", "Coming soon"],
  ["PTA Meetings", "Important updates and meeting dates for parents and teachers.", "Date to be announced"],
  ["Graduation Ceremonies", "Announcements and highlights from graduation ceremonies.", "Coming soon"],
  ["Holiday Notices", "School holiday announcements and important notices for parents.", "Date to be announced"]
];

export const testimonials = [
  {
    quote: "Brightlight International School has been a blessing to our family. My child has improved academically and also grown in confidence and discipline.",
    name: "Mr Bright",
    role: "Parent"
  },
  {
    quote: "The teachers are caring, patient, and committed. I love the way the school combines academics with moral values.",
    name: "Mrs Gladys",
    role: "Guardian"
  },
  {
    quote: "My child is always excited to go to school. The environment is safe, welcoming, and very supportive.",
    name: "Mr Francis",
    role: "Parent"
  }
];

export const boardMembers = [
  {
    name: "Mrs Yvonne Ukanah",
    role: "Director",
    image: "/images/school/Director.webp",
    alt: "Mrs Yvonne Ukanah, Director"
  },
  {
    name: "Mrs Deborah Uloko",
    role: "Principal",
    image: "/images/school/dc50fa9d-0fc1-42e9-993e-d52d68e0e588.webp",
    alt: "Mrs Deborah Uloko, Principal"
  },
  {
    name: "Mrs Love Ogboi",
    role: "Head of Administration",
    image: "/images/school/360e1b0b-86d0-4fd8-aa29-d15ca46ae053.webp",
    alt: "Mrs Love Ogboi, Head of Administration"
  }
];

export const chairmanProfile = {
  name: "Mr Joseph Ukanah",
  role: "Chairman",
  image: "/images/school/Chairman.webp",
  alt: "Mr Joseph Ukanah, Chairman"
};

export const staffProfiles = [
  chairmanProfile,
  ...boardMembers,
  {
    name: "Staffs",
    role: "Teaching and Support Team",
    image: "/images/school/staff.webp",
    alt: "Brightlight International School teaching and support staff"
  }
];

export const faqs = [
  ["What age do you accept?", "We accept children into our creche, pre-nursery, nursery, and primary sections. Parents can contact the school admin for proper placement based on age and learning level."],
  ["What curriculum do you use?", "We use a balanced curriculum that supports literacy, numeracy, creativity, moral instruction, social development, and practical learning."],
  ["Is transport available?", "Transport information should be confirmed directly with the school admin. This placeholder can be updated when the school provides a final response."],
  ["What are the school hours?", "School hours should be confirmed with the school admin. This placeholder can be updated when the official time is provided."],
  ["Do you provide meals?", "Meal information should be confirmed directly with the school admin. This placeholder can be updated when the school provides a final response."]
];

export const quickActions = [
  {
    title: "Apply Now",
    description: "Start your child admission journey with us.",
    href: "/admissions",
    icon: ClipboardCheck
  },
  {
    title: "Book a Visit",
    description: "Schedule a visit to experience our learning environment.",
    href: "/contact?type=Book%20a%20Visit",
    icon: CalendarDays
  },
  {
    title: "Contact Us",
    description: "Speak with our school admin for enquiries and support.",
    href: "/contact",
    icon: Phone
  }
];

export const contactOptions = [
  "Admission Enquiry",
  "Book a Visit",
  "School Fees Enquiry",
  "General Enquiry"
];

export const footerLinks = [
  { label: "Apply Now", href: "/admissions" },
  { label: "Book a Visit", href: "/contact?type=Book%20a%20Visit" },
  { label: "Gallery", href: "/gallery" },
  { label: "FAQ", href: "/faq" }
];

export const contactCards = [
  { title: "Visit Us", value: schoolInfo.address, icon: MapPin },
  { title: "Call", value: schoolInfo.phone, icon: Phone },
  { title: "School Email", value: schoolInfo.email, icon: Mail },
  { title: "WhatsApp", value: schoolInfo.phone, icon: MessageCircle }
];

export const accreditationPlaceholders = [
  "Official approval placeholder",
  "Accreditation document placeholder",
  "Awards and recognition placeholder"
];

export const stats = [
  [schoolInfo.founded, "Founded"],
  ["Early Years - Grade School", "Sections"],
  ["Warri", "Delta State"],
  ["Holistic", "Learning Focus"]
];

export const teachingMethods = [
  "Interactive classroom teaching",
  "Group activities",
  "Storytelling and demonstrations",
  "Practical learning",
  "Creative exercises",
  "Play-based learning for younger children",
  "Circle Time Activities",
  "Continuous teacher guidance",
  "Moral and character-building lessons"
];

export const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/brightlightsschool?igsh=MXQyMjk4dXR3emdkYg=="
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@brightlightschool5?_r=1&_t=ZS-97zaLajVYaw"
  },
  {
    label: "Facebook",
    href: "https://web.facebook.com/bright.light.231409?mibextid=wwXIfr&rdid=RTvziQM8DalMbYXi&share_url=https%253A%252F%252Fweb.facebook.com%252Fshare%252F1Baach1ifC%252F%253Fmibextid%253DwwXIfr%2526_rdc%253D1%2526_rdr"
  }
];

export const pageSeo = {
  home: {
    title: "Brightlight International School | International School in Warri",
    description: "Brightlight International School is a private international school in Warri, Delta State, committed to raising confident, intelligent, and morally sound children through quality education, godly values, and holistic child development."
  }
};
