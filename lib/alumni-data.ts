export interface AlumniMember {
  name: string
  role: string
  image?: string | null
}

export interface AlumniSubTeam {
  name: string
  members: AlumniMember[]
}

export interface AlumniCompetition {
  id: string
  competition: string
  competitionFullName: string
  year: string
  note?: string
  subTeams: AlumniSubTeam[]
}

export const alumniData: AlumniCompetition[] = [
  {
    id: "urc-2026",
    competition: "URC 2026",
    competitionFullName: "University Rover Challenge 2026",
    year: "2026",
    note: "Rover: Celeste-1 • System Acceptance Review (SAR)",
    subTeams: [
      {
        name: "Leadership",
        members: [
          { name: "Md Raisul Islam Rahad", role: "Team Lead", image: null },
        ],
      },
      {
        name: "Software",
        members: [
          { name: "Istiaque Ahmed Arik", role: "Software Lead", image: null },
          { name: "Abdullah Al Shahariar", role: "Software", image: null },
          { name: "Labiba Ibnat Matin", role: "Software", image: null },
          { name: "Md Ariful Islam", role: "Software", image: null },
          { name: "Nazifa Raksanda", role: "Software", image: null },
          { name: "Nujhat Nazifah Nawal", role: "Software", image: null },
          { name: "Balajee Biswas", role: "Software", image: null },
          { name: "Syed Zahin Waheed", role: "Software", image: null },
        ],
      },
      {
        name: "Electrical",
        members: [
          { name: "Md Mahfuzur Rashid Ullash", role: "Electrical Lead", image: null },
          { name: "Md Ryead", role: "Electrical", image: null },
          { name: "Fateen Nur Fuad", role: "Electrical", image: null },
          { name: "Mehrin Islam Prity", role: "Electrical", image: null },
          { name: "Saber Toha", role: "Electrical", image: null },
          { name: "Samiul Kabir", role: "Electrical", image: null },
          { name: "Md Habibur Rahman", role: "Electrical", image: null },
          { name: "Farhan Mugdho", role: "Electrical", image: null },
          { name: "Tahiya Iffat Nashita", role: "Electrical", image: null },
          { name: "Balajee Biswas", role: "Electrical", image: null },
        ],
      },
      {
        name: "Mechanical",
        members: [
          { name: "Reduan Ahmed", role: "Mechanical Lead", image: null },
          { name: "Abrar Shahria", role: "Mechanical", image: null },
          { name: "Miraz Bin Misbah", role: "Mechanical", image: null },
          { name: "Tanvir Ahmed", role: "Mechanical", image: null },
          { name: "Sheikh Nazmul Islam", role: "Mechanical", image: null },
          { name: "Zaber Islam Zihan", role: "Mechanical", image: null },
          { name: "Abrar", role: "Mechanical", image: null },
          { name: "Mehedi Hasan Fahim", role: "Mechanical", image: null },
          { name: "Abid Ikram", role: "Mechanical", image: null },
          { name: "Nirzar Sd Promi", role: "Mechanical", image: null },
          { name: "Rahik Mohammad", role: "Mechanical", image: null },
          { name: "Z R Emon", role: "Mechanical", image: null },
          { name: "Swapnil Barua Shanthu", role: "Mechanical", image: null },
        ],
      },
      {
        name: "Communication",
        members: [
          { name: "Sameen Abrar", role: "Communication Lead", image: null },
          { name: "Bijoy Sarkar", role: "Communication", image: null },
          { name: "Mushfiqur Rahman", role: "Communication", image: null },
        ],
      },
      {
        name: "Science",
        members: [
          { name: "Mahir Tajwar", role: "Science Theory Lead", image: null },
          { name: "Savera Momtaz", role: "Science Technical Lead", image: null },
          { name: "Samira", role: "Science", image: null },
          { name: "Mehjabeen Tabassum Dewan", role: "Science", image: null },
          { name: "Tanvir Ahmed", role: "Science", image: null },
          { name: "Miraz Bin Misbah", role: "Science", image: null },
        ],
      },
      {
        name: "Management",
        members: [
          { name: "Md Ariful Islam", role: "Management Lead", image: null },
          { name: "Ashfia Tabassum", role: "Management", image: null },
          { name: "Tahiya Iffat Nashita", role: "Management", image: null },
          { name: "Nazifa Raksanda", role: "Management", image: null },
          { name: "Rahik Mohammad", role: "Management", image: null },
          { name: "Swapnil Barua Shanthu", role: "Management", image: null },
          { name: "Abid Ikram", role: "Management", image: null },
          { name: "Mushfiqur Rahman", role: "Management", image: null },
        ],
      },
      {
        name: "Advisors",
        members: [
          { name: "Mohammad Shahjahan Majib", role: "Chief Advisor", image: null },
          { name: "Lt Col Md Abul Basar", role: "Faculty Advisor", image: null },
          { name: "Shah Md Ahasan Siddique", role: "Faculty Advisor", image: null },
          { name: "Md Jawadur Rahman", role: "Technical Advisor", image: null },
        ],
      },
    ],
  },
  {
    id: "urc-2025",
    competition: "URC 2025",
    competitionFullName: "University Rover Challenge 2025",
    year: "2025",
    note: "Onsite Finals • 14th Place Worldwide • Rover: Aurora X",
    subTeams: [
      {
        name: "Leadership",
        members: [
          { name: "Md Jawadur Rahman", role: "Team Lead", image: null },
          { name: "Alamin Rashid Tarek", role: "Team Co-lead", image: null },
        ],
      },
      {
        name: "Mechanical",
        members: [
          { name: "Alamin Rashid Tarek", role: "Mechanical Lead", image: null },
          { name: "Reduan Ahmed", role: "Mechanical", image: null },
          { name: "Sheikh Nazmul Islam", role: "Mechanical", image: null },
          { name: "Miraz Bin Mizbah", role: "Mechanical", image: null },
          { name: "Tanvir Ahmed", role: "Mechanical", image: null },
        ],
      },
      {
        name: "Electrical",
        members: [
          { name: "Md Mahfuzur Rahman Ullash", role: "Electrical Lead", image: null },
          { name: "Balajee Bishwas", role: "Electrical", image: null },
          { name: "Fateen Nur Fuad", role: "Electrical", image: null },
          { name: "Mehrin Islam Prity", role: "Electrical", image: null },
        ],
      },
      {
        name: "Software",
        members: [
          { name: "Istiaque Ahmed Arik", role: "Software Lead", image: null },
          { name: "Abdullah Al Sahariar", role: "Software", image: null },
          { name: "Md Ariful Islam", role: "Software", image: null },
          { name: "Labiba Ibnat Matin", role: "Software", image: null },
        ],
      },
      {
        name: "Science",
        members: [
          { name: "Savera Momtaz", role: "Science Lead", image: null },
          { name: "Mahir Tajwar", role: "Science", image: null },
          { name: "Mehjabeen Tabassum Dewan", role: "Science", image: null },
        ],
      },
      {
        name: "Communication",
        members: [
          { name: "Sameen Abrar", role: "Communication Lead", image: null },
          { name: "Bijoy Sarkar", role: "Communication", image: null },
        ],
      },
      {
        name: "Management",
        members: [
          { name: "Md Ariful Islam", role: "Management Lead", image: null },
          { name: "Ashfia Tabassum", role: "Management", image: null },
        ],
      },
      {
        name: "Advisors",
        members: [
          { name: "Maj Gen Md Nasim Parvez", role: "Chief Advisor", image: null },
          { name: "Lt Col Md Abul Basar", role: "Faculty Advisor", image: null },
          { name: "Shah Md Ahasan Siddique", role: "Faculty Advisor", image: null },
          { name: "Md Rashid Ul Islam", role: "Faculty Advisor", image: null },
        ],
      },
    ],
  },
  {
    id: "urc-2023",
    competition: "URC 2023",
    competitionFullName: "University Rover Challenge 2023",
    year: "2023",
    note: "Finals Qualifier & ARC 5th Place",
    subTeams: [
      {
        name: "Leadership",
        members: [
          { name: "Md Rashid Ul Islam", role: "Team Lead", image: null },
          { name: "Ridwanul Islam Antu", role: "Team Co Lead", image: null },
        ],
      },
      {
        name: "Electrical",
        members: [
          { name: "Md Jawadur Rahman", role: "Electrical Lead", image: null },
          { name: "Mansib Hasan Rohan", role: "Electrical", image: null },
          { name: "Nahidur Zaman Tushar", role: "Electrical", image: null },
          { name: "Md Rifat Islam", role: "Electrical", image: null },
          { name: "Arr Rafi", role: "Electrical", image: null },
          { name: "Shoyeb", role: "Electrical", image: null },
          { name: "Sifat Bin Asad", role: "Electrical", image: null },
        ],
      },
      {
        name: "Communication",
        members: [
          { name: "Sheikh Easin Arafat", role: "Communication Lead", image: null },
          { name: "Abrar Faiyaz Khan", role: "Communication", image: null },
        ],
      },
      {
        name: "Software",
        members: [
          { name: "Shakil Mosharraf", role: "Software Lead", image: null },
          { name: "Shekh Md Saifur Rahman", role: "Software", image: null },
          { name: "Farhan Nasif Nizami", role: "Software", image: null },
        ],
      },
      {
        name: "Communication & Software",
        members: [
          { name: "Raisul Islam Ruhad", role: "Communication & Software", image: null },
          { name: "Yusuf Reza Hasnat", role: "Communication & Software", image: null },
          { name: "Nabiha Parvez", role: "Communication & Software", image: null },
          { name: "Mehnaj Hridi", role: "Communication & Software", image: null },
          { name: "Tanvir Sarkar pallab", role: "Communication & Software", image: null },
        ],
      },
      {
        name: "Science",
        members: [
          { name: "Sadia Nur Nazifa", role: "Science Lead", image: null },
          { name: "Hafsah Mahzabin Chowdhury", role: "Science", image: null },
          { name: "Rakesh Majumder", role: "Science", image: null },
          { name: "Anika Tahsin Raisa", role: "Science", image: null },
          { name: "Sanzida Afrin Oishy", role: "Science", image: null },
          { name: "Sahran Akif Nizami", role: "Science", image: null },
          { name: "Progga Roy", role: "Science", image: null },
        ],
      },
      {
        name: "Management",
        members: [
          { name: "M N Alam Siddiqui", role: "Management Lead", image: null },
          { name: "Mayeesha Musarrat", role: "Management", image: null },
          { name: "Maisha Tabassum", role: "Management", image: null },
          { name: "Raiyan Ahmed", role: "Management", image: null },
          { name: "Maliha Farhin Chhoa", role: "Management", image: null },
          { name: "Reefa Tasnia Haque", role: "Management", image: null },
        ],
      },
      {
        name: "Mechanical",
        members: [
          { name: "Nazmul Hasan Fahim", role: "Mechanical Lead", image: null },
          { name: "Ahmed Ahnaf Saqafi", role: "Mechanical", image: null },
          { name: "Alamin Rashid Tarek", role: "Mechanical", image: null },
          { name: "MD Mehedi Hasan", role: "Mechanical", image: null },
          { name: "Saymoon Zaman Sayeem", role: "Mechanical", image: null },
          { name: "Aabritti Rafa", role: "Mechanical", image: null },
          { name: "Jinia Eva", role: "Mechanical", image: null },
          { name: "Md. Munam Shahriar Sabir", role: "Mechanical", image: null },
        ],
      },
      {
        name: "Advisors",
        members: [
          { name: "Col Ashfaquer Rahat Siddique", role: "Advisor", image: null },
          { name: "Lt Col Muhammad Nazrul Islam", role: "Advisor", image: null },
          { name: "Shah Md Ahasan Siddique", role: "Advisor", image: null },
        ],
      },
    ],
  },
  {
    id: "urc-2022",
    competition: "URC 2022",
    competitionFullName: "University Rover Challenge 2022",
    year: "2022",
    note: "Finals Qualifier & Asia's Highest Score",
    subTeams: [
      {
        name: "Leadership",
        members: [
          { name: "Shafayetul Islam", role: "Team Lead", image: null },
          { name: "Shah Md Ahasan Siddique", role: "Team Co-lead", image: null },
        ],
      },
      {
        name: "Electrical",
        members: [
          { name: "Riasat Haque", role: "Electrical Lead", image: null },
          { name: "K M Jamiul Haque (Zayed)", role: "Electrical", image: null },
          { name: "Tasnim Fariha Nirjona", role: "Electrical", image: null },
          { name: "Md Rashid Ul Islam", role: "Electrical", image: null },
          { name: "Abrar Faiyaz khan", role: "Electrical", image: null },
          { name: "Mehedi Hasan", role: "Electrical", image: null },
          { name: "Arr Rafi", role: "Electrical", image: null },
          { name: "Abdullah Omar Nasif", role: "Electrical", image: null },
          { name: "Shohanur Rahman Shovo", role: "Electrical", image: null },
          { name: "Muntasir Hasan Porag", role: "Electrical", image: null },
        ],
      },
      {
        name: "Communication",
        members: [
          { name: "Shoeb Ahmed Tanjim", role: "Communication Lead", image: null },
          { name: "Tahsin Ahmed Refat", role: "Communication", image: null },
          { name: "Sheikh Easin Arafat", role: "Communication", image: null },
          { name: "Khaled Hasan Irfan", role: "Communication", image: null },
          { name: "Tariqul Islam Tamim", role: "Communication", image: null },
          { name: "Rayhan Ferdous Faisal", role: "Communication", image: null },
          { name: "Tariq Hasan Rizu", role: "Communication", image: null },
          { name: "Adib Hossain", role: "Communication", image: null },
          { name: "Mahdi Mohtasim", role: "Communication", image: null },
          { name: "Shakil Mosharrof", role: "Communication", image: null },
          { name: "Fardeen Ashraf Rotno", role: "Communication", image: null },
        ],
      },
      {
        name: "Science",
        members: [
          { name: "Subah Tasnim Shiary", role: "Science Lead", image: null },
          { name: "Chowdhury Farzana Santona", role: "Science", image: null },
          { name: "Ellora Yasi", role: "Science", image: null },
          { name: "Hafsah Mahzabin Chowdhury", role: "Science", image: null },
          { name: "Sadia Nur Nazifa", role: "Science", image: null },
          { name: "Shadman Azad Rivan", role: "Science", image: null },
        ],
      },
      {
        name: "Management",
        members: [
          { name: "Tasfia Akter Sara", role: "Management Lead", image: null },
          { name: "Fabiha Mukarrama", role: "Management", image: null },
          { name: "Alisha Kabir", role: "Management", image: null },
          { name: "Shadmanee Tasneem", role: "Management", image: null },
          { name: "Nuraia Nahrin Fahmida", role: "Management", image: null },
          { name: "Enan Abdullah Khan", role: "Management", image: null },
          { name: "Tasnim Ullah Shakib", role: "Management", image: null },
          { name: "Abrar Mahir Esam", role: "Management", image: null },
          { name: "Mayeesha Musarrat", role: "Management", image: null },
          { name: "Rubaid Sharif Mahbub", role: "Management", image: null },
        ],
      },
      {
        name: "Mechanical",
        members: [
          { name: "Shah Md Ahasan Siddique", role: "Mechanical Lead", image: null },
          { name: "Naheen Ibn Akbar", role: "Arm Lead", image: null },
          { name: "Syed Tanjib Mahmud", role: "Mechanical", image: null },
          { name: "Ragib Tahshin Rinath", role: "Mechanical", image: null },
          { name: "Md. Fahim Faisal", role: "Mechanical", image: null },
          { name: "Nafiul Islam", role: "Mechanical", image: null },
          { name: "Mahatab Bin Rashid", role: "Mechanical", image: null },
          { name: "Abdul Hasib Hasan Zayed", role: "Mechanical", image: null },
          { name: "Sakib Ahmed", role: "Mechanical", image: null },
          { name: "Md Abu Hanif", role: "Mechanical", image: null },
          { name: "Md. Ridwanul Islam Antu", role: "Mechanical", image: null },
          { name: "Shakik Ahnaf", role: "Mechanical", image: null },
          { name: "Mohammad Omar Faruk", role: "Mechanical", image: null },
          { name: "S.M Taseen Wahid", role: "Mechanical", image: null },
          { name: "Samiul Islam Pranto", role: "Mechanical", image: null },
          { name: "Istiak Ahmed Niloy", role: "Mechanical", image: null },
          { name: "Ahmed Ahnaf Saqafi", role: "Mechanical", image: null },
          { name: "Farhan Fiyaz", role: "Mechanical", image: null },
          { name: "Mahmud jaman", role: "Mechanical", image: null },
          { name: "Mashhud Hasan Al Faruq", role: "Mechanical", image: null },
          { name: "Shazrina Mariam Karobi", role: "Mechanical", image: null },
          { name: "Rayan Karim Aninda", role: "Mechanical", image: null },
          { name: "Md Rafsan Jani Ashik", role: "Mechanical", image: null },
          { name: "Sheikh Al Arefin Ankon", role: "Mechanical", image: null },
        ],
      },
      {
        name: "Controlling",
        members: [
          { name: "Naim Ibna Khadem Al Bhuiyan", role: "Controlling", image: null },
          { name: "Md Rashid Ul Islam", role: "Controlling", image: null },
        ],
      },
    ],
  },
]
