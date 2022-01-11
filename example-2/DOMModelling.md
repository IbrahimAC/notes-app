Step 6:
1. Store in a variable the DOM value representing the HTML element for the second paragraph (you can use its HTML ID to target it) and print it on the console. You should get the following result:
document.getElementById(id=“second-paragraph”)
2. Update the .innerText property of this variable to change the value of this element. You should be able to see this change reflected on the page.
document.getElementById(“text”).innerText = “Your new text here”
document.getElementById(id=“second-paragraph”).innerText = “Your new text here”
https://www.codegrepper.com/code-examples/javascript/change+innertext+javascript
3. Store in a variable the DOM value representing the list of all paragraphs in the document, and print it on the console. You should get the following result:
const x = document.querySelectorAll(“p”);
console.log(x)
Step 7
1. Implement a new method addParagraph — this method should dynamically create a new p element and store it in a variable.
  addParagraph() {
    let p = document.createElement(“p”)
    }
2. Set this new element’s content to the string ’This paragraph has been dynamically added by JavaScript! (or something else).
  addParagraph() {
    let p = document.createElement(“p”)
    p.innerText= “This paragraph has been dynamically added by JavaScript!”
  }
3. Append the element to the main container element.
   addParagraph() {
    let p = document.createElement(“p”)
    p.innerText = “This paragraph has been dynamically added by JavaScript!”
    this.mainContainerEl.append(p)
   }
4. In the main file, call this new method on the existing View instance.
  const view = new View();
  view.addParagraph()
codegrepper.comcodegrepper.com
change innertext javascript Code Example
document.getElementById("text").innerText = "Your new text here" (14 kB)
