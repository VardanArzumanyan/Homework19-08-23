function createPerson(name, age) {
  return (obj = {
    getName() {
      return name;
    },
    getAge() {
      return age;
    },
    setName(a) {
      name = a;
      return name;
    },
    setAge(b) {
      age = b;
      return age;
    },
  });
}

const person = createPerson("Alice", 30);
console.log(person.getName());
console.log(person.getAge());
person.setName("Bob");
person.setAge(25);
console.log(person.getName());
console.log(person.getAge());
