import TestCoverPhoto from '../images/fantasy_board_img.jpg';
import UserOnePhoto from '../images/portrait_profile_pic.jpg';
import UserTwoPhoto from '../images/turkey_profile_pic.jpg';
import UserThreePhoto from '../images/dog_profile_pic.jpg';

export const usersData = [
  {
    id: 0,
    firstName: 'Jade',
    lastName: 'June',
    profilePicture: UserOnePhoto,
  },
  {
    id: 1,
    firstName: 'Craig',
    lastName: 'Lu',
    profilePicture: UserTwoPhoto,
  },
  {
    id: 2,
    firstName: 'Janet',
    lastName: 'Hicks',
    profilePicture: UserThreePhoto,
  },
  {
    id: 3,
    firstName: 'Izzy',
    lastName: 'Ozzy',
    profilePicture: null,
  },
  {
    id: 4,
    firstName: 'Henry',
    lastName: 'Reynolds',
    profilePicture: null,
  },
];

export const boardsTestData = [
  {
    id: 0,
    coverPhoto: TestCoverPhoto,
    title: 'Board Title',
    users: usersData,
  },
  {
    id: 1,
    coverPhoto: TestCoverPhoto,
    title: 'Board Title',
    users: usersData,
  },
  {
    id: 2,
    coverPhoto: TestCoverPhoto,
    title: 'Board Title',
    users: usersData,
  },
  {
    id: 3,
    coverPhoto: TestCoverPhoto,
    title: 'Board Title',
    users: usersData,
  },
];