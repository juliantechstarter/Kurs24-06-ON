function checkUser() {
    var name = "John"
    let age = 25
    const isStudent = true

    if (age > 18) {
        console.log(name + " is an adult")
    } else {
        console.log(name + " is a child")
    }

    for (let i = 0; i < 10; i++) {
        console.log(i)
    }

    someunusedVariable = "Test"

    return
}

checkUser()
