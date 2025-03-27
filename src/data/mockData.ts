
export const mockViolationReports = [
  {
    id: "VR-7823",
    date: "2023-10-15T14:30:00",
    violationType: "Speeding",
    location: "Highway 101, Mile Marker 23",
    status: "Pending",
    priority: 8,
    reportedBy: "John Doe",
    vehicleType: "Sedan",
    licensePlate: "ABC-1234",
    description: "Vehicle was traveling approximately 30mph over the speed limit in a construction zone with workers present. Driver appeared to be using phone while driving.",
    images: [
      "https://images.unsplash.com/photo-1542282088-fe8426682b8f?q=80&w=1887&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1590089415225-5d76241089d6?q=80&w=1887&auto=format&fit=crop"
    ],
    hasGeoTag: true,
    timeline: [
      { action: "Report Submitted", date: "2023-10-15T14:30:00" },
      { action: "Initial Review", date: "2023-10-15T16:45:00" }
    ],
    lat: 37.7749,
    lng: -122.4194
  },
  {
    id: "VR-7824",
    date: "2023-10-16T09:15:00",
    violationType: "Red Light Violation",
    location: "5th Avenue and Main Street",
    status: "Processing",
    priority: 7,
    reportedBy: "Jane Smith",
    vehicleType: "SUV",
    licensePlate: "XYZ-5678",
    description: "Vehicle ran through a red light at high speed, nearly causing an accident with pedestrians in the crosswalk.",
    images: [
      "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?q=80&w=1740&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=1740&auto=format&fit=crop"
    ],
    hasGeoTag: true,
    timeline: [
      { action: "Report Submitted", date: "2023-10-16T09:15:00" },
      { action: "Initial Review", date: "2023-10-16T11:30:00" },
      { action: "Assigned to Officer Johnson", date: "2023-10-16T13:45:00" }
    ],
    lat: 37.7739,
    lng: -122.4312
  },
  {
    id: "VR-7825",
    date: "2023-10-17T16:45:00",
    violationType: "Illegal Parking",
    location: "123 Oak Street",
    status: "Resolved",
    priority: 4,
    reportedBy: "Robert Brown",
    vehicleType: "Truck",
    licensePlate: "DEF-9012",
    description: "Commercial truck parked in a no-parking zone, blocking fire hydrant and bicycle lane for over 2 hours.",
    images: [
      "https://images.unsplash.com/photo-1621007046171-67a18d67593e?q=80&w=1888&auto=format&fit=crop"
    ],
    hasGeoTag: false,
    timeline: [
      { action: "Report Submitted", date: "2023-10-17T16:45:00" },
      { action: "Initial Review", date: "2023-10-17T17:30:00" },
      { action: "Assigned to Officer Martinez", date: "2023-10-17T18:15:00" },
      { action: "Ticket Issued", date: "2023-10-17T19:30:00" },
      { action: "Case Resolved", date: "2023-10-17T20:00:00" }
    ],
    lat: 37.7729,
    lng: -122.4232
  },
  {
    id: "VR-7826",
    date: "2023-10-18T11:30:00",
    violationType: "Distracted Driving",
    location: "West Boulevard near City Park",
    status: "Pending",
    priority: 6,
    reportedBy: "Michael Wilson",
    vehicleType: "Minivan",
    licensePlate: "GHI-3456",
    description: "Driver was texting while driving in a school zone during school hours. Vehicle was swerving between lanes.",
    images: [
      "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=1740&auto=format&fit=crop"
    ],
    hasGeoTag: true,
    timeline: [
      { action: "Report Submitted", date: "2023-10-18T11:30:00" },
      { action: "Initial Review", date: "2023-10-18T14:00:00" }
    ],
    lat: 37.7833,
    lng: -122.4167
  },
  {
    id: "VR-7827",
    date: "2023-10-19T08:45:00",
    violationType: "DUI Suspect",
    location: "Highway 280, Exit 12",
    status: "Processing",
    priority: 10,
    reportedBy: "Sarah Johnson",
    vehicleType: "Pickup Truck",
    licensePlate: "JKL-7890",
    description: "Vehicle driving erratically, swerving across lanes and varying speed dramatically. Driver appeared impaired at traffic light.",
    images: [
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=1740&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=1740&auto=format&fit=crop"
    ],
    hasGeoTag: true,
    timeline: [
      { action: "Report Submitted", date: "2023-10-19T08:45:00" },
      { action: "Initial Review", date: "2023-10-19T09:00:00" },
      { action: "Urgent Response Dispatched", date: "2023-10-19T09:15:00" },
      { action: "Officers on Scene", date: "2023-10-19T09:30:00" }
    ],
    lat: 37.7669,
    lng: -122.4294
  },
  {
    id: "VR-7828",
    date: "2023-10-20T15:20:00",
    violationType: "Illegal U-Turn",
    location: "Elm Street and Broadway",
    status: "Rejected",
    priority: 3,
    reportedBy: "David Clark",
    vehicleType: "Compact Car",
    licensePlate: "MNO-1234",
    description: "Vehicle made an illegal U-turn at a busy intersection with 'No U-Turn' signs clearly posted.",
    images: [
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=1740&auto=format&fit=crop"
    ],
    hasGeoTag: false,
    timeline: [
      { action: "Report Submitted", date: "2023-10-20T15:20:00" },
      { action: "Initial Review", date: "2023-10-20T16:45:00" },
      { action: "Report Rejected - Insufficient Evidence", date: "2023-10-20T17:30:00" }
    ],
    lat: 37.7879,
    lng: -122.4074
  },
  {
    id: "VR-7829",
    date: "2023-10-21T12:10:00",
    violationType: "Tailgating",
    location: "River Road near Downtown",
    status: "Pending",
    priority: 5,
    reportedBy: "Jennifer Adams",
    vehicleType: "Sports Car",
    licensePlate: "PQR-5678",
    description: "Vehicle aggressively tailgating multiple cars on a wet road, nearly causing several rear-end collisions.",
    images: [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1740&auto=format&fit=crop"
    ],
    hasGeoTag: true,
    timeline: [
      { action: "Report Submitted", date: "2023-10-21T12:10:00" }
    ],
    lat: 37.7829,
    lng: -122.4324
  },
  {
    id: "VR-7830",
    date: "2023-10-22T17:30:00",
    violationType: "Wrong Way Driving",
    location: "One Way Street near Hospital",
    status: "Processing",
    priority: 9,
    reportedBy: "Thomas Miller",
    vehicleType: "Sedan",
    licensePlate: "STU-9012",
    description: "Vehicle drove the wrong way down a one-way street at high speed, forcing several cars to swerve out of the way.",
    images: [
      "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?q=80&w=1740&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1641&auto=format&fit=crop"
    ],
    hasGeoTag: true,
    timeline: [
      { action: "Report Submitted", date: "2023-10-22T17:30:00" },
      { action: "Initial Review", date: "2023-10-22T18:15:00" },
      { action: "Assigned to Officer Thompson", date: "2023-10-22T19:00:00" }
    ],
    lat: 37.7949,
    lng: -122.4094
  }
];

