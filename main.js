class Person {
  constructor(person) {
    this.firstName = person.name.first
    this.lastName = person.name.last
    this.title = person.name.title
    this.email = person.email
    this.cell = person.cell
    this.photo = person.picture.thumbnail
  }
 
  fullName() {
    return this.title + this.firstName + this.lastName
  }

  contactInfo(){
    return 'Email: ' + this.email + ', Cell: ' + this.cell
  }

  generateNameH2(){
    const nameH2 = document.getElementById('h2')
    nameH2.innerText = this.fullName()
    return nameH2
  }

  addToDom() {
    let li = document.createElement("li");

    // the h2 that contains their name is one part
    const nameH2 = this.generateNameH2()

    // the p that contains their contact info is next
    const contactParagraph = document.createElement('p')
    contactParagraph.innerText = this.contactInfo()
  
    // image is last
    const picture = document.createElement('img')
    picture.src = this.photo
    
    // put all 3 components into the li
    li.append(nameH2)
    li.append(contactParagraph)
    li.append(picture)
      
    // put the li into the list
    document.querySelector('#people-list').appendChild(li);
  }
}

document.addEventListener("DOMContentLoaded", ()=>{
  const requestUrl = "https://randomuser.me/api/?results=10";

  fetch(requestUrl)
  .then((responseData)=>{
      return responseData.json();
  })
  .then((jsonData)=>{
      // wipe out the Loading... text before putting the people in
      document.querySelector('#people-list').innerText = ''

      // put the people into the list
      let people = jsonData.results;
      let babyStepsPerson = people[0]
      let personInstance = new Person(babyStepsPerson)
      debugger
      // people.forEach(p => addPerson(p));
  })
  .catch((error)=>{
      // If any error is sent bac, you will have access to it here.
      console.log("error!!!:", error);
  });
});
