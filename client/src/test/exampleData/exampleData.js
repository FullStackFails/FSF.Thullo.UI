import TestCoverPhoto from '../images/fantasy_board_img.jpg';
import UserOnePhoto from '../images/portrait_profile_pic.jpg';
import UserTwoPhoto from '../images/turkey_profile_pic.jpg';
import UserThreePhoto from '../images/dog_profile_pic.jpg';

export const usersData = [
  {
    firstName: 'Jade',
    lastName: 'June',
    profilePicture: UserOnePhoto,
  },
  {
    firstName: 'Craig',
    lastName: 'Lu',
    profilePicture: UserTwoPhoto,
  },
  {
    firstName: 'Janet',
    lastName: 'Hicks',
    profilePicture: UserThreePhoto,
  },
  {
    firstName: 'Izzy',
    lastName: 'Ozzy',
    profilePicture: null,
  },
  {
    firstName: 'Henry',
    lastName: 'Reynolds',
    profilePicture: null,
  },
];

export const boardsTestData = [
  {
    coverPhoto: TestCoverPhoto,
    title: 'Board Title',
    users: usersData,
  },
  {
    coverPhoto: TestCoverPhoto,
    title: 'Board Title',
    users: usersData,
  },
  {
    coverPhoto: TestCoverPhoto,
    title: 'Board Title',
    users: usersData,
  },
  {
    coverPhoto: TestCoverPhoto,
    title: 'Board Title',
    users: usersData,
  },
];