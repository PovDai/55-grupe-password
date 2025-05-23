const appDOM=document.getElementById('app');

appDOM.innerHTML=` <div class="password-container">

      <h2>Random Password Generator</h2>

      <div class="input-container">

        <input type="text" id="input" class="input"  placeholder="Create Password" readonly maxlength="15" required  />
        <i class="far fa-copy fa-2x"></i>

      </div>
      
      <button class="btn">Generate</button>
      <button class="btn reset">Reset Window</button>
    </div>
    
`

const generateBtnDOM=appDOM.querySelector('.btn');
const inputDOM=appDOM.querySelector('.input');
const resetBtnDOM=appDOM.querySelector('.reset');

console.log(resetBtnDOM);


generateBtnDOM.addEventListener('click', function() {
  const masyvas = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',1,2,3,4,5,6,7,8,9,0];
  inputDOM.value='';
  
  for(let i = 0; i < 15; i++) {
    const pirmas = masyvas[Math.floor(Math.random() * masyvas.length)];
    inputDOM.value += pirmas;

   
  }
});

resetBtnDOM.addEventListener('click',()=>{
  
inputDOM.value='';



})







