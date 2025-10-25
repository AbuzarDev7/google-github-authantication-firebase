import { signInWithPopup } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";
import { auth,provider ,githubProvider} from "./config.js";




const googleBtn = document.querySelector(".google-btn");

googleBtn.addEventListener("click",()=>{
signInWithPopup(auth, provider)
  .then((result) => {
window.location = "/index.html"
    const user = result.user;
    console.log(user);
  }).catch((error) => {
    
    const errorCode = error.code;
    const errorMessage = error.message;
   console.log(errorMessage);
  });
})

const githubBtn = document.querySelector(".github-btn");

githubBtn.addEventListener("click",()=>{
signInWithPopup(auth, githubProvider)
  .then((result) => {
 
    const token = credential.accessToken;

    
    const user = result.user;
    console.log(user);
    console.log(token);
  }).catch((error) => {
    
    const errorCode = error.code;
    const errorMessage = error.message;
    
    const email = error.customData.email;
    console.log(errorMessage);
    console.log(email);

  });
})