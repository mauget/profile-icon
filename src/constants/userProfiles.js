
const profileMap = [
    ['User ID', ((userProfile) => userProfile.username)],
    ['First Name', ((userProfile) => userProfile.firstName)],
    ['Last Name', ((userProfile) => userProfile.lastName)],
    ['EMail', ((userProfile) => userProfile.email)],
];
export default profileMap;

const userProfileBS = {
    username: 'bsmith',
    firstName: 'Bob',
    lastName: 'Smith',
    email: 'bsmith@zmail.com'
};
export { userProfileBS  }

const userProfileLM = {
    username: 'lmauget',
    firstName: 'Lou',
    lastName: 'Mauget',
    email: 'lmauget@zmail.com'
};
export { userProfileLM }

const userProfileMF = {
    username: 'mfarmer',
    firstName: 'Michelle',
    lastName: 'Farmer',
    email: 'mfarmer@zmail.com'
};
export { userProfileMF }
