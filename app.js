import { signInWithPopup } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";
import { auth,provider } from "./config.js";




const googleBtn = document.querySelector(".google-btn");

googleBtn.addEventListener("click",()=>{
signInWithPopup(auth, provider)
  .then((result) => {

    const user = result.user;
    console.log(user);
  }).catch((error) => {
    
    const errorCode = error.code;
    const errorMessage = error.message;
   console.log(errorMessage);
  });
})