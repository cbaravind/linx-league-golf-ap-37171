const friends = [
    { id: 1, name: 'Dylan Thomas', image: require('../assets/images/profileImg.png') },
    { id: 2, name: 'Player 2', image: require('../assets/images/profileImg.png') },
    { id: 3, name: 'Player 3', image: require('../assets/images/profileImg.png') },
    { id: 4, name: 'Player 4', image: '' },
]
const notifications = [
    { id: 1, title: 'Welcome to Linx. Check your standing', time: '3h', isRead: false, image: require('../assets/images/profileImg.png') },
    { id: 2, title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...', time: '3h', isRead: true, image: require('../assets/images/profileImg.png') },
]
const stats = [
  {id:1,title:  "handicap ",value: '18-20',},
  {id:2,title:  "attested ",value: '95%',},
  {id:3,title:  "league   ",value: '1',},
  {id:4,title:  "ranking  ",value: '2nd',},
  {id:5,title:  "referrals",value: '1'},
]
const standings = [
  {id:1,title:  "handicap ",value: '18-20',},
  {id:2,title:  "score ",value: '92.0',},
  {id:3,title:  "FIR%",value: '40.0',},
  {id:4,title:  "Av. Putts  ",value: '22.2',},
]
export {
    friends,
    notifications,
    stats,
    standings
}