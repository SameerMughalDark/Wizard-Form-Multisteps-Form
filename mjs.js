// grabing the all forms div
let formDiv1=document.getElementById('formWizardInnerDiv1');
let formDiv2=document.getElementById('formWizardInnerDiv2');
let formDiv3=document.getElementById('formWizardInnerDiv3');




// grabing the all Buttons
let nextBtn1=document.getElementById('nextbtn1');
nextBtn1.addEventListener('click',function(){
    formDiv1.style.left='-500px';
    formDiv2.style.left='0';
    // steps ki animation ky liye y coding hai
    formWizardstep2.style.background='linear-gradient(to right, rgb(244, 57, 57),rgb(112, 112, 224))';
    formWizardstep2.style.color='wheat';
    step2Dashed.style.color='rgb(244, 57, 57)';
});
let nextBtn2=document.getElementById('nextbtn2');
nextBtn2.addEventListener('click',function(){
    formDiv2.style.left='-500px';
    formDiv3.style.left='0';
        // steps ki animation ky liye y coding hai
        formWizardstep3.style.background='linear-gradient(to right, rgb(244, 57, 57),rgb(112, 112, 224))';
        formWizardstep3.style.color='wheat';
        step3Dashed.style.color='rgb(244, 57, 57)';
    });
    let backBtn1=document.getElementById('backbtn1');
    backBtn1.addEventListener('click',function(){
        formDiv2.style.left='500px';
        formDiv1.style.left='0';
        // steps ki animation ky liye y coding hai
    formWizardstep2.style.background='none';
    formWizardstep2.style.color='black';
    step2Dashed.style.color='#333';
});
let backBtn2=document.getElementById('backbtn2');
backBtn2.addEventListener('click',function(){
    formDiv3.style.left='500px';
    formDiv2.style.left='0';
      // steps ki animation ky liye y coding hai
      formWizardstep3.style.background='none';
      formWizardstep3.style.color='black';
      step3Dashed.style.color='#333';
});


// grabing the all forms Step divs for animation
let formWizardstep1 =document.getElementById('formWizardstep1');
let formWizardstep2 =document.getElementById('formWizardstep2');
let formWizardstep3 =document.getElementById('formWizardstep3');
let step2Dashed=document.getElementById('spanforstep2');
let step3Dashed=document.getElementById('spanforstep3');