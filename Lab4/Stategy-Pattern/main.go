package main

import "fmt"

// PaymentStrategy interface
type PaymentStrategy interface {
	Pay(amount float64)
}

// Credit Card Strategy
type CreditCardPayment struct {
	cardNumber string
	cvv        string
}

func (c *CreditCardPayment) Pay(amount float64) {
	fmt.Printf("Paid %.2f using Credit Card\n", amount)
}

// PayPal Strategy
type PayPalPayment struct {
	email    string
	password string
}

func (p *PayPalPayment) Pay(amount float64) {
	fmt.Printf("Paid %.2f using PayPal\n", amount)
}

// Cash Strategy
type CashPayment struct{}

func (ca *CashPayment) Pay(amount float64) {
	fmt.Printf("Paid %.2f using Cash\n", amount)
}

// Shopping Cart
type ShoppingCart struct {
	paymentMethod PaymentStrategy
	amount        float64
}

func (s *ShoppingCart) SetPaymentMethod(method PaymentStrategy) {
	s.paymentMethod = method
}

func (s *ShoppingCart) Pay() {
	s.paymentMethod.Pay(s.amount)
}

func main() {
	cart := &ShoppingCart{
		amount: 100.0,
	}

	// Pay using Credit Card
	cart.SetPaymentMethod(&CreditCardPayment{
		cardNumber: "1234-5678-9012-3456",
		cvv:        "123",
	})
	cart.Pay()

	// Pay using PayPal
	cart.SetPaymentMethod(&PayPalPayment{
		email:    "example@email.com",
		password: "password",
	})
	cart.Pay()

	// Pay using Cash
	cart.SetPaymentMethod(&CashPayment{})
	cart.Pay()
}