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
    let { education } = person;
  
    let degree = education.degree;
    let major = education.major;
    let university = education.university.name;
  
    return `My name is ${person.firstName}, and I graduated from ${university} with a ${degree} in ${major}`
  }

  console.log(getEducationHistory(person))
  //SyntaxError: Unexpected token '}' --->remove period at end of line 41
  

  function logAllFriendsNamesAndAges(person) {
    let { friends } = person;
  
    for (let friend of friends) {
    
    
      console.log(friend.name + " " + friend.age);
    }
  }

 logAllFriendsNamesAndAges(person)
  
  function addAreaCodeToPhoneNums(person, areaCode) {
    let [ phone ] = person;
  
    for (const key of phone) {
//Unexpected identifier 'areaCode' ----> missing plus sign "+" before areaCode
      phone.key = "(" + areaCode + ") " + phone.key;
    }
    return phone;
  }
  
  function logFullAddress(person) {
    const [ address ] = person;
    let singleAddressStr = "";
    
    for (const key in address) {
      singleAddressStr = address.key + (key === "country" ? "" : ", ");
    }
    console.log(singleAddressStr);
  }
  
  function logIfCanDrive(person) {
    if (person[age] === "true") {
      console.log("This person is of the legal age to drive.");
    } else {
  //Unexpected token '{' ----> delete "if" keyword
      console.log("This person cannot legally drive.")
    }
  }
  
  function addHeightProperty(person, height) {
    person[height] = height;
    return person;
  }
  
  function ageUpPerson1Year(person) {
    person[age]++ >= person[age];
  }
  //SyntaxError: Invalid left-hand side in assignment ---> remove plus sign and replace with greater than operator

