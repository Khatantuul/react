
  // Sample organizational structure
  export const organizationData = {
    id: 1,
    name: "Sarah Johnson",
    title: "CEO",
    directReports: [
      {
        id: 2,
        name: "Michael Chen",
        title: "CTO",
        directReports: [
          {
            id: 5,
            name: "Alex Rodriguez",
            title: "Engineering Manager",
            directReports: [
              {
                id: 9,
                name: "Jamie Lee",
                title: "Senior Developer",
                directReports: []
              },
              {
                id: 10,
                name: "Taylor Wong",
                title: "Software Engineer",
                directReports: []
              }
            ]
          },
          {
            id: 6,
            name: "Robin Singh",
            title: "Data Science Lead",
            directReports: []
          }
        ]
      },
      {
        id: 3,
        name: "Emily Davis",
        title: "CFO",
        directReports: [
          {
            id: 7,
            name: "Sam Thompson",
            title: "Financial Analyst",
            directReports: []
          }
        ]
      },
      {
        id: 4,
        name: "David Wilson",
        title: "CMO",
        directReports: [
          {
            id: 8,
            name: "Jordan Miller",
            title: "Marketing Manager",
            directReports: []
          }
        ]
      }
    ]
  };