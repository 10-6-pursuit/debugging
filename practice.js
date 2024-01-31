const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    address: {
      street: "123 Main St",
      city: "Anytown",
      country: "USA"
    },
    contact: {
      email: "john.doe@example.com",
      phone: {
        mobile: "555-1234",
        home: "555-5678"
      }
    },
    hobbies: ["Reading", "Traveling"],
    education: {
      degree: "Bachelor's",
      major: "Computer Science",
      university: {
        name: "Tech University",
        location: "Cityville"
      }
    },
    isStudent: false,
    friends: [
      { name: "Alice", age: 28 },
      { name: "Bob", age: 32 }
    ]
  };
  
  
  function getEducationHistory(person) {
    let education = person.education;
  
    let degree = education.degree;
    let major = education.major;
    let university = education.university.name;
  
    return `My name is ${person.firstName}, and I graduated from ${university} with a ${degree} in ${major}.`;
  }
  //syntaxError
//Fixed the quoates with backticks 
//also reassigned university to dot notation "education.university.name"
//${degree} braket replaced with curly bracket.
  function logAllFriendsNamesAndAges(person) {
    let [ friends ] = person;
  
    for (const friend in friends) {
      console.log(friend.name + " " + friend.age);
    }
  }
  //SyntaxError
  //changed to Friend.name and friend.age from the braket
  function addAreaCodeToPhoneNums(person, areaCode) {
    let [ phone ] = person;
  
    for (const key of phone) {
      phone.key = "(" + areaCode + ") " + phone.key;
    }
    return phone;
  }
  //SyntaxError
  // addition + before areaCode 

  function logFullAddress(person) {
    const address = person.address;
    let singleAddressStr = "";
    
    for (const key in address) {
      singleAddressStr += address[key] + (key === "country" ? "" : ", ");
    }
    console.log(singleAddressStr);
  }
  
  function logIfCanDrive(person) {
    if (person.age >= 18) {
      console.log("This person is of the legal age to drive.");
    } else {
      console.log("This person cannot legally drive.");
    }
  }
  //incorrect condition syntax.
  
  function addHeightProperty(person, height) {
    person[height] = height;
    return person;
  }
  
  function ageUpPerson1Year(person) {
    person[age] += 1;
  }
  //Incorrect increment syntax.
  //Corrected to properly increment the age property