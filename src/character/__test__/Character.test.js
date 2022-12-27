import Character from '../Character';

test('test method Character.add', () => {
  const character = new Character();
  character.add('Bowerman');
  expect([...character.members]).toEqual(['Bowerman']);
});

test('test method Character.add invalid name', () => {
  expect(() => {
    const character = new Character();
    character.add('Bowerman');
    character.add('Bowerman');
  }).toThrow('Персоонаж не может быть выбран');
});

test('test method Character.addAll', () => {
  const character = new Character();
  character.addAll(['Bowerman', 'Daemon', 'Magician', 'Bowerman']);
  expect([...character.members]).toEqual(['Bowerman', 'Daemon', 'Magician']);
});

test('test method Character.toArray', () => {
  const character = new Character();
  character.add('Zombie');
  character.addAll(['Bowerman', 'Daemon', 'Magician', 'Bowerman']);
  expect(character.toArray()).toEqual(['Zombie', 'Bowerman', 'Daemon', 'Magician']);
});
