package main

import "fmt"

// Employee struct represents an employee
type Employee struct {
	ID        int
	Name      string
	Position  string
	Salary    float64
}

type EmployeeData struct {}

func (ed *EmployeeData) SaveEmployee(e *Employee) {

	fmt.Printf("Saving employee %s to database\n", e.Name)
}
type EmployeeReporter struct {}

func (er *EmployeeReporter) GenerateReport(e *Employee) {
	fmt.Printf("Generating report for employee %s\n", e.Name)
}
type SalaryCalculator struct {}

func (sc *SalaryCalculator) CalculateBonus(e *Employee) float64 {
	return e.Salary * 0.1 
}

func main() {
	emp := &Employee{
		ID:       1,
		Name:     "John Doe",
		Position: "Developer",
		Salary:   50000,
	}
	data := &EmployeeData{}
	reporter := &EmployeeReporter{}
	calculator := &SalaryCalculator{}

	data.SaveEmployee(emp)
	reporter.GenerateReport(emp)
	bonus := calculator.CalculateBonus(emp)
	fmt.Printf("Bonus for %s: $%.2f\n", emp.Name, bonus)
}