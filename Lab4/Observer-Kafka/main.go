package main

import (
	"fmt"
	"observer-kafka/consumer"
	"observer-kafka/producer"
	"time"
)

func main() {
	broker := "localhost:9092"
	topic := "observer-demo"

	consumer.StartConsumer(broker, topic, "group-1", "observer-A")
	consumer.StartConsumer(broker, topic, "group-2", "observer-B")

	time.Sleep(2 * time.Second)

	for i := 0; i < 5; i++ {
		msg := fmt.Sprintf("Event #%d", i+1)
		producer.PublishMessage(broker, topic, msg)
		time.Sleep(1 * time.Second)
	}

	time.Sleep(5 * time.Second)
}