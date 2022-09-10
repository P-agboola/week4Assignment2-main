// Class
class Person {
  // Constructor
  constructor(name, tribe, stateOfResidence, university, courseOfStudy) {
    (this.name = name),
      (this.tribe = tribe),
      (this.stateOfResidence = stateOfResidence),
      (this.university = university),
      (this.courseOfStudy = courseOfStudy);
  }

  //   Encapsulation
  setFriends(friend1, friend2) {
    (this.friend1 = friend1), (this.friend2 = friend2);
  }
  getFriends() {
    const message = `${this.name} friends are ${this.friend1} andd ${this.friend2}. They are both students of ${this.university}`;
    return message;
  }
  getPersonalDetails() {
    const message = {
      name: this.name,
      tribe: this.tribe,
      stateOfResidence: this.stateOfResidence,
      university: this.university,
      courseOfStudy: this.courseOfStudy,
    };
    return message;
  }
}

const Hameed = new Person(
  "Hameed",
  "Yoruba",
  "Abuja",
  "Nile University",
  "Computer Science"
);

class Seamfix {
  applicantDetailsForProgramManager() {
    const personDetails = Hameed.getPersonalDetails();
    const jobRole = { jobTitle: "Program Manager" };
    const message = { ...personDetails, ...jobRole };
    return message;
  }
}

class ZenithBank {
  personDetailsForDomiciliaryAccount() {
    return Hameed.getPersonalDetails();
  }
}

const seamfix = new Seamfix();
const zenith = new ZenithBank();

console.log(seamfix.applicantDetailsForProgramManager());
console.log(zenith.personDetailsForDomiciliaryAccount());
