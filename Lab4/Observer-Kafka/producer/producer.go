package  producer

import (
	"context"
	"log"
	"time"

	"github.com/segmentio/kafka-go"
)

func PublishMessage(broker, topic, message string) {
	writer := kafka.NewWriter(kafka.WriterConfig{
		Brokers: []string{broker},
		Topic:   topic,
	})
	defer writer.Close()
	err := writer.WriteMessages(context.Background(),
		kafka.Message{
			Key:   []byte(time.Now().Format(time.RFC3339)),
			Value: []byte(message),
		},
	)
	if err != nil {
		log.Printf("Failed to publish: %v\n", err)
	} else {
		log.Printf("Published message: %s\n", message)
	}
}