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
      // Xavier's groups
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
      new Group('Xavier', '8BA', [
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
        'Eason',
        'Alice',
        'Oscar',
      ]),
      new Group('Xavier', '7CB', [
        'Sunny C',
        'Flora',
        'Hannah',
        'Findy',
        'Cindy',
        'Fanny',
        'Sunny L',
        'Mia',
        'Betty',
        'Ryder',
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
      new Group('Xavier', '8CB', [
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
      new Group('Xavier', '7FA', [
        'Abby',
        'Patty',
        'Claire',
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
      new Group('Xavier', '8FA', [
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
        'Kiki',
        'Ruby',
        'Gordon',
        'Una',
        'Megan',
        'Leo',
        'Ray',
      ]),
      // Rachel's groups
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
        'Joy',
        'Jobs',
        'Andy',
        'Ella',
        'Catherine',
        'Henry',
        'Hanny',
      ]),
      new Group('Rachel', '8AB', [
        'Janet',
        'Timothy',
        'Ricky',
        'Channing',
        'Shane',
        'Royal',
        'Howard',
        'Logan',
        'Darren',
        'Benjamin',
        'Kevin',
        'Jason',
        'Claire',
        'Boven',
        'Kiki',
        'Shawn',
        'Wendy',
      ]),
      new Group('Rachel', '7CA', [
        'Henry',
        'Terry',
        'Lana',
        'Jenny',
        'Annie',
        'Emma',
        'Jasper',
        'Coco',
        'Hannah',
        'Mia',
        'Liv',
        'Andy',
        'Sophia',
        'Nini',
        'Dora',
        'Lillian',
        'Jobs',
        'Joanne',
      ]),
      new Group('Rachel', '8BB', [
        'Alan',
        'Sonia',
        'Ray',
        'Alex',
        'Rebecca',
        'Joanna',
        'Jason',
        'Cindy',
        'Lucy',
        'Leo',
        'Eason 曾',
        'Kingsley',
        'Wendy',
        'Dennis',
        'Eason 林',
        'Eddie',
        'Chris',
        'Ian',
      ]),
      new Group('Rachel', '7EB', [
        'Sofia',
        'Alvin',
        'Eric',
        'Aryrton',
        'Darren',
        'Mia',
        'Abby',
        'Sunny',
        'Howard',
        'Isa',
        'Emilia',
        'Jason',
        'Benson',
        'Elaine',
        'Patty',
        'Winnie',
        'Eason',
        'Peter',
        'Jesmine',
        'Nathan',
      ]),
      // Correct Names
      new Group('Rachel', '8EA', [
        'Sammi',
        'Sophia',
        'Alina',
        'Ivy',
        'Yuki',
        'Ryan',
        'Andrew',
        'Sofia',
        'Zoe',
        'Jamie',
        'Zachary',
        'Anthony',
        'Alessio',
        'Lou',
        'Jennifer',
        'Watson',
        'Jessica XD',
      ]),
      // Funny Names
      // new Group('Rachel', '8EA', [
      //   'Garage Girl',
      //   '2+3=4 Math Good',
      //   'Dead? No Way!',
      //   '這樣寫夠大嗎',
      //   'Youkee',
      //   'Twin :D',
      //   'Twin :D',
      //   'Sofia 需徐許續',
      //   'Forever Quiet',
      //   'Camera Girl',
      //   'Careful Wish',
      //   '插嘴宅',
      //   'Drawing Boy',
      //   'Asks Alessio',
      //   'Cake Girl',
      //   '寶雅較好',
      //   'Dead Jessica',
      // ]),
      // Mbali's groups
      new Group('Mbali', '7BA', [
        'Brad',
        'Leanne',
        'Harry',
        'Diane',
        'Roy',
        'Devon',
        'Luke',
        'Cindy',
        'Fifi',
        'Gavin',
        'Joanna',
        'Kelly',
        'Andrew',
        'Yumy',
        'Sam',
        'James',
        'Jason',
        'Ethan',
        'Chloe',
        'Jim',
        'Lucas',
      ]),
      new Group('Mbali', '8AA', [
        'Brian',
        'Aurora',
        'Ryan',
        'Sky',
        'Washington',
        'Willy',
        'Michael',
        'Elsa',
        'Nora',
        'Alan',
        'Dean',
        'Alston',
        'Mandy',
        'Ian',
        'Gavin',
        'Ivan',
      ]),
      new Group('Mbali', '7DA', [
        'Miley',
        'Daniel',
        'Cynthia',
        'Neil',
        'Renee',
        'Sophie',
        'Amanda',
        'Marco',
        'Carol',
        'Lorna',
        'Will',
        'Shannon',
        'Abelle',
        'Leo',
        'Alice',
        'Sky',
        'Lisa',
        'Demi',
        'Albee',
        'Iris',
      ]),
      new Group('Mbali', '8DA', [
        'Abby',
        'Yvonne',
        'James',
        'Melody',
        'Snow',
        'Doris',
        'Nick',
        'Sophia',
        'Ray',
        'Brian',
        'Lucy',
        'Tim',
        'Shawn',
        'Lucas',
        'Cony',
        'Amber',
        'Sharon',
        'Kevin',
        'Kimi',
        'Winnie',
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
      new Group('Mbali', '8FB', [
        'Benson',
        'Apple',
        'Jack',
        'Isobel',
        'Mia',
        'Mars',
        'Zoe',
        'Zoey',
        'Jason',
        'Ricky',
        'Jenny',
        'Sydney',
        'Yuki',
        'Albert',
        'Arthur',
      ]),
      // AJ's groups
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
      new Group('AJ', '8CA', [
        'Lisa',
        'Wayne',
        'Tanya',
        'Claire',
        'Audrina',
        'Thea',
        'Shane',
        'Oliver',
        'Gideon',
        'Zoe',
        'Jessie',
        'Ling',
        'Kai',
        'Cupid',
        'Darren',
        'Sharon',
      ]),
      new Group('AJ', '7DB', [
        'Kate',
        'Ian',
        'Oliver',
        'Wendy',
        'Minnie',
        'Ingrid',
        'Stella',
        'Holly',
        'Zoe',
        'Tina',
        'Sunny',
        'Yumi',
        'Charles',
        'Joy',
        'Daniel',
        'Crystal',
        'Jimmy',
        'Angus',
        'Eva',
        'Melody',
      ]),
      new Group('AJ', '8DB', [
        'Rey',
        'Elsa',
        'Sharon',
        'Jennifer',
        'Ray Z',
        'Yoga',
        'Ivan',
        'Cindy Zheng',
        'Wayne',
        'Anita',
        'Berry',
        'Mia',
        'Jerry',
        'Benny',
        'Siena',
        'Audrey',
        'Alice',
        'Esther',
        'Ray C',
      ]),
      new Group('AJ', '7EA', [
        'Nick 陳',
        'Annie',
        'Vivian',
        'Don',
        'Katie',
        'James',
        'Henry',
        'Tim',
        'Brian',
        'Ruby',
        'Jeremy',
        'Brook',
        'Nick 林',
        'Amber',
        'Dora',
        'Wayne',
        'Enzo',
        'Ella',
      ]),
      new Group('AJ', '8EB', [
        'Stephen',
        'Ethan',
        'Lily',
        'Michael',
        'Ian',
        'Cindy',
        'Emily',
        'Jacob',
        'Trista',
        'Howard',
        'Nickie',
        'Jimmy',
        'Janet',
        'Janice',
        'Rebecca',
        'Roy',
        'Jolin',
      ]),
    ];

    this.ESLteachers = [
      new Teacher('AJ', '7AA', '7DB', '7EA', '8CA', '8DB', '8EB'),
      new Teacher('Mbali', '7BA', '7DA', '7FB', '8AA', '8DA', '8FB'),
      new Teacher('Rachel', '7BB', '7CA', '7EB', '8Ba', '8BB', '8EA'),
      new Teacher('Xavier', '7AB', '7CB', '7FA', '8CB', '8BA', '8FA'),
    ];

    this.displayTeacherCards(this.ESLteachers);
    this.displayGroupCards(this.ESLgroups);
    this.removedNames = [];
    this.attachHandlers();
  }

  // attach event handlers
  attachHandlers() {
    // a group has been selected for random team generation
    document
      .querySelector('.teacher-card-container')
      .addEventListener('click', (e) => {
        // prettier-ignore
        if (e.target.classList.contains('teacher-group')) {
          this.displayNames(e);
          document.querySelector('.generate-teams').textContent = '';
        }
      });

    // a team size (1 to 4) has been selected
    document
      .querySelector('.gen-btn-container')
      .addEventListener('click', (e) => {
        if (e.target.classList.contains('gen-btn-size')) {
          if (this.desiredGroup === undefined) return;
          this.generateTeams(this.desiredGroup, e.target.textContent);
        }
      });

    // students are removed from the team generation process
    document
      .querySelector('.generate-names')
      .addEventListener('click', (e) => this.handleRemoval(e));
  }

  // displays students' names in the generate section
  displayNames(e) {
    setTimeout(() => document.getElementById('generate').scrollIntoView(), 250);
    // find the group
    this.removedNames = [];
    this.desiredGroup = this.getGroup(this.ESLgroups, e.target.textContent);
    // build the DOM with the students' names
    const namesHTML = this.desiredGroup.nameList.reduce(
      (accu, student) => accu + `<div class="gen-name">${student}</div>`,
      ''
    );
    document.querySelector('.generate-names').innerHTML = namesHTML;
  }

  // displays randomly generated teams
  displayTeams(teams) {
    const teamHTML = teams.reduce(
      (accu, team, index) =>
        accu +
        `<div class="team-card">${index + 1}: ${team.join(`<br> & `)}</div>`,
      ''
    );
    document.querySelector('.generate-teams').innerHTML = teamHTML;
  }

  // returns the group that matches the id clicked by the user
  getGroup(groupList, id) {
    return groupList.find((group) => group.id === id);
  }

  // returns a random student number from the nameList
  randomStudent(length) {
    return Math.floor(Math.random() * length);
  }

  handleRemoval(e) {
    if (!e.target.classList.contains('gen-name')) return;

    if (e.target.classList.contains('removed'))
      this.removedNames.splice(
        this.removedNames.indexOf(e.target.textContent),
        1
      );

    if (!e.target.classList.contains('removed'))
      this.removedNames.push(e.target.textContent);

    e.target.classList.toggle('removed');
  }

  // make groups of custom size
  generateTeams(group, size) {
    console.log(
      `${group.teacherName} requested teams of ${size} students for group ${group.id}`
    );

    const copy = [...group.nameList];
    const teams = [];
    console.log(copy);

    // removes names from team generation process
    this.removedNames.forEach((student) =>
      copy.splice(copy.indexOf(student), 1)
    );

    // makes teams until there are no students left
    while (copy.length > 0) {
      const team = [];
      for (let i = 0; i < size; i++) {
        const [student] = copy.splice(this.randomStudent(copy.length), 1);
        team.push(student);
      }
      teams.push(team);
    }
    console.table(teams);
    this.displayTeams(teams);
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

    document.querySelector('.teacher-card-container').innerHTML = teachersHTML;
  }

  // Display the teachers' group on their respective cards
  displayGroupCards(groups) {
    groups.forEach((group) => {
      document.querySelector(
        `.teacher-${group.teacherName.toLowerCase()}`
      ).innerHTML += `<button class="teacher-group">${group.id}</button>`;
    });
  }
}

const app = new App();
