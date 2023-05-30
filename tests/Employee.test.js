const Employee = require('../lib/Employee');

describe('Employee', () => {
  it('should create a new Employee', () => {
    const employee = new Employee('John Doe', 1, 'john.doe@example.com');

    expect(employee.name).toBe('John Doe');
    expect(employee.id).toBe(1);
    expect(employee.email).toBe('john.doe@example.com');
  });

  it('should return the name of the employee', () => {
    const employee = new Employee('John Doe', 1, 'john.doe@example.com');

    expect(employee.getName()).toBe('John Doe');
  });

  it('should return the ID of the employee', () => {
    const employee = new Employee('John Doe', 1, 'john.doe@example.com');

    expect(employee.getId()).toBe(1);
  });

  it('should return the email of the employee', () => {
    const employee = new Employee('John Doe', 1, 'john.doe@example.com');

    expect(employee.getEmail()).toBe('john.doe@example.com');
  });

  it('should return the role of the employee', () => {
    const employee = new Employee('John Doe', 1, 'john.doe@example.com');

    expect(employee.getRole()).toBe('Employee');
  });
});
