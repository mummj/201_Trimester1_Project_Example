// console.log('hello I am alive')

const userName = prompt('Please Enter Your Name');
let rightAnswer = 0;
let wrongAnswer = 0;

function percent(numerator){
  total = ((numerator/11)*100);
  rounded = Math.round(total *10/10);
  return rounded;
}

alert('For the following questions please type a, b, c, for your answers. Please make sure that they are typed in lower case!');

let question1 = prompt('1. What button do you click to create a new Repository in GitHub? a)New b)Pull Requests c)Settings');

let question2 = prompt('2. What three things must a repository have when we create it? a)Name, Age, Date b)Name, Date, and made Public c)Name, made Public, ReadMe');

let question3 = prompt('3. The terminal command to copy a repository to your local machine is: a)Clone b)git clone c)paste');

let question4 = prompt('4. To create a file in your cloned repoitory you use this terminal command: a)add b)touch c)file new');

let question5 = prompt('5. The terminal command to see what branches are on the repoitory is: a)git checkout b)git branch c)git commit');

let question6 = prompt('6. To create a new branch you should use the terminal command: a)git add b)git new_branch c)git branch nameOfBranch');

let question7 = prompt('7. The terminal command to switch branches is: a)git branch b)git checkout nameOfBranch c)git add branch');

let question8 = prompt('8. ACP stands for what? a)Add Commit and Push b)Add Current Publish c)Add Common Property');

let question9 = prompt('9. The terminal command git add . will do what? a)add all untracked files in your directory into git b)Put all files in gitHub c)Nothing this is not a valid terminal command');

let question10 = prompt('10. Which of the following is the correct way to do a git push in your terminal? a)git push all branches b)git push c)git push origin nameOfBranch');

let question11 = prompt('11. Once you have pushed your work to gitHub on the branch that you have been working on what is your next step? a)Go to gitHub and create a pull request to merge your branch. b)Nothing gitHub will automatically merge your branch into the main branch for you. c)There is no next step your branch will override all other github branches.')


//--------------------Question 1---------------------------//

if(question1 === "a"){
  document.write("<section><h3>1. What button do you click to create a new Repository in GitHub?</h3><p>Questions 1 was correct the button you push is New</p></section>")
  rightAnswer++;
}
if(question1 !== "a"){
  document.write("<section><h3>1. What button do you click to create a new Repository in GitHub?</h3><p>The answer you chose was incorrect. The correct answer is New.</p></section>")
  wrongAnswer++;
}

//-----------------------Question 2----------------------------//


if(question2 === "c"){
  document.write("<section><h3>2. What three things must a repository have when we create it?</h3><p>Questions 2 was correct you must have Name, made Public, and ReadMe.</p></section>")
  rightAnswer++;
}
if(question2 !== "c"){
  document.write("<section><h3>2. What three things must a repository have when we create it?</h3><p>The answer you chose was incorrect. The correct answer is Name, made Public, and ReadMe.</p></section>")
  wrongAnswer++;
}

//--------------------------Question 3---------------------------//

if(question3 === "b"){
  document.write("<section><h3>3. The terminal command to copy a repository to your local machine is:</h3><p>Questions 3 was correct the command is git clone</p></section>")
  rightAnswer++;
}
if(question3 !== "b"){
  document.write("<section><h3>3. The terminal command to copy a repository to your local machine is:</h3><p>The answer you chose was incorrect. The correct answer is git clone.</p></section>")
  wrongAnswer++;
}

//---------------------------Question 4------------------------//

if(question4 === "b"){
  document.write("<section><h3>4. To create a file in your cloned repoitory you use this terminal command:</h3><p>Questions 4 was correct the command is touch</p></section>")
  rightAnswer++;
}
if(question4 !== "b"){
  document.write("<section><h3>4. To create a file in your cloned repoitory you use this terminal command:</h3><p>The answer you chose was incorrect. The correct answer is touch.</p></section>")
  wrongAnswer++;
}

