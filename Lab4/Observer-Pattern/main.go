package main

import "fmt"

// Subject interface
type Subject interface {
	RegisterObserver(observer Observer)
	RemoveObserver(observer Observer)
	NotifyObservers()
}

// Observer interface
type Observer interface {
	Update(temp float64, humidity float64, pressure float64)
}

// WeatherStation implements Subject
type WeatherStation struct {
	observers []Observer
	temperature float64
	humidity    float64
	pressure    float64
}

// NewWeatherStation creates a new weather station
func NewWeatherStation() *WeatherStation {
	return &WeatherStation{
		observers: make([]Observer, 0),
	}
}

func (w *WeatherStation) RegisterObserver(observer Observer) {
	w.observers = append(w.observers, observer)
}

func (w *WeatherStation) RemoveObserver(observer Observer) {
	for i, obs := range w.observers {
		if obs == observer {
			w.observers = append(w.observers[:i], w.observers[i+1:]...)
			break
		}
	}
}

func (w *WeatherStation) NotifyObservers() {
	for _, observer := range w.observers {
		observer.Update(w.temperature, w.humidity, w.pressure)
	}
}

func (w *WeatherStation) SetMeasurements(temp, humidity, pressure float64) {
	w.temperature = temp
	w.humidity = humidity
	w.pressure = pressure
	w.NotifyObservers()
}

// DisplayDevice implements Observer
type DisplayDevice struct {
	name string
}

func NewDisplayDevice(name string) *DisplayDevice {
	return &DisplayDevice{name: name}
}

func (d *DisplayDevice) Update(temp, humidity, pressure float64) {
	fmt.Printf("%s: Temperature: %.1f°C, Humidity: %.1f%%, Pressure: %.1fhPa\n",
		d.name, temp, humidity, pressure)
}

func main() {
	// Create the weather station (subject)
	weatherStation := NewWeatherStation()

	// Create display devices (observers)
	phone := NewDisplayDevice("Phone")
	tablet := NewDisplayDevice("Tablet")
	desktop := NewDisplayDevice("Desktop")

	// Register observers
	weatherStation.RegisterObserver(phone)
	weatherStation.RegisterObserver(tablet)
	weatherStation.RegisterObserver(desktop)

	// Simulate weather changes
	fmt.Println("First weather update:")
	weatherStation.SetMeasurements(25.2, 65.0, 1013.1)

	fmt.Println("\nRemoving tablet display...")
	weatherStation.RemoveObserver(tablet)

	fmt.Println("\nSecond weather update:")
	weatherStation.SetMeasurements(26.5, 70.0, 1014.2)
}