package main

import "fmt"

// Command interface
type Command interface {
	Execute()
}

// Receiver
type Light struct{}

func (l *Light) On() {
	fmt.Println("The light is ON")
}

func (l *Light) Off() {
	fmt.Println("The light is OFF")
}

// Concrete Command to turn on the light
type LightOnCommand struct {
	light *Light
}

func (c *LightOnCommand) Execute() {
	c.light.On()
}

// Concrete Command to turn off the light
type LightOffCommand struct {
	light *Light
}

func (c *LightOffCommand) Execute() {
	c.light.Off()
}

// Invoker
type RemoteControl struct {
	command Command
}

func (r *RemoteControl) SetCommand(command Command) {
	r.command = command
}

func (r *RemoteControl) PressButton() {
	r.command.Execute()
}

// Client
func main() {
	light := &Light{}

	lightOn := &LightOnCommand{light: light}
	lightOff := &LightOffCommand{light: light}

	remote := &RemoteControl{}

	// Turn the light ON
	remote.SetCommand(lightOn)
	remote.PressButton()

	// Turn the light OFF
	remote.SetCommand(lightOff)
	remote.PressButton()
}