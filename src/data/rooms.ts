export type Room = {
  id: string
  name: string
  capacity: number
  features: string[]
  image: string 
}

export const rooms: Room[] = [
  { id: 'r1', name: 'Library Hall A', capacity: 20, features: ['wifi', 'projector', 'whiteboard'], image:'https://arc-anglerfish-arc2-prod-bostonglobe.s3.amazonaws.com/public/ARG6HJRCBEI6HC7W6EF7U3HDDA.jpg'  },
  { id: 'r2', name: 'Study Room B', capacity: 6, features: ['wifi', 'couches'], image:'https://arc-anglerfish-arc2-prod-bostonglobe.s3.amazonaws.com/public/ARG6HJRCBEI6HC7W6EF7U3HDDA.jpg'   },
  { id: 'r3', name: 'Quiet Room C', capacity: 4, features: ['wifi'], image:'https://arc-anglerfish-arc2-prod-bostonglobe.s3.amazonaws.com/public/ARG6HJRCBEI6HC7W6EF7U3HDDA.jpg'   },
  { id: 'r4', name: 'Group Space D', capacity: 12, features: ['whiteboard', 'couches'], image:'https://arc-anglerfish-arc2-prod-bostonglobe.s3.amazonaws.com/public/ARG6HJRCBEI6HC7W6EF7U3HDDA.jpg'   },
  { id: 'r5', name: 'Open Study Area E', capacity: 30, features: ['wifi', 'projector', 'standing desks', 'natural light'], image:'https://arc-anglerfish-arc2-prod-bostonglobe.s3.amazonaws.com/public/ARG6HJRCBEI6HC7W6EF7U3HDDA.jpg'   },
  { id: 'r6', name: 'Focus Chamber F', capacity: 2, features: ['wifi', 'soundproof'], image:'https://arc-anglerfish-arc2-prod-bostonglobe.s3.amazonaws.com/public/ARG6HJRCBEI6HC7W6EF7U3HDDA.jpg'   },
  { id: 'r7', name: 'Collaborative Hub G', capacity: 15, features: ['wifi', 'whiteboard', 'couches', 'lounge chairs'], image:'https://arc-anglerfish-arc2-prod-bostonglobe.s3.amazonaws.com/public/ARG6HJRCBEI6HC7W6EF7U3HDDA.jpg'   },
  { id: 'r8', name: 'Tech Lab H', capacity: 18, features: ['wifi', 'computers', 'projector', 'outlets'], image:'https://arc-anglerfish-arc2-prod-bostonglobe.s3.amazonaws.com/public/ARG6HJRCBEI6HC7W6EF7U3HDDA.jpg'   },
  { id: 'r9', name: 'Quiet Corner I', capacity: 3, features: ['wifi', 'table', 'bookshelf'], image:'https://arc-anglerfish-arc2-prod-bostonglobe.s3.amazonaws.com/public/ARG6HJRCBEI6HC7W6EF7U3HDDA.jpg'   },
]