export const violationStats = {
  violationCounts: {
    Speeding: 124,
    "Red Light": 87,
    "Illegal Parking": 156,
    "Distracted Driving": 92,
    DUI: 31,
    "Traffic Sign": 76,
    Other: 45
  },
  monthlyReports: [
    { month: "Jan", count: 42 },
    { month: "Feb", count: 38 },
    { month: "Mar", count: 45 },
    { month: "Apr", count: 53 },
    { month: "May", count: 58 },
    { month: "Jun", count: 62 },
    { month: "Jul", count: 75 },
    { month: "Aug", count: 82 },
    { month: "Sep", count: 76 },
    { month: "Oct", count: 71 },
    { month: "Nov", count: 67 },
    { month: "Dec", count: 60 }
  ],
  resolutionStats: {
    Resolved: 345,
    Processing: 124,
    Pending: 187,
    Rejected: 56
  },
  hourlyPattern: [
    { hour: "00:00", count: 12 },
    { hour: "02:00", count: 8 },
    { hour: "04:00", count: 5 },
    { hour: "06:00", count: 15 },
    { hour: "08:00", count: 35 },
    { hour: "10:00", count: 28 },
    { hour: "12:00", count: 32 },
    { hour: "14:00", count: 37 },
    { hour: "16:00", count: 45 },
    { hour: "18:00", count: 55 },
    { hour: "20:00", count: 38 },
    { hour: "22:00", count: 22 }
  ]
};