//---------------------------Question 5------------------------//

if(question5 === "b"){
  document.write("<section><h3>5. The terminal command to see what branches are on the repoitory is:</h3><p>Questions 5 was correct the command is git branch</p></section>")
  rightAnswer++;
}
if(question5 !== "b"){
  document.write("<section><h3>5. The terminal command to see what branches are on the repoitory is:</h3><p>The answer you chose was incorrect. The correct answer is git branch.</p></section>")
  wrongAnswer++;
}

//---------------------------Question 6------------------------//

if(question6 === "c"){
  document.write("<section><h3>6. To create a new branch you should use the terminal command:</h3><p>Questions 6 was correct the command is git branch nameOfBranch</p></section>")
  rightAnswer++;
}
if(question6 !== "c"){
  document.write("<section><h3>6. What button do you click to create a new Repository in GitHub?</h3><p>The answer you chose was incorrect. The correct answer is git branch nameOfBranch.</p></section>")
  wrongAnswer++;
}

//---------------------------Question 7------------------------//

if(question7 === "b"){
  document.write("<section><h3>7. The terminal command to switch branches is:</h3><p>Questions 7 was correct the command is git checkout nameOfBranch</p></section>")
  rightAnswer++;
}
if(question7 !== "b"){
  document.write("<section><h3>1. What button do you click to create a new Repository in GitHub?</h3><p>The answer you chose was incorrect. The correct answer is git checkout nameOfBranch.</p></section>")
  wrongAnswer++;
}

//---------------------------Question 8------------------------//

if(question8 === "a"){
  document.write("<section><h3>8. ACP stands for what?</h3><p>Questions 8 was correct the button you push is Add Commit and Push</p></section>")
  rightAnswer++;
}
if(question8 !== "a"){
  document.write("<section><h3>8. ACP stands for what?</h3><p>The answer you chose was incorrect. The correct answer is Add Commit and Push.</p></section>")
  wrongAnswer++;
}

//---------------------------Question 9------------------------//

if(question9 === "a"){
  document.write("<section><h3>9. The terminal command git add . will do what?</h3><p>Questions 9 was correct the the command will Add all untracked files in your directory inot git</p></section>")
  rightAnswer++;
}
if(question9 !== "a"){
  document.write("<section><h3>9. What button do you click to create a new Repository in GitHub?</h3><p>The answer you chose was incorrect. The correct answer is Add all untracked files in your directory inot git.</p></section>")
  wrongAnswer++;
}

//---------------------------Question 10------------------------//

if(question10 === "c"){
  document.write("<section><h3>10. Which of the following is the correct way to do a git push in your terminal?</h3><p>Questions 10 was correct the correct way is git push origin nameOfBranch</p></section>")
  rightAnswer++;
}
if(question10 !== "c"){
  document.write("<section><h3>10. Which of the following is the correct way to do a git push in your terminal?</h3><p>The answer you chose was incorrect. The correct answer is git push origin nameOfBranch.</p></section>")
  wrongAnswer++;
}

//---------------------------Question 11------------------------//

if(question11 === "a"){
  document.write("<section><h3>11. Once you have pushed your work to gitHub on the branch that you have been working on what is your next step?</h3><p>Questions 11 was correct Go to gitHub and create a pull request to merge your branch.</p></section>")
  rightAnswer++;
}
if(question11 !== "a"){
  document.write("<section><h3>11. What button do you click to create a new Repository in GitHub?</h3><p>The answer you chose was incorrect. The correct answer is Go to gitHub and create a pull request to merge your branch.</p></section>")
  wrongAnswer++;
}

document.write('<h4>Congratulation ' + userName + ' you got ' + rightAnswer + ' correct and only missed ' + wrongAnswer + ' for a total of ' + rightAnswer + ' out of 11 for a percent of ' + percent(rightAnswer) + '% !!</h4>');

console.log("number write " + rightAnswer);
console.log("number wrong " + wrongAnswer);

