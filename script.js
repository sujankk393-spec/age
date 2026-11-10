
const submitButton = document.getElementById('submit');

 
submitButton.onclick = function() {
    const age =document.getElementById('age').value;

    if (age < 18)  {
        document.getElementById('result').textContent = 'You are not eligible to vote.';
    }
    else if (age == 18) {
        document.getElementById('result').textContent = 'You are eligible to vote.';
    }
    else {
        document.getElementById('result').textContent = 'Is this your first time voting? 🙃 ';
    }   
};
