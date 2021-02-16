import {UserManager} from 'oidc-client';

// Configuration for Oidc
var config = {
  authority: "https://localhost:5001",
  client_id: "js",
  redirect_uri: "http://localhost:3000/callback",
  response_type: "code",
  scope:"openid profile thulloApi",
  post_logout_redirect_uri : "http://localhost:3000",
};
export var userManager = new UserManager(config);

export async function isUserLoggedIn() {
  return await userManager.getUser().then(function (user) {
    if (user) {
        return true;
    }
    else {
        return false;
    }
  });
}

export function login() {
  userManager.signinRedirect();
  // Probably need to configure axios to add Access token as default header here
}

export function logout() {
  // Need to remove Access token as default header for axios here
  return userManager.signoutRedirect().then(() => true).catch(() => false);
}

export async function redirectCallBack() {
  return new UserManager({response_mode:"query"}).signinRedirectCallback().then(function() {
    window.history.replaceState({},
      window.document.title,
      window.location.origin + window.location.pathname);
    // window.location = "";
    return true;
}).catch(function(e) {
    console.error(e);
    return false;
});
}

export async function getUserAccessToken() {
  const user = await userManager.getUser();
  const accessToken = user.access_token;
  console.log(accessToken);
  
  if (!accessToken) return '';

  return accessToken;
}

// function api() {
//   mgr.getUser().then(function (user) {
//       var url = "https://localhost:44355/api/identity";

//       var xhr = new XMLHttpRequest();
//       xhr.open("GET", url);
//       xhr.onload = function () {
//           log(xhr.status, JSON.parse(xhr.responseText));
//       }
//       xhr.setRequestHeader("Authorization", "Bearer " + user.access_token);
//       xhr.send();
//   });
// }
