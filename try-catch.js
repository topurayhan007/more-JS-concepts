function checkAge() {
  const ageField = document.getElementById("age");
  const ageText = ageField.value;
  const errorTag = document.getElementById("error");
  try {
    // console.log(bBaria);
    const age = parseInt(ageText);
    if (isNaN(age)) {
      // console.log("Age not found", age, ageText);
      throw "Please enter a number";
    } else if (age < 18) {
      throw "Baccha Kaccha not allowed";
    } else if (age > 30) {
      throw "Murobbi ra eikhane aishen na";
    }
    errorTag.innerHTML = "";
  } catch (error) {
    console.log("ERROR: ", error);
    errorTag.innerHTML = "ERROR: " + error;
  } finally {
    console.log("All done inside try catch");
  }
  console.log(11111);
}
