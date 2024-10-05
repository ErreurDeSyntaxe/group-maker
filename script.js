'use strict';

class Group {
  constructor(teacherName, id, nameList) {
    this.teacherName = teacherName;
    this.id = id;
    this.nameList = nameList;
  }
}

class Teacher {
  constructor(firstName, ...groupList) {
    this.firstName = firstName;
    this.groupList = groupList;
  }
}

class App {
  constructor() {
    this.ESLgroups = [
      new Group('Xavier', '7AB', [
        'Lawrence',
        'Elina',
        'Kyle',
        'Darren',
        'Jason C',
        'Vito',
        'Nora',
        'Ryan C',
        'Gary',
        'Jacob',
        'Peter',
        'Ryan H',
        'Amos',
        'Yi-Xuan',
        'Roger',
        'Eric W',
        'Eric L',
        'Emily',
        'Jason H',
      ]),
      new Group('Xavier', '7CB', [
        'Sunny C',
        'Flora',
        'Hannah',
        'Findy',
        'Cindy',
        'Fanny',
        'Sunny L',
        'Xenia',
        'Jessie',
        'Tina',
        'Michelle',
        'Samuel',
        'Elsa',
        'Morris',
        'Justin',
        'Joshua',
        'Bruce',
      ]),
      new Group('Xavier', '7FA', [
        'Abby',
        'Patty',
        'Clair',
        'Jessica',
        'Willson',
        'Ben',
        'Luna',
        'Miles',
        'Angel',
        'Ray',
        'Justin',
        'Ryder',
        'Phoebe',
        'Rowena',
        'Brian',
        'Evangeline',
        'Cynthia',
        'Sam',
        'Sarah',
        'Vivian',
      ]),
      new Group('Xavier', '8CB', [
        'Yuri',
        'Dora',
        'Ray H',
        'Terrisa',
        'Johnny',
        'Brandon',
        'Sharon',
        'Sunny',
        'Meya',
        'Eric',
        'Ray C',
        'Ian',
        'Jimmy',
        'Roy',
      ]),
      new Group('Xavier', '8BA', [
        'Hardy',
        'Bryan',
        'Gary',
        'Henry',
        'Willy',
        'Anderson',
        'Cheney',
        'Turner',
        'Sage',
        'Lesley',
        'Patrina',
        'Gina',
        'Emily',
        'Lulu',
        'Gloria',
        'Shanie',
        'Kiki',
        'Ariel',
      ]),
      new Group('Xavier', '8FB', [
        'Anna',
        'Joannie',
        'Joanne',
        'Charlotte',
        'Stella',
        'Judy',
        'Jamie',
        'Sharon',
        'Wayne',
        'Jason',
        'Isaac',
        'Ruby',
        'Gordon',
        'Una',
        'Meghan',
        'Leo',
        'Ray',
      ]),
      new Group('Rachel', '7BB', [
        'Dylan',
        'Kitty',
        'Janet',
        'Matt',
        'Hank',
        'Minnie',
        'Abby',
        'David',
        'Peggy',
        'Kiel',
        'Joseph',
        'William',
        'Alex',
        'Jobs',
        'Andy',
        'Ella',
        'Catherine',
        'Henry',
        'Hanny',
      ]),
      new Group('Mbali', '7FB', [
        'Bryan',
        'Peggy',
        'Jolin',
        'Tony',
        'Aiden',
        'Timothy',
        'Iris',
        'Neo',
        'Apple',
        'Andre',
        'Ray S',
        'Harper',
        'Nina',
        'Alan',
        'Eason H',
        'Eason L',
        'Ray C',
        'Ken',
        'Luke',
        'Terry',
      ]),
      new Group('AJ', '7AA', [
        'Amber',
        'Bella',
        'Tina',
        'Harry',
        'Peggy',
        'Katherine',
        'Allen',
        'Harrold',
        'Patrick',
        'Sami',
        'Kiki',
        'Bob',
        'Roy',
        'Kelly',
        'Penny',
        'Ziv',
        'Sara',
        'Melody',
        'Joey',
        'Ivan',
      ]),
    ];

    this.ESLteachers = [
      new Teacher('AJ', '7AA', '8CA'),
      new Teacher('Mbali', '7FB', '8FB'),
      new Teacher('Rachel', '7BB', '7CA', '8BB'),
      new Teacher('Xavier', '7AB', '7CB', '7FA', '8CB', '8BA', '8FA'),
    ];

    this.displayTeacherCards(this.ESLteachers);
    this.displayGroupCards(this.ESLgroups);
    // check the inner workings
    // this.logData();
    // display the teachers' names in the DOM
    // this.displayTeacherNames();
    // this.displaySelectedTeacher();
  }

  // check inner workings
  logData() {
    console.log(this.ESLteachers);
    console.log(this.ESLgroups);
  }

  // Display teachers' names on the UI
  displayTeacherCards(teachers) {
    const teachersHTML = teachers
      .map((teacher) => teacher.firstName)
      .reduce(
        (accu, pseudo) =>
          accu +
          `<div class="teacher-card teacher-${pseudo.toLowerCase()}">
            <p class="teacher-name">${pseudo}</p>
           </div>`,
        ''
      );

    document.querySelector('.section-teachers').innerHTML = teachersHTML;
  }

  // Display the teachers' group on their respective cards
  displayGroupCards(groups) {
    groups.forEach((group) => {
      document.querySelector(
        `.teacher-${group.teacherName.toLowerCase()}`
      ).innerHTML += `<div class="teacher-group">${group.id}</div>`;
    });
  }

  // displays all teacher names
  displayTeacherNames() {
    //prettier-ignore
    const teacherHTML = this.ESLteachers
      .map((teacher) => teacher.firstName)
      .reduce((accu, pseudo) => accu + `<div>${pseudo}</div>`, '');
    // document.querySelector('.section-teachers').innerHTML = teacherHTML;
  }

  // display the groups' IDs and their students' names
  displayGroupNameList(selectedGroups) {
    const groups = this.ESLgroups.filter((group) =>
      selectedGroups.includes(group.id)
    );
    groups.forEach((group) => {
      console.log(group.id);
      console.log(group.nameList);
    });
  }

  // diplay one teacher's groups
  displaySelectedTeacher(selectedTeacher = 'Xavier') {
    // prettier-ignore
    const possibleGroups = this.ESLteachers
    .filter((teacher) => teacher.firstName === selectedTeacher)[0]
    .groupList;

    console.log(possibleGroups);
    this.displayGroupNameList(possibleGroups);
  }
}

const app = new App();
