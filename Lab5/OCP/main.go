package main

import "fmt"

type TaxCalculator interface {
    CalculateTax() float64
}
type Product struct {
    name  string
    price float64
}

func (p *Product) CalculateTax() float64 {
    return p.price * 0.1
}
type ProductInternational struct {
    name  string
    price float64
}

func (p *ProductInternational) CalculateTax() float64 {
    return p.price * 0.15 
}

func main() {
    product := &Product{name: "Laptop", price: 1000}
    internationalProduct := &ProductInternational{name: "Smartphone", price: 1000}

    fmt.Println("Tax for product:", product.CalculateTax())                
    fmt.Println("Tax for international product:", internationalProduct.CalculateTax()) 
}
