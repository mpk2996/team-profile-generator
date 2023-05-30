const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
  it('should create a new Engineer instance', () => {
    const engineer = new Engineer('Jane Smith', 2, 'jane.smith@example.com', 'janesmith');

    expect(engineer.name).toBe('Jane Smith');
    expect(engineer.id).toBe(2);
    expect(engineer.email).toBe('jane.smith@example.com');
    expect(engineer.github).toBe('janesmith');
  });

  it('should return the GitHub username of the engineer', () => {
    const engineer = new Engineer('Jane Smith', 2, 'jane.smith@example.com', 'janesmith');

    expect(engineer.getGithub()).toBe('janesmith');
  });

  it('should return the role of the engineer', () => {
    const engineer = new Engineer('Jane Smith', 2, 'jane.smith@example.com', 'janesmith');

    expect(engineer.getRole()).toBe('Engineer');
  });
});
