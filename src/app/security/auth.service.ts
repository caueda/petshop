export class AuthService {
  loggedIn = true;
  isAuthenticated(){
    const promise = new Promise(
      (resolve, reject) => {
        setTimeout(() => {
          console.log('before resolve');
          resolve(this.loggedIn);
          console.log('after resolve');
        }, 800);
      }
    );
    return promise;
  }

  login(){
    this.loggedIn = true;
  }

  logout(){
    this.loggedIn = false;
  }
}
