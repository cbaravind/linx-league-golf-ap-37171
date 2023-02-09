const friends = [
  {
    id: 1,
    name: "Allen",
    image: require("./images/profileImg.png")
  },
  {
    id: 2,
    name: "Betty",
    image: require("./images/user3.png")
  },
  {
    id: 3,
    name: "Tom",
    image: require("./images/user1.png")
  },
  { id: 4, name: "Zak", image: "" }
]
const notifications = [
  {
    id: 1,
    title: "Welcome to Linx. Check your standing",
    time: "3h",
    isRead: false,
    image: require("./images/profileImg.png")
  },
  {
    id: 2,
    title:
      "Michael invited you to play!",
    time: "3h",
    isRead: true,
    image: require("./images/user1.png")
  }
]
const stats = [
  { id: 1, title: "handicap ", value: "12.9" },
  { id: 2, title: "attested ", value: "95%" },
  { id: 3, title: "league   ", value: "1" },
  { id: 4, title: "ranking  ", value: "2nd" },
  { id: 5, title: "referrals", value: "1" }
]
const standings = [
  { id: 1, title: "handicap ", value: "12-16" },
  { id: 2, title: "score ", value: "37" },
  { id: 3, title: "FIR%", value: "68.5" },
  { id: 4, title: "Av. Putts  ", value: "15" }
]
export { friends, notifications, stats, standings }
