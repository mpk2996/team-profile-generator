const Manager = require('../lib/Manager');

describe('Manager', () => {
  it('should create a new Manager instance', () => {
    const manager = new Manager('Mike', 1, 'mike.kehoe@example.com', '123');

    expect(manager.name).toBe('Mike');
    expect(manager.id).toBe(1);
    expect(manager.email).toBe('mike.kehoe@example.com');
    expect(manager.officeNumber).toBe('123');
  });

  it('should return the role of the manager', () => {
    const manager = new Manager('Mike', 1, 'mike.kehoe@example.com', '123');

    expect(manager.getRole()).toBe('Manager');
  });
});
