const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'swift by apple',
}

// for in loop

for (const key in myObject) {
    // console.log(key);  // print key
    // console.log(myObject[key]);  //print values
    // console.log(`${key} shortcut is for: ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]

for(const key in programming){
    console.log(key)   // in array it return index value
}