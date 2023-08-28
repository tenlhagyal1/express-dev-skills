const skills = [
    {id: 125223, skill: 'GitHub', level: 'Beginner'},
    {id: 127904, skill: 'Web Development', level: 'Beginner'},
    {id: 139608, skill: 'JavaScript', level: 'Beginner'},
    {id: 140509, skill: 'HTML5', level: 'Beginner'},
    {id: 140612, skill: 'Cascading Style Sheets (CSS)', level: 'Beginner'},
    {id: 140713, skill: 'HTML', level: 'Beginner'},
    {id: 140814, skill: 'Express.js', level: 'Beginner'},
    {id: 140915, skill: 'Node.js', level: 'Beginner'}
 ];
 
 module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
  };
  
  function getAll() {
    return skills;
  }
 
  function getOne(id) {
    id = parseInt(id)
    return skills.find(skill => skill.id === id)
  }

  function create(skill) {
    skill.id = Date.now() %100000
    skill.level = 'Beginner'
    skills.push(skill)
  }

  function deleteOne(id) {
    id = parseInt(id)
    const idx = skills.findIndex(skill => skill.id === id)
    skills.splice(idx, 1)
  }