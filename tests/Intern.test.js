const Intern = require('../lib/Intern');

describe('Intern', () => {
  it('should create a new Intern instance', () => {
    const intern = new Intern('James', 2, 'james@example.com', 'University of Example');

    expect(intern.name).toBe('James');
    expect(intern.id).toBe(2);
    expect(intern.email).toBe('james@example.com');
    expect(intern.school).toBe('University of Example');
  });

  it('should return the school of the intern', () => {
    const intern = new Intern('James', 2, 'james@example.com', 'University of Example');

    expect(intern.getSchool()).toBe('University of Example');
  });

  it('should return the role of the intern', () => {
    const intern = new Intern('James', 2, 'james@example.com', 'University of Example');

    expect(intern.getRole()).toBe('Intern');
  });
});
