
  // Sample comment thread data
  export const commentThreadData = [
    {
      id: 1,
      author: "Alex Kim",
      text: "This is a really interesting article!",
      likes: 15,
      timestamp: "2023-05-15T14:30:00Z",
      replies: [
        {
          id: 4,
          author: "Jamie Rivera",
          text: "I agree! The points about AI were particularly fascinating.",
          likes: 8,
          timestamp: "2023-05-15T15:45:00Z",
          replies: [
            {
              id: 7,
              author: "Alex Kim",
              text: "Yes, especially the ethical considerations section.",
              likes: 3,
              timestamp: "2023-05-15T16:20:00Z",
              replies: []
            }
          ]
        },
        {
          id: 5,
          author: "Taylor Morgan",
          text: "I had some questions about the methodology though.",
          likes: 2,
          timestamp: "2023-05-15T16:00:00Z",
          replies: []
        }
      ]
    },
    {
      id: 2,
      author: "Jordan Smith",
      text: "I think the author missed some key points.",
      likes: 7,
      timestamp: "2023-05-15T14:45:00Z",
      replies: [
        {
          id: 6,
          author: "Casey Johnson",
          text: "Could you elaborate on what you think was missed?",
          likes: 9,
          timestamp: "2023-05-15T16:15:00Z",
          replies: []
        }
      ]
    },
    {
      id: 3,
      author: "Riley Wilson",
      text: "Has anyone checked the references? Link #3 seems to be broken.",
      likes: 4,
      timestamp: "2023-05-15T15:00:00Z",
      replies: []
    }
  ];