'use strict';

class Group {
  constructor(teacherName, id, nameList) {
    this.teacher = teacherName;
    this.id = id;
    this.nameList = nameList;
  }
}

class Teacher {
  constructor(firstName, ...groupList) {
    this.teacherName = firstName;
    this.teacherGroups = groupList;
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
      new Teacher('AJ', '7AA'),
      new Teacher('Mbali', '7FB'),
      new Teacher('Rachel', '7BB'),
      new Teacher('Xavier', '7AB'),
    ];

    // check the inner workings
    this.logData();
    // display the teachers' names in the DOM
    this.displayTeacherNames();
  }
  logData() {
    console.log(this.ESLteachers);
    console.log(this.ESLgroups);
  }

  displayTeacherNames() {
    //prettier-ignore
    const teacherHTML = this.ESLteachers
      .map((teacher) => teacher.teacherName)
      .reduce((accu, pseudo) => accu + `<div>${pseudo}</div>`, '');
    document.querySelector('.section-teachers').innerHTML = teacherHTML;
  }
}

const app = new App();
