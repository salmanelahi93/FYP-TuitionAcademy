
var ref = new Firebase('https://tocipractise.firebaseio.com/');

// Save data to firebase
// Tutor Registration

function TutorRegistration(){

  var profile = "Tutor";
  var name = document.getElementById('tutName').value;
  var age = document.getElementById('tutAge').value;
  var cell = document.getElementById('tutCell').value;
  var province = document.getElementById('tutProvince').value;
  var city = document.getElementById('tutCity').value;
  var address = document.getElementById('tutAddress').value;
  var nic = document.getElementById('tutNIC').value;
  var email = document.getElementById('tutEmail').value;
  var pword = document.getElementById('tutPword').value;
  var degree = document.getElementById('tutDegree').value;
  var discipline = document.getElementById('tutDiscipline').value;
  var program = document.getElementById('tutProg').value;
  var clas = document.getElementById('tutClass').value;

  console.log(profile);

  if(name=="" || age=="" || cell=="" || province=="" || city=="" || address=="" || nic=="" || degree=="" || discipline==""|| program=="" || clas=="" || email=="" || pword==""){

    alert("Please fill al the fields");

  }else{
    if (program === 'no'){

      ref.createUser({
        email    : email,
        password : pword
      }, function(error, userData) {
        if (error) {
          console.log("Error creating user:", error);
        } else {
          console.log("Successfully created user account with uid:", userData.uid);

          console.log(email);

         var id = userData.uid;
          ref.child(id).set({
            Profile: profile,
            Name:name,
            Age:age,
            Cell:cell,
            Province:province,
            City:city,
            Address: address,
            CNIC: nic,
            Email: email,
            Password: pword,
            Degree: degree,
            Discipline: discipline,
            Program: program,
            Class: clas,
            Uid: id
          });
        }
      });


    }else{

      ref.createUser({
        email    : email,
        password : pword
      }, function(error, userData) {
        if (error) {
          console.log("Error creating user:", error);
        } else {
          console.log("Successfully created user account with uid:", userData.uid);
          console.log(email);

          var id = userData.uid;
          ref.child(id).set({
            Profile: profile,
            Name:name,
            Age:age,
            Cell:cell,
            Province:province,
            City:city,
            Address: address,
            CNIC: nic,
            Email: email,
            Password: pword,
            Degree: degree,
            Discipline: discipline,
            Program: program,
            Uid: id

          });
        }
      });
    }
  }
}

// Save data to firebase
// Student Registration

function StudentRegistration(){

  var profile = "Student";
  var name = document.getElementById('stdName').value;
  var age = document.getElementById('stdAge').value;
  var cell = document.getElementById('stdCell').value;
  var province = document.getElementById('stdProvince').value;
  var City = document.getElementById('stdCity').value;
  var address = document.getElementById('stdAddress').value;
  var nic = document.getElementById('stdNIC').value;
  var email = document.getElementById('stdEmail').value;
  var pword = document.getElementById('stdPword').value;
  var degree = document.getElementById('stdDegree').value;
  var discipline = document.getElementById('stdDiscipline').value;
  var clas = document.getElementById('stdClass').value;

  if(name=="" || age=="" || cell=="" || province=="" || City=="" || address=="" || nic=="" || degree=="" || discipline=="" || clas=="" || email=="" || pword==""){

    alert("Please fill al the fields");

  }else{

    ref.createUser({
      email    : email,
      password : pword
    }, function(error, userData) {
      if (error) {
        console.log("Error creating user:", error);
      } else {
        console.log("Successfully created user account with uid:", userData.uid);
        console.log(email);

        var id = userData.uid;
        ref.child(id).set({
          Profile: profile,
          Name:name,
          Age:age,
          Cell:cell,
          Province:province,
          City:City,
          Address: address,
          CNIC: nic,
          Email: email,
          Password: pword,
          Degree: degree,
          Discipline: discipline,
          Class: clas,
          Uid: id
        });
      }
    });
  }
}


// Retrieve data from Firebase
// Login Function

function Login(){

  var email = document.getElementById("email").value;
  var pword = document.getElementById("pword").value;

  if (email!="" && pword!=""){
    ref.authWithPassword({
      email    : email,
      password : pword


    }, function(error, authData) {

      if (error) {
        console.log("Login Failed!", error);
      } else {

        console.log("1",authData);
        console.log("User Id from auth function:", authData.uid);
        var id = authData.uid;
        localStorage.setItem("Uid", id);


        ref.child(id).on("value", function(snapshot) {
         // console.log(snapshot.val().CNIC);

          var profile = snapshot.val().Profile;

          if (profile == "Tutor"){

            var name = snapshot.val().Name;
            var email = snapshot.val().Email;
            var cell = snapshot.val().Cell;
            var age = snapshot.val().Age;
            var nic = snapshot.val().CNIC;

            var province = snapshot.val().Province;
            var city = snapshot.val().City;
            var address = snapshot.val().Address;
            var degree = snapshot.val().Degree;
            var discipline = snapshot.val().Discipline;
            var isProgramCompleted = snapshot.val().Program;
            var Class = snapshot.val().Class;

            var uid = snapshot.val().Uid;


            localStorage.setItem("Name", name);
            localStorage.setItem("Email", email);
            localStorage.setItem("Cell", cell);
            localStorage.setItem("Age", age);
            localStorage.setItem("tutNic", nic);
            localStorage.setItem("Province", province);
            localStorage.setItem("City", city);
            localStorage.setItem("Address", address);
            localStorage.setItem("Degree", degree);
            localStorage.setItem("Discipline", discipline);
            localStorage.setItem("Program", isProgramCompleted);
            localStorage.setItem("Class", Class);
            localStorage.setItem("Profile", profile);
            localStorage.setItem("UserId", uid);


            window.location.href = "../view/tutor.html";

          }else{

            var name = snapshot.val().Name;
            var email = snapshot.val().Email;
            var cell = snapshot.val().Cell;
            var age = snapshot.val().Age;
            var nic = snapshot.val().CNIC;

            var province = snapshot.val().Province;
            var city = snapshot.val().City;
            var address = snapshot.val().Address;
            var degree = snapshot.val().Degree;
            var discipline = snapshot.val().Discipline;
            var Class = snapshot.val().Class;

            var uid = snapshot.val().Uid;


            localStorage.setItem("Name", name);
            localStorage.setItem("Email", email);
            localStorage.setItem("Cell", cell);
            localStorage.setItem("Age", age);
            localStorage.setItem("tutNic", nic);
            localStorage.setItem("Province", province);
            localStorage.setItem("City", city);
            localStorage.setItem("Address", address);
            localStorage.setItem("Degree", degree);
            localStorage.setItem("Discipline", discipline);
            localStorage.setItem("Class", Class);
            localStorage.setItem("Profile", profile);
            localStorage.setItem("UserId", uid);

            window.location.href = "../view/student.html";

          }

        }, function (errorObject) {
          console.log("The read failed: " + errorObject.code);
        });

      }

    }, {
      remember: "sessionOnly"
    });


  }else{
    alert("Please enter email or password");
  }

}



