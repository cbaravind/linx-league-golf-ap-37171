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
export {
    friends,
    notifications
}